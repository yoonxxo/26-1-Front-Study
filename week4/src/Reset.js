
function Reset(properties){
    return (
        
        <div>
            <button onClick={() => properties.setCount(0)}>reset</button> 
        </div>
    )
}

export default Reset;