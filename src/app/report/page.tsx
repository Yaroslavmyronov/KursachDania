import type { Metadata } from "next";
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Header from "@/components/header/Header";
import Report from './Report'

export const metadata: Metadata = {
  title: 'Information',
  ...NO_INDEX_PAGE
}

export default function ReportPage() {
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header />
      <Report />
   </div>
  )
}