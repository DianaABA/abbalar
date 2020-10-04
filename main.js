/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 100})

/*SCROLL ABOUT*/
sr.reveal('.card', {delay: 100})
sr.reveal('.card profile-two', {delay: 150})
sr.reveal('.ArticleContainer', {delay: 200})
/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 200})

/*SCROLL PORTFOLIO*/
sr.reveal('.responsive-video', {interval: 100})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 100})
sr.reveal('.contact__input', {delay: 120})
sr.reveal('.contact__button', {delay: 150})


// text home animation  

function init () {

    wait(1000).then(() => {
      clearText()
      typeText('OUR DNA: ').then(typeLoop)
    })
    
    function typeLoop() {
      typeText('CREATIVITY')
        .then(() => wait(200))
        .then(() => removeText('CREATIVITY'))
        .then(() => typeText('CURIOSITY'))
        .then(() => wait(200))
        .then(() => removeText('CURIOSITY'))
        .then(() => wait(200))
        .then(() => typeText('RESPECT TO MOTHER NATURE'))
        .then(() => wait(200))
        .then(() => removeText('RESPECT TO MOTHER NATURE'))
        .then(() => wait(200))
        .then(() => typeText('QUALITY IN DETAILS'))
        .then(() => wait(200))
        .then(() => removeText('QUALITY IN DETAILS'))
        .then(() => wait(200))
        .then(() => typeText('TOLERANCE'))
        .then(() => wait(200))
        .then(() => removeText('TOLERANCE'))
        .then(() => wait(200))
        .then(() => typeText('INNOVATION'))
        .then(() => wait(200))
        .then(() => removeText('INNOVATION'))
        .then(() => wait(200))
        .then(() => typeText('OUT OF THE BOX'))
        .then(() => wait(200))
        .then(() => removeText('OUT OF THE BOX'))
        .then(() => wait(200))
        .then(() => typeText('UNIQUINESS'))
        .then(() => wait(200))
        .then(() => removeText('UNIQUINESS'))
        .then(() => wait(200))
        .then(() => typeText('LOOKING AT THE BIG PICTURE'))
        .then(() => wait(200))
        .then(() => removeText('LOOKING AT THE BIG PICTURE'))
        .then(() => wait(200))
        .then(() => typeText('INSPIRATION'))
        .then(() => wait(200))
        .then(() => removeText('INSPIRATION'))
        .then(() => wait(200))
        .then(() => typeText('AMBITION'))
        .then(() => wait(200))
        .then(() => removeText('AMBITION'))
        .then(() => wait(200))
        .then(() => typeText('LISTEN TO UNDERSTAND'))
        .then(() => wait(200))
        .then(() => removeText('LISTEN TO UNDERSTAND'))
        .then(typeLoop)
    }
    
  }
  
  
  // Source code 🚩
  
  const elementNode = document.getElementById('type-text')
  let text = ''
  
  function updateNode () {
    elementNode.innerText = text
  }
  
  function pushCharacter (character) {
    text += character
    updateNode()
  }
  
  function popCharacter () {
    text = text.slice(0, text.length -1)
    updateNode()
  }
  
  function clearText () {
    text = ''
    updateNode()
  }
  
  
  function wait (time) {
    if (time === undefined) {
      const randomMsInterval = 100 * Math.random()
      time = randomMsInterval < 50 ? 10 : randomMsInterval
    }
    
    return new Promise(resolve => {
      setTimeout(() => {
        requestAnimationFrame(resolve)
      }, time)
    })
  }
  
  function typeCharacter (character) {
    return new Promise(resolve => {
      pushCharacter(character)
      wait().then(resolve)
    })
  }
  
  function removeCharacter () {
    return new Promise(resolve => {
      popCharacter()
      wait().then(resolve)
    })
  }
  
  function typeText (text) {
    return new Promise(resolve => {
      
      function type ([ character, ...text ]) {
        typeCharacter(character)
          .then(() => {
            if (text.length) type(text)
            else resolve()
          })
      }
      
      type(text)
    })
  }
  
  function removeText ({ length:amount }) {
    return new Promise(resolve => {
      
      function remove (count) {
        removeCharacter()
          .then(() => {
            if (count > 1) remove(count - 1)
            else resolve()
          })
      }
      
      remove(amount)
    })
  }
  
  
  init()

 
  
  
  