import Nav from './navbar';
import Footer from './footer';

const Menu = () => {
    const content = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(addToMenu('Pizza', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero ipsum, pellentesque nec rutrum sed, viverra sit amet augue. Ut dolor quam, pulvinar sed odio at, sodales bibendum dolor. Morbi et iaculis augue. In malesuada pharetra risus at tempor. Curabitur aliquet risus ut mollis porttitor. Pellentesque vel malesuada metus, a fringilla eros. Curabitur at est rutrum, commodo nunc non, dapibus sem. Etiam id lorem elit. Morbi urna ex, dapibus eget lacus at, laoreet rutrum nibh. Maecenas sed turpis augue. Donec a dolor sit amet tortor consectetur tincidunt. Fusce eget erat in felis condimentum ultricies.'));
    menu.appendChild(addToMenu('Burger', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero ipsum, pellentesque nec rutrum sed, viverra sit amet augue. Ut dolor quam, pulvinar sed odio at, sodales bibendum dolor. Morbi et iaculis augue. In malesuada pharetra risus at tempor. Curabitur aliquet risus ut mollis porttitor. Pellentesque vel malesuada metus, a fringilla eros. Curabitur at est rutrum, commodo nunc non, dapibus sem. Etiam id lorem elit. Morbi urna ex, dapibus eget lacus at, laoreet rutrum nibh. Maecenas sed turpis augue. Donec a dolor sit amet tortor consectetur tincidunt. Fusce eget erat in felis condimentum ultricies.'));
    menu.appendChild(addToMenu('Fries', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero ipsum, pellentesque nec rutrum sed, viverra sit amet augue. Ut dolor quam, pulvinar sed odio at, sodales bibendum dolor. Morbi et iaculis augue. In malesuada pharetra risus at tempor. Curabitur aliquet risus ut mollis porttitor. Pellentesque vel malesuada metus, a fringilla eros. Curabitur at est rutrum, commodo nunc non, dapibus sem. Etiam id lorem elit. Morbi urna ex, dapibus eget lacus at, laoreet rutrum nibh. Maecenas sed turpis augue. Donec a dolor sit amet tortor consectetur tincidunt. Fusce eget erat in felis condimentum ultricies.'));

    content.appendChild(menu);
};

const addToMenu = (title, description) => {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const itemTitle = document.createElement('h2');
    const itemDescription = document.createElement('p');

    itemTitle.textContent = title;
    itemDescription.textContent = description;

    item.appendChild(itemTitle);
    item.appendChild(itemDescription);

    return item;
};

const loadMenu = () => {
    Nav();
    Menu();
    Footer();
};

export default loadMenu;