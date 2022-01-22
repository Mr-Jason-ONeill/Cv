var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // when it's open, this will close it
      content.style.maxHeight = null;
    } else {
      // when it's closed, this will open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}
