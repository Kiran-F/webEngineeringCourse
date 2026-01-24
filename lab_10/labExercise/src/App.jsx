import ThemeProvider from "./components/ThemeProvider.jsx";
import ThemeButton from "./components/ThemeButton.jsx";

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Theme Switching using useContext</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
