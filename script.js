const navMenu= document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')




if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav_link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav__link we remove the show menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

let swiperProjects = new Swiper(".projects_container", {
    loop:true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard:true,

    // breakpoints: {
    //     1200: {
    //         slidePerView: 2,
    //         spaceBetween: -56,
    //     },
    // },
  });
  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactProject = document.getElementById('contact-project'),
        contactMessage = document.getElementById('contact-msg')

const sendEmail = (e) =>{
   e.preventDefault()

   if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
    contactMessage.classList.remove('color-green')
    contactMessage.classList.add('color-red')

    contactMessage.textContent = 'Fill all the input fields'
   }else{
     emailjs.sendForm('service_knaw4ek','template_nwf3h58','#contact-form','do_wkxNf1XHI9iAhg')
       .then(()=>{
         contactMessage.classList.add('color-green')
         contactMessage.textContent = 'Message Sent Successfully';

         setTimeout(()=>{
            contactMessage.textContent = ''
         },5000)
      }, (error) =>{
        alert('OOPS!! FAILED....', error)
      })

    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
   }
}
contactForm.addEventListener('submit',sendEmail)

ScrollReveal({ 
  reset: true,
  distance:'60px',
  duration:2500,
  delay:200

});
ScrollReveal().reveal('.home_data', {delay: 600, origin: 'top', interval: 100});
 ScrollReveal().reveal('.home_profile', { origin:'left' });
 ScrollReveal().reveal('.about_image', { origin:'right' });
 ScrollReveal().reveal('.home_name', { origin:'left' });
 ScrollReveal().reveal('.home_info', { origin:'left' });
 ScrollReveal().reveal('.about_container', { origin:'left' });
 ScrollReveal().reveal(`.skills_content:nth-child(1)`,{delay: 600, origin: 'top', interval: 100});
 ScrollReveal().reveal(`.projects_container`,{delay: 600, origin: 'top', interval: 100});
 ScrollReveal().reveal(`.contact_container`,{delay: 600, origin: 'top', interval: 100});

