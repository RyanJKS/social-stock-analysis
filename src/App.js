import "./App.css";
import SearchBar from "./components/Searchbar/SearchBar";
import Sidebar from "./components/Sidebar/Sidebar";
import RoutingPaths from "./pages/RoutingPaths";
import { Data } from "./data/Data";

function App() {
  return (
    <Sidebar>
      <SearchBar data={Data} />
      <RoutingPaths />
    </Sidebar>
  );
}

export default App;
