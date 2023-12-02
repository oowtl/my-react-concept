import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

// pages
import App from "../App";
import UseStatePages from "../pages/useState/UseStatePage";


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="useState" element={<UseStatePages />} />
      </Route>
    )
  );



export default router