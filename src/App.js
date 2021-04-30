import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import Score from "./components/Score";
import Buy from "./components/Buy";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <NavBar></NavBar>
        <div className="container">
          <Score></Score>
          <Buy></Buy>
        </div>
      </div>
    </Provider>
  );
}

export default App;
