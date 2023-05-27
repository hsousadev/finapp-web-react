import { useContext } from "react";
import { HomeContext } from "@/pages";

import { ListItem } from "@/shared/components/ListItem";

import { Container } from "./styles";

export function Institutions() {
  const { accounts } = useContext(HomeContext);

  return (
    <Container>
      <h2> Suas instituições </h2>

      <div className="list">
        {accounts.map((account) => (
          <ListItem
            key={account.id}
            text={account.name}
            icon={account.logoImg}
          />
        ))}
      </div>
    </Container>
  );
}
