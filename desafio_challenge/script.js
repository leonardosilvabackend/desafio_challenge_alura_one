document.getElementById('botaoCriptografar').addEventListener('click', function() {
  let areaDeTexto = document.getElementById('areaDeTexto').value;
  let textoCriptografado = criptografarTexto(areaDeTexto);
  document.getElementById('textoSaida').innerText = textoCriptografado;
  document.getElementById('mensagemPadrao').style.display = 'none';
});

document.getElementById('botaoDescriptografar').addEventListener('click', function() {
  let areaDeTexto = document.getElementById('areaDeTexto').value;
  let textoDescriptografado = descriptografarTexto(areaDeTexto);
  document.getElementById('textoSaida').innerText = textoDescriptografado;
  document.getElementById('mensagemPadrao').style.display = 'none';
});

document.getElementById('botaoCopiar').addEventListener('click', function() {
  let textoSaida = document.getElementById('textoSaida').innerText;
  navigator.clipboard.writeText(textoSaida).then(() => {
    alert('Texto copiado para a área de transferência');
  });
});

document.getElementById('botaoLimpar').addEventListener('click', function() {
  document.getElementById('areaDeTexto').value='';
  document.getElementById('textoSaida').innerText='Nenhuma mensagem encontrada';
  document.getElementById('mensagemPadrao').style.display = 'block';
  });

  function criptografarTexto(texto) {
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoCriptografado;
  }
  
  function descriptografarTexto(texto) {
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDescriptografado;
  }
  