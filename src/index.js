import {model} from './model';
import './styles/main.css'
import {Site} from './classes/site'
import {Topbar} from './classes/topbar';
import {panel} from './panel';


const site = new Site('#site')
site.render(model)

const topbar = new Topbar('#menu')
topbar.render(panel)

const button = document.querySelector('#button');
button.addEventListener('click', function (){
    document.location.href = "https://vk.com/maxanart"
})