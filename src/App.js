import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AssassinList from './components/AssassinList';
import GuardianList from './components/GuardianList';
import HunterList from './components/HunterList';
import MageList from './components/MageList';
import WarriorList from './components/WarriorList';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Navbar />
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/assassins" exact component={AssassinList} />
            <Route path="/guardians" exact component={GuardianList} />
            <Route path="/hunters" exact component={HunterList} />
            <Route path="/mages" exact component={MageList} />
            <Route path="/warriors" exact component={WarriorList} />
          </div>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
