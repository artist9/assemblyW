import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';

function component(text) {
	const element = document.createElement('h1');
	element.textContent = text;
	return element;
}
document.body.prepend(component('Проект собран на Webpack'));

const root = createRoot(document.getElementById('root'));
root.render(<App />);
