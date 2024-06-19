const secondContainer = document.getElementById('second-container')
const nobtn = document.getElementById('nobtn')
const yesbtn = document.getElementById('yesbtn')
const Text = document.getElementById('text')

nobtn.addEventListener('mouseenter', function(){
  secondContainer.classList.toggle('reverse')
})
yesbtn.addEventListener('click', function(){
  Text.textContent = 'Meet me at 12:30 pm in classroom (208) 🤪😎  '
})
