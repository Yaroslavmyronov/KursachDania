'use client'

import DragAndDrop from "@/components/DragAndDrop";
import Link from "next/link";
import { useRouter } from "next/router";

interface IReputationItemProps {
  reputation: any;
}


export function ReputationItem ({ reputation }:IReputationItemProps) {
  return (
<div style={{background: "rgb(243 244 246)"}}>
  <div className="h-full min-h-screen w-full" style={{maxWidth: "80rem", paddingLeft: "2rem", paddingRight: "2rem", marginLeft: "auto", marginRight: "auto", paddingTop: "8rem"}}>
    <div className="grid gap-14  md:gap-5">
      <div className="rounded-xl bg-white p-6 text-center shadow-xl">
        {/* <div
          className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg "> */}
            <img src={reputation.logoUrl} alt="" className="text-white mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-l"/>
        {/* </div> */}
        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{reputation.title}</h1>
        <p className="px-4 text-gray-500 " style={{marginBottom: '32px' }}>Виконані публікації/проведені заняття та конференції</p>
        <DragAndDrop />
      </div>
      </div>
    </div>
  </div>
  );
}