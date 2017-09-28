'use strict';

var countBlock = 5; // количество блоков
var count = '';

start();

function start() {
    for (var a = 0; a < countBlock; a++) {
        var reverseBlock = document.getElementsByClassName('face-reverse')[a];
        count = reverseBlock.getElementsByTagName('a');
        renderLists(reverseBlock);
        removeClass(count);
    }
}

function renderLists(revers) {
    for (var b = 0; b < count.length; b++) {
        var tagURL = revers.getElementsByTagName('a')[b];

        tagURL.addEventListener('click', function (event) {
            event.preventDefault();
            removeClass(count);
            start();
            event.target.classList.add('active');
        });
    }
}

function removeClass(count) {
    for (var b = 0; b < count.length; b++) {
        count[b].classList.remove('active');
    }
}

/* Динамическое изменение */
function showContent(link) {
    var cont = document.getElementById('open-page');
    var loading = document.getElementById('loading');
    cont.innerHTML = loading.innerHTML;
    var http = createRequestObject();
    if (http) {
        http.open('get', link);
        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                cont.innerHTML = http.responseText;
            }
        };
        http.send(null);
    }
    else {
        document.location = link;
    }
}

function createRequestObject() {
    try {
        return new XMLHttpRequest();
    }
    catch (e) {
        try {
            return new ActiveXObject('Msxml2.XMLHTTP')
        }
        catch (e) {
            try {
                return new ActiveXObject('Microsoft.XMLHTTP')
            }
            catch (e) {
                return null;
            }
        }
    }
}

/* Генирируем цвета */
function renderColors() {
    var footer = document.getElementsByClassName('footer')[0];
    var colors = ['1a48a6', 'a71b3b', 'a6781a', '1ba768'];
    var randomize = Math.floor(Math.random() * colors.length);

    footer.style.background = '#' + colors[randomize];

    console.log('footer', footer);
}