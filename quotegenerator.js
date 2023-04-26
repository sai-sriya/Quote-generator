let vquote = ['Life is ten percent what happens to you and ninety percent how you respond to it. - Charles Swindoll',
    'The journey of a thousand miles begins with one step. - Lao Tzu',
    'Happiness is not something readymade. It comes from your own actions. - Dalai Lama ',
    // 'Believe you can and you’re halfway there. - Theodore Roosevelt',
    'Everything you’ve ever wanted is on the other side of fear. - George Addair',
    'Happiness is not by chance, but by choice. - Jim Rohn',
    'Don’t Let Yesterday Take Up Too Much Of Today. - Will Rogers',
    // 'Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein',
    'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs',
    'Never regret anything that made you smile. - Mark Twain',
    'There is no substitute for hard work. - Thomas Edison ',
    'It hurt because it mattered. - John Green',
    'Every moment is a fresh beginning. - T.S Eliot',
    // 'Change the game, don’t let the game change you. - Macklemore.'
];
let x;
let a;
function generator() {
    x = Math.floor(Math.random() * 10);
    a = document.getElementById("quote");
    a.innerText = vquote[x];
    a.style.fontSize = "38px";
    a.style.color = "#fbefcc";


}

