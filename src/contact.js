import Nav from './navbar';
import Footer from './footer';

const Contact = () => {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phone = document.createElement('p');
    const email = document.createElement('p');
    const address = document.createElement('p');

    phone.textContent = 'Phone: 123-456-7890';
    email.textContent = 'Email: email@email.email';
    address.textContent = 'Address: 1234 Street St. City, State 12345';

    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(address);

    content.appendChild(contact);
};

const loadContact = () => {
    Nav();
    Contact();
    Footer();
};

export default loadContact;