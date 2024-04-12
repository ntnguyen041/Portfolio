/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};
function headerShadow() { 
  const navHeader =document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Fullstack Developer","Designer","..."],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  }  else {
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  }
})

}
window.addEventListener('scroll', scrollActive)


setInterval(avatar, 7000);
var checkavatar= 1;
function avatar() {
  if(checkavatar>3){
    checkavatar =0;
  }
  var avatars = document.getElementsByClassName("avatar");
  var src = "assets/images/avatar"+checkavatar+".png";
  avatars[0].src = src;
  checkavatar +=1;
}

var project=[
  {
    "img":"",
    "user":1,
    "company":false,
    "name":"Employee management software.",
    "link":"https://github.com/ntnguyen041/EmployeeManagement",
    "functions":"management, employee salary calculation and reporting, account authorization",
    "des":`<p>This is an application for managing human resources and calculating salaries for employees, helping organizations effectively manage employee information, job-related information, and the salary calculation process.</p>
    <p>This application enhances human resource management efficiency, optimizes the salary calculation process, and provides convenient conditions for effective employee management.</p>
  `,
    "Using":"C# winform and microsoft SQL."
    
  },
  {
    "img":"",
    "user":3,
    "company":false,
    "name":"Eshop - Full stack web developer",
    "link":"https://github.com/ntnguyen041/Eshop",
    "functions":": dashboard, purchase, delete, edit product quantity and account functions…",
    "des":`Eshop is an ASP.NET course project, serving as an e-commerce website specializing in selling books. Developed to provide a convenient and diverse online book shopping experience.`,
    "Using":"C# .Net Core and Microsoft SQL."
  }, {
    "img":"",
    "user":4,
    "company":false,
    "name":"Technology store - Full stack web developer.",
    "link":"https://github.com/ntnguyen041/Eshop-OP-Team",
    "functions":"dashboard, purchase, delete, edit product quantity and account functions…",
    "des":`Technology store is a PHP Laravel course project, serving as an e-commerce website specializing in selling technology products. Developed to provide a convenient and diverse online shopping experience for tech enthusiasts.`,
    "Using":"Laravel, Jquery (ajax) and My SQL"
  }, {
    "img":"",
    "user":3,
    "company":false,
    "name":"Question Game - Full stack App developer.",
    "link":"https://github.com/ntnguyen041/QuestionGame",
    "des":"The Question Game project is a mobile application developed to help students enhance their knowledge by answering study-related questions. This app provides an engaging game interface and operates smoothly on mobile devices. With a carefully curated selection of questions from subjects like Mathematics, Literature, Science, History, and more, players have the opportunity to test their knowledge and improve their study skills in a useful and enjoyable way.",
    "functions":"Build a set of questions for each level, 3 game modes: trial, pass and solo, calculate points, rank, view competitor information, account function.",
    "Using":"Flutter and Google Firebase."
  }, {
    "img":"",
    "user":1,
    "company":false,
    "name":"Icheck Email",
    "link":"https://youtu.be/NvfsnoFQxGg",
    "des":`<p>-ICheck is a program that verifies the validity of email addresses, built on the PHP framework Laravel, with contributions from nt041.</p>
    <p>-In today's digital age, the use of fake emails for fraudulent activities is becoming increasingly common. Particularly, e-commerce users and online sellers often encounter spam emails, scams, or emails from unidentified sources, causing annoyance and wasting time.</p>
    <p>-ICheck was created to distinguish between valid email addresses and unreliable ones. The program is capable of verifying the authenticity of email addresses, helping users eliminate fake, spam, or potentially fraudulent emails.</p>
    <p>-For users, especially businesses and sellers, ICheck provides significant benefits by enhancing information security and minimizing risks of loss or fraud. By filtering out unwanted and illegal emails, they can focus on interacting with genuine customers and building long-term customer relationships in a safer and more efficient manner.</p>`,
    "functions":"Verify email, Save file, import file, and setup mail document",
    "Using":"PHP laravel."
  }, {
    "img":"",
    "user":4,
    "company":false,
    "name":"Smart home models - IOT",
    "link":"https://github.com/ntnguyen041/SmartHomeModels",
    "des":` <p>The project on smart home models - IoT is one that I am deeply passionate about. It serves as the capstone project of my course at Cao Thang Technical College, where we are currently developing curriculum, creating models, and controlling them.</p>
    <p>In this project, our focus lies in applying IoT technology to build smart home systems. This involves connecting devices within the home such as lights, air conditioners, door access, temperature and humidity sensors, and more into a network. We also develop mobile applications or web interfaces that allow users to control these devices remotely over the internet.</p>
    <p>Writing the curriculum is a vital part of the project, helping us create detailed instructional materials on how to build and deploy smart home systems using IoT technology. Additionally, creating real-life models helps us test and demonstrate the features of the system before actual deployment.</p>
    <p>This project not only provides practical knowledge and skills but also contributes to raising awareness of the application of IoT in daily life and the future of the IT industry.</p>`,
    "functions":"Control peripherals connected to ESP8266, get data and notifications, add devices by QR code.",
    "Using":"Nodejs (server), React Native (client app), Reactjs (client web), C (client ESP), socket, Mongodb, Google Firebase "
  }, {
    "img":"",
    "user":2,
    "company":true,
    "name":"Novazone",
    "link":"https://novazone.vn/",
    "des":"https://novazone.vn/",
    "functions":"Email marketing,group function for dashboard,group function for discouting products, product management, importing product data from Excel, user login, user sigup, group function for card,detail... , Data upload operation, ensuring security at the source server",
    "Using":"C# .Net Core and Microsoft SQL."
  }, {
    "img":"",
    "user":2,
    "company":true,
    "name":"Sunhitech",
    "link":"https://sunhitech.vn/",
    "des":"https://sunhitech.vn/",
    "functions":"Email marketing,group function for dashboard,two languages(Vietnamese English) ,user login, user sigup, group function for card,detail... , Data upload operation, ensuring security at the source server",
    "Using":"C# .Net Core and Microsoft SQL."
  },
  {
    "img":"",
    "user":3,
    "company":true,
    "name":"VietNamTiepThi",
    "link":"https://vietnamtiepthi.vn/",
    "des":"https://vietnamtiepthi.vn/",
    "functions":"Email marketing,group function for dashboard,group function for service,group function for customercompany,multi language,user login, user sigup, group function for card,detail... , Data upload operation, ensuring security at the source server",
    "Using":"C# .Net Core and Microsoft SQL."
  },
  

]
var html="";
project.forEach(element => {
  var user ="";
  var link ='<i class="fa-brands fa-github"></i>';
  var id ="";
  var title="GitHub";
  if(element.company==true){
    user='<i class="fa-solid fa-users-rectangle"></i>';
    id="1";
  }else{
    if(element.user>1){
      user='<i class="fa-solid fa-user-group"></i>';
      id="2";
    }else{
      user='<i class="fa-solid fa-user"></i>';
      id="3";
    }
  } 
  if(element.link.includes("https://github.com/")==false){
    link='<i class="fa-solid fa-link"></i>';
    title="Webside"
  }
  html +='<div class="project-box" data-id="'+id+'">'+
              user+
              '<h3>'+element.name+'</h3>'+
              '<label>'+element.Using+'</label>'+
              '<div class="d-flex">'+
                '<div class="icon modals" title="Description" user="'+element.user+'" name="'+element.name+'" link="'+element.link+'" des="'+element.des+'" using="'+element.Using+'" fun="'+element.functions+'">'+
                '<i class="fa-solid fa-seedling"></i>'+
                '</div>'+
                  '<a class="icon" target="_blank" title="'+title+'" href="'+element.link+'">'+
                  link+
              '</a></div>'+
            '</div>'; 
  var container=document.getElementById('project-container');
  container.innerHTML=html;
});

document.addEventListener('click', function(event) {
  if (event.target.closest('.checkProjects')) {

    var projects = document.getElementsByClassName("project-box");
    // Get the value of the "data-id" attribute
    var id = event.target.closest('.checkProjects').getAttribute("data-id");
    console.log(id);
    if(id==0){
      for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = 'flex';
      }
    }else{

      for (var i = 0; i < projects.length; i++) {
        var id2 = projects[i].getAttribute("data-id");
        if (id2 === id) {
          projects[i].style.display = 'flex';
        } else {
          projects[i].style.display = 'none';
        }
      }
    }
  }
  if (event.target.closest('.modals')) {
    var user = event.target.closest('.modals').getAttribute("user");
    var name = event.target.closest('.modals').getAttribute("name");
    var link = event.target.closest('.modals').getAttribute("link");
    var des = event.target.closest('.modals').getAttribute("des");
    var using = event.target.closest('.modals').getAttribute("using");
    var fun = event.target.closest('.modals').getAttribute("fun");
 
    document.getElementById("Name-modal").innerHTML='<a href="'+link+'" target="_blank">Name: '+name+'</a>';
    document.getElementById("People-modal").innerHTML="<strong>People: </strong>" +user;
    document.getElementById("Using-modal").innerHTML="<strong>Using: </strong>"+using;
    document.getElementById("Decription-modal").innerHTML="<strong>Description: </strong>"+des;
    document.getElementById("Function-modal").innerHTML="<strong>Function: </strong>"+fun;   

    var modal = document.getElementById("myModal");    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "block"; 
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }   
    window.onscroll = function() { modal.style.display = "none";};
      
  }
});
function sendEmail() {
  // Prepare email data
      const recipient = 'nt.nguyen041@gmail.com';
      const subject = 'Test Email';
      const body = 'This is a test email sent from JavaScript.';

      // Generate mailto link
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open default email client with pre-filled email
      window.location.href = mailtoLink;
}
var index =0;
var text =document.getElementById('text');
var shadow ='';
for(var i =0;i<10;i++){
    shadow+=(shadow?',':'')+-i*1+'px '+i*1+'px 0 #d9d9d9';
}
text.style.textShadow =shadow;
var inter = setInterval(settext,100);
textname ='NGO TAN NGUYEN';
text2namne='';
function settext(){
    if(index>textname.length){
        index=0;
    }
    else{
        text2name = textname.slice(0,index);
    }
    index++;          
    text.setAttribute("data-text", text2name);
    text.innerHTML=text2name;
}






