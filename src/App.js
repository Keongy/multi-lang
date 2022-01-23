import Accueil from './Components/Contenu/Accueil';
import Flags from './Components/ToggleLangs/Flags';
import ContextProvider from './context/langContext';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Flags />
        <Accueil />
      </ContextProvider>
    </div>
  );
}

export default App;
