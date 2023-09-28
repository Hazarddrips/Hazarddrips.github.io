var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// Defining opentab function
function opentab(tabname) {
  //This code for removing
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu1 = document.getElementById("sidemenu"); // Making new variable and get by element id

function openmenu(){
  sidemenu1.style.right = "0"
} // add function
function closemenu(){
  sidemenu1.style.right = "-200px"
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4oQuDx01bo5dAMgrK7wpzBsW0w39EUTDGZAq0hoxkIz0WBkg2EtiAXtzeb2chCuQidg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent succesfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })
