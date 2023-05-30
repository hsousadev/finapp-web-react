import { useContext } from "react";
import { HomeContext } from "@/pages";

import Image from "next/image";

import { Container } from "./styles";

import handCoins from "@/shared/assets/icons/HandCoins.svg";
import trendDown from "@/shared/assets/icons/TrendDown.svg";

interface ShortGeneralBalanceProps {
  balance?: number;
  expenses?: number;
}

export function ShortGeneralBalance({
  balance,
  expenses,
}: ShortGeneralBalanceProps) {
  return (
    <Container>
      <div className="box">
        <Image src={handCoins} alt="" />
        <h4>R${balance}</h4>
      </div>

      <div className="box">
        <Image src={trendDown} alt="" />
        <h4>-{expenses}</h4>
      </div>
    </Container>
  );
}
