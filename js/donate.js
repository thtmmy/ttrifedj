// Credit: https://codepen.io/RevCred/pen/vxXrww
// functionality to copy text from copyAddress to clipboard

// trigger copy event on click
$(".copy").on("click", function (event) {
  console.log(event);
  copyToClipboard(event);
});

// event handler
function copyToClipboard(e) {
  // alert('this function was triggered');
  // find target element
  var t = e.target,
    c = t.dataset.copytarget,
    inp = c ? document.querySelector(c) : null;
  console.log(inp);

  // check if input element exist and if it's selectable
  if (inp && inp.select) {
    // select text
    inp.select();
    try {
      // copy text
      document.execCommand("copy");
      inp.blur();

      // copied animation
      t.classList.add("success");
      setTimeout(function () {
        t.classList.remove("success");
      }, 1500);
    } catch (err) {
      //fallback in case exexCommand doesnt work
      alert("please press Ctrl/Cmd+C to copy");
    }
  }
}