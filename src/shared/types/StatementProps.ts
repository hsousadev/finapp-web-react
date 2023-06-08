export interface StatementProps {
  Account: {
    logoImg: string;
    name: string;
  };
  id: string;
  accountId: string;
  description: string;
  amount: number;
  created_at: Date;
  type: string;
}
