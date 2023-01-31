import Notes from "./pages/Notes";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Notes/>,
    },
  ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
