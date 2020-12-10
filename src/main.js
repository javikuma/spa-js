// jquery
// import $ from "jquery";
// bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap JS
import 'bootstrap';
// estilos propios
import './main.css';

import { router } from './routes/index.routes';

router(window.location.hash);
window.addEventListener('hashchange', ()=> {
    router(window.location.hash);
});