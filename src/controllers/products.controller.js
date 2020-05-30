import view from '../views/products.html'

const getProducts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    return await response.json();
}

export default async () => {
    const divElement = document.createElement('div')
    divElement.innerHTML = view;

    const productElement =  divElement.querySelector("#products")
    let totalProdcts = divElement.querySelector('#total')

    const products = await getProducts();
    totalProdcts.innerHTML = products.length;

    products.forEach(post => {
        productElement.innerHTML += `
            <div class="col mb-4">
                <div class="card text-white bg-dark h-100">
                    <div class="card-header text-capitalize">${post.name}</div>
                    <div class="card-body">
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            </div>
        `
    });

    return divElement;
}