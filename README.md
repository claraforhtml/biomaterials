<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il Mio Sito Web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        h1 {
            color: #333;
            font-size: 3em;
        }
        .menu {
            margin-top: 20px;
        }
        .menu a {
            display: block;
            font-size: 1.5em;
            color: #007bff;
            text-decoration: none;
            margin: 10px 0;
        }
        .menu a:hover {
            text-decoration: underline;
        }
        .content {
            display: none;
            margin-top: 20px;
        }
        .active {
            display: block;
        }
    </style>
    <script>
        function showPage(pageId) {
            document.querySelectorAll('.content').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
        }
    </script>
</head>
<body>
    <h1>Benvenuto nel Mio Sito!</h1>
    <div class="menu">
        <a href="#" onclick="showPage('pagina1')">Pagina 1 - Guarda il Video</a>
        <a href="#" onclick="showPage('pagina2')">Pagina 2</a>
        <a href="#" onclick="showPage('pagina3')">Pagina 3</a>
    </div>
    
    <div id="pagina1" class="content">
        <h2>Pagina 1</h2>
        <video controls width="600">
            <source src="video.mp4" type="video/mp4">
            Il tuo browser non supporta il tag video.
        </video>
    </div>
    
    <div id="pagina2" class="content">
        <h2>Pagina 2</h2>
        <p>Contenuto della Pagina 2.</p>
    </div>
    
    <div id="pagina3" class="content">
        <h2>Pagina 3</h2>
        <p>Contenuto della Pagina 3.</p>
    </div>
</body>
</html>
