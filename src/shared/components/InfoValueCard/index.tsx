import Image from "next/image";

import handCoins from "@/shared/assets/icons/HandCoins.svg";
import trendDown from "@/shared/assets/icons/TrendDown.svg";

import { Container } from "./styles";

interface InfoValueCardProps {
  value: number;
  type: string;
}

export function InfoValueCard({ type, value }: InfoValueCardProps) {
  return (
    <Container>
      {type === "income" ? (
        <Image src={handCoins} alt="" width={54} height={54} />
      ) : (
        <Image src={trendDown} alt="" width={54} height={54} />
      )}

      <div>
        <h4>Balanço total</h4>
        {type === "income" ? <h2>R${value}.00</h2> : <h2>-R${value}.00</h2>}
      </div>
    </Container>
  );
}
