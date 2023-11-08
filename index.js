
let heroName ="TrollSlayer";

let heroXp = ''
let nivel = ''

for (let l = 0; l <= 12000; l += 1000 ){
    heroXp = l;

    if (heroXp > 10000){
        nivel = "Radiante";
    }else if (heroXp >= 9001){
        nivel = " Imortal";
    }else if (heroXp >= 8001){
        nivel = "Ascendente";
    }else if (heroXp >= 7001){ 
        nivel = "Platina";
    }else if (heroXp >= 5001){
        nivel = "Ouro";
    }else if (heroXp >= 2001){
        nivel = "Prata";
    }else if(heroXp >= 1001){
        nivel = "Bonze";
    }else if (heroXp < 1000){
        nivel = "Ferro";
    }
}
console.log('Desafio Classificador de nível de Herói')
console.log('')
console.log(`O Herói de nome ${heroName} está no nível de ${nivel}.`)

/* 
if XP < 1000 = Ferro
if XP entre 1001 e 2000 = Bronze
if XP entre 2001 e 5000 = Prata
if XP entre 6001 e 7000 = Ouro
if Xp entre 7001 e 8000 = Platina Diamante
if XP entre 8001 e 9000 = Ascedente
if XP entre 9001 e 10000 = Imortal
if XP >= 10001 = Radiante
*/