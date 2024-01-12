"use client"
import * as z from "zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from '@/schemas';
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
  FormDescription
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";


export function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password:"",
    },
    
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  }
  return (
    <CardWrapper
    headerLabel="welcome back"
    backButtonLabel="Don't Have an Account?"
    backButtonHref="/auth/register"
    showSocial
    >
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}
    className="space-y-6">
    <div className="space-y-4">
    <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl><Input
      {...field}
      placeholder="joe.doe@example.com"
      type="email"
      /></FormControl>
      <FormMessage />
      </FormItem>
      
      )}
      />
      
      <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl><Input
        {...field}
        placeholder="******"
        type="password"
        /></FormControl>
        <FormMessage />
        </FormItem>
        
        )}
        
        />
        
        </div>
        <FormError message="" />
        <FormSuccess message=""/>
        
        <Button
        type="submit"
        className="w-full"
        >
        Login
        </Button>
        </form>
        
        
        
        </Form>
        </CardWrapper>
        )
      }
      