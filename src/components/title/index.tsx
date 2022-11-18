import * as S from "./title.styles";
import { Title_Bar } from "public/landing-page/titles/index" 
export const Title = ({ title }: { title: string }) => {
  return (
    <S.wrapper id="asdf">
      <S.tof>
        <S.bar
         mobile={{  img: Title_Bar.src, objFit: "fill", }}
         tablet={{  img: Title_Bar.src, objFit: "fill", }}
         desktop={{ img: Title_Bar.src, objFit: "fill", }}
         />
        Tower of Fantasy 
      </S.tof>

      <S.page_title>{title}</S.page_title>
    </S.wrapper>
  );
};
