import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

// pages
import App from "../App";
import UseStatePages from "../pages/useState/UseStatePage";
import ConceptUseStatePage from '../pages/useState/ConceptUseStatePage';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="useState" element={<UseStatePages />}>
          <Route index element={<ConceptUseStatePage />} />
        </Route>
      </Route>
    )
  );



export default router