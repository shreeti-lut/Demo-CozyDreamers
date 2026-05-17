// FAQ Section Script
document.addEventListener('DOMContentLoaded', function() {
    const faqContainers = document.querySelector('.faq-content');

    faqContainers.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        if (!groupHeader) 
            return;
            const group = groupHeader.parentElement;
            const groupbody = group.querySelector('.faq-group-body');
            const icon = groupHeader.querySelector('i');

        
        // Toggle the visibility of the FAQ Icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
// Toggle the visibility of the FAQ answer
        groupbody.classList.toggle('open');
        
        // close other open FAQ answers
        const otherGroups = faqContainers.querySelectorAll('.faq-group');
        console.log(otherGroups);
        otherGroups.forEach((otherGroup) => {
         if (otherGroup !== group) {
        const otherGroupBody =otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i'); 
        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
    }


        });
});
});

//For Mobile Menu //
document.addEventListener('DOMContentLoaded', function ( ) {
  const hamburgerButton = document.getElementById('hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );
});

//Login page//
function login(){
 let e=document.getElementById("email").value;
 let p=document.getElementById("password").value;
 let m=document.getElementById("msg");

 if(!e||!p){
   m.innerText="Please fill all fields";
   m.style.color="red";
 } else {
   m.innerText="Welcome back ✨";
   m.style.color="green";
 }
}


//Login Page modified//
document.addEventListener('DOMContentLoaded', function ( ) {
  const login = document.getElementById('start-login')
  const loginBtn = document.getElementById('login_btn');
  const closeBtn = document.querySelector('.close');
  const loginPage = document.querySelector('.login-page');
  const signup = document.getElementById('signup');
  const signupfor = document.querySelector('.signupform');
  const loginback = document.getElementById('loginbackbtn')
 

login.onclick = () => {
  loginPage.style.display = "block";
  signupfor.style.display = "none";
}
closeBtn.onclick = () => {
    loginPage.style.display = "none";
    signupfor.style.display = "none";
};

  signup.onclick =()=> {
  signupfor.style.display = "block";
}

loginback.onclick =()=>{
 
  loginPage.style.display = "block";
}
});

// Signup Form//
document.addEventListener('DOMContentLoaded', function ( ) {
  const loginbtn = document.getElementById('login-btn');
  const loginclosebtn = document.querySelector('.loginclose');
  const loginPage = document.querySelector('.login-page');
  const signup = document.getElementById('signup');
  const signupfor = document.querySelector('.signup-page');
  const loginback = document.getElementById('loginbackbtn');
  const opensignup = document.getElementById('signup-open');
  const closesignup = document.querySelector('.signupclose');
 

  opensignup.onclick =()=> {
  loginPage.style.display = "none";
  signupfor.style.display = "block";
}

loginclosebtn.onclick=()=>{
  loginPage.style.display= "none";
  signupfor.style.display= "none";
  window.location.href = "index.html";
}

loginback.onclick =()=>{
  loginPage.style.display = "block";
   signupfor.style.display = "none";
}
closesignup.onclick =()=>{
  signupfor.style.display = "none";
  window.location.href = "index.html";
}
});

/*Post page back to blog page*/
 function goBack() {
            window.location.href= "blog.html";
        }
       