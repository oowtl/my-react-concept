import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

// pages
import App from "../App";
import UseStatePages from "../pages/useState/UseStatePage";
import ConceptUseStatePage from '../pages/useState/ConceptUseStatePage';
import HowToUseStatePage from '../pages/useState/HowToUseStatePage';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="useState" element={<UseStatePages />}>
          <Route index element={<ConceptUseStatePage />} />
          <Route path="how-to-use-usestate" element={<HowToUseStatePage />} />
        </Route>
      </Route>
    )
  );



export default router