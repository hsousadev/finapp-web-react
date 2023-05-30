import Image from "next/image";

import { Container } from "./styles";

interface ShortButton {
  icon: string;
  onClick: () => void;
}

export function ShortButton({ icon, onClick }: ShortButton) {
  return (
    <Container onClick={onClick}>
      <Image src={icon} width={24} height={24} alt="Home" />
    </Container>
  );
}
