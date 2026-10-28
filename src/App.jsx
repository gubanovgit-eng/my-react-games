import "./App.css";
import Counter from "./Counter";
import Games from "./Games";

function App() {
  return (
    <main className="app">
      <Counter title="Мой счётчик" />
      <Counter title="Очки" initialCount={10} />

      <Games />
    </main>
  );
}

export default App;