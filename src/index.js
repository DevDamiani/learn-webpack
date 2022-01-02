
import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js'

const helloWorld = new HelloWorldButton();
const heading = new Heading();
heading.render();
helloWorld.Render();


helloWorld.awreawea();

if (process.env.NODE_ENV === 'production') {
    console.log('mode: production');
} else if (process.env.NODE_ENV === 'development') {
    console.log('mode: development');
}