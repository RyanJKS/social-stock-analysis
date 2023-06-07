import "./App.css";
import SearchBar from "./components/Searchbar/SearchBar";
import Sidebar from "./components/Sidebar/Sidebar";
import RoutingPaths from "./pages/RoutingPaths";

function App() {
  return (
    <Sidebar>
      <SearchBar />
      <RoutingPaths />
    </Sidebar>
  );
}

export default App;
