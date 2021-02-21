import './styles/style.css';
import {model} from './model';
import {Site} from './classes/site';
import {Sidebar} from "./classes/sidebar";

const site = new Site ('#site')

site.render(model)

const updateCallback = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel', updateCallback)