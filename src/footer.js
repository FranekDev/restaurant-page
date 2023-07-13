const Footer = () => {
    const content = document.querySelector('#content');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const span = document.createElement('span');
    span.textContent = 'Created by FranekDev ';
    footer.appendChild(span);

    const a = document.createElement('a');
    a.classList.add('github_link');
    const gitHubLink = document.createTextNode('GitHub');
    a.href = 'https://github.com/FranekDev/restaurant-page';
    a.target = '_blank';
    a.appendChild(gitHubLink);

    footer.appendChild(a);

    content.appendChild(footer);
};

export default Footer;