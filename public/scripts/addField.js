//procurar o botão
document.querySelector("#add-time")
.addEventListener('click',cloneField)
//Quando clicar no botão

//executar uma ação
function cloneField() {
   const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

   const fields = newFieldContainer.querySelectorAll("input")

  fields.forEach(function(field){
        field.value=""
  })

   document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
//duplicar os campos

//colocar na pagina