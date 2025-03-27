function somar() {
    var tftok = parseFloat(document.getElementById("tftok").value);
    var result = document.querySelector("#result");
    var tftok = (tftok - 32) * 5 / 9 + 273.15;
    document.getElementById('result').innerHTML = 'result' + result;

      result.innerHTML = `
      <p>Valor Total: K°${tftok}</p>
      `;
  }