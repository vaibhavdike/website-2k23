import AppHero from "./components/AppHero";
import "./styles/App.css"

function App() {
  return (
    <div className="App" style={{
      paddingTop:"min(10%, 80px)"
    }} >
      <AppHero />
    </div>
  );
}

export default App;
