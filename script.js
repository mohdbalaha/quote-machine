window.onload = function () {
  let btn = document.getElementById("btn");
  let p = document.getElementById("quote");
  let a = document.getElementById("tweet");

  btn.onclick = function () {
    let rnd = Math.floor(Math.random() * quotes.length);
    let rndColor = Math.floor(Math.random() * colors.length);
    p.innerHTML = "<q>" + quotes[rnd] + "</q>";
    document.querySelector('body').style.backgroundColor = colors[rndColor];
    document.querySelector('p').style.color = colors[rndColor];
    document.querySelector('#btn').style.backgroundColor = colors[rndColor];
  }

  a.onclick = function () {
    this.setAttribute("href", 'https://twitter.com/intent/tweet?text=' + p.innerText);
  }

  let colors = ['#6cb1a9', '#001f3f', '#0074D9', '#7FDBFF', '#39CCCC', '#3D9970', '#2ECC40', '#01FF70', '#FFDC00', '#FF851B', '#FF4136', '#85144b', '#F012BE', '#B10DC9', '#111111', '#AAAAAA', '#DDDDDD'];

  let quotes = ['My life is my message. \n-Mahatma Gandhi',
    'Not how long, but how well you have lived is the main thing. -Seneca',
    'I love those who can smile in trouble… -Leonardo da Vinci',
    'Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying. If you love life, don’t waste time, for time is what life is made up of. -Bruce Lee',
    '  Life is what happens when you’re busy making other plans. -John Lennon',
    '  It is better to be hated for what you are than to be loved for what you are not. Andre Gide',
    'Dost thou love life? Then do not squander time, for that is the stuff life is made of. Benjamin Franklin',
    ' Very little is needed to make a happy life; it is all within yourself, in your way of thinking. Marcus Aurelius',
    'Life is like playing a violin in public and learning the instrument as one goes on. Samuel Butler',
    'In the end, it’s not the years in your life that count. It’s the life in your years. Abraham Lincoln',
    'You’ve gotta dance like there’s nobody watching. William W. Purkey',
    'Believe that life is worth living and your belief will help create the fact. William James',
    'Do not take life too seriously. You will never get out of it alive. Elbert Hubbard',
    'Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager. Susan Sontag',
    '  The heart, like the stomach, wants a varied diet. Gustave Flaubert',
    '  Get busy living or get busy dying. Stephen King Click to tweet',
    '  I tell you, in this world being a little crazy helps to keep you sane. Zsa Zsa Gabor',
    '  We know what we are, but know not what we may be. William Shakespeare',
    ' Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things. Kenneth Branagh',
    '  The trick in life is learning how to deal with it. Helen Mirren',
    '  Be happy for this moment. This moment is your life. Omar Khayyam',
    'Life is too important to be taken seriously. Oscar Wilde',
    '  What lies behind you and what lies in front of you, pales in comparison to what lies inside of you. Ralph Waldo Emerson',
    '  Don’t gain the world and lose your soul, wisdom is better than silver or gold. Bob Marley',
    '  I’m the one that’s got to die when it’s time for me to die, so let me live my life the way I want to. Bob Marley',
    ' To live is the rarest thing in the world. Most people exist, that is all. Oscar Wilde',
    'Anyone who lives within their means suffers from a lack of imagination. Oscar Wilde',
    ' Don’t cry because it’s over, smile because it happened. Ludwig Jacobowski'];

  document.getElementById("quote").innerText = quotes[0];
}