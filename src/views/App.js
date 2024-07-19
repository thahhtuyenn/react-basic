import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";

/**
 * 2 components: class component / function component (function, arrow)
 *
 */
// JSX
// function App() {
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* <MyComponent /> */}
        <MyComponent></MyComponent>
      </header>
    </div>
  );
};

export default App;
