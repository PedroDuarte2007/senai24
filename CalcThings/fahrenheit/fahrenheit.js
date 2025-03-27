function somar() {
    var tf = parseFloat(document.getElementById("tf").value);
    var result = document.querySelector("#result");
    var tf = tf * 1.8 + 32;
    document.getElementById('result').innerHTML = 'result' + result;
  
      result.innerHTML = `
      <p>Valor Total: F°${tf}</p>
      `;
  }