import type { Metadata } from "next";
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Header from "@/components/header/Header";
import { Information } from "./Information";
import { ReputationsService } from "@/services/reputations.service";


export const metadata: Metadata = {
  title: 'Information',
  ...NO_INDEX_PAGE
}

const InformationPage = async () => {
  const reputations = await ReputationsService.getAll();
  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header />
      <Information reputations={reputations}/>
   </div>
  )
}

export default InformationPage