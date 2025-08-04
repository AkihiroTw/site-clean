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