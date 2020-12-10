import { post } from 'jquery';
import { pages } from '../controllers/index';

const content = document.querySelector('#root');

const router = async (route) => {
    content.innerHTML = '';
    switch(route) {
        case '#/': {
            return content.appendChild(pages.home());
        }
        case '': {
            return content.appendChild(pages.home());
        }
        case '#/posts':
            return content.appendChild(await pages.posts());
        case '#/pagina2':
            return console.log("page2 works!");
        default:
            return content.appendChild(pages.notFound());
        
    }

}

export { router };