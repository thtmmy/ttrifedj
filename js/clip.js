let toolt = document.querySelector('.parent');
let span = toolt.querySelector('.tlt');


function showToolTip(e) {
  span.classList.add('show');
  if(e.type == "click") {
    span.innerText = "copied"
    let range = document.createRange();  
    range.selectNode(this.querySelector('.left'));  
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}

function hideToolTip() {
  span.classList.remove('show');
  span.innerText = "Copt to Clipboard"
}

toolt.addEventListener('click', showToolTip)
toolt.addEventListener('mouseenter', showToolTip)
toolt.addEventListener('mouseleave', hideToolTip)