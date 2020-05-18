

// add answer

let myDiv = document.getElementById('newDiscussion');
let pseudo = document.querySelector('input#pseudo');
let formechanges = document.querySelector('form#formechanges');
let message = document.querySelector('textarea#message');
let intervenir = document.querySelector('.intervenir')

formechanges.addEventListener('submit', function(e){
  e.preventDefault();
  
  if(pseudo.value !== "")
  
  myDiv.innerHTML =` 
    <div class="message">            
      <button class="collapsible">${pseudo.value} a dit:</button>
      <span class="content">
        <p>${message.value}</p>
      </span>
    </div>
    `;
    
  pseudo.value ="";
  message.value="";
  intervenir.style.opacity ="0"
  
})



// bouton collaps

var coll = document.querySelectorAll("button.collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

