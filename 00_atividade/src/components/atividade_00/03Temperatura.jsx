const Temperatura = (props) => {
    const {celsius, fahrenheit, kelvinTemp} = props

    function celsiusParaFahrenheit(c){
        return (c * 9) / 5 + 32; 
    }

    function fahrenheitParaCelsius(f){
        return ((f -  32) * 5) / 9;

    }

    function kelvinParaCelsius(k){
        return k - 273.15;

    }

    function kelvinParaFahrenheit(k){
        return 1.8 * k - 459.67
    }

    function kelvin(k){
        return {celsius:kelvinParaCelsius(k),fahrenheit: kelvinParaFahrenheit(k)}

    }

    
    return(
        <div>
            <h1>{celsius} graus Celsius em Fahrenheit: {celsiusParaFahrenheit(celsius)}</h1>
            <h1>{fahrenheit} graus Fahrenheit em Celsius: {fahrenheitParaCelsius(fahrenheit)} </h1>
            <h1>{kelvinTemp} graus Kelvin em Celsius: {kelvin(kelvinTemp).celsius}</h1>
            <h1>{kelvinTemp} graus Kelvin em Fahrenheit: {kelvin(kelvinTemp).fahrenheit}</h1>
        </div>
    );
}


export default Temperatura;