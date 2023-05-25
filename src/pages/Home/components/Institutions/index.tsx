import nubank from "@/shared/assets/icons/Nubank.svg";
import { ListItem } from "@/shared/components/ListItem";

import { Container } from "./styles";

export function Institutions() {
  return (
    <Container>
      <h2> Suas instituições </h2>

      <div className="list">
        <ListItem icon={nubank} text="Nubank" income={2700} expense={1200} />
        <ListItem icon={nubank} text="Nubank" income={2700} expense={1200} />
        <ListItem icon={nubank} text="Nubank" income={2700} expense={1200} />
        <ListItem icon={nubank} text="Nubank" income={2700} expense={1200} />
        <ListItem icon={nubank} text="Nubank" income={2700} expense={1200} />
      </div>
    </Container>
  );
}
