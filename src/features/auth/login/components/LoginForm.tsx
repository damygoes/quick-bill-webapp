import { Button } from '@components/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/form';
import Heading from '@components/heading';
import { Input } from '@components/input';
import Typography from '@components/typography';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { loginFormSchema, LoginFormValues } from '../utils/loginFormSchema';

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const emailValue = form.watch('email');

  const isEmailFieldInvalid = !!form.formState.errors.email && !emailValue;

  const onSubmit = (data: LoginFormValues) => {
    console.log('data', data);
    try {
      localStorage.setItem('quickbill_temp-email', data.email);
      // api request
      navigate('/verify-otp');
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-1/2 gap-6"
      >
        <div className="w-full text-center">
          <Heading size="3xl">{t('loginForm.title', 'Login')}</Heading>
          <Typography>
            {t('loginForm.descriptionText', 'Login to your account')}
          </Typography>
        </div>
        <div className="flex flex-col w-full gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">
                  {t('loginForm.email', 'Email')}
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    {...field}
                    placeholder={`${t('loginForm.emailPlaceholder', 'Email')}`}
                    validationError={isEmailFieldInvalid} // Only show error if invalid and empty
                    // className="w-full h-lg"
                  />
                </FormControl>
                {isEmailFieldInvalid && <FormMessage />}
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {t('loginForm.button', 'Login')}
          </Button>
        </div>
        <div className="text-sm text-center">
          {t('loginForm.noAccountText', 'Don’t have an account?')}{' '}
          <Link to="#" className="underline">
            {t('loginForm.registerText', 'Sign up')}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
