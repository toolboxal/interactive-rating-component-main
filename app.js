const radioButtons = document.querySelectorAll('.radio-input')
const radioLabels = document.querySelectorAll('.radio-label')
const submitBtn = document.querySelector('.btn')
const card = document.querySelector('.card')

let selectedItem = ''

const labels = [...radioLabels]
console.log(labels)

radioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedItem = button.id
    console.log(selectedItem)
    removeSelected()

    button.parentElement.firstElementChild.classList.add('selected')
  })
})

function removeSelected() {
  labels.forEach((label) => label.classList.remove('selected'))
}

submitBtn.addEventListener('click', function () {
  card.classList.add('second-card')
  card.innerHTML = `<div class="img-container">
  <img
    src="./images/illustration-thank-you.svg"
    class="illustration"
    alt="paid illustration"
  />
</div>
<div class="result">You selected ${selectedItem} out of 5</div>
<h2>Thank you!</h2>
<p>
  We appreciate you taking the time to give a rating. If you ever need
  more support, don’t hesitate to get in touch!
</p>`
})
