import Image from "next/image";

import { Container } from "./styles";

interface ListItemProps {
  icon: string;
  text: string;
  income?: number;
  expense?: number;
}

export function ListItem({ icon, income, text, expense }: ListItemProps) {
  return (
    <Container>
      <div className="icon-and-name">
        <Image src={icon} alt="" height={24} />
        <h4>{text}</h4>
      </div>

      <div className="values">
        {income && <h4 style={{ color: `var(--Green-700)` }}>R${income}</h4>}
        {expense && <h4 style={{ color: `var(--Red-100)` }}>-R${expense}</h4>}
      </div>
    </Container>
  );
}
