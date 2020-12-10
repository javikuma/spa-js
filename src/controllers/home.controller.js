import views from '../views/home.html';

export default () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    const btnCLick = divElement.querySelector('#btnClick');
    btnCLick.addEventListener('click', ()=> {
        alert('clickeado');
    })

    return divElement;
}