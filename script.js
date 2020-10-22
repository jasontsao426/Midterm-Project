const directories = document.querySelectorAll('[data-directory-target]')
const directoryContents = document.querySelectorAll('[data-directory-content]')
directories.forEach(directory=> {
directory.addEventListener('click', () =>{
    const target = document.querySelector(directory.dataset.directoryTarget)
    directoryContents.forEach(directoryContent => {
      directoryContent.classList.remove('active')
    })
    directories.forEach(directory=> {
      directory.classList.remove('active')
    })
    directory.classList.add('active')
    target.classList.add('active')
  })
})
