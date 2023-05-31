import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ListItem } from "@/shared/components/ListItem";
import { StatementProps } from "@/shared/types/StatementProps";

import { Container } from "./styles";
import { AccountProps } from "@/shared/types/AccountProps";

interface StatementListProps {
  name: string;
  statement: Array<StatementProps>;
  account?: AccountProps;
}

export function StatementList({
  name,
  statement,
  account,
}: StatementListProps) {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const accountId = account?.data.id;

  const [date, setDate] = useState<string>("");
  const [statementData, setStatementData] =
    useState<Array<StatementProps>>(statement);
  const [notFoundDateMessage, setNotFoundDateMessage] = useState(false);

  useEffect(() => {
    async function getStatementByDate() {
      setNotFoundDateMessage(false);

      if (!date) {
        setStatementData(statement);
        return;
      }

      if (accountId) {
        const reqStatementAccountByDate = await fetch(
          `http://localhost:3333/statement/date?date=${date}`,
          {
            headers: { id: accountId },
          }
        );
        const accountStatement = await reqStatementAccountByDate.json();
        return setStatementData(accountStatement);
      }

      const reqGeneralStatementByDate = await fetch(
        `http://localhost:3333/statement/date/all?date=${date}`
      );
      const statementByDate = await reqGeneralStatementByDate.json();
      setStatementData(statementByDate);
    }

    getStatementByDate();
  }, [accountId, date, isHome, statement]);

  return (
    <Container>
      <div className="head">
        <h2>{name}</h2>

        <div className="search-by-date">
          {notFoundDateMessage && (
            <p>Nenhum extrato encontrado com esta data.</p>
          )}
          <h4>Pesquisar por data:</h4>
          <label htmlFor="dateInput" />
          <input
            type="date"
            id="dateInput"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="list">
        {statementData?.map((item) => (
          <ListItem
            key={item.id}
            text={item.description}
            amount={item.amount}
            type={item.type}
            createdAt={item.created_at}
          />
        ))}
      </div>
    </Container>
  );
}
