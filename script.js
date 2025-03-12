// Quando il DOM è pronto, eseguiamo una funzione.
document.addEventListener('DOMContentLoaded', function() {
    console.log("Il sito è pronto!");

    // Aggiungi un listener a tutte le ancore
    const links = document.querySelectorAll('.sottotitolo');
    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log("Sei stato indirizzato a: " + this.href);
        });
    });
});
