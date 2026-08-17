const form = document.querySelector('#contactForm')
const note = document.querySelector('#formNote')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  form.reset()
  note.textContent = 'Thanks — your message is ready. We will be in touch soon.'
})
