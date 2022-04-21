document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const button = document.querySelector('#button')

  button.addEventListener('click', handleButtonClick)

  const textinput = document.querySelector('#input')
  textinput.addEventListener('input', handleInput)

  const select = document.querySelector('#select')
  select.addEventListener('change', handleselectcum)

  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)
})

const handleButtonClick = function(){
  const resultParagraph = document.querySelector('#button-result')
  resultParagraph.textContent = "you have fucked the button, the button liked that, well done, good boy"
}
const handleInput = function(){
  const resultParagraph = document.querySelector('#input-result')
  resultParagraph.textContent = event.target.value
}
const handleselectcum = function(){
  const resultParagraph = document.querySelector('#select-result')
  resultParagraph.textContent = event.target.value + " is the cum you selected " 
}
const handleFormSubmit = function(event){
  event.preventDefault()
  const resultParagraph = document.querySelector('#form-result')
  resultParagraph.textContent = " Your pp lenth: " + event.target.pe_nis.value + " your cumshot distance: " + event
}