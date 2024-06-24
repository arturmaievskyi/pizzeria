let pizzas = [
    {
        name: 'Hawol',
        image: '/static/img/hawol.jpg',
        description: '',
        id: 1
    },
    {
        name: 'Itolian',
        image: '/static/img/itolian.jpg',
        description: '',
        id: 2

    },
    {
        name: 'Kolan',
        image: '/static/img/Kolan.jpg',
        description: '',
        id: 3

    },
    {
        name: 'Italiana',
        image: '/static/img/Italiana.jpg',
        description: '',
        id: 4

    },
    {
        name: 'Loif',
        image: '/static/img/',
        description: '',
        id: 5

    },
    {
        name: 'Anafish',
        image: '/static/img/Anafish.jpg',
        description: '',
        id: 6

    },
    {
        name: 'Pachese',
        image: '/static/img/pachese.jpg',
        description: '',
        id: 7

    },
    {
        name: '',
        image: '/static/img/',
        description: '',
        id: 8

    },

]




function createProductCard(product) {
    let cardDiv = document.add('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" >
            <p>${product.description}</p>
            <button class="CartBtn">
                <span class="IconContainer" href="order.html"> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                </span>
                <p class="text">Buy</p>
            </button>
        `;
    return cardDiv;
}