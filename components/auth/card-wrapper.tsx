"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Header from "@/components/auth/header";
import { Social } from "@/components/auth/social";

interface CardWrapperProps{
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export function CardWrapper({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial
  
}: CardWrapperProps) {
  return (
    <Card
    className="w-[400px] shadow-md"
    >
    <CardHeader>
    <Header label={headerLabel} />
    </CardHeader>
    <CardContent>
    {children}
    </CardContent>
    {showSocial && (
      <CardFooter>
      <Social />
      </CardFooter>
      
      )}
      </Card>
      );
    };
    
    