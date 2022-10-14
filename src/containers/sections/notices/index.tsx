import { ResponsiveImage } from "utils/functions";
import * as S from "./notices.styles";

const BackgroundImage = ResponsiveImage
// const BackgroundImage = ResponsiveImage

export const Notices = () => {
  return (
    <S.background id="section-3">
      <BackgroundImage
          mobile={{img:"/assets/images/page2/p6-bg-m.jpg", objFit:"cover"}}
          tablet={{img:"/assets/images/page2/p6-bg.jpg", objFit:"cover"}}
          desktop={{img:"/assets/images/page2/p6-bg.jpg", objFit:"fill"}}  
        />

      <S.title id="teste"/>
      <S.panel>
        <S.imagePanel />
        <S.innerAside>
          <S.button>NEWS</S.button>
          <S.button>BULLETIN</S.button>
          <S.button>EVENT</S.button>
        </S.innerAside>

        <S.article
           className="tal"
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
        <div>
          <S.imageBanner />
        </div>
      </S.panel>
      {/* <S.twitter
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
      </S.twitter> */}
    </S.background>
  );
};
