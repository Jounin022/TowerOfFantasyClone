import * as S from "./notices.styles";
import { config } from "../../../styles/stitches.config";
import { CSS } from "@stitches/react";
// import Title from "../../../../public/assets/images/page2/"
// const asdf = { "@sm": "cellphone", "@md": "tablet",  "@lg": "desktop"  }
export const Notices = () => {
  return (
    <S.background
      id="section-2"
      device={{ "@sm": "cellphone", "@md": "tablet",  "@lg": "desktop"  }}
      // device={...asdf.medi}
    >
      <S.title
        device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}
      />
      <S.panel
        device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}
      >
        <S.innerAside
          device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}
        >
          <S.button device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}>
            NEWS
          </S.button>
          <S.button device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}>
            BULLETIN
          </S.button>
          <S.button>EVENT</S.button>
        </S.innerAside>
        <S.article device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}>
          <ul style={{ margin: "0px", padding: "0px" }}>
            <S.li>
              <p>Perguntas frequentes do lançamento global ...</p> 2022.8.9{" "}
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
          </ul>
        </S.article>
      </S.panel>
      <S.twitter device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              1 DAY until the{" "}
              <a href="https://twitter.com/hashtag/TowerofFantasy?src=hash&amp;ref_src=twsrc%5Etfw">
                #TowerofFantasy
              </a>{" "}
              official launch! ⏳<br />
              <br />
              It&#39;s happening TOMORROW!!!
              <a href="https://twitter.com/hashtag/ToFSignal?src=hash&amp;ref_src=twsrc%5Etfw">
                #ToFSignal
              </a>{" "}
              <a href="https://twitter.com/hashtag/ToF?src=hash&amp;ref_src=twsrc%5Etfw">
                #ToF
              </a>{" "}
              <a href="https://twitter.com/hashtag/Aug10?src=hash&amp;ref_src=twsrc%5Etfw">
                #Aug10
              </a>{" "}
              <a href="https://t.co/OXwwADQu6W">pic.twitter.com/OXwwADQu6W</a>
            </p>
            &mdash; Tower of Fantasy (@ToF_EN_Official){" "}
            <a href="https://twitter.com/ToF_EN_Official/status/1557154767847075840?ref_src=twsrc%5Etfw">
              August 10, 2022
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </S.twitter>
      <S.image
        device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}
      />
    </S.background>
  );
};
