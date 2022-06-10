import { useTransactions } from '../../contexts';
import { Container } from './styles';

export function TransactionTable() {
  const { transactions } = useTransactions();

  function formatDate(date: string): string {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
  }

  function formatMoney(amount: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className='deposit'>{formatMoney(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
