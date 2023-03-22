const team = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
        key: '_1'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
        key: '_2'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
        key: '_3'
    },
    {
        name: 'Angela',
        surname: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
        key: '_4'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
        key: '_5'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
        key: '_6'
    },
];

const app = document.getElementById('app');
app.append(createChild('div', 'rowApp', [
    'row', 
    'row-cols-1',
    'row-cols-md-2', 
    'row-cols-lg-3', 
    'g-2', 
    'g-lg-3', 
    'px-3'
], ''));

const rowApp = document.getElementById('rowApp');

team.forEach(member => {
    rowApp.append(createChild('div', member.key, ['col'], ''));
    const newElement = document.getElementById(member.key);
    newElement.append(createChild('div', '', ['p-2'], ''));
    const card = createChild('div', '', ['card'], '');
    newElement.firstChild.appendChild(card);

    const cardImg = createChild('img', '',['card-img-top'], '');
    document.querySelector(`#${member.key} .card`).append(cardImg);
    const img = document.querySelector(`#${member.key} img`);
    img.setAttribute('src', `./img/${member.image}`);

    const cardBody = createChild('div', '', ['card-body'], '');
    card.append(cardBody);

    const cardTitle = createChild('h5', '', ['card-title', 'text-center'], `${member.name} ${member.surname}`);
    cardBody.append(cardTitle);
    const cardText = createChild('p', '', ['card-text', 'text-center'], member.role);
    cardBody.append(cardText);
})
