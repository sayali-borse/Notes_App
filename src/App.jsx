import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import View from "./components/View";

const router = BrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/paste/:id",
    element: (
      <div>
        <Navbar />
        <View />
      </div>
    ),
  },
]);

function App() {
  return (
    <>
      <h1 className="text-xl"> Hello</h1>
    </>
  );
}

export default App;
