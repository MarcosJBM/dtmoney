import { useState } from 'react';
import Modal from 'react-modal';

import closeIcon from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
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
  const [transactionType, setTransactionType] =
    useState<TransactionType>('deposit');

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

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />

        <input type='number' placeholder='Valor' />

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

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
