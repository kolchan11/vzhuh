var vzhuh = document.getElementById("vzhuh");

if (localStorage.getItem("vzhuh") === null) {
  var vzhuh_number = 0;
  localStorage.setItem("vzhuh", vzhuh_number + 1);
}
else {
  var vzhuh_number = parseInt(localStorage.getItem("vzhuh"));
  if (vzhuh_number != (vzhuh_images.length - 1)) {
    localStorage.setItem("vzhuh", vzhuh_number + 1);
  }
}

var message = document.getElementById("message");
if ((vzhuh_number + 1) == vzhuh_images.length) {
  message.innerHTML = "Вы посмотрели все мемы :( <a href='/' id='vzhuh_reload'>Начать сначала!</a>"
}
message.style.marginLeft = "-" + message.offsetWidth / 2 + "px";

vzhuh.src = vzhuh_images[vzhuh_number];
vzhuh.onload = function() {
  vzhuh.style.marginTop = "-" + vzhuh.height / 2 + "px";
  vzhuh.style.marginLeft = "-" + vzhuh.width / 2 + "px";
};

var vzhuh_new = document.getElementById("vzhuh_new"),
  vzhuh_reload = document.getElementById("vzhuh_reload");

if (vzhuh_new) {
  vzhuh_new.onclick = function() {
    location.reload();
    return false;
  };
}

if (vzhuh_reload) {
  vzhuh_reload.onclick = function() {
    localStorage.setItem("vzhuh", 0);
    location.reload();
    return false;
  };
}