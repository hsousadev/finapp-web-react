/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import { HomeContext } from "..";

import { Panel } from "@/shared/components/Panel";
import { Modal } from "@/shared/components/Modal";
import { StatementList } from "@/shared/components/Statement";

import { Institutions } from "./components/Institutions";

import { Container } from "./styles";
import { TopBar } from "@/shared/components/TopBar";
import { InputWithLabel } from "@/shared/components/InputWithLabel";
import { DefaultButton } from "@/shared/components/DefaultButton";

import bank from "@/shared/assets/icons/Bank.svg";
import arrowLeft from "@/shared/assets/icons/ArrowLeft.svg";
import floppyDisk from "@/shared/assets/icons/FloppyDisk.svg";
import linkSimple from "@/shared/assets/icons/LinkSimple.svg";
import loadingAnimation from "@/shared/assets/icons/Loading.svg";

export function Home() {
  const router = useRouter();

  const { allBalance, allStatements, allExpenses } = useContext(HomeContext);

  const [newAccountName, setNewAccountName] = useState("");
  const [newAccountLogoImg, setNewAccoLogoImg] = useState("");
  const [showNewAccountModal, setShowNewAccountModal] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log("allStatements", allStatements)

  async function handleNewAccountCreation() {
    setLoading(true);

    const reqOptions = {
      method: "POST",
      body: JSON.stringify({
        name: newAccountName,
        imgUrl: newAccountLogoImg,
      }),
      headers: { "Content-Type": "application/json" },
    };

    await fetch("http://localhost:3333/account", reqOptions);

    setLoading(false);
    setNewAccountName("");
    setNewAccoLogoImg("");
    setShowNewAccountModal(false);
    router.push("/");
  }

  return (
    <Container>
      <TopBar balance={allBalance} expenses={allExpenses} />
      <Panel
        balance={allBalance}
        expenses={allExpenses}
        onClickButton={() => setShowNewAccountModal(true)}
      />
      <Institutions />
      <StatementList name="Extrato Geral" statement={allStatements} />

      {showNewAccountModal && (
        <Modal className="account-edit-modal">
          <div className="inputs">
            <InputWithLabel
              icon={bank}
              setValueOnChange={setNewAccountName}
              label="Nome da instituição"
              value={newAccountName}
            />
            <InputWithLabel
              icon={linkSimple}
              setValueOnChange={setNewAccoLogoImg}
              label="Logo (Url da imagem)"
              value={newAccountLogoImg}
              placeholder="https://example.com/image.svg"
            />
          </div>

          {loading ? (
            <div className="loading">
              <Image
                src={loadingAnimation}
                width={32}
                height={32}
                alt="loading"
              />
            </div>
          ) : (
            <div className="buttons">
              <DefaultButton
                icon={arrowLeft}
                title="Voltar"
                onClick={() => setShowNewAccountModal(false)}
                btnColor={`var(--Black-800)`}
                fontColor={`var(--White)`}
              />
              <DefaultButton
                icon={floppyDisk}
                title="Adicionar instituição"
                onClick={handleNewAccountCreation}
              />
            </div>
          )}
        </Modal>
      )}
    </Container>
  );
}
