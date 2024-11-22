import './copyrights.css';

// <address class="copyrights">
//   <a class="copyrights__link" href="https://github.com/Professor-Severus-Snape">© Professor-Severus-Snape, 2024</a>
// </address>
export default class Copyrights {
  constructor() {
    this.element = document.createElement('address');
    this.element.classList.add('copyrights');

    this.link = document.createElement('a');
    this.link.classList.add('copyrights__link');
    this.link.href = 'https://github.com/Professor-Severus-Snape';
    this.link.textContent = '© Professor-Severus-Snape, 2024';

    this.element.append(this.link);
  }

  checkRights() {
    if (this.element.textContent !== '© Professor-Severus-Snape, 2024') {
      // eslint-disable-next-line no-console
      console.warn('This work has been stolen from https://github.com/Professor-Severus-Snape/AHJ_trello');
    }
  }
}
