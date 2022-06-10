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
  createTransaction: (transaction: TransactionInput) => void;
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

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TransactionResponseProps {
  transactions: TransactionProps[];
}

export const TransactionsContext = createContext({} as TransactionsContext);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  function createTransaction(transaction: TransactionInput): void {
    api.post('/transactions', transaction);
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

export const useTransactions = () => useContext(TransactionsContext);