import { z } from 'zod';

export const otpFormSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.',
  }),
});

export type OtpFormValues = z.infer<typeof otpFormSchema>;
