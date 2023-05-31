import { StatementProps } from "./StatementProps";

export interface AccountProps {
  data: {
    id: string;
    name: string;
    logoImg: string;
    statements: Array<StatementProps>;
  };
  balance: number;
}
