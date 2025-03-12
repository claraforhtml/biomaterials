function caricaContenuto(event, pagina) {
    event.preventDefault();  // Impedisce il comportamento predefinito di navigazione

    // Crea una richiesta AJAX per caricare il contenuto HTML
    fetch(pagina)
        .then(response => response.text())  // Ottieni il contenuto della pagina come testo
        .then(data => {
            document.getElementById('contenuto').innerHTML = data;  // Inserisci il contenuto nella sezione "contenuto"
            document.getElementById('backButton').style.display = 'inline';  // Mostra il bottone per tornare indietro
        })
        .catch(error => console.error('Errore nel caricamento del contenuto:', error));
}

// Funzione per tornare alla pagina principale
function tornaAllaPaginaPrincipale() {
    document.getElementById('contenuto').innerHTML = '';  // Rimuovi il contenuto caricato
    document.getElementById('backButton').style.display = 'none';  // Nascondi il bottone di ritorno
}
