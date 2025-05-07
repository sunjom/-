import Banner from "@/component/main/Banner";
import Contents from "@/component/main/Contents";
import SliderBar from "@/component/main/SliderBar";
import { MainWapper } from "@/component/main/Css/StyledComponent";
import Subscribe from "@/component/main/Subscribe";

export default function Home() {
  return (
    <MainWapper>
      <Banner/>
      <Subscribe/>
      <p>인기채널</p>
      <Contents/>
      <SliderBar/>
    </MainWapper>
  );
}
