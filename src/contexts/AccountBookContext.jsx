// 1. Context 생성
export const AccountBookContext = createContext(); // 상태 데이터 저장 Context
export const AccountBookDispatchContext = createContext(); // 상태 변경 함수 저장 Context

// 2. 초기 상태 정의
const initialAccountBooks = {
    income: [
        {
            yearMonth: null,
            details: [],
        }
    ],
    expend: [
        {
            yearMonth: null,
            details: [],
        }
    ]
};

// 3. Reducer 함수 정의
const reducer = (state, action) => {
    const { income, expend } = state;

    switch (action.type) {
        case 'ADD':
            const { newAccountBook } = action;
            return { income: [...income, newAccountBook], expend: [...expend, newAccountBook] };

        case 'UPDATE':
            const { updateAccountBook } = action;
            const updatedAccountBooks = income.map(accountBook => accountBook.yearMonth === updateAccountBook.yearMonth ? { ...updateAccountBook } : accountBook);
            return { income: updatedAccountBooks, expend: updatedAccountBooks };

        case 'DELETE':
            const { yearMonth } = action;
            const deletedAccountBooks = income.filter(accountBook => accountBook.yearMonth !== yearMonth);
            return { income: deletedAccountBooks, expend: deletedAccountBooks };

        // 선택 날짜의 income, expend 데이터 조회 (한달치)
        case 'READ_TOTAL':
            const { yearMonth } = action;
            const readTotalIncome = income.filter(accountBook => accountBook.yearMonth === yearMonth);
            const readTotalExpend = expend.filter(accountBook => accountBook.yearMonth === yearMonth);
            return { income: readTotalIncome, expend: readTotalExpend };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// 4. Provider 컴포넌트 생성
export const AccountBookProvider = ({ children }) => {
    const [accountBooks, dispatch] = useReducer(reducer, initialAccountBooks);

    return (
        <AccountBookContext.Provider value={accountBooks}>
            <AccountBookDispatchContext.Provider value={dispatch}>
                { children }
            </AccountBookDispatchContext.Provider>
        </AccountBookContext.Provider>
    )
}

// 5. 커스텀 훅 생성
export const useAccountBooks = () => useContext(AccountBookContext);
export const useAccountBooksDispatch = () => useContext(AccountBookDispatchContext);