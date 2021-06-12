var images = document.querySelectorAll('img');
var imgArray = Array.from(images);

var nomes = document.querySelectorAll('p');
var nomeArray = Array.from(nomes);

const button = document.querySelector('button');

const numeroMaximoDePersonagens = 671;

generateNumbers = () => {
    var numbers = [];

    while(numbers.length < 4){
        var n = Math.floor(Math.random() * numeroMaximoDePersonagens) + 1;
        if(numbers.indexOf(n) === -1) numbers.push(n);
    }
    return numbers;
}

getCharacter = () => {
    var id = generateNumbers();

    return fetch(`https://rickandmortyapi.com/api/character/${id[0]},${id[1]},${id[2]},${id[3]}`, {
        method: 'GET',
        headers: {
                Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data => {
        for (let i = 0; i < data.length; i++) {
            imgArray[i].src = data[i].image;
            nomeArray[i].innerHTML = data[i].name;
        }
    }))
}

window.onload = getCharacter;
button.onclick = getCharacter;