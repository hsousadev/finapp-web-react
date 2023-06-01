import { AccountProps } from "./AccountProps";
import { StatementProps } from "./StatementProps";

export interface HomeProps {
  allBalance: number;
  allExpenses: number;
  allStatements: Array<StatementProps>;
  accounts: Array<AccountProps>;
}
