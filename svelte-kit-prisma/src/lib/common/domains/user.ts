import type { User } from '.prisma/client';
import { z, ZodSchema } from 'zod';

export const userSchema: ZodSchema<Omit<User, 'id'>> = z.object({
	name: z.string().min(3).max(20),
	email: z.string().email()
});
