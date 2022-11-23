import logo from './resources/photo_5467715516857696311_m.jpg'
import basket from './resources/41d55b9f-64e0-469d-959f-507856656d45.png'
import {logoBlock, menuBlock, basketBlock} from "./classes/blocks";

export const panel = [
    new logoBlock(logo, {
        styles: {
            position: `absolute`,
            width: `auto`,
            height: `30px`,
            left: `80px`,
            top: `10px`,
        },
        alt: 'Дизайнерские украшения'
    }),
    new menuBlock([
        'Каталог',
        'Акции',
        'О нас',
        'Контакты'
    ], {
        styles: {
            position: `absolute`,
            width: `500px`,
            height: `16px`,
            left: `735px`,
            top: `20px`,
            'font-family': `Roboto`,
            'font-style': `normal`,
            color: `#32322B`,
        }
    }),
    new basketBlock(basket, {
        styles:{
            position: `absolute`,
            width: `auto`,
            height: `30px`,
            left: `1345px`,
            top: `10px`
        },
        alt: 'Корзина'
    })
]