/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

import { Hero } from "./components/Hero";

import { DefaultButton } from "@/shared/components/DefaultButton";
import { InputWithLabel } from "@/shared/components/InputWithLabel";
import { Modal } from "@/shared/components/Modal";
import { Panel } from "@/shared/components/Panel";
import { StatementList } from "@/shared/components/Statement";
import { TopBar } from "@/shared/components/TopBar";

import plus from "@/shared/assets/icons/Plus.svg";
import receipt from "@/shared/assets/icons/Receipt.svg";
import coins from "@/shared/assets/icons/Coins.svg";
import arrowLeft from "@/shared/assets/icons/ArrowLeft.svg";
import trendDown from "@/shared/assets/icons/TrendDown.svg";
import chartLineUp from "@/shared/assets/icons/ChartLineUp.svg";

import { AccountProps } from "@/shared/types/AccountProps";

import { Container } from "./styles";

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
  const router = useRouter();

  const [newOperationModal, setNewOperationModal] = useState(false);
  const [newOperationDescription, setNewOperationDescription] =
    useState<string>("");
  const [newOperationValue, setNewOperationValue] = useState<string>("");
  const [newOperationDate, setNewOperationDate] = useState<string>("");
  const [isCredit, setIsCredit] = useState(true);
  const [warning, setWarning] = useState(false);

  const newOperationDescriptionIsEmpty = newOperationDescription === "";
  const newOperationValueIsEmpty =
    newOperationValue === null || newOperationValue === undefined;
  const newOperationDateIsEmpty = newOperationDate === "";

  async function handleNewOperation() {
    if (
      newOperationDescriptionIsEmpty ||
      newOperationValueIsEmpty ||
      newOperationDateIsEmpty
    ) {
      setWarning(true);
      return;
    }

    const floatValue = parseFloat(newOperationValue);

    const reqOptions = {
      method: "POST",
      body: JSON.stringify({
        description: newOperationDescription,
        amount: floatValue,
        date: newOperationDate,
      }),
      headers: { "Content-Type": "application/json", id: account.data.id },
    };

    if (isCredit) await fetch("http://localhost:3333/deposit", reqOptions);
    else await fetch("http://localhost:3333/withdraw", reqOptions);

    setNewOperationDate("");
    setNewOperationValue("");
    setNewOperationDescription("");

    setNewOperationModal(false);

    router.push("/account");
  }

  return (
    <Container>
      <TopBar balance={allBalance} expenses={allExpenses} />
      <Hero
        logoImg={account.data.logoImg}
        name={account.data.name}
        id={account.data.id}
      />
      <Panel
        balance={account.balance}
        expenses={accountExpenses}
        accountName={account.data.name}
        onClickButton={() => setNewOperationModal(true)}
      />
      <StatementList
        name="Extrato"
        statement={account?.data?.statements}
        account={account}
      />

      {newOperationModal && (
        <Modal className="account-edit-modal">
          <div className="inputs">
            <div className="select">
              <label htmlFor="mySelect" />
              {isCredit ? (
                <Image src={chartLineUp} width={32} height={32} alt="" />
              ) : (
                <Image src={trendDown} width={32} height={32} alt="" />
              )}
              <select id="mySelect" onChange={() => setIsCredit(!isCredit)}>
                <option value="credit">Receita</option>
                <option value="debit">Gasto</option>
              </select>
            </div>
            <InputWithLabel
              icon={receipt}
              setValueOnChange={setNewOperationDescription}
              label="Descrição"
              value={newOperationDescription}
            />
            <InputWithLabel
              type="number"
              icon={coins}
              setValueOnChange={setNewOperationValue}
              label="Valor"
              value={newOperationValue}
            />
            <div className="search-by-date">
              <h4>Data:</h4>
              <label htmlFor="dateInput" />
              <input
                type="date"
                id="dateInput"
                onChange={(e) => setNewOperationDate(e.target.value)}
              />
            </div>
          </div>

          {warning && <h4>Todos os campos devem ser preenchidos</h4>}

          <div className="buttons">
            <DefaultButton
              icon={arrowLeft}
              title="Voltar"
              onClick={() => setNewOperationModal(false)}
              btnColor={`var(--Black-800)`}
              fontColor={`var(--White)`}
            />
            <DefaultButton
              icon={plus}
              title="Adicionar Lançamento"
              onClick={handleNewOperation}
            />
          </div>
        </Modal>
      )}
    </Container>
  );
}
