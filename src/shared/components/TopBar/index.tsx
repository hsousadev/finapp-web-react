import Image from "next/image";

import { ShortGeneralBalance } from "../ShortGeneralBalance";

import logo from "@/shared/assets/logos/finance-app-js-white-logo.svg";

import { Container } from "./styles";

export function TopBar() {
  return (
    <Container>
      <Image src={logo} width={123} height={48} alt="logo" />
      {/* <ShortGeneralBalance /> */}
    </Container>
  );
}
