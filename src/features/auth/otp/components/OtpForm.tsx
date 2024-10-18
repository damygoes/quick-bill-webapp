import { Button } from '@components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@components/form';
import Heading from '@components/heading';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@components/input-otp';
import Typography from '@components/typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { otpFormSchema, OtpFormValues } from '../utils/otpFormSchema';

interface OtpFormProps {
  tempUserEmail: string;
}

const OtpForm = ({ tempUserEmail }: OtpFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      pin: '',
    },
  });

  const emailValue = form.watch('pin');

  const isEmailFieldInvalid = !!form.formState.errors.pin && !emailValue;

  const onSubmit = (data: OtpFormValues) => {
    console.log('data', data);
    try {
      // api request
      localStorage.removeItem('quickbill_temp-email');
      navigate('/onboarding');
    } catch (error) {
      console.error('error', error);
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
          <Button type="submit" className="w-full">
            {t('otpForm.button', 'Verify OTP')}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default OtpForm;
