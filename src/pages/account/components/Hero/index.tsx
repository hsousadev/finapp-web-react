/* eslint-disable @next/next/no-img-element */

import bank from "@/shared/assets/icons/Bank.svg";
import trashSimple from "@/shared/assets/icons/TrashSimple.svg";
import pencilSimple from "@/shared/assets/icons/PencilSimple.svg";
import arrowLeft from "@/shared/assets/icons/ArrowLeft.svg";
import floppyDisk from "@/shared/assets/icons/FloppyDisk.svg";
import linkSimple from "@/shared/assets/icons/LinkSimple.svg";

import { ShortButton } from "@/shared/components/ShortButton";

import { Container } from "./styles";
import { useEffect, useState } from "react";
import { Modal } from "@/shared/components/Modal";
import { InputWithLabel } from "@/shared/components/InputWithLabel";
import { DefaultButton } from "@/shared/components/DefaultButton";

interface HeroProps {
  logoImg: string;
  name: string;
  id: string;
}

export function Hero({ logoImg, name, id }: HeroProps) {
  const [showModal, setShowModal] = useState(false);
  const [accountName, setAccountName] = useState(name);
  const [accountLogoImg, setAccountLogoImg] = useState(logoImg);

  const sameInformation = accountName === name && accountLogoImg === logoImg;

  async function handleModalAccountEdit() {
    if (sameInformation) {
      setShowModal(false);
      return;
    }

    const reqOptions = {
      method: "PUT",
      body: JSON.stringify({ name: accountName, logoImg: accountLogoImg }),
      headers: { "Content-Type": "application/json", id: id },
    };

    await fetch("http://localhost:3333/account", reqOptions);

    setShowModal(false);
  }

  return (
    <Container>
      <div className="account">
        <div className="logo-and-name">
          <img
            src={accountLogoImg ? accountLogoImg : bank}
            width={48}
            height={48}
            alt=""
          />

          <div className="division-line" />

          <h2>{accountName}</h2>
        </div>

        <div className="buttons">
          <ShortButton icon={pencilSimple} onClick={() => setShowModal(true)} />
          <ShortButton
            color={`rgba(235, 91, 100, 0.25)`}
            icon={trashSimple}
            onClick={() => console.log("foi")}
          />
        </div>
      </div>
      {showModal && (
        <Modal className="account-edit-modal">
          <div className="inputs">
            <InputWithLabel
              icon={bank}
              setValueOnChange={setAccountName}
              label="Nome da instituição"
              value={accountName}
            />
            <InputWithLabel
              icon={linkSimple}
              setValueOnChange={setAccountLogoImg}
              label="Logo (Url da imagem)"
              value={accountLogoImg}
              placeholder="https://example.com/image.svg"
            />
          </div>

          <div className="buttons">
            <DefaultButton
              icon={arrowLeft}
              title="Voltar"
              onClick={() => setShowModal(false)}
              btnColor={`var(--Black-800)`}
              fontColor={`var(--White)`}
            />
            <DefaultButton
              icon={floppyDisk}
              title="Salvar alterações"
              onClick={handleModalAccountEdit}
            />
          </div>
        </Modal>
      )}
    </Container>
  );
}
