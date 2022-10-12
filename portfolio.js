const projects = [
  {
    id: 'card1',
    title: 'Project name goes here 1',
    image1: './images/Rectangle1.png',
    image5: './images/Rectangle1.png',
    image6: './images/Rectangle1.png',
    image7: './images/Rectangle1.png',
    image8: './images/Rectangle1.png',
    description1:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    description2:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },

  {
    id: 'card2',
    title: 'Project name goes here 2',
    image1: './images/Rectangle2.png',
    image5: './images/Rectangle2.png',
    image6: './images/Rectangle2.png',
    image7: './images/Rectangle2.png',
    image8: './images/Rectangle2.png',
    description1:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    description2:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },

  {
    id: 'card3',
    title: 'Project name goes here 3',
    image1: './images/Rectangle3.png',
    image5: './images/Rectangle3.png',
    image6: './images/Rectangle3.png',
    image7: './images/Rectangle3.png',
    image8: './images/Rectangle3.png',
    description1:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    description2:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },

  {
    id: 'card4',
    title: 'Project name goes here 4',
    image1: './images/Rectangle4.png',
    image5: './images/Rectangle4.png',
    image6: './images/Rectangle4.png',
    image7: './images/Rectangle4.png',
    image8: './images/Rectangle4.png',
    description1:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    description2:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },

  {
    id: 'card5',
    class: 'mySlides',
    title: 'Project name goes here 5',
    image1: './images/Rectangle5.png',
    image5: './images/Rectangle5.png',
    image6: './images/Rectangle5.png',
    image7: './images/Rectangle5.png',
    image8: './images/Rectangle5.png',
    description1:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    description2:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },

  {
    id: 'card6',
    title: 'Project name goes here 6',
    image1: './images/Rectangle6.png',
    image5: './images/Rectangle6.png',
    image6: './images/Rectangle6.png',
    image7: './images/Rectangle6.png',
    image8: './images/Rectangle6.png',
    description1:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    description2:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
];

const section = document.querySelector('.main-container');
// add projects
projects.forEach((project) => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `
      <h2>${project.title}</h2>
      <ul>
          <li>${project.technologyList[0]}</li>
          <li>${project.technologyList[1]}</li>
          <li>${project.technologyList[2]}</li>
      </ul>
  
      <div>
        <img ${project.class} src="${project.image1}" alt="project img">
      </div>
        
      <div>
        <img src="${project.image5}" onclick="currentSlide(1)" alt="img">
      </div>
      <div>
        <img src="${project.image6}" onclick="currentSlide(2)" alt="img">
      </div>
      <div>
        <img src="${project.image7}" onclick="currentSlide(3)" alt="img">
      </div>
      <div>
        <img src="${project.image8}" onclick="currentSlide(4)" alt="img">
      </div>
  
      <p>${project.description1}</p>
      <p>${project.description2}</p>
      <div>
          <a>${project.firstButton}<img src="./images/ic_link.png" alt="See live"></a>
          <a>${project.secondButton}<img src="./images/ic_github_blue.png" alt="source-code"></a>
      </div>
      `;
});

const seeProjectButtons = document.querySelectorAll('.project-button');

seeProjectButtons.forEach((button) => {
  projects.forEach((project) => {
    if (button.id === project.id) {
      button.addEventListener('click', () => {
        const popUpSection = document.createElement('section');
        popUpSection.innerHTML = `
            <div class="modal">
              <div class="bg">
                <div class="top-div">
                  <span class="close-button">&times;</span>
                  <div class="title-list">
                    <h2 class="title">${project.title}</h2>
                    <ul class="skills">
                        <li class="skills-list">${project.technologyList[0]}</li>
                        <li class="skills-list">${project.technologyList[1]}</li>
                        <li class="skills-list">${project.technologyList[2]}</li>
                    </ul>
                  </div>
                </div>
            
                <div class="md-div">
                  <div class="container1">
                    <div class="mySlides">
                      <img src="${project.image1}" alt="project img">
                    </div>
                      
                    <a class="prev" onclick="plusSlides(-1)"><img src="./images/Vector4.png" alt=""></a>
                    <a class="next" onclick="plusSlides(1)"><img src="./images/Vector5.png" alt=""></a>
                  
                    <div class="row">
                      <div class="column">
                        <img class="demo cursor" src="${project.image5}" onclick="currentSlide(1)" alt="img">
                      </div>
                      <div class="column">
                        <img class="demo cursor" src="${project.image6}" onclick="currentSlide(2)" alt="img">
                      </div>
                      <div class="column">
                        <img class="demo cursor" src="${project.image7}" onclick="currentSlide(3)" alt="img">
                      </div>
                      <div class="column">
                        <img class="demo cursor" src="${project.image8}" onclick="currentSlide(4)" alt="img">
                      </div>
                    </div>
                  </div>
            
                  <div class="bottom-div">
                    <p class="p-tag">${project.description1}</p>
                    <p class="p-tag">${project.description2}</p>
                    <div class="cta-1">
                        <a href="https://hsmathebula.github.io/" class="see-live">${project.firstButton}<img src="./images/ic_link.png" alt="See live"></a>
                        <a href="https://github.com/HSMathebula/HSMathebula.github.io" class="source-code">${project.secondButton}<img src="./images/ic_github_blue.png" alt="source-code"></a>
                    </div>
                    <div class="nxt-prv-cta">
                        <a href="" class="prv"><img src="./images/ic_arrow_left.png" alt="">Previous project</a>
                        <a href="" class="nxt">next-project<img src="./images/ic_arrow_right_blue.png" alt=""></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;

        section.appendChild(popUpSection);
        const span = document.querySelector('.close-button');
        span.addEventListener('click', () => {
          section.removeChild(popUpSection);
        });
      });
    }
  });
});