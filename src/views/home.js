export default () => {
    const view = `
        <h1>Hello world</h1>
        <p>Hello world with javascript router</p>
    `;

    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}