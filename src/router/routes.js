import {pages} from '../controllers/index'

let content = document.getElementById('root');

const router = async (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/': {
            return content.appendChild(pages.home());
        }
        case '#/products':
            return console.log('Product!!')
        case '#/posts':
            return content.appendChild(await pages.posts())
        default:
            return console.log('404!!')
    }
}

export {router};