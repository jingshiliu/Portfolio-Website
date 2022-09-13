const emailSpan = document.querySelector(".contactMethods span")
const copiedNotification = document.querySelector('#copiedNotification')
emailSpan.addEventListener('click', e => {
    navigator.clipboard.writeText(emailSpan.innerText)
    copiedNotification.classList.toggle('notVisible')
    copiedNotification.classList.toggle('fadeInAnimation')
    setTimeout(() => {
        copiedNotification.classList.toggle('notVisible')
        copiedNotification.classList.toggle('fadeInAnimation')
    }, 1000)
})