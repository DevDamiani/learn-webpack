import './hello-world-button.scss'

export default class HelloWorldButton {

    buttonCssClass = 'hello-world-button'

    Render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hello World!!';

        button.classList.add(this.buttonCssClass);

        document.body.appendChild(button);

        button.onclick = () => {
            const p = document.createElement('p');
            p.innerText = 'hello world 123';
            p.classList.add('hello-world-text')
            document.body.appendChild(p);
        }
    }
}