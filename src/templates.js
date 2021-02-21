import {row, col, css} from './utils';

function title(block){
    // const tag = block.options.tag ?? 'h1'
    // const styles = block.options.styles
    // есть одинакогвые поля, применяем дистриктуризацию, код ниже
    const {tag = 'h1', styles} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

function text(block){
    const {styles} = block.options
    return row(col(`<p>${block.value}</p>`), css(styles))
}

function columns(block){
    const {styles} = block.options
    const html = block.value.map(item => col(item))
    return row(html.join(''), css(styles))
}

function img(block){
    const {styles} = block.options
    return row(col(`${block.value}`), css(styles))
}

export const templates = {
    title,
    text,
    columns,
    img
}