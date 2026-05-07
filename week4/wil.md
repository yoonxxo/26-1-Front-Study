## React

: 각각의 부품(component)은 원자가 되어 서로가 독립적이지만 모여서 하나의 전체가 된다. 이러한 원자 모양 아이콘을 가진 라이브러리가 React이다.

### 컴포넌트의 생애

1. Mount: 화면에 나타난다.
2. Update: 상호작용에 대한 응답으로 새로운 props나 state를 받으면 업데이트된다.(리렌더링)
3. UnMount: 화면에서 사라진다.
### React의 발전사

과거에는 class-컴포넌트와 function-컴포넌트가 공존했으나, class-컴포넌트를 더 많이 사용하여 관리했다.

- class-컴포넌트의 장점
    1. 백엔드에서도 class문법을 사용하기 때문에 협업에 적합하다. 
    2. 정형화된 개발 패턴이다. 
    3. 라이프 사이클을 관리하는 클래스 내부 함수가 있어, 컴포넌트 생애 전반에 디테일한 조절이 가능하다.
- class-컴포넌트의 단점
    1. class문법이나 컴포넌트 내부에서 사용하는 메소드, 개발패턴에 대한 이해 없이는 협업을 못한다.
    2. 배우기 어렵다.

function-컴포넌트는 이전까지는 props만 사용(state X)하는 반쪽짜리 컴포넌트 였다. 그러나 React 16.8 버전부터 **Hook**을 사용할 수 있게 되면서, function-컴포넌트를 많이 사용하게 되었다. 

#### virtual DOM

: 빈번한 DOM 조작은 브라우저를 힘들게 한다. 이를 해결하기 위해 메모리에 ‘가벼운 가상의 DOM’을 만들어 미리 조작하고 결과만 일괄적으로 Real DOM에 반영한다.

**HOOK**

: V-DOM에게 컴포넌트의 상태(state)가 변했음을 알려준다. 단순한 내장함수(use로 시작)로 처리할 수 있어 더 직관적이고 편리하다. 

“상위 컴포넌트의 state 값을 하위 컴포넌트에 사용한다.” 즉, 상위 컴포넌트의 state가 바뀌면 하위 컴포넌트가 새롭게 렌더링된다. 아래는 그 예시 코드이다.

```jsx
<Counter.js>

import {useState} from 'react';
import CounterNumber from './CounterNumber';

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1); //상위 state 값 변경
    }

    return (
        <div>
            <h2>{count}</h2>
            <CounterNumber count = {count} /> //props로 하위에 값 보내줌
            <button onClick={increment}>+1</button>
        </div>
    )
}

export default Counter;
```

```jsx
<CounterNumber.js>
function CounterNumber(properties){
    function coloredNumber(){
        if(properties.count>0){ 
            return `rgb(${properties.count*10},0,0)`
        } //count 값으로 rgb값 가공
    }
    const h2Style = {
        fontsize: '30px', color: `${coloredNumber()}`
    }
    return(
        <h2 style={h2Style}>{properties.count}</h2>
    )
}
export default CounterNumber;
```

- useState
