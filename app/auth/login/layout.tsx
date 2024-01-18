import React from 'react'

export default async function AuthLayout({
  children
}: {
  children: React.ReactNode
  }) {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-slate-200">
    {children}
    
    </div>
    )
  }
  