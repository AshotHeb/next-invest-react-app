import { Header } from "./containers/Header";
import { Main } from "./containers/Main";
import {Investors} from "./containers/Investors"


function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      {/* <Investors/> */}
    </div>
  );
}

export default App;
