import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Please enter a valid email address.",
    })
    .email(),
  password: z.string().min(6,"Password must be at least 6 characters long."),
});

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const companyInfoSchema = z.object({
  name: z.string(),
  email: z.string().email().trim(),
  address: z.string().min(6),
  phone: z.string().max(15),
  bank: z.string(),
  swiftCode: z.string(),
  accountNumber: z.string(),
  accountHolderName: z.string(),
  businessNature:z.string()
});


const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export { registerSchema, loginSchema, forgotPasswordSchema,companyInfoSchema };
