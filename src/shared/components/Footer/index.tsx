import Image from "next/image";

import code from "@/shared/assets/icons/Code.svg";

import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="content">
        <Image src={code} alt="" width={24} height={24} />

        <p>
          Desenvolvido por{" "}
          <a href="https://henriquesousadev.vercel.app">Henrique Sousa</a>
        </p>
      </div>
    </Container>
  );
}
