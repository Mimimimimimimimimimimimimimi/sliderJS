const entities = [
    {
       city: 'Rostov-on-Don',
       house: 'LCD admiral',
       area: '81 m2',
       time: '3.5 months',
       cost: 'Upon request',
       url: 'images/image 2.1.png'
    },
    {
        city: 'Sochi',
        house: 'Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',
        url: 'images/image 2.png'
    },
    {
        city: 'Rostov-on-Don',
        house: 'Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',
        url: 'images/image 3.png'
    }
  ]
  
  
  function slider (){
  const city = document.querySelector('.content__city-name');
  const house = document.querySelector('.content__house-name');
  const area = document.querySelector('.content__area-name');
  const time = document.querySelector('.content__time-name');
  const cost = document.querySelector('.content__cost-name');
  const img = document.querySelector('.img');
  const leftBtn = document.querySelector('.arrow__left');
  const rightBtn = document.querySelector('.arrow__right');
  const dots = document.querySelectorAll('.dot');
  const titles = document.querySelectorAll('.title');

  
  const setEntity = (index) => {
    dots.forEach((dot, num) => {
        if (num === index) {
          dot.classList.add('dot-active');
        } else {
          dot.classList.remove('dot-active');
        }
      });
      titles.forEach((title, num1) => {
        if (num1 === index) {
          title.classList.add('content__title-active');
        } else {
          title.classList.remove('content__title-active');
        }
      });
      city.innerText = entities[index].city;
      house.innerText = entities[index].house;
      area.innerText = entities[index].area;
      time.innerText = entities[index].time;
      cost.innerText = entities[index].cost;
      img.style.backgroundImage = `url('${entities[index].url}')`
  }
  
  let currentIndex = 0;
  setEntity(currentIndex);

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      currentIndex = idx;
      setEntity(currentIndex);
    });
  });

  titles.forEach((title, idx1) => {
    title.addEventListener('click', () => {
      currentIndex = idx1;
      setEntity(currentIndex);
    });
  });

  leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      setEntity(currentIndex);
    }
    else {
      currentIndex = entities.length-1;
      setEntity(currentIndex);
    }
  })
  rightBtn.addEventListener('click', () => {
    if (currentIndex < entities.length - 1) {
      currentIndex += 1;
      setEntity(currentIndex);
    }
    else { 
      currentIndex = 0;
      setEntity(currentIndex);
    }
  })
}
document.addEventListener("DOMContentLoaded", slider);


  
