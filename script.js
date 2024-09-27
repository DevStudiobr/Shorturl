document.getElementById('shorten-form').addEventListener('submit', async function (e) {
  e.preventDefault();  // Evita o envio do formulário

  const url = document.getElementById('url-input').value;
  const resultDiv = document.getElementById('result');

  // Envia o URL para o servidor Python e recebe o link encurtado
  const response = await fetch('/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ original_url: url })
  });

  const data = await response.json();

  // Exibe o link encurtado na página
  if (data.short_url) {
    resultDiv.innerHTML = `<p>Seu link encurtado: <a href="${data.short_url}" target="_blank">${data.short_url}</a></p>`;
  } else {
    resultDiv.innerHTML = `<p>Erro ao encurtar o link. Tente novamente!</p>`;
  }
});