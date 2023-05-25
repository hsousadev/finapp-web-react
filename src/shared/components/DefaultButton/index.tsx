import Image from "next/image";

import { Container } from "./styles";

interface DefaultButtonProps {
  icon: string;
  title: string;
}

export function DefaultButton({ icon, title }: DefaultButtonProps) {
  return (
    <Container>
      <Image src={icon} alt="" />
      <h4>{title}</h4>
    </Container>
  );
}
