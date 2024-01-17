import * as z from "zod";


export const LoginSchema = z.object({
  email: z.string().email({
    message: "Oops, can't get in without first entering a valid email"
  }),
  password: z.string().min(1,
    { message: "And the correct password too" })
});



export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email"
  }),
  password: z.string().min(6,
    { message: "Enter a password with at least 6 characters" }),
  name: z.string().min(1,
    { message: "Enter a name" })
});

