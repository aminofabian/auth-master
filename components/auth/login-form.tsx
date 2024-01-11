
import { CardWrapper } from "@/components/auth/card-wrapper";

export function LoginForm () {
  return (
    <CardWrapper
    headerLabel="welcome back"
    backButtonLabel="Don't Have an Account?"
    backButtonHref="/auth/register"
    showSocial
    >
    Login Form
    </CardWrapper>
    )
  }
  