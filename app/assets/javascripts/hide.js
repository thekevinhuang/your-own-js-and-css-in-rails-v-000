function hideWhenClicked() {
  let ele = document.getElementById('hide_this')
  ele.style.display = "none"
}

document.getElementById('hide_this').addEventListener('click', hideWhenClicked())