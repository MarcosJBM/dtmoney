import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransaction } from '../../contexts';
import { formatMoney } from '../../utils';
import { Container } from './styles';

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt='Entradas' />
        </header>
        <strong>{formatMoney(summary.deposits)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt='Saídas' />
        </header>
        <strong>{formatMoney(summary.withdraws)}</strong>
      </div>

      <div className='highlight-background'>
        <header>
          <p>Total</p>
          <img src={total} alt='Total' />
        </header>
        <strong>{formatMoney(summary.total)}</strong>
      </div>
    </Container>
  );
}
