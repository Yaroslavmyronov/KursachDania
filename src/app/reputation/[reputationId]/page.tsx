import type { Metadata } from "next";

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Header from "@/components/header/Header";
import { ReputationItem } from './ReputationItem'

export const metadata: Metadata = {
  title: 'Reputation',
  ...NO_INDEX_PAGE
}

export default function ReputationPage({ params } : any) {

  // Тут загрузка данных для товара с ID `productId`

  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header />
      <ReputationItem />
    </div>
  );
}

