import Dashboard from './components/Dashboard/Dashboard';
import { SnackbarProvider } from 'notistack';

const App = () => {
  return (
    <SnackbarProvider >
      <div>
        <Dashboard />
      </div>
    </SnackbarProvider>
  );
}

export default App;