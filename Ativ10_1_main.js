// Atividade 10 - Main

import ler from 'readline-sync';
import cor from 'chalk';

import {cadastrar, jogar, lista, ranking} from './Ativ10_2_json.js';

let check = true;

while (check) {

    console.log(cor.cyan("~~~~~~~~~~~~~~~~~ LE BRIOCHE ADVINHAÇÃO ~~~~~~~~~~~~~~~~~"));
    console.log(cor.blue("- 1. Cadastrar Jogador ----------------------------------"));
    console.log(cor.blue("- 2. Jogar ----------------------------------------------"));
    console.log(cor.blue("- 3. Exibir Ranking -------------------------------------"));
    console.log(cor.blue("- 4. Exibir Lista de Usuáios ----------------------------"));
    console.log(cor.blue("- 5. Sair -----------------------------------------------"));
    console.log(cor.cyan("---------------------------------------------------------"));
    let opt = ler.questionInt(cor.magenta("=> "));

    switch (opt) {
        case 1:
            console.clear();
            cadastrar();
            break;
    
        case 2:
            console.clear();
            jogar();
            break;
    
        case 3:
            console.clear();
            ranking();
            break;

        case 4:
            console.clear();
            lista();
            break;
    
        case 5:
            console.clear();
            check = false;
            console.log(cor.redBright("- Saindo do Jogo....."));
            setTimeout(() => {
                console.log(cor.magenta("---------- Sistema Finalizado! ----------"));
            }, 3000);
            break;
    
        default:
            console.log(cor.red("--- Opção Inválida! ---"));
            break;
    }
}

console.clear();
console.log(cor.blueBright("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));
console.log(cor.blueBright("~~~ Obrigado por Jogar. Volte Sempre! ~~~"));
console.log(cor.blueBright("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"));