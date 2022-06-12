import { AxiosResponse } from 'axios';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '../services';

interface TransactionsContext {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionProps, 'id'>;

interface TransactionResponseProps {
  transactions: TransactionProps[];
}

interface CreateTransactionResponseProps {
  transaction: TransactionProps;
}

export const TransactionsContext = createContext({} as TransactionsContext);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function createTransaction(
    transaction: TransactionInput
  ): Promise<void> {
    const { data } = await api.post<CreateTransactionResponseProps>(
      '/transactions',
      transaction
    );

    setTransactions([...transactions, data.transaction]);
  }

  useEffect(() => {
    api
      .get('/transactions')
      .then((response: AxiosResponse<TransactionResponseProps>) =>
        setTransactions(response.data.transactions)
      );
  }, []);
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransaction = () => useContext(TransactionsContext);
