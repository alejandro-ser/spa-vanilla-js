import view from '../views/home.html'

export default () => {

    const divElement = document.createElement('div');
    divElement.classList = 'text-white'
    divElement.innerHTML = view;

    const btnClick = divElement.querySelector('#btnClick');

    btnClick.addEventListener('click', () => {
        alert("Click!!")
    })

    return divElement;
}