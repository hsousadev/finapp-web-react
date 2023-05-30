import { useContext } from "react";
import { HomeContext } from "@/pages";

import { ListItem } from "@/shared/components/ListItem";

import { Container } from "./styles";
import { useRouter } from "next/router";

export function Institutions() {
  const { accounts } = useContext(HomeContext);

  const router = useRouter();

  function handleClick(id: string) {
    setCookie("id", id);
    router.push("/account");
  }

  function setCookie(name: string, value: string) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
  }

  return (
    <Container>
      <h2> Suas instituições </h2>

      <div className="list">
        {accounts.map((account) => (
          <ListItem
            key={account.data.id}
            text={account.data.name}
            icon={account.data.logoImg}
            income={account.balance}
            onClick={() => handleClick(account.data.id)}
          />
        ))}
      </div>
    </Container>
  );
}
