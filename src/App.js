import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import Game from "./components/Game";

function App() {
  return (
    <Provider store={store}>
      <Game></Game>
    </Provider>
  );
}

export default App;
