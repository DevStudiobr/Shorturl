document.getElementById('shorten').addEventListener('click', () => {
    const url = document.getElementById('url').value;
    const apiUrl = `https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.shortlink) {
                document.getElementById('result').innerHTML = `
                    <p>Link Encurtado: <a href="${data.shortlink}" target="_blank">${data.shortlink}</a></p>
                `;
            } else {
                document.getElementById('result').innerHTML = `<p>Erro ao encurtar o link.</p>`;
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<p>Erro: ${error.message}</p>`;
        });
});