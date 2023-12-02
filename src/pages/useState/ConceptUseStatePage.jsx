import React from 'react'

export default function ConceptUseStatePage() {
  return (
    <div>
      <h2>useState Concept</h2>
      <br />
      <h3>설명</h3>
      <p>useState is a React Hook that lets you add state variable to your component.</p>
      <p>useState는 컴포넌트에 상태 변수를 추가할 수 있는 React Hook입니다.</p>
      <br />
      <h3>코드</h3>
      <code>
          const [state, setState] = useState(initialState);
      </code>
      <p>state : 현재상태</p>
      <p>setState (setSomething(nextState)) : 다음 상태로 업데이트하고 렌더링을 트리거하는 함수</p>
      <p>useState (useState(initialState)) : 최초 렌더링을 할 수 있는 값을 넣어두는 것, 최초 렌더링 이후 무시됨</p>
    </div>
  )
}
