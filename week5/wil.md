# 5주차

## 서버와 클라이언트
- API(Application Programming Interface)
    : 클라이언트와 서버 간의 데이터를 주고받는 통로 역할이다. 서로 다른 소프트웨어인 두 역할간 상호작용을 돕는 인페터이스이다.

```jsx
fetch('https://jsonplaceholder.typicode.com/users1/1/todos') //fetch는 서버 데이터를 받아오는 JS표준 API 함수
    .then((response) => response.json())
    .then((json) => console.log(json));
```

다음은 API를 받아올 수 있는 사이트이다.
https://jsonplaceholder.typicode.com/


- useEffect
    
    : 컴포넌트가 처음 화면에 나타날 때나 특정 값이 변할 때 실행할 작업을 지정하는 Hook이다. 주로 데이터 가져오기, 구독 설정 또는 타이머 설정 등의 작업에 사용된다. 
    
    useEffect는 외부의 효과를 렌더링과 분리하기 위해 존재한다. 예를 들어, API연결을 통해 데이터를 불러오고(fetch) 싶은 경우,
    
    ```jsx
    useEffect(()=> {
    	fetch('https://jsonplaceholder.typicode.com/users1/1/todos')
          .then((response) => response.json())
          .then((json) => setTodos(json));
    }, []);
    ```
    
    위 코드처럼 fetch와 같은 외부 작업은 useEffect 내부에서 실행하는 것이 적절하다. 만약 컴포넌트 함수 본문에서 직접 fetch를 호출하면 state가 업데이트(내부 로직)될 때마다 컴포넌트가 다시 렌더링되고, 그때마다 fetch가 다시 실행되어 무한 반복이 발생할 수 있다. `[]`를 의존성 배열로 넣으면 최초 렌더링 시 한 번만 실행된다.

## 리팩토링
리팩토링은 결과의 변경 없이 코드의 구조를 재조정하는 작업을 말한다. 코드를 최대한 간결하게 바꾸는 작업이다.

리액트 extensions - rfce, rafce, usss, uef

## Effect 더 공부해보기
https://ko.react.dev/learn/synchronizing-with-effects#step-2-specify-the-effect-dependencies