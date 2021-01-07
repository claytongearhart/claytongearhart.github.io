var x = 0; 
var cardList = document.getElementsByClassName('cardList');
var searchIn = document.getElementsByClassName('searchp');
var searchData = document.getElementById('search');
window.addEventListener('wheel', function (event) {


    if (event.deltaY > 1) {
        scrollLeft();
    };

    if (event.deltaY < 1) {
        scrollRight();
    };
});

function scrollLeft() {
    x = x + 1;
    console.log(x);
    window.scrollTo((x*100), 0);
}

function scrollRight() {
    x = x - 1;
    console.log(x);
    window.scrollTo((x*100), 0);
}

function submit(event) {
    console.log(searchData)
    console.log('Submitted');
    var data = searchData.value;
    console.log(data)
    window.location.replace("https://www.google.com/search?q=" + data);

}

