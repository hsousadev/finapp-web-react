import { AccountProps } from "./AccountProps";
import { StatementProps } from "./StatementProps";

export interface HomeProps {
  allBalance: number;
  accounts: Array<AccountProps>;
  allStatements: Array<StatementProps>;
}
