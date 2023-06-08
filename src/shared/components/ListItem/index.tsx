/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";

import useWindowSize from "@/shared/utils/useWindowSize";
import { formmatedNumber } from "@/shared/utils/formattedNumber";

import { Modal } from "@/shared/components/Modal";

import chartLineUp from "@/shared/assets/icons/ChartLineUp.svg";
import trendDown from "@/shared/assets/icons/TrendDown.svg";
import bank from "@/shared/assets/icons/Bank_white.svg";

import trash from "@/shared/assets/icons/TrashSimple_Black.svg";
import receipt from "@/shared/assets/icons/Receipt.svg";
import coins from "@/shared/assets/icons/Coins.svg";
import calendarBlank from "@/shared/assets/icons/CalendarBlank.svg";
import arrowLeft from "@/shared/assets/icons/ArrowLeft.svg";

import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";

import { Container, ItemModalContainer } from "./styles";
import { useState } from "react";
import { DefaultButton } from "../DefaultButton";

interface ListItemProps {
  id?: string;
  icon?: string;
  text: string;
  income?: number;
  expense?: number;
  type?: string;
  amount?: number;
  createdAt?: Date;
  onClick?: () => void;
  accountId: string;
  Account: {
    logoImg: string;
    name: string;
  };
}

export function ListItem({
  id,
  icon,
  income,
  text,
  expense,
  type,
  amount,
  createdAt,
  onClick,
  accountId,
  Account,
}: ListItemProps) {
  dayjs.locale(ptBR);

  const router = useRouter();
  const isHome = router.pathname === "/";

  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 425;

  const incomeStyle = { color: `var(--Green-700)` };
  const incomeZeroStyle = { color: `var(--White)` };
  const expenseStyle = { color: `var(--Red-100)` };

  const formmatedExpense = expense && formmatedNumber(expense).substring(0, 18);
  const formmatedAmount = amount && formmatedNumber(amount).substring(0, 18);
  const formmatedIncome = income && formmatedNumber(income).substring(0, 18);

  const [showItemModal, setShowItemModal] = useState(false);

  const isCredit = type === "credit";
  const isDebit = type === "debit";

  const statementItem = isCredit ? (
    <Image src={chartLineUp} alt="Credit" width={24} height={24} />
  ) : (
    isDebit && <Image src={trendDown} alt="Statement" width={24} height={24} />
  );

  async function handleDeleteItem() {
    const reqOptions = {
      method: "DELETE",
      headers: {
        id: accountId,
      },
    };

    await fetch(
      `http://localhost:3333/statement/accountId?accountId=${id}`,
      reqOptions
    );

    setShowItemModal(false);
    window.location.reload();
  }

  return (
    <>
      <Container onClick={onClick ? onClick : () => setShowItemModal(true)}>
        <div className="icon-and-name">
          {icon ? (
            <img src={icon} alt="Image" width={24} height={24} />
          ) : type ? (
            statementItem
          ) : (
            <img src={bank} alt="Image" width={24} height={24} />
          )}

          <h4>
            {isMobile
              ? text.substring(0, 25) + (text.length > 25 ? "..." : "")
              : text}{" "}
            <strong>
              {createdAt && dayjs(createdAt).format("DD/MM/YYYY")}
            </strong>
          </h4>
        </div>

        <div className="values">
          {income?.toString() && (
            <h4 style={income === 0 ? incomeZeroStyle : incomeStyle}>
              R${formmatedIncome}
            </h4>
          )}
          {expense && <h4 style={expenseStyle}>-R${formmatedExpense}</h4>}
          {amount && isDebit ? (
            <h4 style={expenseStyle}>-R${amount}</h4>
          ) : (
            isCredit && <h4 style={incomeStyle}>R${formmatedAmount}</h4>
          )}
        </div>
      </Container>
      <ItemModalContainer>
        {showItemModal && (
          <Modal className="item-modal">
            <div className="item-info">
              <div>
                <Image
                  width={32}
                  height={32}
                  src={isCredit ? chartLineUp : trendDown}
                  alt=""
                />
                <h4>{type === "credit" ? "Receita" : "Gasto"}</h4>
              </div>
              <div>
                <Image width={32} height={32} src={receipt} alt="" />
                <h4>{text}</h4>
              </div>
              <div>
                <Image width={32} height={32} src={coins} alt="" />
                <h4 style={{ fontWeight: "bold" }}>R${amount}</h4>
              </div>
              <div>
                <Image width={32} height={32} src={calendarBlank} alt="" />
                <h4>{createdAt?.toString()}</h4>
              </div>
              {isHome && (
                <div>
                  <img width={32} height={32} src={Account.logoImg} alt="" />
                  <h4>{Account.name}</h4>
                </div>
              )}
            </div>

            <div className="buttons">
              <DefaultButton
                icon={arrowLeft}
                title="Voltar"
                onClick={() => setShowItemModal(false)}
                btnColor={`var(--Black-800)`}
                fontColor={`var(--White)`}
              />
              <DefaultButton
                icon={trash}
                title="Excluir"
                btnColor={`var(--Red-100)`}
                onClick={handleDeleteItem}
              />
            </div>
          </Modal>
        )}
      </ItemModalContainer>
    </>
  );
}
