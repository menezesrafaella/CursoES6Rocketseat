// const minhaPromise = () => new Promise((resolve, reject) =>
//     setTimeout(() => {
//         resolve('OK')
//     }, 2000)
// )


// async function executaPromise() {
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())

// }

// const executaPromise = async () => {
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())
//     console.log(await minhaPromise())

// }

// executaPromise();


import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch (err) {
            console.warn('Erro na Api')
        }
    }
}

Api.getUserInfo('menezesrafaellaa')


// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));

}
umPorSegundo();

async function getUserFromGithub(user) {

    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (err) {
        console.warn("Errou")
    }

}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response)
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');


const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch (err) {
        console.warn('Erro ao efetuar a busca do usuário')
    }

}
buscaUsuario('diegoww3g');