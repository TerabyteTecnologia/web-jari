"use client"
import { Header } from '@/components/headeradmin'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { deleteTokenLocalStorage, getTokenLocalStorage } from '@/utils/LocalStorage'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isTokenValid } from '@/utils/Token'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  const router = useRouter();
  const token = getTokenLocalStorage();
  
  useEffect(() => {
    
    if(!token) {
    router.push("/");
    }
    if(!isTokenValid(token ? token :'')){
      deleteTokenLocalStorage()
      router.push("/auth");
  }
  }, [token])
  
  return (
  
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="bg-slate-100  min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
