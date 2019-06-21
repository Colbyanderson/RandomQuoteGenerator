var quotes = ["“I never dreamed about success. I worked for it.”- Estée Lauder",
"“A woman with a voice is, by definition, a strong woman.” – Melinda Gates",
"“A girl should be two things: who and what she wants.” – Coco Chanel",
"“I found that ultimately if you truly pour your heart into what you believe in — even if it makes you vulnerable — amazing things can and will happen.” – Emma Watson",
"“The way I see it, if you want the rainbow, you gotta put up with the rain!” – Dolly Parton",
"“We do not need magic to transform our world. We carry all of the power we need inside ourselves already.” – J.K. Rowling",
"“You can’t please everyone, and you can’t make everyone like you.” – Katie Couric",
"“Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.” – Gloria Steinem",
"“If you want something said, ask a man; if you want something done, ask a woman.” – Margaret Thatcher",
"“No one can make you feel inferior without your consent.” – Eleanor Roosevelt"
]
document.getElementById("button").innerHTML = "Get Quote!";
var button = document.getElementById("button");

var randomNum = Math.random();
var randomNumBig = randomNum * quotes.length;
var randomRound = Math.floor(randomNumBig);
// console.log(randomNum);
// console.log(randomNumBig);
// console.log(randomRound);
// console.log(quotes[randomRound]);

button.addEventListener ("click" , function(){
document.querySelector("h1").innerHTML = (quotes[Math.floor(Math.random() * 10)]);
});
