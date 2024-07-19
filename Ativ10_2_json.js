// Atividade 10 - Base de Dados

import fs from 'fs';
import ler from 'readline-sync';
import cor from 'chalk';

export const arquivoJSON = 'Ativ10_dados.json';
let nome, idade, email;
let users = [];

if (!fs.existsSync(arquivoJSON)) {
    const inicio = [];
    fs.writeFileSync(arquivoJSON, JSON.stringify(inicio, null, 2), 'utf-8')
}

let usersJson = fs.readFileSync(arquivoJSON,'utf-8');
users = JSON.parse(usersJson);

export const cadastrar = () => {

    console.log(cor.cyan("~~~~~~~~~~~~~ CADASTRANDO USUARIO ~~~~~~~~~~~~~"));
    nome = ler.question(cor.blueBright("- Digite seu Nick de Jogador: "));
    idade = ler.questionInt(cor.blueBright("- Informe sua Idade: "));
    email = ler.questionEMail(cor.blueBright("- Informe seu E-mail: "));
    console.log(cor.cyan("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));

    let user_nome = users.some(user => user.nome === nome);
    let user_idade = users.some(user => user.idade === idade);
    let user_email = users.some(user => user.email === email);

    if (idade < 18) {
        console.log(cor.redBright("- SAI DAQUI! VAI ESTUDAR!"));
    }

    if (user_nome || user_idade || user_email) {
        console.log(cor.redBright("- ERRO! Revise seus Dados!"));
    } else {
        users.push({nome: nome, idade: idade, email: email, pontos: 0});
        fs.writeFileSync(arquivoJSON, JSON.stringify(users, null, 2), 'utf-8');
        console.log(cor.green("- Dados Gravados com Sucesso!!!"));   
    }
};

export const jogar = () => {

    let confNick = ler.question(cor.magenta("- Confirme seu Nick: "));
    let acharNome = users.some(user => user.nome === confNick);

    if (acharNome) {
        let aleatorio = Math.floor(Math.random() * 5 + 1);
        let check = true;
        console.log(cor.magentaBright("---------------- QUE COMECEM OS JOGOS!!! ----------------"));

        while (check) {
            let num = ler.questionInt(cor.magenta("- Advinhe um numero entre 1 e 50 ou 0 para SAIR: "));
            if (num === 0) {
                check = false;
            } else if (num === aleatorio) {
                console.log(cor.greenBright("ACERTOU !!!"));
                aleatorio = Math.floor(Math.random() * 5 + 1);

                let pontoNick = users.find(prod => prod.nome === confNick);
                pontoNick.pontos += 1;
                
                fs.writeFileSync(arquivoJSON, JSON.stringify(users, null, 2), 'utf-8');
                console.log(pontoNick);
            } else {
                console.log(cor.redBright("ERROU !!!"));
            }
        }
        console.log(cor.magentaBright("---------------------------------------------------------"));
    } else {
        console.log(cor.redBright("- Usuario não Encontrado. Faça o Cadastro:"));
        cadastrar();
    }
};

export const ranking = () => {
    let pontuacao = users.sort((x,y) => y.pontos - x.pontos);
    console.log(cor.yellowBright("~~~~~~~~~~~~~ RANKING GERAL ~~~~~~~~~~~~~"));
    for (let resultado of pontuacao) {
        console.log(cor.yellowBright("--------------------------------"));
        console.log(cor.yellowBright(`- Nick: ${resultado.nome} \n- Pontuação: ${resultado.pontos}`));
        console.log(cor.yellowBright("--------------------------------"));
    }
    console.log(cor.yellowBright("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
};

export const lista = () => {
    console.log(cor.cyan("~~~~~~~~~~~~~ LISTA DE USUÁRIOS ~~~~~~~~~~~~~"));
    users.forEach(user => console.log(
        `-----------------------------
         - Nome: ${user.nome} 
         - Idade: ${user.idade} 
         - E-mail: ${user.email}
        ------------------------------`
    ));
    console.log(cor.cyan("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
};