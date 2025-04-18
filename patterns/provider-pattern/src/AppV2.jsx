import { useState, createContext, useContext } from "react";
import "./App.css";

const DarkModeContext = createContext({});

function useDarkMode() {
  return useContext(DarkModeContext);
}

function Button({ children, ...rest }) {
  const { isDarkMode } = useDarkMode();
  const style = {
    backgroundColor: isDarkMode ? "#333" : "#CCC",
    border: "1px solid",
    color: "inherit",
  };
  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
}

function ToggleButton() {
  const { toggleDarkMode } = useDarkMode();
  return <Button onClick={toggleDarkMode}>Toggle mode</Button>;
}

function Header() {
  const style = {
    padding: "10px 5px",
    borderBottom: "1px solid",
    marginBottom: "10px",
    display: "flex",
    gap: "5px",
    justifyContent: "flex-end",
  };

  return (
    <header style={style}>
      <Button>Products</Button>
      <Button>Services</Button>
      <Button>Pricing</Button>
      <ToggleButton />
    </header>
  );
}

const Main = () => {
  const { isDarkMode } = useDarkMode();

  const style = {
    color: isDarkMode ? "white" : "black",
    backgroundColor: isDarkMode ? "black" : "white",
    margin: "-8px",
    minHeight: "100vh",
    boxSizing: "border-box",
  };

  return (
    <main style={style}>
      <Header />
      <h1>Welcome to our business site!</h1>
    </main>
  );
};

function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((v) => !v);
  const contextValue = { isDarkMode, toggleDarkMode };
  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

function AppV2() {
  return (
    <DarkModeProvider>
      <Main />
    </DarkModeProvider>
  );
}

export default AppV2;
