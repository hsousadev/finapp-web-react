import { StatementProps } from "./StatementProps";

export interface AccountProps {
  id: string;
  name: string;
  logoImg: string;
  statement: Array<StatementProps>;
}
