import image from './resources/photo_5467715516857696313_x.jpg'
import {TitleBlock, SubTitleBlock, TextBlock, ImageBlock, buttonBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'УНИКАЛЬНЫЕ <br> ДИЗАЙНЕРСКИЕ', {
        styles:{
            position: `absolute`,
            width: `auto`,
            height: `85px`,
            left: `80px`,
            top: `190px`,
            'font-family': `EB Garamond, serif`,
            color: `#32322B`
        }
    }),
    new SubTitleBlock( 'Эльфийские украшения', {
        styles:{
            position: `absolute`,
            width: `auto`,
            height: `85px`,
            left: `80px`,
            top: `367px`,
            'font-family': `EB Garamond, serif`,
            'font-style': `italic`,
            color: `#8F7858`
        }
    }),
    new TextBlock( 'Ручной работы', {
        styles: {
            position: `absolute`,
            width: `auto`,
            height: `27px`,
            left: `575px`,
            top: `459px`,
            'font-family': `Roboto`,
            'font-style': `normal`,
            color: `#32322B`
        }
    }),
    new ImageBlock( image, {
        styles:{
            position: `absolute`,
            width: `478px`,
            height: `626px`,
            left: `892px`,
            top: `125px`,
            'border-radius': `100px 0px 0px 0px`,
            color: `#32322B`
        },
        alt: `Уникальные дизайнерские украшения ручной работы`
    }),
    new buttonBlock( 'Перейти в каталог', {
        styles:{
            position: `absolute`,
            width: `350px`,
            height: `100px`,
            left: `80px`,
            top: `599px`,
            'font-family': `Roboto, serif`,
            'font-weight': `400`,
            'font-size': `23px`,
            'line-height': `27px`,
            'text-align': `center`,
            background: `#A68F6F`,
            'border-radius': `30px`,
            color: `#EDEAE1`,
            'border-style': `hidden`
        }

    })




]