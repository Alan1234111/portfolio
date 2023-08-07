import GlobalStyles from "./components/styles/Global";
import Sidebar from "./components/Sidebar";
import HamburgerProvider from "./components/context/Hamburger.context";
import MainInformation from "./components/MainInformation";

function App() {
  return (
    <HamburgerProvider>
      <GlobalStyles />
      <Sidebar />
      <MainInformation />
    </HamburgerProvider>
  );
}

export default App;
