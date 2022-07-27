import { Provider } from "react-redux";
import Keeper from "../Keeper/Keeper";
import store from '../../store/store'

function App() {
  return (
    <Provider store={store}>
      <Keeper />
    </Provider>
  );
}

export default App;
