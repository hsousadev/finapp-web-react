import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { ShortButton } from "../ShortButton";

import { ListItem } from "@/shared/components/ListItem";

import { StatementProps } from "@/shared/types/StatementProps";
import { AccountProps } from "@/shared/types/AccountProps";

import x from "@/shared/assets/icons/X.svg";

import { Container } from "./styles";

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

  const [showClearButton, setShowClearButton] = useState(false);
  const [date, setDate] = useState<string>("");
  const [statementData, setStatementData] =
    useState<Array<StatementProps>>(statement);

  function handleClearButton() {
    setDate("");
    setShowClearButton(false);
  }

  useEffect(() => {
    async function getStatementByDate() {
      if (!date) {
        setStatementData(statement);
        return;
      }

      setShowClearButton(true);

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
          <h4>Pesquisar por data:</h4>
          {showClearButton && (
            <ShortButton icon={x} onClick={handleClearButton} />
          )}
          <label htmlFor="dateInput" />
          <input
            type="date"
            id="dateInput"
            placeholder="MM/DD/YYYY"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="list">
        {statementData?.map((item) => (
          <ListItem
            id={item.id}
            key={item.id}
            text={item.description}
            amount={item.amount}
            type={item.type}
            createdAt={item.created_at}
            accountId={item.accountId}
            Account={item.Account}
          />
        ))}
      </div>
    </Container>
  );
}
