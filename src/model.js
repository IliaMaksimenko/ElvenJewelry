import imageTop from './resources/photo_5467715516857696313_x.jpg'
import imageRing from './resources/photo_5467715516857696309.png'
import imageLust from './resources/photo_5467715516857696317_x.jpg'
import imageLogo from './resources/photo_5467715516857696311_m.jpg'
import {
    TitleBlock,
    SubTitleBlock,
    TextBlock,
    ImageBlock,
    buttonBlock,
    imageRingBlock,
    imageLustBlock, logoBlock, sloganBlock, aboutUsBlock
} from './classes/blocks'
import {slogan, textF, textS} from "./resources/texts/text";

export const model = [
    new TitleBlock('УНИКАЛЬНЫЕ <br> ДИЗАЙНЕРСКИЕ', {
        styles: {
            position: `absolute`,
            width: `auto`,
            height: `85px`,
            left: `80px`,
            top: `190px`,
            'font-family': `EB Garamond, serif`,
            color: `#32322B`
        }
    }),
    new SubTitleBlock('Эльфийские украшения', {
        styles: {
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
    new TextBlock('Ручной работы', {
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
    new ImageBlock(imageTop, {
        styles: {
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
    new buttonBlock('Перейти в каталог', {
        styles: {
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
            'border-style': `hidden`,
            'box-shadow': `-2px 2px 10px black `,
            'text-shadow': `-1px 1px 1px white`
        }

    }),
    new imageRingBlock(imageRing, {
        styles: {
            position: `absolute`,
            width: `400.14px`,
            height: `400.14px`,
            left: `733.13px`,
            top: `509.57px`,
        }
    }),
    new imageLustBlock(imageLust, {
        styles: {
            position: `absolute`,
            width: `auto`,
            height: `700.69px`,
            left: `80px`,
            top: `1055.31px`
        }
    }),
    new logoBlock(imageLogo, {
        styles: {
            position: `absolute`,
            width: `250px`,
            height: `59px`,
            left: `800px`,
            top: `1167px`
        }
    }),
    new sloganBlock(slogan(), {
        styles:{
            position: `absolute`,
            width: `494px`,
            height: `118px`,
            left: `800px`,
            top: `1235px`
        }
    }),
    new aboutUsBlock(textF(), {
        styles:{
            position: `absolute`,
            width: `570px`,
            height: `54px`,
            left: `800px`,
            top: `1390px`,
        }
    }),
    new aboutUsBlock(textS(), {
        styles:{
            position: `absolute`,
            width: `532px`,
            height: `108px`,
            left: `800px`,
            top: `1464px`,
            'font-weight': `300`
        }
    })


]