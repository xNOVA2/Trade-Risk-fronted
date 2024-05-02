import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Please enter a valid email address.",
    })
    .email(),
  password: z.string().min(10,"Password must be at least 10 characters long."),
});

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export { registerSchema, loginSchema, forgotPasswordSchema };
