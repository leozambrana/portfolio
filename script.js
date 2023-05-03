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
  stars.style.left = value * 0.5 + 'px'
  moon.style.top = value + 'px'
  mountains_behind.style.top = value + 'px'
  mountains_front.style.top = value * 0 + 'px'
  text.style.marginRight = value * 1.5 + 'px'
  text.style.marginTop = value * 1.5 + 'px'
  header.style.top = value * 0.5 + 'px'
})

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
