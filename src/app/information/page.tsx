import type { Metadata } from "next";

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Information } from "./Information";
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: 'Information',
  ...NO_INDEX_PAGE
}

export default function AuthPage() {
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header />
      <Information />
   </div>
  )
}