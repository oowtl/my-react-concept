# useState

> useState is a React Hook that lets you add state variable to your component.
>
> useState는 컴포넌트에 상태 변수를 추가할 수 있는 React Hook입니다.



# 함수

## useState(initialState)

```jsx
import { useState } from 'react';

function StateComponent () {
  const [age, setAge] = useState(30);
  const [name, setName] = useState('Developer');
}
```

### Parameters

- `initialState`
  - 최초의 상태값을 넣어둔다.
  - 어떤 타입이던지 넣어둘 수 있다.
  - 최초 렌더링 이후 무시된다.

### Returns

1. 현재의 상태 : 첫 번째 렌더링할 때는 `initialState` 에 전달한 값과 동일한 값이 렌더링 된다.
2. set 함수 : 다른 값으로 상태를 업데이트하거나 렌더링을 다시하도록 하는 함수이다.

### 주의사항

- `useState`는 훅으로서 컴포넌트의 최상단에 선언할 수 있다.
- 조건문이나 반복문 안에 선언할 수 없다.
- 조건문이나 반복문 안에 선언하고 싶다면, 새로운 컴포넌트를 추출해서 새로운 컴포넌트 안으로 옮겨야 한다.
- Strict mode에서 리액트는 실수로 발생한 것을 찾는데 도움을 주기 위해서 초기화 함수를 두 번 호출한다.
  - 개발 모드에서만 적용되며 프로덕션 모드에서는 영향을 주지 않는다.
  - 초기화 함수가 순수한 경우에는 동작에 영향을 주지 않는다.
  - 두번 호출된 것에서 하나는 무시된다.

## setSomething(nextState)

useState에서 반환된 set 함수를 사용하면 상태를 다른 값으로 업데이트하고 다시 렌더링을 트리거할 수 있는 함수

`nextState`를 직접 전달해서 변경하거나 이전 상태에서 계산하는 함수를 전달할 수 있다.

```jsx
import { useState } from 'react';

function StateComponent () {
	const [name, setName] = useState('Developer');
	const [age, setAge] = useState(30);
  
  const handleClick = () => {
    setName('FrontEnd Developer'); // 직접 상태를 변경
    setAge(age => age + 1); // 이전 상태의 값을 계산
  };
};
```

### Parameters

- `nextState`
  - 변경하길 원하는 상태값을 말한다.
  - 함수를 `nextState`로 전달하면 updater 함수로 다루어진다.
  - 순수해야 하며, `nextState`를 반환해야만 한다.
  - 리액트는 queue 에 updater 함수를 넣을 것이고 컴포넌트를 다시 랜더링한다.
  - 리액트는 이전 상태를 기준으로 다음 상태를 계산하여 렌더링한다.

### Returns

`set()` 함수는 값을 리턴하지 않는다. 

### 주의사항

- `set()` 함수는 다음 렌더링을 위해서 상태 값을 업데이트하는 함수이다.
  - `set()` 함수를 호출한 후에 상태값을 읽으면 화면에 있었던 이전 값을 얻을 것이다.
  - 나중에 왜 그런 것인지 서술할 예정
- update 한 값이 `Object.is()` 비교의 결과로 현재 상태와 동일한 값이라고 판단된다면 리액트는 컴포넌트와 그 컴포넌트의 자식 컴포넌트를 다시 렌더링 하지 않을 것이다.
  - [`Object.is()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
    - 두값이 같은 값인지 결정하는 메서드
    - `==` 와는 다르게 타입 형변환을 강제하지 않는다.
    - `===` 와는 다르게 0, NaN 을 같게 처리하지 않는다.
- 경우에 따라서 하위요소를 건너뛰기 전에 구성요소를 호출해야하는 경우는 있지만 코드에 영향을 미쳐서는 안된다.
- 리액트는 상태의 업데이트를 일괄처리한다.
  - 모든 이벤트 핸들러가 실행되고 `set()` 함수를 호출한 뒤에 화면을 업데이트한다.
  - 하나의 이벤트로 인해 여러번의 re-rendering 을 방지하기 위함이다.
  - 매우 드물지만 리액트가 화면을 더 일찍 업데이트하려면 DOM 에 접근하거나, `flushSync`를 사용해야 합니다.
- 렌더링 중에 `set()` 함수를 호출하는 것은 현재 렌더링 중인 컴포넌트안에서만 허용된다.
  - 리액트는 즉시 출력하는 것을 삭제하고 새로운 상태를 기준으로 렌더링을 다시 시작한다.
  - 이 패턴은 거의 필요하지 않지만, 이전 렌더링의 정보를 저장하는데 사용할 수 있다.
- Strict Mode 에서 리액트는 실수를 방지하기 위해서 updater 함수를 두번 호출한다.
  - devleopment 환경에서만 동작하며 production 환경에서는 동작하지 않는다.
  - 만약 업데이트 함수가 순수하다면 이 동작에 영향을 받지 않을 것이다.
  - 호출된 결과 중 하나는 무시될 것이다.

# 사용하는 방법

## Adding state to a component

```jsx
import { useStaet } from 'react';

function MyStateComponent () {
  const [age, setAge] = useState(30);
  // age => current age
  // setAge => update age function
  // useState(30) => initial state -> (age=30)
  
  const handleAddAge = (e) => {
    e.preventDefault()
    setAge(age => age + 1)
    // next state => age + 1
  };
  
  return (
    <div>
      <h1>Current Age : {age}</h1>
      <button onClick={handleAddAge}>Add age</button>
    <div/>
  )
};
```

- 리액트는 새로운 값을 저장하고 새로운 값에 따라 컴포넌트를 렌더링 하며, UI 를 업데이트 한다.

### 주의점

- `set()` 함수를 호출하더라도 이미 실행된 코드 내에서 상태 값이 변경되지는 않는다.
  - useState 를 통해서 시작된 렌더링을 통해서 반환된 것에 의해서 영향을 받는다. (= 렌더링하는 시점의 상태값을 참조한다.)

## Updating state based on previous state

### Passing Next State

```jsx
import { useState } from 'react';

function UpdateStateComponent () {
  const [age, setAge] = useState(30);
  
  const handleAddAgeOldValue = (e) => {
    e.preventDefault();
   	setAge(age + 1); // setAge(30+1);
    setAge(age + 1); // setAge(30+1);
    setAge(age + 1); // setAge(30+1);
  };
};
```

- `set()`함수를 호출하더라도 이미 실행된 코드 내에서 상태값이 변경되지는 않기 때문에 `setAge(30+1)` 이 반복적으로 실행된 것이다.

### Passing updator Function

```jsx
import { useState } from 'react';

function PendingStateComponent () {
  const [age, setAge] = useState(30);
  
  const handleAddAgePendingState = (e) => {
    e.preventDefault();
   	setAge(a => a + 1); // setAge(30+1);
    // a => pending state
    // a + 1 => updator function
   	setAge(a => a + 1); // setAge(31+1);
   	setAge(a => a + 1); // setAge(32+1);
  };
};
```

- 순서
  - 리액트는 업데이트 함수를 대기열에 넣어놓고 실행한다.
    - `setAge(a => a + 1);` : setAge(30+1);
    - `setAge(a => a + 1);` : setAge(31+1);   	
    - `setAge(a => a + 1);` : setAge(32+1);
  - 더이상 업데이트할 것이 없으면 렌더링을 진행한다.
- 컨벤션
  - 일반적으로는 pending State 의 이름은 해당하는 상태변수의 이름 첫글자로 짓는다.
  - 좀 더 명확한 의미를 지닌 변수명으로 지어도 된다. (Ex. age => prevAge)
- 리액트는 개발환경에서 업데이트 함수가 순수하다는 것을 증명하기 위해서 함수를 두 번 호출할 수도 있다.



주의할 점

- 항상 `setAge(a => a + 1)` 을 사용하는 것이 좋은 것은 아니다.
  - 실행하는 함수에서 `setAge(a => a + 1)`함수를 한번만 사용하는 경우에는 차이가 없다.
    여러번 호출하는 경우에만 차이가 있다.
  - 여러번 호출하는 경우에는 `useReducer()` 사용을 고려해보는 것도 좋다.



## Updating objects and arrays in state

- 리액트에서의 상태는 어떤 타입이던지 가능하다.
- 리액트에서의 상태는 읽기 전용이다.
- 리액트에서는 기존 객체를 수정하기보다는 변경해야한다.

```jsx
import { useState } from 'react';

function MutateObjectComponent () {
  const [user, setUser] = useState({
    name: 'Developer'
    email: 'Developer@react.com'
  });
  
  return (
  	<div>
    	<label>
      	Name : 
        <input value={user.name} onChange={e => {
            setUser({...user, name: e.target.value});
          }} />
      </label>
      <label>
      	Email : 
        <input value={user.email} onChange={e => {
            setUser({ ...user, email.e.target.value});
          }} />
      </label>
      
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
  )
}
```

- object를 변경하는 코드이다. array 를 변경하는 방법도 동일하다.
- 다른 방법으로는 [`useImmer()`](https://github.com/immerjs/use-immer) 가 있다.



## Avoiding recreating the initial state

### 문제점

```jsx
import { useState } from 'react';

function AvoidReCreateComponent () {
  const [todos, setTodos] = useState(createInitialSetTodos());
}
```

- `createInitialSetTodos()`함수의 반환 값이 첫 번째 렌더링에 사용되고 그 이후의 렌더링에는 사용되지 않는다.
- 하지만 렌더링할 때마다 함수가 실행된다.
- 큰 배열이나 비용이 큰 계산을 할 때는 낭비가 될 수 있다.

### 해결방법

```jsx
import { useState } from 'react';

function AvoidReCreateComponent () {
  const [todos, setTodos] = useState(createInitialSetTodos);
}
```

- `createInitialSetTodos` 를 넣어주는 것으로 해결할 수 있다.
  함수를 호출한 결과값이 아닌 함수명을 호출하는 것을 통해서 React 는 초기 렌더링을 할때만 함수를 호출하고 이후의 렌더링에는 함수를 호출하지 않을 수 있다.

## Resetting state with a key

- 리스트를 렌더링할 때 키 속성을 사용하지만, 다른 목적으로도 사용할 수 있다.
- 컴포넌트에 다른 키를 넣어주는 것을 통해서 컴포넌트를 리셋시킬 수 있다.
  - 키가 변경될 때 리액트는 컴포넌트를 새로 생성해서 변경한다.
- 추가사항 : [preserving and resetting state](https://react.dev/learn/preserving-and-resetting-state)



## Storing information from previous renders

보통 이벤트 핸들러를 통해서 상태를 업데이트한다.

하지만, 드문 경우로 렌더링에 대한 응답에서 상태를 조정해야할 필요가 있다.

Ex) Props 가 변경될 때, 상태변수를 바꾸고 싶을 수도 있다.



- 필요한 값을 현재의 props 나 다른 상태에서 완전히 계산될 수 있다면 중복상태를 모두 제거한다.

- 만약 자주 다시 계산하는 것이 걱정된다면 `useMemo` Hook 이 도움이 될 수 있다.
- 만약에 전체 컴포넌트 트리를 리셋하고 싶다면 컴포넌트에 다른 키를 넣어준다.
- 가능하다면 이벤트 핸들러를 통해서 관련 상태를 업데이트 한다.
