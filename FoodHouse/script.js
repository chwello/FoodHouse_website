
//source code w3school HAHHAHAHAHA
function menu(evt, classes) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  
  document.getElementById(classes).style.display = "block";

  evt.target.classList.add("active");
}


function hideAllTabContents() {
  var tabcontents = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontents.length; i++) {
    if (tabcontents[i].id !== "Dish") {
      tabcontents[i].style.display = "none";
    }
  }
  var defaultButton = document.querySelector(".tablinks[data-default='true']");
  defaultButton.classList.add("active");
}



window.onload = function() {
  hideAllTabContents();
};
