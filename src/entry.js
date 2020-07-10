import './main.scss';
import 'bootstrap';
import NAACPSeal from './images/naacp-seal.png';

function naacpSeal() {
  const element = document.getElementById('seal');

  const seal = new Image();
  seal.src = NAACPSeal;
  seal.setAttribute('class', 'img-fluid');
  seal.setAttribute('alt', 'NAACP Official Seal');

  element.appendChild(seal);
  return element;
}

naacpSeal();