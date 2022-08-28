import * as S from "./navbar.styles";
import Image from "next/image";
import { Option } from "./option";
import * as Images from "./images"

const Navbar = () => {
  return (
    <S.navbar device={{ "@sm": "cellphone", "@md": "tablet", "@lg": "desktop" }}>
      <S.logo>
        <Image
          src={Images.Logo}
          alt="Logo from tower of fantasy"
          layout="fill"
          objectFit="contain"
        />
        <figcaption hidden>Logo from tower of fantasy</figcaption>
      </S.logo>

      <S.ul position='left'>                                 {/* Lista da direita */}  
        <Option
          activeImg={Images.HomeActive}
          inactiveImg={Images.HomeInactive}
          action={() => console.log("dennis")}
          alt='Inicio'
          w={45}
          h={15}
          />
        <Option
          activeImg={Images.NewsActive}
          inactiveImg={Images.NewsInactive}
          action={() => console.log("dennis")}
          alt='Navegação'
          w={62}
          h={15}
          />
        <Option
          activeImg={Images.ExploreActive}
          inactiveImg={Images.ExploreInactive}
          action={() => console.log("dennis")}
          alt='Explorar Tof'
          w={110}
          h={11}
          />
        <Option
          activeImg={Images.CreatowerActive}
          inactiveImg={Images.CreatowerInactive}
          action={() => console.log("dennis")}
          alt='Creatower'
          w={90}
          h={11}
        />
      </S.ul> 

      <S.ul position='right'>                              {/* Lista da esquerda */}                         
      <Option
          activeImg={Images.MusicActive}
          inactiveImg={Images.MusicInactive}
          action={() => console.log("dennis")}
          alt='Player de Musica'
          w={290}
          h={65}
        />  
      <Option
          activeImg={Images.Access}
          inactiveImg={Images.Access}
          action={() => console.log("dennis")}
          alt='Botão de Acesso'
          w={290}
          h={65}
        />  
      <Option
          activeImg={Images.SocialMediaActive}
          inactiveImg={Images.SocialMediaInactive}
          action={() => console.log("dennis")}
          alt='Redes Sociais'
          w={140}
          h={140}
        />  
      <Option
          activeImg={Images.LanguageActive}
          inactiveImg={Images.LanguageInactive}
          action={() => console.log("dennis")}
          alt='Linguagens'
          w={140}
          h={140}
        />  

        <Image
          src={Images.Download}
          alt="Botão de Download"
          height={260}
          width={700}
        />

      </S.ul >       

    </S.navbar>
  );
};

export default Navbar;
