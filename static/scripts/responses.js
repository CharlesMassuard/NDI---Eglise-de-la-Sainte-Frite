function getBotResponse(input) {
    // Simple responses
    input = input.toLowerCase()
    if (input == "salut")  {
        return "Salut, toi 👀";
    } else if (input == "hello") {
        return "Hello, you 👀";
    } else if (input == "*rien*") {
        texte = "Ce lien pourrait t'aider !"
        URL = "https://youtu.be/dQw4w9WgXcQ"
        return texte.link(URL);
    } else if (input == "memory") {
        texte = "Très bien, voici le memory !"
        URL = "memory/memory.html"
        return texte.link(URL);
    } else if (input == "space") {
        texte = "Très bien, voici le jeu 'space' !"
        URL = "space./space.html"
        return texte.link(URL)
    }else if (input == "comment faire un test ?") {
        return "Le test peut se faire de différentes façons : l'autotest, le TROD, réalisé par des associations ou services médicaux, par prise de sang. Il existe dans tout les départements français des lieux dédiées, les CEGIDD. Plus d'informations sur https://www.sida-info-service.org/comment-faire-un-test-du-vih/"
    } else if (input == "qu'est-ce qu'une ist ?") {
        return "Les infections sexuellement transmissibles (IST), autrefois appelées maladies sexuellement transmissibles (MST), sont des infections pouvant être transmises lors des relations sexuelles, avec ou sans pénétration. (ameli.fr)";
    } else if (input == "quand peut-on faire un test ?") {
        return "Un test peut-être fait lorsque vous n'avez jamais fait de test de dépistage, si vous ne vous protégez pas toujours lors de vos rapports, si vous envisagez une vie de couple, ou encore si vous avez déjà échangé du matériel d'injection de drogues";
    } else if (input == "comment se transmet le vih ?") {
        return "Le VIH peut se transmettre d'une personne contaminée à une autre lors de rapports sexuels non protégés avec pénétration, lors d'une fellation, par voie sanguine lors de partage de matériel d'injection, de la mère à l'enfant au cours de la grossesse ou de l'allaitement. Si vous avez eu un rapport avec une personne séropositive VIH, la transmission n'est pas systématique. Elle peut intervenir dès le premier rapport, lors d'un grand nombre de rapports ou ne pas avoir lieu du tout. Plus d'informations sur https://www.sida-info-service.org/comment-se-transmet-le-vih/"
    } else if (input == "c'est une bonne situation ?") {
        return "Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres, des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée… Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face, je dirais, le miroir qui vous aide à avancer. Alors ce n’est pas mon cas, comme je le disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie… Je ne suis qu’amour ! Et finalement, quand beaucoup de gens aujourd’hui me disent : « Mais comment fais-tu pour avoir cette humanité ? » Eh bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour, ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain, qui sait, peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi…";
    } else if (input == "help") {
        return "Afin de faciliter ton expérience, voici quelques conseils : tu peux me demander de t'emmener directement à un jeu que nous te proposons (memory ou space) ou encore me poser des questions sur les IST (Qu'est-ce qu'une IST ?, Quand peut-on faire un test ?, Comment faire un test ?, Comment se transmet le VIH ?)!"
    } else if (input == "aide") {
        return "Afin de faciliter ton expérience, voici quelques conseils : tu peux me demander de t'emmener directement à un jeu que nous te proposons (memory ou space) ou encore me poser des questions sur les IST (Qu'est-ce qu'une IST ?, Quand peut-on faire un test ?, Comment faire un test ?, Comment se transmet le VIH ?)!"
    } else {
        return "Oups ! Veuillez me poser une question telle qu'elle est indiquée, avec les espaces et le point d'interrogation, comme par exemple : 'Quand peut-on faire un test ?'";
    }
}