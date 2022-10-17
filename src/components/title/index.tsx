import * as S from "./title.styles";

export const Title = ({ title }: { title: string }) => {
  return (
    <S.wrapper id="asdf">
      <S.tof>
        <S.bar
         mobile={{ img: "/assets/images/general/titlebar.png", objFit: "fill", }}
         tablet={{ img: "/assets/images/general/titlebar.png", objFit: "fill", }}
         desktop={{ img: "/assets/images/general/titlebar.png", objFit: "fill", }}
         />
        Tower of Fantasy 
      </S.tof>

      <S.page_title>{title}</S.page_title>
    </S.wrapper>
  );
};
