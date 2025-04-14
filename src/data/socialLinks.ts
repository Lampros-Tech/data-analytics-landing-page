import twitter from '../assets/images/socialmedia/twitter.svg'
import linkedin from '../assets/images/socialmedia/linkedin.svg'
import insta from '../assets/images/socialmedia/insta.svg'
import vector from '../assets/images/socialmedia/Vector.svg'

interface SocialLink {
    name: string;
    href: string;
    icon: string;
}

const socialLinks: SocialLink[] = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/lampros.tech/',
        icon: insta
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/lampros-tech?originalSubdomain=in',
        icon: linkedin
    },
    {
        name: 'Twitter',
        href: 'https://x.com/Lampros_Tech',
        icon: twitter
    },
    {
        name: 'Behance',
        href: 'https://www.behance.net/lamprostech5',
        icon: vector
    }
];

export default socialLinks; 