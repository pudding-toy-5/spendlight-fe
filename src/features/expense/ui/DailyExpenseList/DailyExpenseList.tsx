import { useExpenseStore } from '@/features/expense/model/expenseStore';
import { DailyExpense } from '@/features/expense/model/types';

import DailyExpenseItem from '@/features/expense/ui/DailyExpenseListItem';

const DailyExpenseList = () => {
  const dailyExpenses: DailyExpense[] = useExpenseStore(
    (state) => state.dailyExpenses
  );

  return (
    <div
      className='flex flex-1 overflow-auto align-middle bg-gray-100 items-center justify-center'
      aria-label='daily-expense-list'
    >
      {dailyExpenses.length === 0 ? (
        <p>지출 내역을 추가해주세요.</p>
      ) : (
        dailyExpenses.map(({ date, expenses }) => (
          <DailyExpenseItem
            key={date.toISOString()}
            date={date}
            expenses={expenses}
          />
        ))
      )}
    </div>
  );
};

export default DailyExpenseList;
