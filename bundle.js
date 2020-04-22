"use strict";

// EXERCICIO 1
// class Usuario {
//     constructor(email, senha){
//         this.email = email;
//         this.senha = senha;
//     }
//     isAdmin(){
//         if (this.admin === true) { 
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// class Admin extends Usuario {
//     constructor(email, senha){
//         super(email, senha);
//         this.admin = true;
//     }
// }
// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true
// console.log(Adm1);
// console.log(User1);
// EXERCICIO 2 :
// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
//    ];
//    const idade = usuarios.map(function(item){
//     console.log(item.idade)
//         return item.idade;
//    })
//    const filter = usuarios.filter(function(item){
//        return item.empresa === 'Rocketseat' && item.idade > 18;
//    })
//    console.log(filter)
//    const find = usuarios.find(function(item){
//        return item.empresa === "Google"
//    })
//    console.log(find);
//    var usuariosDobro = usuarios.map(function(item){
//         item.idade *= 2 
//         return item
//        })
//        usuariosDobro = usuariosDobro.filter((item)=>{
//            return item.idade < 50 
//        })       
//        console.log(usuariosDobro)
// 3.1
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

mostraIdade(usuario); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
