import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import store from "./utils/store";
import Homepage from "./components/Homepage";
import Home from "./components/Home";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="flex relative top-16">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
