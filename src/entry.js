import './main.scss';
import NAACPSeal from './images/naacp-seal-small.png';
import Logo from './images/black-is-beautiful-logo-small.png';
import donationButton from './images/donate-button-small.png';

function addSeal() {
  const element = document.getElementById('seal');

  const seal = new Image();
  seal.src = NAACPSeal;
  seal.setAttribute('class', 'img-fluid');
  seal.setAttribute('alt', 'NAACP Official Seal');

  element.appendChild(seal);
  return element;
}

function addLogo() {
  const element = document.getElementById('logo');

  const logo = new Image();
  logo.src = Logo;
  logo.setAttribute('class', 'img-fluid');
  logo.setAttribute('alt', 'Black Is Beautiful Logo');

  element.appendChild(logo);
  return element;
}

function addDonationButton() {
  const element = document.getElementById('donate');

  const donateButton = new Image();
  donateButton.src = donationButton;
  donateButton.setAttribute('class', 'img-fluid');
  donateButton.setAttribute('alt', 'Donation Button');

  element.appendChild(donateButton);
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  addSeal();
  addLogo();
  addDonationButton();
});