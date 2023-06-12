import { useRouter } from "next/router";
import Image from "next/image";

import { ShortGeneralBalance } from "../ShortGeneralBalance";
import { ShortButton } from "../ShortButton";

import houseSimple from "@/shared/assets/icons/HouseSimple.svg";
import logo from "@/shared/assets/logos/finance-app-js-white-logo.svg";

import useWindowSize from "@/shared/utils/useWindowSize";

import { Container } from "./styles";

interface TopBarProps {
  balance?: number;
  expenses?: number;
}

export function TopBar({ balance, expenses }: TopBarProps) {
  const windowSize = useWindowSize();
  const isMobile = windowSize.windowWidth <= 540;

  const router = useRouter();
  const { pathname } = router;

  const isHome = pathname === "/";

  return (
    <Container>
      <div className="left">
        {isMobile && !isHome && (
          <ShortButton onClick={() => router.push("/")} icon={houseSimple} />
        )}
        <Image src={logo} width={123} height={48} alt="logo" />
      </div>

      {!isHome && !isMobile && (
        <div className="right">
          <ShortButton onClick={() => router.push("/")} icon={houseSimple} />
          <ShortGeneralBalance balance={balance} expenses={expenses} />
        </div>
      )}
    </Container>
  );
}
