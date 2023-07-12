import loadHome from './home';
import Menu from './menu';
import Contact from './contact';
import Footer from './footer';

const Nav = () => {
    const body = document.querySelector('body');
    const navBar = document.createElement('nav');
    navBar.classList.add('nav-bar');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    navBar.appendChild(home);
    navBar.appendChild(menu);
    navBar.appendChild(contact);

    body.appendChild(navBar);

    home.addEventListener('click', () => {
        body.innerHTML = "";
        loadHome();
        Footer();
    });

    
    menu.addEventListener('click', () => {
        body.innerHTML = "";
        Nav();
        Menu();
        Footer();
    });

    contact.addEventListener('click', () => {
        body.innerHTML = "";
        Nav();
        Contact();
    });

};

export default Nav;