function sim() {
    const overlay = document.createElement('div');
    overlay.id = 'video-overlay';
    const newLocal = `
        <div id="video-container">
            <video width="100%" height="100%" controls autoplay>
                <source src="eu-mandei-voce-deitar.mp3" type="video/mp3">
               
            </video>
            <button id="close-btn">X</button>
        </div>
    `;
    overlay.innerHTML = newLocal;
    document.body.appendChild(overlay);

    document.getElementById('close-btn').onclick = function() {
        document.body.removeChild(overlay);
    };
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
body {
    background-color: #8025f8;
    margin: 0;
    font-family: "Arial", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
}

#container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

#botoes {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

h2 {
    color: #0400ff;
    font-size: clamp(2rem, 5vw, 4rem);
    margin-bottom: 1rem;
    text-shadow: 2px 2px 10px rgba(163, 178, 245, 0.8);
}

button {
    color: white;
    background: linear-gradient(to right, #615785, #2f11db, #2d0edb);
    border: none;
    cursor: pointer;
    font-size: clamp(1rem, 3vw, 2rem);
    font-weight: bold;
    border-radius: 0.75rem;
    padding: 1rem 2rem;
    text-align: center;
    transition: background 0.3s, transform 0.2s;
    width: auto;
    min-width: 150px;
}

button:hover {
    background: linear-gradient(to bottom right, #f87171, #ef4444, #dc2626);
    transform: scale(1.05);
}

button:focus {
    outline: none;
    box-shadow: 0 0 0 0.25rem rgba(239, 68, 68, 0.5);
}

@media (max-width: 500px) {
    #botoes {
        flex-direction: row;
        flex-wrap: wrap;
    }

    button {
        font-size: clamp(1.5rem, 6vw, 3rem);
        padding: 1.5rem 3rem;
        min-width: 120px;
    }
}

#video-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

#video-container {
    position: relative;
    width: 80%;
    max-width: 800px;
    background: #000;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

#close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff4d4d;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    font-size: 1rem;
}
<!DOCTYPE html>
<html>

<head>
    <title>Naomi❤️</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>

    <div id="container">
        <div>
            <h2>vamos fazer uma aposta se vc conseguir clicar no nao vc ganha,do contrario quero sua buceta❤️ </h2>
        </div>
        <div>
            <button id="button1" onclick="sim()">Sim</button>
            <button id="button2" onclick="desvia(this)" onmouseover="desvia(this)">Nao</button>
        </div>
    </div>

    <script src="scripts.js"></script>
</body>

</html>
