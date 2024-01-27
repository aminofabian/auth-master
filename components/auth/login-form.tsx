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
import { login } from '@/actions/login';
import { useState, useTransition } from 'react';
import { useSearchParams } from "next/navigation";


export function LoginForm() {
  const searchParams = useSearchParams();
  const urlError = searchParams.get('error') === "oAuthAccountNotLinked"
  ? "Email already in use with a different provider"
  : "";
  
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  
  
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    
  });
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values)
      .then((data) => {
        if (data) {
          setError(data.error);
          setSuccess(data?.success);
        }
      });
    });
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
      <FormControl>
      <Input
      {...field}
      disabled={isPending}
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
        <FormControl>
        <Input
        {...field}
        disabled={isPending}
        placeholder="******"
        type="password"
        /></FormControl>
        <FormMessage />
        </FormItem>
        
        )}
        
        />
        
        </div>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        
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
      
      