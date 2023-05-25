import Image from "next/image";

import { Container } from "./styles";

import handCoins from "@/shared/assets/icons/HandCoins.svg";
import trendDown from "@/shared/assets/icons/TrendDown.svg";
import houseSimple from "@/shared/assets/icons/HouseSimple.svg";

export function ShortGeneralBalance() {
  return (
    <Container>
      <button className="box">
        <Image src={houseSimple} alt="" />
      </button>

      <div className="box">
        <Image src={handCoins} alt="" />
        <h4>R$7,500.00</h4>
      </div>

      <div className="box">
        <Image src={trendDown} alt="" />
        <h4>-R$2,500.00</h4>
      </div>
    </Container>
  );
}
