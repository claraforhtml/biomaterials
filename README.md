<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il Mio Sito</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .sottotitoli {
            display: flex;
            gap: 20px;
        }
        .sottotitolo {
            cursor: pointer;
            color: blue;
        }
        .sottotitolo:hover {
            text-decoration: underline;
        }
        section {
            margin-top: 30px;
        }
    </style>
</head>
<body>

    <h1>Benvenuto nel mio sito!</h1>

    <div class="sottotitoli">
        <a href="#sezione1" class="sottotitolo">Sezione 1</a>
        <a href="#sezione2" class="sottotitolo">Sezione 2</a>
        <a href="#sezione3" class="sottotitolo">Sezione 3</a>
    </div>

    <section id="sezione1">
        <h2>Sezione 1</h2>
        <p>Contenuto della sezione 1...</p>
    </section>

    <section id="sezione2">
        <h2>Sezione 2</h2>
        <p>Contenuto della sezione 2...</p>
    </section>

    <section id="sezione3">
        <h2>Sezione 3</h2>
        <p>Contenuto della sezione 3...</p>
    </section>

</body>
</html>
