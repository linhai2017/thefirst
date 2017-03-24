function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    }
  }
}

function insertAfter(newElement, targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function preparePlaceholder() {
  if (!document.createElement) return false;
  if (!document.createTextNode) return false;
  if (!document.getElemetById) return false;
  if (!document.getElmentById("imagegallery")) return false;
  var placeholder = document.createElement("img");
  placeholder.setAttribute("id", "placeholder");
  placeholder.setAttribute("src", "pictures/图像占位.jpg");
  placeholder.setAttribute("alt", "我的图片库");
  var description = document.createElement("p");
  description.setAttribute("id", "description");
  var desctext = document.createTextNode("选择一个图片");
  description.appendChild(desctext);
  var gallery = document.getElementById("imagegallery");
  insertAfter(placeholder, gallery);
  insertAfter(description, placeholder);
}

function prepareGallery() {
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById) return false;
  if (!document.getElementById("imagegallery")) return false;
  var gallery = document.getElementById("imagegallery");
  var links = gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showPic(this);
    }
    links[i].onkeypress = links[i].onclick;
  }
}

function showPic(whichpic) {
  if (!document.getElementById("placeholder")) return false;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = " ";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
}

/*function menuFix() {
  var sfEles = document.getElementById("menu").getElementsByTagName("li");
  for (var i = 0; i < sfEles.length; i++) {
    sfEles[i].onmouseover = function () {
      this.className += (this.className.length > 0 ? "" : "") + "listshow";
    }
    sfEles[i].onmouseouout = function () {
      this.className = this.className.replace("listshow", "");
    }

  }
}*/
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);