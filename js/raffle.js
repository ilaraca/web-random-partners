const data = [
  {
    name: 'Adriana',
    img: './img/Adriana.jpg',
  },
  {
    name: 'Alan',
    img: './img/Alan.jpg',
  },
  {
    name: 'Dan',
    img: './img/Dan.jpg',
  },
  {
    name: 'Fernando',
    img: './img/Fernando.jpg',
  },
  {
    name: 'Ismael',
    img: './img/Ismael.jpg',
  },
  {
    name: 'Joel',
    img: './img/Joel.jpg',
  },
  {
    name: 'Julia',
    img: './img/Julia.jpg',
  },
  {
    name: 'Luan',
    img: './img/Luan.jpg',
  },
  {
    name: 'Luiz',
    img: './img/Luiz.jpg',
  },
  {
    name: 'Marcos',
    img: './img/Marcos.jpg',
  },
  {
    name: 'Nadia',
    img: './img/Nadia.jpg',
  },
  {
    name: 'Pedro',
    img: './img/Pedro.jpg',
  },
  {
    name: 'Rafael',
    img: './img/Rafael.jpg',
  },
  {
    name: 'Roberto',
    img: './img/Roberto.jpg',
  },
  {
    name: 'Rodrigo',
    img: './img/Rodrigo.jpg',
  },
  {
    name: 'Carol',
    img: './img/Carol.png',
  },
];

class Raffle {
  constructor() {
    this.students = _.shuffle(data);
    this.students.forEach(student => {
      this.addCard(student);
    });

    this.finalPairs = [];

    $('.card').on('click', e => {
      if (!$(e.currentTarget).hasClass('clicked')) {
        $(e.currentTarget).addClass('clicked');
        const name = $(e.currentTarget).attr('attr-name');
        this.addPaired(name);
      }
    });
  }

  addCard(card) {
    const cardElement = $(`
        <div class="card" attr-name="${card.name}">
            <div class="side back">
                <img src="https://www.ironhack.com/assets/shared/logo.svg">
            </div>
            <div class="side front">
                <img src="${card.img}">
            </div>
        </div>
        `);
    $('#board').append(cardElement);
  }

  addPaired(name) {
    this.finalPairs.push(name);

    if (this.finalPairs.length % 2 == 0) {
      const chunks = _.chunk(this.finalPairs, 2);
      const pairs = $('#pairs');
      pairs.empty();
      chunks.forEach(chunk => {
        const pair = $(`
                <div class="pair">
                <span>${chunk[0]}</span>
                - 
                <span>${chunk[1]}</span>
                </div>
                `);
        pairs.append(pair);
      });
    }
  }
}
