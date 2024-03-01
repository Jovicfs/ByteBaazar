const  categorias = document.getElementById('categorias');
const menuCategorias = document.getElementById('menu-categorias');

categorias.addEventListener('click',(event) =>{
     if(menuCategorias.style.display === "none"){
          menuCategorias.style.display = "block"
     }
     else{
          menuCategorias.style.display ="none"
     }
});
