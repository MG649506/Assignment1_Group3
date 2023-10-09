const createNewConverter = ({ fromUnit, toUnit }) => {
   
    let converter;
  
    switch (fromUnit) {
      case 'pound':
            if (toUnit === 'kilogram') converter = value => value * 0.454;
            break;
      case 'mile':
        if (toUnit === 'kilometer') converter = value => value * 1.609344;
        break;
      case 'celcius':
        if (toUnit === 'fahrenheit') converter = value => (value * 9/5) + 32; 
        break;
      case 'kilogram':
        if (toUnit === 'pound') converter = value => value * 2.20462262;
        break;
      case 'kilometer':
        if (toUnit === 'mile') converter = value => value * 0.621371192;
        break;
      case 'fahrenheit':
        if (toUnit === 'celcius') converter = value => (value - 32) * 5/9; 
        break;
      default:
        break;
    }
  
    return converter;
  };
  
  function convertWeight(event) {

    event.preventDefault();
    console.log('Inside convertWeight');
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const fromValue = parseFloat(document.getElementById('fromValue').value);
    
    if (!isNaN(fromValue)) {
      const converter = createNewConverter({ fromUnit, toUnit });
      if (converter) {
        const result = converter(fromValue);
        document.getElementById('conversionResult').innerText = `Conversion Result is: ${result.toFixed(2)} ${toUnit}`;
      } else {
        document.getElementById('conversionResult').innerText = '';
      }
    }
  }

  function convertDistance(event) {
    event.preventDefault();

    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const fromValue = parseFloat(document.getElementById('fromValue').value);

    if (!isNaN(fromValue)) {
        const converter = createNewConverter({ fromUnit, toUnit });
        if (converter) {
            const result = converter(fromValue);
            document.getElementById('conversionResult').innerText = `Conversion Result is: ${result.toFixed(2)} ${toUnit}`;
        } else {
            document.getElementById('conversionResult').innerText = 'Invalid conversion.';
        }
    }
}

function convertTemperature(event) {
    event.preventDefault();

    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const fromValue = parseFloat(document.getElementById('fromValue').value);

    if (!isNaN(fromValue)) {
        const converter = createNewConverter({ fromUnit, toUnit });
        if (converter) {
            const result = converter(fromValue);
            document.getElementById('conversionResult').innerText = `Conversion Result is: ${result.toFixed(1)} ${toUnit}`;
        } else {
            document.getElementById('conversionResult').innerText = 'Invalid conversion.';
        }
    }
}


  function resetForm() {
    document.getElementById('fromUnit').value = '';
    document.getElementById('toUnit').value = '';
    document.getElementById('fromValue').value = '';
    document.getElementById('conversionResult').innerText = '';
  }