## 서버와 통신하기

### API(Application Programming Interface)

: 클라이언트와 서버 간의 데이터를 주고받는 통로 역할을 한다. 서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 인페터이스이다.

```jsx

fetch('https://jsonplaceholder.typicode.com/users1/1/todos') //fetch는 서버 데이터를 받아오는 JS표준 API 함수
    .then((response) => response.json())
    .then((json) => console.log(json));
```

여기서 json이란? 

JavaScript Object Notation. JS 객체 문법을 따르는 문자 기반의 데이터 형식을 말한다. 

JSON Placeholder? 가짜 데이터를 API형태로 제공하는 서버이다. 
https://jsonplaceholder.typicode.com/


### 비동기 처리

: 오래 걸리는 작업이 끝날 때까지 기다리지 않고, 다음 코드를 먼저 실행하는 방식

API요청 시 fetch함수는 대표적인 비동기 작업이다. fetch()가 서버에서 데이터를 받아오는데 시간이 걸리니까, JS는 그동안 다음 코드를 먼저 실행한다.

```jsx
console.log('fetch 시작');
fetch("https://jsonplaceholder.typicode.com/users/1/todos")
	.then((response) => response.json()) 
	.then((json) => console.log(json));
console.log('fetch 종료');
```

위 코드에서는 fetch 시작 → fetch 종료 → fetch 데이터 출력의 순서로 실행된다.

**fetch 요청을 보내고, 브라우저(Web API)가 응답을 받아오면 then 코드를 실행한다.** 브라우저(Web API)가 네트워크 요청을 처리하는 동안, JS는 다음 코드를 계속 실행한다.(Call Stack에서)

`https://jsonplaceholder.typicode.com` 에서 보내는 데이터인데, `/users/1/todos` user데이터들 중 ID가 1번인 Todo 데이터들을 말한다.

`.then((response) => response.json())`  응답이 오면, 그 JSON 데이터를 JS가 사용할 수 있는 객체(배열)의 형태로 변환

`.then((json) => console.log(json));`  변환된 데이터를 콘솔에 출력한다.

### Custom Hook 만들기

- 같은 로직이 여러 컴포넌트에서 중복되는 것을 피하기 위해 내가 직접 만든 Hook을 커스텀 훅이라고 한다. 예를 들어 여러 컴포넌트에서 useState와 useEffect를 사용해 데이터를 fetch하는 동일한 로직을 반복해서 작성해야 한다면, 이를 useFetchUser라는 커스텀 훅으로 만들어 필요할 때마다 재사용할 수 있다. 커스텀 훅의 이름은 React의 규칙에 따라 use로 시작해야 한다.
```js
import { useEffect, useState } from "react";

function useFetchUser(userId) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, [userId]);

  return todos;
}

export default useFetchUser;
```
fetch해오고 싶을 땐 `const todos = useFetchUser(1)` 이렇게 하면 된다. 

- package.json?
    : 프로젝트명, versions, depencencies(프로젝트가 의존하고 있는 라이브러리), 사용하는 scripts(npm run start 등)이 써져 있는 파일이다. 

### React Router 설치하기

1. <terminal>에 차례대로 입력한다.
    
    `npx create-vite@latest`
    
    `npm i react-router`
    
2. `main.jsx` 에 다음과 같은 코드를 추가한다. 
    
    ```jsx
    import { createBrowserRouter } from "react-router";
    import { RouterProvider } from "react-router/dom";
    
    <넣고 싶은 페이지 경로와 컴포넌트들 입력>
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },   
      {
        path: "/users/1",
        element: <User1Page />,
      },
      {
        path: "/users/2",
        element: <User2Page />,
      },      //경로(path)에 컴포넌트(elemnet) 넣겠다.
    ]);
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={router} />,
    )
    ```

  ### 회고 작성

  스터디를 하면서 모든 내용이 처음 접하는 것들이라 생소하고 어렵게 느껴졌고, 처음에는 코드를 따라 치는 것만으로도 벅찼다. 아직은 혼자 힘으로 로직을 완벽하게 구현하는 것이 어렵지만, 코드를 보면서 어떤 기능을 하는지, 왜 이 부분에 이런 코드가 사용되었는지 정도는 이전보다 이해할 수 있게 되었다.

  특히 4, 5주차에서 배운 Hook 개념은 아직 완전히 익숙하지 않고 사용하는 것도 어렵게 느껴졌다. 하지만 반복해서 코드를 직접 작성해보고 공식 문서를 참고하며 학습하다 보면 점차 익숙해질 것이라고 생각한다. 6주차에 배운 React Router를 활용한 URL 라우팅은 특히 많은 도움이 되었는데, 실제로 앞으로 웹페이지를 구현할 때 자주 활용하게 될 기능이라는 생각이 들었다.

  프론트엔드 공부뿐만 아니라 개발 자체가 처음이었던 나에게 이 스터디는 입문 과정으로 정말 좋은 경험이었다. 처음에는 개발이 막막하고 어렵게만 느껴졌지만, 스터디를 진행하면서 조금씩 흥미를 느끼게 되었다. 프론트엔드 개발을 처음 시작하는 사람들에게 충분히 추천하고 싶은 스터디였다.