import { Button } from '@components/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@components/Form';
import Heading from '@components/Heading';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@components/input/InputOtp';
import { useToast } from '@components/toast/useToast';
import Typography from '@components/Typography';
import { loginWithOtp } from '@features/auth/requests';
import { fetchAuthenticatedUser } from '@features/user/requests';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { handleAuthNavigation } from '../utils/handleAuthNavigation';
import { otpFormSchema, OtpFormValues } from '../utils/otpFormSchema';

interface OtpFormProps {
  tempUserEmail: string;
}

const OtpForm = ({ tempUserEmail }: OtpFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      pin: '',
    },
  });

  const emailValue = form.watch('pin');

  const isEmailFieldInvalid = !!form.formState.errors.pin && !emailValue;

  const onSubmit = async (data: OtpFormValues) => {
    setIsVerifying(true);
    try {
      const result = await loginWithOtp({
        email: tempUserEmail,
        otp: data.pin,
      });

      if (result.status === 200) {
        localStorage.removeItem('quickbill_temp-email');
        const user = await fetchAuthenticatedUser();
        if (user) {
          handleAuthNavigation({ user, navigate });
        }
        setIsVerifying(false);
      } else {
        console.error('Login failed:', result);
        toast({
          variant: 'destructive',
          title: 'Login failed',
          description: result,
        });
        setIsVerifying(false);
        navigate('/');
      }
    } catch (error) {
      console.error('An error occurred during OTP login:', error);
      setIsVerifying(false);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Please try again later',
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-1/3 gap-6"
      >
        <div className="w-full space-y-2 text-center">
          <Heading size="3xl">{t('otpForm.title', 'Verify OTP')}</Heading>
          <Typography>
            {t('otpForm.descriptionText', 'Enter your OTP', {
              yourEmail: tempUserEmail,
            })}
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                {isEmailFieldInvalid && <FormMessage />}
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" isLoading={isVerifying}>
            {isVerifying
              ? t('otpForm.verifyingText', 'Verifying...')
              : t('otpForm.button', 'Verify OTP')}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OtpForm;
