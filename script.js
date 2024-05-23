function toggleMode() {
    const body = document.body
    body.classList.toggle("light")
  
  // (mostrando oque o codigo acima faz)
  // if(body.classList.contains('light')) {
  //     body.classList.remove('light')   
  // } else {
  //     body.classList.add('light')
  // } 

    const img = document.querySelector("#profile img")
    
    if (body.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')
      
    } else {
        img.setAttribute ('src', './assets/avatar.png')
    }
    
  

  
    

}