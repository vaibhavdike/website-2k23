import AppHero from "./components/AppHero";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import "./styles/App.css"

function App() {
  return (
    <div id="App">
      <AppHero />
      <Events />
      <Gallery />
      <Testimonials />
    </div>
  );
}

export default App;
