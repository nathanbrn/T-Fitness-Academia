// Capturando variaveis
const login = document.getElementById('login');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btnLogin');
// Função para logar no site
function logar() {
    if(login.value == 'Academia' && senha.value == 'academia2015'){
        location.href = 'src/pages/home.html';
    }
    else{
        alert('Dados incorretos!');
    }
};
// Função para deslogar do site(presente apenas na página home)
function logOff() {
    window.location.href = '../../index.html';
}