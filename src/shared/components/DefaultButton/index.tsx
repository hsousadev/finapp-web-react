import Image from "next/image";

import { Container } from "./styles";

interface DefaultButtonProps {
  icon: string;
  title: string;
  onClick?: () => void;
}

export function DefaultButton({ icon, title, onClick }: DefaultButtonProps) {
  return (
    <Container>
      <button onClick={onClick}>
        <Image src={icon} alt="" />
        <h4>{title}</h4>
      </button>
    </Container>
  );
}
