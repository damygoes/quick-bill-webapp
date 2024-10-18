import { z } from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('Invalid email address').min(1),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
