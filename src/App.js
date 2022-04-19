import "./App.css";
import { Navbar, Header, Contact, Experience } from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
