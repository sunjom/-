import { useSession } from "next-auth/react";
import { SubScribes, SubScribeWrapper } from "./Css/StyledComponent";
import SubscribeCard from "./SubscribeCard";

export default function Subscribe(){

    const {data} = useSession();
    return(
        <>
            {data ? 
                (
                <SubScribeWrapper>
                    <p>구독한 채널 바로가기</p>
                    <SubScribes>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                        <SubscribeCard/>
                    </SubScribes>
                </SubScribeWrapper>
            ) : (
                <></>
            )}
        </>
    )
}