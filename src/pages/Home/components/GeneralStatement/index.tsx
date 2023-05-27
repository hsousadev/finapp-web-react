import { useContext } from "react";
import { HomeContext } from "@/pages";

import { ListItem } from "@/shared/components/ListItem";

import { Container } from "./styles";

export function GeneralStatement() {
  const { allStatements } = useContext(HomeContext);

  return (
    <Container>
      <div className="head">
        <h2>Extrato geral</h2>
      </div>

      <div className="list">
        {allStatements.map((statement) => (
          <ListItem
            key={statement.id}
            text={statement.description}
            amount={statement.amount}
            type={statement.type}
            createdAt={statement.created_at}
          />
        ))}
      </div>
    </Container>
  );
}
