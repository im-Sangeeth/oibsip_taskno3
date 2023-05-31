function convert(type) {
    if (type === 'celsius') {
      var celsius = document.getElementById('celsius').value;
      var fahrenheit = celsius * 9 / 5 + 32;
      document.getElementById('fahrenheit').value = fahrenheit;
    } else if (type === 'fahrenheit') {
      var fahrenheit = document.getElementById('fahrenheit').value;
      var celsius = (fahrenheit - 32) * 5 / 9;
      document.getElementById('celsius').value = celsius;
    }
  }
  