import "./App.css";
import { Outlet } from "react-router";
import Navigation from "./components/navigation/Navigation";
import { ThemeProvider, Theme } from "./utils/ThemeProvider";

function App() {
  //TODO: put base layer here
  return (
    <ThemeProvider defaultTheme={Theme.Dark}>
      <Navigation></Navigation>
      <main className="bg-zinc-950">
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;
