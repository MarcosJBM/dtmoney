import Modal from 'react-modal';

import closeIcon from '../../assets/close.svg';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
          <button type='button'>
            <img src={income} alt='Entrada' />
            <span>Entrada</span>
          </button>

          <button type='button'>
            <img src={outcome} alt='Saída' />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
