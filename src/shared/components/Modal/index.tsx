import { ReactNode } from "react";
import { Container, Content } from "./styles";

interface ModalProps {
  children: ReactNode;
  className?: string;
}

export function Modal({ children, className }: ModalProps) {
  return (
    <Container>
      <Content className={className}>{children}</Content>
    </Container>
  );
}
