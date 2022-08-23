import * as S from "./navbar.styles";
import Logo from "../../styles/assets/images/general/navigationBar/logo.png";
import Image from "next/image";
import { Option } from "./option";

// images
import HomeActive from "../../styles/assets/images/general/navigationBar/nav1-a.png";
import HomeInactive from "../../styles/assets/images/general/navigationBar/nav1.png";

import NewsActive from "../../styles/assets/images/general/navigationBar/nav2-a.png";
import NewsInactive from "../../styles/assets/images/general/navigationBar/nav2.png";

import ExploreActive from "../../styles/assets/images/general/navigationBar/nav3-a.png";
import ExploreInactive from "../../styles/assets/images/general/navigationBar/nav3.png";

import CreatowerActive from "../../styles/assets/images/general/navigationBar/nav4-a.png";
import CreatowerInactive from "../../styles/assets/images/general/navigationBar/nav4.png";

import MusicActive from "../../styles/assets/images/general/navigationBar/music-on.png";
import MusicInactive from "../../styles/assets/images/general/navigationBar/music-off.png"

import Access from "../../styles/assets/images/general/navigationBar/login-icon.png"

import SocialMediaActive from "../../styles/assets/images/general/navigationBar/social-media-on.png"
import SocialMediaInactive from "../../styles/assets/images/general/navigationBar/social-media-off.png"

import LanguageActive from "../../styles/assets/images/general/navigationBar/lang-a.png"
import LanguageInactive from "../../styles/assets/images/general/navigationBar/lang.png"

import Download from "../../styles/assets/images/general/navigationBar/download.png"

const Navbar = () => {
  return (
    <S.navbar color={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}>
      <S.logo>
        <Image
          src={Logo}
          alt="Logo from tower of fantasy"
          layout="fill"
          objectFit="contain"
        />
      </S.logo>

      <S.ul position='left'>                                 {/* Lista da direita */}  
        <Option
          activeImg={HomeActive}
          inactiveImg={HomeInactive}
          action={() => console.log("dennis")}
          alt='Inicio'
          w={45}
          h={15}
          />
        <Option
          activeImg={NewsActive}
          inactiveImg={NewsInactive}
          action={() => console.log("dennis")}
          alt='Navegação'
          w={62}
          h={15}
          />
        <Option
          activeImg={ExploreActive}
          inactiveImg={ExploreInactive}
          action={() => console.log("dennis")}
          alt='Explorar Tof'
          w={110}
          h={11}
          />
        <Option
          activeImg={CreatowerActive}
          inactiveImg={CreatowerInactive}
          action={() => console.log("dennis")}
          alt='Creatower'
          w={90}
          h={11}
        />
      </S.ul> 

      <S.ul position='right'>                              {/* Lista da esquerda */}                         
      <Option
          activeImg={MusicActive}
          inactiveImg={MusicInactive}
          action={() => console.log("dennis")}
          alt='Player de Musica'
          w={290}
          h={65}
        />  
      <Option
          activeImg={Access}
          inactiveImg={Access}
          action={() => console.log("dennis")}
          alt='Botão de Acesso'
          w={290}
          h={65}
        />  
      <Option
          activeImg={SocialMediaActive}
          inactiveImg={SocialMediaInactive}
          action={() => console.log("dennis")}
          alt='Redes Sociais'
          w={140}
          h={140}
        />  
      <Option
          activeImg={LanguageActive}
          inactiveImg={LanguageInactive}
          action={() => console.log("dennis")}
          alt='Linguagens'
          w={140}
          h={140}
        />  

        <Image
          src={Download}
          alt="Botão de Download"
          height={200}
          width={500}
        />

      </S.ul >       

    </S.navbar>
  );
};

export default Navbar;
