import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

import { Hero } from "./components/Hero";

import bank from "@/shared/assets/icons/Bank.svg";
import floppyDisk from "@/shared/assets/icons/FloppyDisk.svg";

import { Panel } from "@/shared/components/Panel";
import { Modal } from "@/shared/components/Modal";
import { TopBar } from "@/shared/components/TopBar";
import { AccountProps } from "@/shared/types/AccountProps";
import { StatementList } from "@/shared/components/Statement";
import { InputWithLabel } from "@/shared/components/InputWithLabel";

import { Container } from "./styles";
import { DefaultButton } from "@/shared/components/DefaultButton";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  const id = cookies.id;

  const reqAccount = await fetch("http://localhost:3333/account/", {
    headers: { id: id },
  });
  const account = await reqAccount.json();

  const reqAllExpenses = await fetch("http://localhost:3333/expenses/all");
  const allExpenses = await reqAllExpenses.json();

  const reqAccountExpenses = await fetch("http://localhost:3333/expenses", {
    headers: { id: id },
  });
  const accountExpenses = await reqAccountExpenses.json();

  const getAllBalance = await fetch("http://localhost:3333/balance/all");
  const allBalance = await getAllBalance.json();

  return { props: { allBalance, account, accountExpenses, allExpenses } };
}

interface AccountPageProps {
  account: AccountProps;
  allBalance: number;
  accountExpenses: number;
  allExpenses: number;
}

export default function AccountPage({
  account,
  allBalance,
  accountExpenses,
  allExpenses,
}: AccountPageProps) {
  return (
    <Container>
      <TopBar balance={allBalance} expenses={allExpenses} />
      <Hero logoImg={account.data.logoImg} name={account.data.name} />
      <Panel
        balance={account.balance}
        expenses={accountExpenses}
        accountName={account.data.name}
      />
      <StatementList
        name="Extrato"
        statement={account?.data?.statements}
        account={account}
      />
    </Container>
  );
}
