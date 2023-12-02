import { React } from "react";
import {Outlet} from 'react-router-dom';


export default function UseStatePages() {


  return (
    <div>
      <h1>UseState</h1>

      <hr />
      <Outlet />
    </div>
  );
}
