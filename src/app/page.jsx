'use client'

import Banner from "@/component/main/Banner";
import Contents from "@/component/main/Contents";
import SliderBar from "@/component/main/SliderBar";
import { MainWapper } from "@/component/main/Css/StyledComponent";
import Subscribe from "@/component/main/Subscribe";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const {data,status} = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(status === 'unauthenticated'){
      router.push('/Login');
    }

    if(status === 'authenticated' && !data.user.nickName){
      router.refresh();
    }
  },[status,data,router])
  return (
    <MainWapper>
      <Banner/>
      <Subscribe/>
      <p>인기채널</p>
      <Contents/>
    </MainWapper>
  );
}
