import { BrowserRouter, Route } from "react-router-dom";

const router = BrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
  {
    path: "/pastes",
    element: <div></div>,
  },
  {
    path: "/paste/:id",
    element: <div></div>,
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
