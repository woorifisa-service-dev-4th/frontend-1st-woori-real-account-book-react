import {AccountBookProvider} from "./contexts/AccountBookContext.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {

  return (
    <>
      <AccountBookProvider>
        <MainHeader />
      </AccountBookProvider>
    </>
  )
}

export default App
