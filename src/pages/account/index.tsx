import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";

import { TopBar } from "@/shared/components/TopBar";

import { Container } from "./styles";
import { AccountProps } from "@/shared/types/AccountProps";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context);
  const id = cookies.id;

  const getAccount = await fetch("http://localhost:3333/account/", {
    headers: { id: id },
  });
  const account = await getAccount.json();

  const getAllBalance = await fetch("http://localhost:3333/balance/all");
  const allBalance = await getAllBalance.json();

  return { props: { allBalance, account } };
}

interface accountPageProps {
  account: AccountProps;
  allBalance: number;
}

export default function accountPage({ account, allBalance }: accountPageProps) {

  return (
    <Container>
      <TopBar balance={allBalance} />
    </Container>
  );
}
