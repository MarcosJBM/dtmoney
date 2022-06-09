import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import { api } from '../../services';
import { Container } from './styles';

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionResponseProps {
  transactions: TransactionProps[];
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  }

  useEffect(() => {
    api
      .get('/transactions')
      .then((response: AxiosResponse<TransactionResponseProps>) =>
        setTransactions(response.data.transactions)
      );
  }, []);

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
              <td className='deposit'>R${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
