import { Summary } from '../summary';
import { TransactionTable } from '../transaction-table';

import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
