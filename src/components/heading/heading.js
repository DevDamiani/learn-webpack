import './heading.scss'
export default class Heading{
    render(){
        const h1 = document.createElement('h1');
        h1.innerText = 'Webpack is awesome';

        document.body.appendChild(h1);
    }
}