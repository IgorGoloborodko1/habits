import './styles.scss';

function sayHello(): void {
  const body = document.querySelector('body');
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello, World!';
  body.appendChild(h1);
}

sayHello();

module.exports = sayHello;