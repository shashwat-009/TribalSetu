import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'TribalSetu — Scholarship & Fellowship Management',description:'AI-Enabled Scholarship & Fellowship Management System'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
