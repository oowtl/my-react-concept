import { React, useState } from "react";

export default function BasicUseState() {
  const [age, setAge] = useState(30);
  // age = 현재 상태
  // setAge = 상태 변경 함수
  // useState(initialState) = 초기 상태 설정
  const [name, setName] = useState("Developer");

  const handleClickAddAge = (e) => {
    e.preventDefault();
    setAge((a) => age + 1); // 상태 변경 함수
  };

  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value); // 상태 변경 함수
  };

  return (
    <div>
      <h2>Basic UseState</h2>

      <h3>Number</h3>
      <h4>Age : {age}</h4>
      <button onClick={handleClickAddAge}>Add Age</button>

      <h3>String</h3>
      <h4>Name : {name}</h4>
      <input type="text" onChange={handleChangeName} value={name}/>
    </div>
  );
}
