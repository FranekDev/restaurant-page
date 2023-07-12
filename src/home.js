import Nav from './navbar';

const Home = () => {
    const body = document.querySelector('body');

    const home = document.createElement('div');
    home.classList.add('home');

    const title = document.createElement('h1');
    title.textContent = 'Pizzeria';

    const description = document.createElement('h2');
    description.textContent = 'Best pizza in the galaxy!';

    home.appendChild(title);
    home.appendChild(description);

    body.appendChild(home);
};

const loadHome = () => {
    Nav();
    Home();
}

export default loadHome;