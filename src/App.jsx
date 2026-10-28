import "./App.css";
// import Counter from "./components/Counter";
import Games from "./components/Games";

function App() {
  return (
    <main className="app">
      {/* <Counter title="Мой счётчик" />
      <Counter title="Очки" initialCount={10} /> */}

      <Games />
    </main>
  );
}

export default App;