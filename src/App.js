import { Header } from "./containers/Header";
import { Main } from "./containers/Main";
import { Cta } from "./containers/Cta";
import { Footer} from "./containers/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Cta />
      <Footer/>
    </div>
  );
}

export default App;
