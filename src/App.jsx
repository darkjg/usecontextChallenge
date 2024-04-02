import './App.css'; // Archivo de estilos CSS
import RoutesApp from './routes/Routesapp';
import { ThemeProvider } from "./themes/ThemeContext"
const App = () => {
  return (
    <ThemeProvider>
      <RoutesApp></RoutesApp>
    </ThemeProvider>
  );
};

export default App;
