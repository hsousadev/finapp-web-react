import Image from "next/image";

import { Container } from "./styles";

interface ShortButton {
  icon: string;
  onClick: () => void;
  color?: string;
}

export function ShortButton({ icon, onClick, color }: ShortButton) {
  return (
    <Container color={color}  onClick={onClick}>
      <Image src={icon} width={24} height={24} alt="Home" />
    </Container>
  );
}
