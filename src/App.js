import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import Score from "./components/Score";
import Buy from "./components/Buy";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Score></Score>
        <Buy></Buy>
      </div>
    </Provider>
  );
}

export default App;
