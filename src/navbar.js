import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const Nav = () => {
    const content = document.querySelector('#content');
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

    content.appendChild(navBar);

    home.addEventListener('click', () => {
        content.innerHTML = '';
        loadHome();
    });

    
    menu.addEventListener('click', () => {
        content.innerHTML = '';
        loadMenu();
    });

    contact.addEventListener('click', () => {
        content.innerHTML = '';
        loadContact();
    });

};

export default Nav;