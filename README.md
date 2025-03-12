<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il mio sito</title>
    <link rel="stylesheet" href="styles.css">  <!-- Collega il file CSS -->
</head>
<body>
    <h1>Benvenuti nel mio sito</h1>
    
    <h2>Seleziona un contenuto</h2>
    <ul>
        <li><a href="#" onclick="caricaContenuto('contenuto1.html')">Contenuto 1</a></li>
    </ul>

    <!-- Sezione dove verrà caricato il contenuto -->
    <div id="contenuto"></div>

    <script src="script.js"></script>  <!-- Collega il file JS -->
</body>
</html>
