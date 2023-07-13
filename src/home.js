import Nav from './navbar';
import Footer from './footer';

const Home = () => {
    const content = document.querySelector('#content');

    const home = document.createElement('div');
    home.classList.add('home');

    const title = document.createElement('h1');
    title.textContent = 'Pizzeria';

    const description = document.createElement('h2');
    description.textContent = 'Best pizza in the galaxy!';

    home.appendChild(title);
    home.appendChild(description);

    content.appendChild(home);
};

const loadHome = () => {
    Nav();
    Home();
    Footer();
}

export default loadHome;