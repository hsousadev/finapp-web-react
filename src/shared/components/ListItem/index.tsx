import Image from "next/image";

import useWindowSize from "@/shared/utils/useWindowSize";
import { formmatedNumber } from "@/shared/utils/formattedNumber";

import chartLineUp from "@/shared/assets/icons/ChartLineUp.svg";
import trendDown from "@/shared/assets/icons/TrendDown.svg";
import bank from "@/shared/assets/icons/Bank_white.svg";

import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";

import { Container } from "./styles";

interface ListItemProps {
  icon?: string;
  text: string;
  income?: number;
  expense?: number;
  type?: string;
  amount?: number;
  createdAt?: Date;
  onClick?: () => void;
}

export function ListItem({
  icon,
  income,
  text,
  expense,
  type,
  amount,
  createdAt,
  onClick,
}: ListItemProps) {
  dayjs.locale(ptBR);

  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 425;

  const incomeStyle = { color: `var(--Green-700)` };
  const expenseStyle = { color: `var(--Red-100)` };

  const formmatedExpense = expense && formmatedNumber(expense).substring(0, 18);
  const formmatedAmount = amount && formmatedNumber(amount).substring(0, 18);
  const formmatedIncome = income && formmatedNumber(income).substring(0, 18);

  const statementItem =
    type === "credit" ? (
      <Image src={chartLineUp} alt="Credit" width={24} height={24} />
    ) : (
      type === "debit" && (
        <Image src={trendDown} alt="Statement" width={24} height={24} />
      )
    );

  return (
    <Container onClick={onClick}>
      <div className="icon-and-name">
        {icon ? (
          <Image src={icon} alt="Image" width={24} height={24} />
        ) : type ? (
          statementItem
        ) : (
          <Image src={bank} alt="Image" width={24} height={24} />
        )}

        <h4>
          {isMobile
            ? text.substring(0, 25) + (text.length > 25 ? "..." : "")
            : text}{" "}
          <text>{createdAt && dayjs(createdAt).format("DD/MM/YYYY")}</text>
        </h4>
      </div>

      <div className="values">
        {income && <h4 style={incomeStyle}>R${formmatedIncome}</h4>}
        {expense && <h4 style={expenseStyle}>-R${formmatedExpense}</h4>}
        {amount && type === "debit" ? (
          <h4 style={expenseStyle}>-R${amount}</h4>
        ) : (
          type === "credit" && <h4 style={incomeStyle}>R${formmatedAmount}</h4>
        )}
      </div>
    </Container>
  );
}
