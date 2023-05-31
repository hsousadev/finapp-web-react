import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

import { TopBar } from "@/shared/components/TopBar";
import { Hero } from "./components/Hero";

import { Container } from "./styles";
import { AccountProps } from "@/shared/types/AccountProps";
import { Panel } from "@/shared/components/Panel";
import { StatementList } from "@/shared/components/Statement";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  const id = cookies.id;

  const reqAccount = await fetch("http://localhost:3333/account/", {
    headers: { id: id },
  });
  const account = await reqAccount.json();

  const reqAccountExpenses = await fetch("http://localhost:3333/expenses/", {
    headers: { id: id },
  });
  const accountExpenses = await reqAccountExpenses.json();

  const getAllBalance = await fetch("http://localhost:3333/balance/all");
  const allBalance = await getAllBalance.json();

  return { props: { allBalance, account, accountExpenses } };
}

interface AccountPageProps {
  account: AccountProps;
  allBalance: number;
  accountExpenses: number;
}

export default function AccountPage({
  account,
  allBalance,
  accountExpenses,
}: AccountPageProps) {
  return (
    <Container>
      <TopBar balance={allBalance} />
      <Hero logoImg={account.data.logoImg} name={account.data.name} />
      <Panel balance={account.balance} expenses={accountExpenses} />
      <StatementList
        name="Extrato"
        statement={account?.data?.statements}
        account={account}
      />
    </Container>
  );
}
