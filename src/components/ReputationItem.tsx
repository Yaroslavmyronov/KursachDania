import { FC } from 'react';
import Link from 'next/link';
import { IReputations } from '@/types/reputations.types';

interface ReputationItemProps {
  reputation: IReputations;
}

export const ReputationItem: FC<ReputationItemProps> = ({ reputation }) => {
  return (
    <article className='flex flex-none min-w-[350px]'>
      <Link className='flex flex-col flex-1 pt-0 text-black cursor-pointer' href={`/reputation/${reputation.title}`} style={{width:'350px'}}>
        <div className='relative overflow-hidden flex-shrink-0 flex-grow-0 min-h-[350px] bg-white mb-5'>
          <img className='object-cover w-full h-full' src={reputation.logoUrl} alt='' style={{ borderRadius: '50%' }} />
        </div>
        <span className='text-center'>
          {reputation.title}
        </span>
      </Link>
    </article>
  );
}
