import "./App.css";
import { Outlet } from "react-router";
import Navigation from "./components/navigation/Navigation";

function App() {
  //TODO: put base layer here
  return (
    <>
      <Navigation></Navigation>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
