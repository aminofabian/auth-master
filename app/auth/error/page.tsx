import ErrorCard from '@/components/auth/error-card';
import React from 'react'

function AuthErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ErrorCard />
    </div>
  );
};

export default AuthErrorPage;

