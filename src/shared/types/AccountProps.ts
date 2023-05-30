import { StatementProps } from "./StatementProps";

export interface AccountProps {
  data: {
    id: string;
    name: string;
    logoImg: string;
    statement: Array<StatementProps>;
  };
  balance: number;
}
