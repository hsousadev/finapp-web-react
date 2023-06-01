import Image from "next/image";

import { Container } from "./styles";

interface DefaultButtonProps {
  icon: string;
  title: string;
  onClick?: () => void;
  btnColor?: string;
  fontColor?: string;
}

export function DefaultButton({
  icon,
  title,
  onClick,
  btnColor,
  fontColor,
}: DefaultButtonProps) {
  return (
    <Container btnColor={btnColor} fontColor={fontColor}>
      <button onClick={onClick}>
        <Image src={icon} alt="" />
        <h4>{title}</h4>
      </button>
    </Container>
  );
}
