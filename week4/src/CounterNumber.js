function CounterNumber(properties){
    function coloredNumber(){
        if(properties.count>0){
            return `rgb(${properties.count*10},0,0)`
        }
    }
    const h2Style = {
        fontsize: '30px', color: `${coloredNumber()}`
    }
    return(
        <h2 style={h2Style}>{properties.count}</h2>
    )
}
export default CounterNumber;