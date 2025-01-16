PROJECTS = [
  {
    url: 'https://calorie-contra-testing-baf1376cc140.herokuapp.com/home',
    image: 'https://i.imgur.com/Eroy6fD.jpg',
    title: 'Calorie Counter',
  },
  {
    url: 'https://hum.social',
    image: 'https://i.imgur.com/Yx8sEnE.jpg',
    title: 'Social Network',
  },
  {
    url: 'https://aestheitos.pro',
    image: 'https://i.imgur.com/oQ8dGva.jpg',
    title: 'Fitness Learning Platform',
  },
  {
    url: 'https://blue-island-0e5228800.5.azurestaticapps.net',
    image: 'https://i.imgur.com/dQn0bx3.jpg',
    title: 'Drone Landing Page',
  },
  {
    url: 'https://jericho1050.github.io/telephone-number-validator/',
    image: 'https://i.imgur.com/WSBjap0.jpg',
    title: 'Telephone Number Validator',
  },
  {
    url: 'https://pokemon-search-smoky.vercel.app/',
    image: 'https://i.imgur.com/4kUiDBx.jpg',
    title: 'Pokemon Search',
  },
  {
    url: 'https://jericho1050.github.io/roman-numeral-converter/',
    image: 'https://i.imgur.com/u2NBqT8.jpg',
    title: 'Roman Numeral Converter',
  },
  {
    url: 'https://mycash-register-webapp.netlify.app',
    image: 'https://i.imgur.com/9OVvGmz.jpg',
    title: 'Cash Register App',
  },
  {
    url: 'https://jericho1050.github.io/final-project-ui-design/',
    image: 'https://i.imgur.com/aAzvmnd.jpg',
    title: 'Cabin Landing Page',
  },
  {
    url: 'https://github.com/jericho1050/bookshelf-dapp',
    image: 'https://i.imgur.com/aBndr18.jpg',
    title: 'BookShelf Dapp',
  },
  {
    url: 'https://jericho1050.github.io/teaplace/',
    image: 'https://i.imgur.com/DEwVuSL.jpg',
    title: 'TeaPlace Landing page',
  },
  {
    url: 'https://github.com/jericho1050/repitup',
    image: 'https://i.imgur.com/tgC6MKN.jpg',
    title: 'Backend Workout Logger',
  },
];
// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const row = document.createElement('div');
  row.classList.add('row', 'gy-4', 'd-flex');
  row.setAttribute('id', 'cards')


  PROJECTS.forEach(({ url, image, title }) => {
    const div = document.createElement('div');
    div.classList.add('col-6', 'col-lg-3', 'flex-grow-1');
    div.innerHTML = `
    <a href="${url}" target="_blank">
        <div class="card">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="project-title">${title}</h4>
            </div>
        </div>
    </a>`;
    row.appendChild(div);
  });
  container.appendChild(row);

  var tl = gsap.timeline({ defaults: { duration: 1 } });

  tl.from('.heading-container', { y: 50, opacity: 0 })
    .to(
      'p',
      { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' },
      '-=.7'
    )
    .to(
      'h1',
      { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' },
      '-=.7'
    );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to('.row .col-6.col-lg-3.flex-grow-1', {
            y: -10,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
          });
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  const rowElement = document.querySelector('.row.d-flex');
  if (rowElement) {
    observer.observe(rowElement);
  }
});
