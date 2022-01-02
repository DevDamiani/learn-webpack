import kiwi from './kiwi.jpg';
import './kiwi-image.scss';

export default class KiwiImage{
    render(){
        const img = document.createElement('img');
        img.src = kiwi;
        img.alt = 'kiwi';
        img.classList.add('kiwi-image');

        document.body.appendChild(img);
    }
}