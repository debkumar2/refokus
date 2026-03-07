import brandLogo from '../assets/images/brand-logo.png';
import bannerTextHoverOne from '../assets/images/hoverImageOne.webp';
import bannerTextHoverTwo from '../assets/images/hoverImageTwo.webp';
import bannerTextHoverThree from '../assets/images/hoverImageThree.webp';
import bannerTextHoverFour from '../assets/images/hoverImageFour.webp';

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
        url: '',
        number: 48
    },
    {
        url: '',
        number: 2
    },
    {
        url: '',
        number: 11
    },
    {
        url: '',
        number: 48
    },
    {
        url: '',
        number: 2
    },
    {
        url: '',
        number: 11
    },

]
export default assets;