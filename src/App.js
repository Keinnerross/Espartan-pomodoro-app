import MainTemplate from "./Components/mainTemplate";

import { Provider } from "./Components/context/store";

import "./App.css";

function App() {
  return (
    <Provider>
      <MainTemplate></MainTemplate>
    </Provider>
  );
}

export default App;