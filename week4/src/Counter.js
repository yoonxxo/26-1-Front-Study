import {useState} from 'react';
import CounterNumber from './CounterNumber';
import Reset from './Reset';

function Counter() {
    const [count, setCount] = useState(0);

    function tenincreasement() {
        setCount(count + 10);
    }
    function increment() {
        setCount(count + 1);
    }
    function decreasement() {
        setCount(count - 1);
    }
    function tendecreasement() {
        setCount(count - 10);
    }

    return (
        <div>
            <h2>{count}</h2>
            <CounterNumber count = {count} />
            <button onClick={tenincreasement}>+10</button>  
            <button onClick={increment}>+1</button>
            <Reset setCount={setCount} /> 
            <button onClick={decreasement}>-1</button>
            <button onClick={tendecreasement}>-10</button>
            
        </div>
    )
}

export default Counter;