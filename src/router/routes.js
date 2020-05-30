import Home from '../controllers/index.controller'

let content = document.getElementById('root');

const router = (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/': {
            return content.appendChild(Home());
        }
        case '#/products':
            return console.log('Product!!')
        case '#/posts':
            return console.log('Post!!')
        default:
            return console.log('404!!')
    }
}

export {router};