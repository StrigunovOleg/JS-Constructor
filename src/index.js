import './styles/style.css';
import {model} from './model';
import {Site} from './classes/site';
import {Sidebar} from "./classes/sidebar";
import {App} from "./classes/app";

new App(model).init()