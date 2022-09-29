// Capturando variaveis
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btnLogin');

const users = ['academia', 'tassara', 'aluno', 'instrutor'];
const password = ['academia2015'];

// Função para logar no site
btnLogin.addEventListener('click', () => {

    if(users.includes(login.value) && password.includes(senha.value)){
    window.location.href = 'src/pages/home.html';
    } else
    alert('Dados incorretos, tente novamento.');

});
// Função para deslogar do site(presente apenas na página home)
function logOff() {
    window.location.href = '../../index.html';
}