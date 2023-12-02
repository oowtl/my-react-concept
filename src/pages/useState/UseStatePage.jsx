import { React, useState } from "react";

import BasicUseState from "../../components/UseStateComponents/BasicUseState";

export default function UseStatePages() {
  const [guide, setGuide] = useState(null);

  const handleClickGuide = (guide, e) => {
    e.preventDefault();
    setGuide(guide);
  };

  return (
    <div>
      <h1>UseState</h1>

      <ul>
        <li
          onClick={(e) => {
            handleClickGuide("BasicUseState", e);
          }}
        >
          BasicUseState
        </li>
      </ul>

      {guide === "BasicUseState" && <BasicUseState />}
    </div>
  );
}
