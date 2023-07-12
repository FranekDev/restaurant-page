const Footer = () => {
    const body = document.querySelector('body');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const span = document.createElement('span');
    span.textContent = 'Created by FranekDev';
    footer.appendChild(span);

    const a = document.createElement('a');
    const gitHubLink = document.createTextNode('GitHub');
    a.href = 'https://github.com/FranekDev/restaurant-page';
    a.appendChild(gitHubLink);

    footer.appendChild(a);

    body.appendChild(footer);
};

export default Footer;