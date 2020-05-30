import {pages} from '../controllers/index'

let content = document.getElementById('root');

const activeLink = (page) => {
    let nav = document.querySelector("#navbarNav ul");

    Array.prototype.map.call(nav.children, (n) => {
        n.classList.remove('active')
    })

    if (page === 'products') {
        nav.firstElementChild.classList.add('active')
    } else if (page === 'posts') {
        nav.lastElementChild.classList.add('active')
    }
};

const router = async (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/':
            activeLink('')
            return content.appendChild(pages.home())
        case '#/products':
            activeLink('products')
            return content.appendChild(await pages.products())
        case '#/posts':
            activeLink('posts')
            return content.appendChild(await pages.posts())
        default:
            activeLink('')
            return content.appendChild(pages.notFound())
    }
}

export {router};