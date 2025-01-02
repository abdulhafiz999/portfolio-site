var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }

  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
  sidemenu.style.right = "0";
}

function closemenu(){
  sidemenu.style.right = "-200px";
}

// Add event listeners for mobile menu toggle
document.querySelector(".fa-bars").addEventListener("click", openmenu);
document.querySelector(".fa-times").addEventListener("click", closemenu);

const scriptURL = 'https://script.google.com/macros/s/AKfycbwgkNdhuYSX3y1IT4yZAqPyAwcnsJ7fWsa6vFdRGkVbaZhjG0ZSwHLeBN58q3Q_ove8/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Messsage Sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)

      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})