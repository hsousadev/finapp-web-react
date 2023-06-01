import Image from "next/image";
import { Container } from "./styles";

interface InputWithLabel {
  label: string;
  icon: string;
}

export function InputWithLabel({ icon, label }: InputWithLabel) {
  return (
    <Container>
      <h4>{label}</h4>
      <div className="input-div">
        <label htmlFor="inputWithLabel" />
        <Image src={icon} width={24} height={24} alt="" />
        <input id="inputWithLabel" type="text" />
      </div>
    </Container>
  );
}
