import * as z from "zod";


export const LoginSchema = z.object({
  email: z.string().email({
    message: "Oops, can't get in without first entering a valid email"
  }),
  password: z.string().min(1,
    { message: "And the correct password too" })
});
