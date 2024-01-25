import { BackButton } from "@/components/auth/back-button";
import {
  Card, 
  CardFooter,
  CardHeader
} from "@/components/ui/card";

import React from 'react'
import Header from "@/components/auth/header";

function ErrorCard() {
  return (
    <Card className="w-[400px shadow-md">
    <CardHeader>
    <Header label="oops! something went wrong" />
    </CardHeader>
    <CardFooter>
    <BackButton
    label="Back to Login"
    href="/auth/login"
    />
    </CardFooter>
    </Card>
    );
  };
  
  export default ErrorCard;
  
  
  