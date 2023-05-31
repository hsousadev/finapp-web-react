import Image from "next/image";

import bank from "@/shared/assets/icons/Bank.svg";
import trashSimple from "@/shared/assets/icons/TrashSimple.svg";
import pencilSimple from "@/shared/assets/icons/PencilSimple.svg";

import { ShortButton } from "@/shared/components/ShortButton";

import { Container } from "./styles";

interface HeroProps {
  logoImg: string;
  name: string;
}

export function Hero({ logoImg, name }: HeroProps) {
  return (
    <Container>
      <div className="account">
        <div className="logo-and-name">
          <Image src={logoImg ? logoImg : bank} width={48} height={48} alt="" />

          <div className="division-line" />

          <h2>{name}</h2>
        </div>

        <div className="buttons">
          <ShortButton icon={pencilSimple} onClick={() => console.log("foi")} />
          <ShortButton
            color={`rgba(235, 91, 100, 0.25)`}
            icon={trashSimple}
            onClick={() => console.log("foi")}
          />
        </div>
      </div>
    </Container>
  );
}
