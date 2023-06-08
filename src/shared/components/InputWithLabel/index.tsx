import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { Container } from "./styles";

interface InputWithLabelProps {
  label: string;
  icon: string;
  setValueOnChange: Dispatch<SetStateAction<any>>;
  placeholder?: string;
  value?: any;
  type?: string;
}

export function InputWithLabel({
  icon,
  label,
  setValueOnChange,
  placeholder,
  value,
  type,
}: InputWithLabelProps) {
  return (
    <Container>
      <h4>{label}</h4>
      <div className="input-div">
        <label htmlFor="inputWithLabel" />
        <Image src={icon} width={24} height={24} alt="" />
        <input
          id="inputWithLabel"
          type={type ? type : "text"}
          onChange={(e) => setValueOnChange(e.target.value)}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </Container>
  );
}
