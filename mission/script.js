let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let image = document.querySelector('#byui-logo');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'light') {
        document.body.style.backgroundColor = 'white';
        image.setAttribute('src', 'images/byui-logo-blue.webp')
        document.querySelector('body').style.color = 'black'
    } 
    else if (current === 'dark') {
        document.body.style.backgroundColor = '#303030';
        image.setAttribute('src', 'images/byui-logo-dark.png')
        document.querySelector('body').style.color = 'white'
    } 
}
          