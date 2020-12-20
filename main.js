let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/pikachu.png') {
      myImage.setAttribute('src', 'images/pikachu(2).png');
    } 
    if (mySrc === 'images/pikachu(2).png') {
        myImage.setAttribute('src', 'images/pikachu(3).png');
    }
    if (mySrc === 'images/pikachu(3).png') {
        myImage.setAttribute('src', 'images/pikachu.png');
    }
});
