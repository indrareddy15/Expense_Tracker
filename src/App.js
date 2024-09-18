import Dashboard from './components/Dashboard/Dashboard';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider >
      <div>
        <Dashboard />
      </div>
    </SnackbarProvider>
  );
}

export default App;