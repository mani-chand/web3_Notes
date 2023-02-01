import Notes from "./pages/Notes";
//import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Notes/>,
    },
  ]);
  return (
      <RouterProvider router={router} />
  );
}

export default App;
