let noButtonEnabled = true;

function changeGif(gifName) {
    if (noButtonEnabled) {
        document.getElementById('gif').src = '../img/McQueen.gif';
    }
}


function changeButtonPosition() {
    if (noButtonEnabled) {
        const noButton = document.getElementById('noButton');
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noButton.style.position = 'absolute';
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';

        // İlk kez gelindiğinde üzgün.gif olarak değiştir
        noButtonEnabled = true;
        document.getElementById('gif').src = '../img/sad mcqueen.jpg';

        setTimeout(() => {
            noButtonEnabled = true;
        }, 1);
    }
}

function resetGif() {
    noButtonEnabled = true;
    document.getElementById('gif').src = '../img/McQueen.gif';
}

function sayHastaLaVista() {
    var h1Elementi = document.getElementById("baslik");
            var yeniMetin = "KAAAÇÇÇOOOVVVV";
            h1Elementi.innerHTML = yeniMetin;
            document.getElementById('gif').src = '../img/giphy.gif';
}
