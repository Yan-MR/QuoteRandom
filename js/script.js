function generate(){
    let quotes = {
        "Fernando Pessoa":"Uma família não é um grupo de parentes; é mais do que a afinidade do sangue, deve ser também uma afinidade de temperamento. Um homem de génio muitas vezes não tem família. Tem parentes"
        ,"José Luís N Martins":"Dois bons princípios de vida: a nossa indiferença e paz perante o que pensam acerca de nós; e, a tranquilidade de nunca termos de julgar ninguém."
        ,"Agostinho da Silva" : "Tu podes, com certeza, conviver com os outros, mas nunca seres os outros. Eles podem ser muito bons, mas tu és sempre melhor porque és diferente e o único com as tuas características"
    }
    let authors = Object.keys(quotes);
    let author = authors[Math.floor (Math.random() * authors.length)];
    let quote = quotes[author];

document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;
}