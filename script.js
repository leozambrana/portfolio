let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

let botaoSobre = document.querySelector('#botao-sobre');
let about = document.querySelector('#about');

let botaoProjeto = document.querySelector('#botao-projeto');
let projeto = document.querySelector('#project');

let botaoTecnologia = document.querySelector('#botao-tecnologia');
let tecnologia = document.querySelector('#tecnhologies');


let botaoContato = document.querySelector('#botao-contato');
let contato = document.querySelector('#contact');


window.addEventListener('scroll', function(){
  let value = this.window.scrollY;
  let width = this.window.innerWidth;
  let stars_position = value * 0.5;
  let moon_position = value;
  let mountains_behind_position = value;
  let mountains_front_position = value * 0;
  let text_position_right = value * 1.5;
  let text_position_top = value * 1.5;
  let header_position = value * 0.5;
  
  // Verifica se a janela tem menos de 600px de largura para diminuir o efeito de parallax
  if (width < 600) {
    stars_position = value * 0.3;
    moon_position = value * 0.5;
    mountains_behind_position = value * 0.5;
    mountains_front_position = value * 0;
    text_position_right = value * 0.5;
    text_position_top = value * 0.5;
    header_position = value * 0.3;
  }
  
  stars.style.left = stars_position + 'px';
  moon.style.top = moon_position + 'px';
  mountains_behind.style.top = mountains_behind_position + 'px';
  mountains_front.style.top = mountains_front_position + 'px';
  text.style.marginRight = text_position_right + 'px';
  text.style.marginTop = text_position_top + 'px';
  header.style.top = header_position + 'px';
});

$(window).on('load resize', function() {
  var windowWidth = $(window).width();
  if (windowWidth < 768) {
    $('header nav').addClass('mobile');
  } else {
    $('header nav').removeClass('mobile');
  }
});


botaoSobre.addEventListener('click', ()=>{
  const secaoAlvoTop = about.offsetTop;

  window.scrollTo({
    top: secaoAlvoTop, 
    behavior: 'smooth' 
  })
})

botaoProjeto.addEventListener('click', ()=>{
  const secaoAlvoTop = projeto.offsetTop;

  window.scrollTo({
    top: secaoAlvoTop, 
    behavior: 'smooth' 
  })
})

botaoTecnologia.addEventListener('click', ()=>{
  const secaoAlvoTop = tecnologia.offsetTop;

  window.scrollTo({
    top: secaoAlvoTop, 
    behavior: 'smooth' 
  })
})

botaoContato.addEventListener('click', ()=>{
  const secaoAlvoTop = contato.offsetTop;

  window.scrollTo({
    top: secaoAlvoTop, 
    behavior: 'smooth' 
  })
})


function handleSendEmailBtn() {
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;
  document.querySelector('.send-email-link').setAttribute('href', `mailto:leonardozambrana1@unesc.net?subject=${subject}&body=${message}`);
}

function goToTop() {
  document.querySelector('.top').scrollIntoView({ behavior: 'smooth' });

  let isScrolling;

  const handleAutoScrollEnd = () => {
      window.clearTimeout(isScrolling);

      isScrolling = setTimeout(function() {
          document.querySelector('.go-to-top-btn').classList.add('invisible')
          window.removeEventListener('scroll', handleAutoScrollEnd);
      }, 66);
  };

  window.addEventListener('scroll', handleAutoScrollEnd, false);
}

document.addEventListener('scroll', () => {
  document.querySelector('.go-to-top-btn').classList.remove('invisible');
})
