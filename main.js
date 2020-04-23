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


// Exercicios 3

// 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map((item) => {
//     return item + 10;
// });

// 3.2
// Dica: Utilize uma constante pra function
// const usuario = {
//     nome: 'Diego',
//     idade: 23
// };


// const mostraIdade = (usuario) => {
//     return usuario.idade;
// }

// mostraIdade(usuario)

// 3.3
// Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;

// const mostraUsuario = (nome = 'Diego', idade = 18) => {
//     return {
//         nome,
//         idade
//     };
// }
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));



// 3.4
// const promise = () => {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
//    }


// Exercicio 4

//    const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
//    };

//    const { nome } = empresa;

//    console.log(nome)



// function mostraInfo({nome , idade}) {
//     return `${nome} tem ${idade} anos.`;
//    }

//   console.log(mostraInfo({ nome: 'Rafaella', idade: 23 }))



// EXERCICIO 5
// const arr = [1, 2, 3, 4, 5, 6]

// const [ x, ...y ] = arr;

// console.log(x)

// console.log(y)

// function soma...

// function soma(...params) {
//     return params.reduce((total,next) => total + next);
// }

// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3


// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//     cidade: 'Rio do Sul',
//     uf: 'SC',
//     pais: 'Brasil',
//     }
//    };


// const usuario2= {...usuario, nome: 'Gabriel' }
// console.log(usuario2)

// const usuario3 = { ...usuario, endereco: {cidade: 'Lontras'}}
// console.log(usuario3)

// Exercicio 6


const usuario = 'Diego';
const idade = 23;
console.log(`O usuário  ${usuario}  possui ' ${idade}  anos`);


const nome = 'Diego';
const idade = 23;
const usuario4 = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};

console.log(usuario4)