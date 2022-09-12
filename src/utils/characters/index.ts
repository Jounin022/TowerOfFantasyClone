// import * as Meryl from "characters/meryl"
import * as Nemesis from "characters/nemesis"
import * as Meryl from "characters/meryl"

export const characters = [
    {
     number:0,
     name:"Nemesis",
     background:`url(${Nemesis.Background.src})`,
     fade:`url('${Nemesis.Fade.src}')`,
     img:Nemesis.Main.src,
     active:`url('${Nemesis.Active.src}')`,
     inactive:`url('${Nemesis.Inactive.src}')`,
     weapon:`url('${Nemesis.Weapon.src}')`,
     tab:`url('${Nemesis.Tab.src}')`,
     mainColors:{1:"#fff"},
     audio:`url('${Nemesis.Audio}')`,
    },
    {
     number:1,
     name:"Meryl",
     background:`url('${Meryl.Background.src}')`,
     fade:`url('${Meryl.Fade.src}')`,
     img:`url('${Meryl.Main.src}')`,
     active:`url('${Meryl.Active.src}')`,
     inactive:`url('${Meryl.Inactive.src}')`,
     weapon:`url('${Meryl.Weapon.src}')`,
     tab:`url('${Meryl.Tab.src}')`,
     mainColors:{1:"#fff"},
     audio:`url('${Meryl.Audio}')`,
    },
] 