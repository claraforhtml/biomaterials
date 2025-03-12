function caricaContenuto(pagina) {
    // Crea una richiesta AJAX per caricare il contenuto HTML
    fetch(pagina)
        .then(response => response.text())  // Ottieni il contenuto della pagina come testo
        .then(data => {
            document.getElementById('contenuto').innerHTML = data;  // Inserisci il contenuto nella sezione "contenuto"
        })
        .catch(error => console.error('Errore nel caricamento del contenuto:', error));
}

