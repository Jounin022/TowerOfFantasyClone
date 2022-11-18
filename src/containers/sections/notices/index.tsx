import * as S from "./notices.styles";
// import { useCharacter } from "hooks/useCharacter";
import * as Img from "public/landing-page/sections/notices"
import { ICharacter } from "utils/types";
interface INoticesProps {
  activeCharacter:ICharacter
}

export const Notices = (props:INoticesProps) => {
  return (
    <S.background id="section-3">
      <S.backgroundImage
          desktop={{img: Img.Background.src, objFit:"cover"}}  
          tablet={{img: Img.Background.src, objFit:"cover"}}
          mobile={{img: Img.Background_M.src, objFit:"cover"}}
        />

      <S.title id="teste"/>
      <S.panel css={{zIndex:2}}>
        <S.imagePanel 
          imgCss={{
            zIndex:2,
            filter:`hue-rotate(${props.activeCharacter.hueRotate})`
          }}
          mobile={{img: Img.Panel_M.src, objFit:"fill"}}
          tablet={{img: Img.Panel_M.src, objFit:"fill"}}
          desktop={{img: Img.Panel.src, objFit:"fill"}}  
        />
        <S.innerAside>
          <S.button>NEWS</S.button>
          <S.button>BULLETIN</S.button>
          <S.button>EVENT</S.button>
        </S.innerAside>

        <S.article
           css={{ "&::-webkit-scrollbar": {
            width: "10px",
            backgroundColor: props.activeCharacter.mainColors.primary,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: props.activeCharacter.mainColors.secondary,
          }
        }}
           onMouseEnter={(e) => {
          }}
           onMouseLeave={(e) => {
             document.documentElement.style.overflow = "hidden";
          }}
        >
          <ul style={{ margin: "0px", padding: "0px" }}>
            <S.li>
              <p>Perguntas frequentes do lançamento global ...</p> 2022.8.9
            </S.li>
            <S.li>
              <p>Anúncio: Entrega de compras incompletas</p> 2022.8.15
            </S.li>
            <S.li>
              <p>Uma carta aos Errantes</p> 2022.8.11
            </S.li>
            <S.li>
              <p>Uma carta aos Errantes</p> 2022.8.11
            </S.li>
            <S.li>
              <p>Uma carta aos Errantes</p> 2022.8.11
            </S.li>
            <S.li>
              <p>Uma carta aos Errantes</p> 2022.8.11
            </S.li>
            <S.li>
              <p>Uma carta aos Errantes</p> 2022.8.11
            </S.li>
            <S.li>
              <p>Uma carta aos Errantes</p> 2022.8.11
            </S.li>
          </ul>
        </S.article>
          <S.bannerWrapper >
          <S.imageBanner 
          imgCss={{zIndex:0}}
          mobile={{img: Img.Noticia.src, objFit:"fill"}}
          tablet={{img: Img.Noticia.src, objFit:"cover"}}
          desktop={{img: Img.Noticia.src, objFit:"cover"}}  
          />
          </S.bannerWrapper>
      </S.panel>
      <S.twitter
        onMouseOver={() => {
          document.documentElement.style.overflow = "hidden";
        }}
      >
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            1 DAY until the
            <a href="https://twitter.com/hashtag/TowerofFantasy?src=hash&amp;ref_src=twsrc%5Etfw">
              #TowerofFantasy
            </a>
            official launch! ⏳<br />
            <br />
            It&#39;s happening TOMORROW!!!
            <a href="https://twitter.com/hashtag/ToFSignal?src=hash&amp;ref_src=twsrc%5Etfw">
              #ToFSignal
            </a>
            <a href="https://twitter.com/hashtag/ToF?src=hash&amp;ref_src=twsrc%5Etfw">
              #ToF
            </a>
            <a href="https://twitter.com/hashtag/Aug10?src=hash&amp;ref_src=twsrc%5Etfw">
              #Aug10
            </a>
            <a href="https://t.co/OXwwADQu6W">pic.twitter.com/OXwwADQu6W</a>
          </p>
          &mdash; Tower of Fantasy (@ToF_EN_Official)
          <a href="https://twitter.com/ToF_EN_Official/status/1557154767847075840?ref_src=twsrc%5Etfw">
            August 10, 2022
          </a>
        </blockquote>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </S.twitter>
    </S.background>
  );
};
