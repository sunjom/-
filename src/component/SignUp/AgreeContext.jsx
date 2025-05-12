import { Agree } from "@/app/SignUp/Agree";
import { AgreeWrapper } from "./Css/SignUpComponentCss";

export default function AgreeContext(){
    const lines = Agree.trim().split('\n');
    return(
        <>
            <h2>계정 생성</h2>
            <h3>이용약관</h3>
            <AgreeWrapper>
                {lines.map((line,i)=>{
                    const isTitle = /^제\d+조/.test(line);
                    return(
                        <div
                            key={i}
                            style={{
                                fontSize: isTitle ? '1.2rem' : '1rem',
                                fontWeight: isTitle ? 'bold' : 'normal',
                                marginBottom: '10px',
                            }}
                        >
                            {line}
                        </div>
                    )
                })}
            </AgreeWrapper>
        </>
    )
}