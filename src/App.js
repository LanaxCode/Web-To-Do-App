import logo from './logo.svg';
import './App.css';
// import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <section className="App">
      <header className="App-header">
        <h1>Website Todo</h1>
      </header>
      <main className="App-Main">
        <ToDoItem />
      </main>
    </section>
  );
}

export default App;
