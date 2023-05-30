import { useRouter } from "next/router";
import Image from "next/image";

import { ShortGeneralBalance } from "../ShortGeneralBalance";
import { ShortButton } from "../ShortButton";

import houseSimple from "@/shared/assets/icons/HouseSimple.svg";

import logo from "@/shared/assets/logos/finance-app-js-white-logo.svg";

import { Container } from "./styles";

interface TopBarProps {
  balance?: number;
  expenses?: number;
}

export function TopBar({ balance, expenses }: TopBarProps) {
  const router = useRouter();
  const { pathname } = router;

  const isHome = pathname === "/";

  return (
    <Container>
      <Image src={logo} width={123} height={48} alt="logo" />

      <div className="right">
        {!isHome && (
          <ShortButton onClick={() => router.push("/")} icon={houseSimple} />
        )}
        <ShortGeneralBalance balance={balance} expenses={expenses} />
      </div>
    </Container>
  );
}
