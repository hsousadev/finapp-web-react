import { ReactNode } from "react";
import { Container, Content } from "./styles";

interface ModalProps {
  children: ReactNode;
}

export function Modal({ children }: ModalProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
