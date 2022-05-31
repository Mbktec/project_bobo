const citation = document.querySelector('.ecrit');
const siuvant = document.querySelector('button');

/*let proVerbe = [
   ' "Le crocodile n\'attend pas que le gorille accouche" ',
   'L\'oiseau sur le baobab ne doit pas oublier qu\'il a porté des lunettes',
   '"Le Crocodile n\'attend pas que le gorille accouche !"',
   '"Celui qui mange ne mange pas que dans le mangeoir"',
   '"La rivière qui dort a oublié d’allumer son réveil "',
   '"Mobutu a eu le Léopard mais Bobo aura le crocodile"',
   '"L’oiseau sur le baobab ne doit pas oublié qu’il a porté des lunettes "'

]*/
const proVerbe = [
    {
      quote: "Le crocodile n'attend pas que le gorille accouche",
      author: "President BOBO",
    },
    {
      quote: "On as pas besoin d'eau potable pour eteindre un incendie",
      author: "President H.B",
    },
    {
      quote:
        "La France nous a souvent volé nos richesses... vous allez aussi nous voler nos footballeur ?",
      author: "President BOBO",
    },
    {
      quote:
        "L'oiseau sur le baobab ne doit pas oublier qu'il a porté des lunettes !",
      author: "President BOBO",
    },
    {
      quote:
        "Il est tombé comme du n'importe quoi, on dirait la girafe qui s'emmêle les pattes.",
      author: "President BOBO",
    },
    {
        quote:"Mobutu a eu le Léopard mais Bobo aura le crocodile",

        author:"President BOBO",

    },
    {
        quote:"Le Crocodile n\'attend pas que le gorille accouche !",

        author:"President BOBO",

    },
   
]

citation.innerHTML = `<p>${proVerbe[0].quote}</p>
<h4>- ${proVerbe[0].author}</h4>`;


siuvant.addEventListener('click', function(){

   // citation.innerText = proVerbe[Math.floor(Math.random()*proVerbe.length)];
   i = Math.floor(Math.random() * proVerbe.length);
   citation.innerHTML = `<p>${proVerbe[i].quote}</p>
         <h4>- ${proVerbe[i].author}</h4>`;
   
})