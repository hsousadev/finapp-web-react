import Image from "next/image";

import useWindowSize from "@/shared/utils/useWindowSize";
import { formmatedNumber } from "@/shared/utils/formattedNumber";

import handCoins from "@/shared/assets/icons/HandCoins.svg";
import trendDown from "@/shared/assets/icons/TrendDown.svg";

import { Container } from "./styles";

interface InfoValueCardProps {
  accountName: string;
  value: number;
  type: string;
}

export function InfoValueCard({ type, value, accountName }: InfoValueCardProps) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 720;

  const formmatedValue = formmatedNumber(value);

  return (
    <Container>
      {type === "income" ? (
        <Image
          src={handCoins}
          alt=""
          width={isMobile ? 32 : 54}
          height={isMobile ? 32 : 54}
        />
      ) : (
        <Image
          src={trendDown}
          alt=""
          width={isMobile ? 32 : 54}
          height={isMobile ? 32 : 54}
        />
      )}

      <div>
        <h4>Balanço total {accountName && `${accountName}`}</h4>
        {type === "income" ? (
          <h2>R${formmatedValue.substring(0, 18)}</h2>
        ) : (
          <h2>-R${formmatedValue.substring(0, 18)}</h2>
        )}
      </div>
    </Container>
  );
}
