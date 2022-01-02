import './heading.scss'
export default class Heading{
    render(pagename){
        const h1 = document.createElement('h1');
        h1.innerText = 'Webpack is awesome; Page:' + pagename;

        document.body.appendChild(h1);
    }
}