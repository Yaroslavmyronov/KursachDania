import { Metadata } from 'next';
import Header from "@/components/header/Header";
import { ReputationItem } from "./ReputationItem";
import { ReputationsService } from "@/services/reputations.service";
import { IReputations } from "@/types/reputations.types";
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

interface Props {
  params: {
    reputationId: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Reputation',
    ...NO_INDEX_PAGE,
  };
}

export default async function ReputationPage({ params }: Props) {
  const { reputationId } = params;
  const reputationData: IReputations | null = await ReputationsService.getById(reputationId);

  if (!reputationData) {
    return (
      <div className='min-h-screen flex flex-col overflow-hidden'>
        <Header />
        <div className="text-center text-red-500 mt-10">Reputation not found</div>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col overflow-hidden'>
      <Header />
      <ReputationItem reputation={reputationData} />
    </div>
  );
}