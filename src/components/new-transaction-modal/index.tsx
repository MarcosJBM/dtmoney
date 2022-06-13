import { FormEvent, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import Modal from 'react-modal';

import closeIcon from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { useTransaction } from '../../contexts';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type TransactionType = 'deposit' | 'withdraw';

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const [transactionType, setTransactionType] =
    useState<TransactionType>('deposit');

  const { createTransaction } = useTransaction();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const formattedAmount = Number.parseFloat(amount.replace(',', '.'));

    await createTransaction({
      title,
      amount: formattedAmount,
      category,
      type: transactionType,
      createdAt: new Date().toISOString(),
    });

    setTitle('');
    setAmount('');
    setCategory('');
    setTransactionType('deposit');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeIcon} alt='Fechar Modal' />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <CurrencyInput
          placeholder='Preço'
          value={amount}
          defaultValue=''
          onValueChange={value => setAmount(value || '')}
          decimalsLimit={2}
          intlConfig={{
            locale: 'pt-BR',
            currency: 'BRL',
          }}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            isActive={transactionType === 'deposit'}
            activeColor='green'
            onClick={() => setTransactionType('deposit')}
          >
            <img src={income} alt='Entrada' />

            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            isActive={transactionType === 'withdraw'}
            activeColor='red'
            onClick={() => setTransactionType('withdraw')}
          >
            <img src={outcome} alt='Saída' />

            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
