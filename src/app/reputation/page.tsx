import type { Metadata } from "next";

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: 'Reputation',
  ...NO_INDEX_PAGE
}

export default function ReputationPage() {
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header />
   </div>
  )
}