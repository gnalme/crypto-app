import AppLayout from './components/layout/AppLayout';
import { CryptoContextProvider } from './context/cryptoContext';


function App() {
  return (
    <div className="App">
      <CryptoContextProvider>
        <AppLayout />
      </CryptoContextProvider>
      
    </div>
  );
}

export default App;
