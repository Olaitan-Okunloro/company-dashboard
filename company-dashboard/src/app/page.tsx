import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Company Dashboard',
  description: 'A multi-application dashboard for company use',
}



export default function Home({
    
  children,
}: {
  children: React.ReactNode
}) {
 redirect('/dashboard')
}

