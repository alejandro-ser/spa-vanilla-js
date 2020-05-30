import Home from './home.controller'
import Posts from './posts.controller'
import Products from './products.controller'
import notFound from './404.controller'

const pages = {
    home: Home,
    posts: Posts,
    products: Products,
    notFound: notFound
}

export {pages};