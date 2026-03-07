import brandLogo from '../assets/images/brand-logo.png';
import bannerTextHoverOne from '../assets/images/hoverImageOne.webp';
import bannerTextHoverTwo from '../assets/images/hoverImageTwo.webp';
import bannerTextHoverThree from '../assets/images/hoverImageThree.webp';
import bannerTextHoverFour from '../assets/images/hoverImageFour.webp';
import stripeOne from '../assets/images/stripeIconOne.svg';
import stripeTwo from '../assets/images/stripeIconTwo.svg';
import stripeThird from '../assets/images/stripeIconThird.svg';
const assets = {
    brandLogo,
}
export const hoverEffectImg = [
    { url: bannerTextHoverOne, top: '2%', left: '45%', isActive: true },
    { url: bannerTextHoverTwo, top: '15%', left: '48%', isActive: false },
    { url: bannerTextHoverThree, top: '24%', left: '40%', isActive: false },
    { url: bannerTextHoverFour, top: '30%', left: '52%', isActive: false },
]

export const stripeData = [
    {
        url: stripeOne,
        number: 48
    },
    {
        url: stripeTwo,
        number: 2
    },
    {
        url: stripeThird,
        number: 11
    },
    {
        url: stripeOne,
        number: 48
    },
    {
        url: stripeTwo,
        number: 2
    },
    {
        url: stripeThird,
        number: 11
    },

]

export const productData = [
    {
        name: 'Arqitel',
        para: 'With a continuos 3D animation, we showcase Arqitel approach and slow how migration data translates into real estate.',
        live: true,
        case: false,
    },
    {
        name: 'Ttr',
        para: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
        live: true,
        case: false,
    },
    {
        name: 'Yir 2022',
        para: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
        live: true,
        case: false,
    },
    {
        name: 'Yahoo!',
        para: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
        live: true,
        case: true,
    },
    {
        name: 'Rainfall',
        para: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their learn to update content regularly and with ease.",
        live: true,
        case: true,
    },
    {
        name: 'Jungle',
        para: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web designs and empowered their marketing team to scale organically using Webflow.",
        live: true,
        case: true,
    },
]
export default assets;