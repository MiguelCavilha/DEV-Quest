/*let selectDeEstado = document.querySelector("select[name='estado']")

selectDeEstado.addEventListener('change', 
function(){
    alert('mudou o select')
})*/

document
.querySelector("select[name='estado']")
.addEventListener('change', function(event) {    
    alert('mudou o select')
});
