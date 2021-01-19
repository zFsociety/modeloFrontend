//só um exp
const pessoa = [{
    nome: 'ajaha', //vai vir do banco
    email: 'hauehuaehu', //vai vir do banco
    senha: '343734' // vai vir do  banco
}, {nome: 'ajaha', //vai vir do banco
email: 'hauehuaehu', //vai vir do banco
senha: '343734' // vai vir do  banco
},{nome: 'ajaha', //vai vir do banco
email: 'hauehuaehu', //vai vir do banco
senha: '343734' // vai vir do  banco
}]

 pessoa.forEach(function(e){
    e = document.getElementById('lista')
     e.innerHTML  += '<div>'+'<li>'+pessoa.nome+'<br>'+'<button id="excluir" onclick="Delete()"/>'+'</li>'+'<br>'+
    '<li>'+pessoa.email+'</li>'+' '+
    '<li>'+pessoa.senha+'</li>'+'</div>'
 })



 function Delete(){
     //crud
 }
    
