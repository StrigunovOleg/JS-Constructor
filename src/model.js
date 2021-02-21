import {TitleBlock, TextBlock, ColumnsBlock, ImgBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'Hello JS', {
        tag: 'h2', styles: {
            color: 'red',
            background: 'grey'
        }
    })
    ,
    new TextBlock('TExtxtxtxtx xtxtxtxt xtxtxtxtx', {
        styles: {
            color: 'red',
            background: 'grey'
        }
    }),

    new ColumnsBlock([
        '111111111111111111',
        '22222222222222222',
        '333423423432424'
    ],{
        styles: {
            color: 'red',
            background: 'grey'
        }
    }),

   new ImgBlock('Картинка', {
       styles: {
           width: '100px',
           height: '100px',
           padding: '10px',
           background: 'green'
       }
   })

]