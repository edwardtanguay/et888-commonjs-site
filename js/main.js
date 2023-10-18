import { sentencize, replaceAll } from './tools.js';
import Header from '../components/Header.js';

document.querySelector('#app').innerHTML = `
${Header()}
	<p class="message">Welcome to this ES6 JavaScript module site.</p>
	<button class="btnInfo">Info</button>
`; 

const btnInfoElem = document.querySelector('.btnInfo');

btnInfoElem.addEventListener('click', () => {
	const messageElem = document.querySelector('.message');
	messageElem.innerText = sentencize(replaceAll('this is a test and it is a good test', 'test', 'example'));
});