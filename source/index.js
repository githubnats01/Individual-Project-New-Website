
const heartButton = document.getElementById('heart');
const heartButton2 = document.getElementById('heart2');
const heartButton3 = document.getElementById('heart3');
const heartButton4 = document.getElementById('heart4');
const heartButton5 = document.getElementById('heart5');
const heartButton6 = document.getElementById('heart6');
const heartButton7 = document.getElementById('heart7');
const heartButton8 = document.getElementById('heart8');
const heartButton9 = document.getElementById('heart9');

var closeButton = document.querySelector('.close-button');
var closeButton2 = document.querySelector('.close-button2');
var closeButton3 = document.querySelector('.close-button3');
var closeButton4 = document.querySelector('.close-button4');
var closeButton5 = document.querySelector('.close-button5');
var closeButton6 = document.querySelector('.close-button6');
var closeButton7 = document.querySelector('.close-button7');
var closeButton8 = document.querySelector('.close-button8');
var closeButton9 = document.querySelector('.close-button9');

var check1 = document.querySelector('.check1');
var marked1 = document.querySelector('.marked1');
var check2 = document.querySelector('.check2');
var marked2 = document.querySelector('.marked2');
var check3 = document.querySelector('.check3');
var marked3 = document.querySelector('.marked3');
var check4 = document.querySelector('.check4');
var marked4 = document.querySelector('.marked4');
var check5 = document.querySelector('.check5');
var marked5 = document.querySelector('.marked5');
var check6 = document.querySelector('.check6');
var marked6 = document.querySelector('.marked6');
var check7 = document.querySelector('.check7');
var marked7 = document.querySelector('.marked7');
var check8 = document.querySelector('.check8');
var marked8 = document.querySelector('.marked8');
var check9 = document.querySelector('.check9');
var marked9 = document.querySelector('.marked9');

var navBar = document.querySelector('.responsive-Menu');
var menuBar = document.querySelector('#menuBar')

let isLiked = false;


heartButton.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton.classList.toggle('is-liked');
});

heartButton2.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton2.classList.toggle('is-liked');
});

heartButton3.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton3.classList.toggle('is-liked');
});

heartButton4.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton4.classList.toggle('is-liked');
});

heartButton5.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton5.classList.toggle('is-liked');
});

heartButton6.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton6.classList.toggle('is-liked');
});

heartButton7.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton7.classList.toggle('is-liked');
});

heartButton8.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton8.classList.toggle('is-liked');
});

heartButton9.addEventListener('click', () => {
    isLiked = !isLiked;
    heartButton9.classList.toggle('is-liked');
});

closeButton.addEventListener('click', function() {
    closeButton.closest('div').style.display = 'none';
});

closeButton2.addEventListener('click', function() {
    closeButton2.closest('div').style.display = 'none';
});

closeButton3.addEventListener('click', function() {
    closeButton3.closest('div').style.display = 'none';
});

closeButton4.addEventListener('click', function() {
    closeButton4.closest('div').style.display = 'none';
});

closeButton5.addEventListener('click', function() {
    closeButton5.closest('div').style.display = 'none';;
});

closeButton6.addEventListener('click', function() {
    closeButton6.closest('div').style.display = 'none';
});

closeButton7.addEventListener('click', function() {
    closeButton7.closest('div').style.display = 'none';
});

closeButton8.addEventListener('click', function() {
    closeButton8.closest('div').style.display = 'none';
});

closeButton9.addEventListener('click', function() {
    closeButton9.closest('div').style.display = 'none';
});

check1.addEventListener('click', function() {
    check1.closest('div').classList.toggle('is-marked');
    marked1.classList.toggle('marked')
})

check2.addEventListener('click', function() {
    check2.closest('div').classList.toggle('is-marked');
    marked2.classList.toggle('marked')
})

check3.addEventListener('click', function() {
    check3.closest('div').classList.toggle('is-marked');
    marked3.classList.toggle('marked')
})

check4.addEventListener('click', function() {
    check4.closest('div').classList.toggle('is-marked');
    marked4.classList.toggle('marked')
})

check5.addEventListener('click', function() {
    check5.closest('div').classList.toggle('is-marked');
    marked5.classList.toggle('marked')
})

check6.addEventListener('click', function() {
    check6.closest('div').classList.toggle('is-marked');
    marked6.classList.toggle('marked')
})

check7.addEventListener('click', function() {
    check7.closest('div').classList.toggle('is-marked');
    marked7.classList.toggle('marked')
})

check8.addEventListener('click', function() {
    check8.closest('div').classList.toggle('is-marked');
    marked8.classList.toggle('marked')
})

check9.addEventListener('click', function() {
    check9.closest('div').classList.toggle('is-marked');
    marked9.classList.toggle('marked')
})


navBar.addEventListener('click', function() {
    menuBar.classList.toggle('clicked')
    navBar.classList.toggle('cliked')
    if (width >= 850){
        navBar.classList.toggle('cliked')
    }
})