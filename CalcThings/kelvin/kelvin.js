function somar() {
    var tc = parseFloat(document.getElementById("tc").value);
    var result = document.querySelector("#result");
    var tc = tc + 273.15;
    document.getElementById('result').innerHTML = 'result' + result;
  
      result.innerHTML = `
      <p>Valor Total: K°${tc}</p>
      `;
  }