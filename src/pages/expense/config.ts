import { EXPENSE_BASE_PATH } from "../config";
import { SideMenuConfig } from "../fragment/sidebar/config";


export const configs: SideMenuConfig = [
    {
      text: 'Expenses',
      key: 'expenses',
      link: EXPENSE_BASE_PATH,
    },
    {
      text: 'Expense Detail',
      key: 'expense_detail',
      link: EXPENSE_BASE_PATH + "/detail",
    },
    {
      text: 'Expense Summary',
      key: 'expense_summary',
      link: EXPENSE_BASE_PATH + "/summary",
    },
  ]
  
  