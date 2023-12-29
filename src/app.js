const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const surpriseBtn = document.getElementsByClassName('surprise')[0];
const person = document.getElementsByClassName('name')[0];
const role = document.getElementsByClassName('role')[0];
const review = document.getElementsByClassName('review-text')[0];

const img = document.getElementById('photo');

const reviews = [
  {
    name: 'Julia',
    image:
      'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=1488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    role: 'Engineer',
    review: 'blablabla',
  },
  {
    name: 'Martha',
    image:
      'https://images.unsplash.com/photo-1594850189283-8f8e814648e0?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    role: 'Tennis Player',
    review: 'bliblibli',
  },
  {
    name: 'John',
    image:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    role: 'Streamer',
    review: 'blobloblo',
  },
  {
    name: 'Mark',
    image:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    role: 'Dancer',
    review: 'blublublu',
  },
  {
    name: 'Gabriela',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    role: 'Singer',
    review: 'blaublaublau',
  },
];
let i = 0;

window.addEventListener('DOMContentLoaded', () => {
  transition();
});

nextBtn.addEventListener('click', () => {
  if (i == reviews.length - 1) {
    i = -1;
  }
  img.style.opacity = 0;
  person.style.opacity = 0;
  role.style.opacity = 0;
  review.style.opacity = 0;
  i++;
  setTimeout(transition, 500);
  //   img.src = reviews[i].image;
  //   person.innerText = reviews[i].name;
  //   role.innerText = reviews[i].role;
  //   console.log(i);
});

previousBtn.addEventListener('click', () => {
  if (i == 0) {
    i = reviews.length;
  }
  img.style.opacity = 0;
  person.style.opacity = 0;
  role.style.opacity = 0;
  review.style.opacity = 0;
  i--;
  setTimeout(transition, 500);
  //   img.src = reviews[i].image;
  //   person.innerText = reviews[i].name;
  //   role.innerText = reviews[i].role;
});

surpriseBtn.addEventListener('click', () => {
  let randomNum = Math.floor(Math.random() * reviews.length);
  img.style.opacity = 0;
  person.style.opacity = 0;
  role.style.opacity = 0;
  review.style.opacity = 0;

  i = randomNum;

  setTimeout(transition, 500);

  return randomNum;
});

function transition() {
  img.src = reviews[i].image;
  person.innerText = reviews[i].name;
  person.innerText = reviews[i].name;
  role.innerText = reviews[i].role;
  img.style.opacity = 1;
  person.style.opacity = 1;
  role.style.opacity = 1;
  review.style.opacity = 1;
}
