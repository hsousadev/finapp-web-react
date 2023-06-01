import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { Container } from "./styles";

interface InputWithLabel {
  label: string;
  icon: string;
  setValueOnChange: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  value?: string;
}

export function InputWithLabel({
  icon,
  label,
  setValueOnChange,
  placeholder,
  value,
}: InputWithLabel) {
  return (
    <Container>
      <h4>{label}</h4>
      <div className="input-div">
        <label htmlFor="inputWithLabel" />
        <Image src={icon} width={24} height={24} alt="" />
        <input
          id="inputWithLabel"
          type="text"
          onChange={(e) => setValueOnChange(e.target.value)}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </Container>
  );
}
