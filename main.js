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


const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


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



   var usuariosDobro = usuarios.map(function(item){
        item.idade *= 2 
        return item
       })
       
       usuariosDobro = usuariosDobro.filter((item)=>{
           return item.idade < 50 
       })

        // idades.forEach((x)=>{
        //     console.log(x < 50)
        // })       

       console.log(usuariosDobro)
       