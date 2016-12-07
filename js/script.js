var quotations = 
[
   {
      "text":"The best way to predict the future is to design it.",
      "author":"Buckminster Fuller",
      "authorImage": "./images/00.jpg"
   },
   {
      "text":"Anyone who has never made a mistake, has never tried anything new.",
      "author":"Albert Einstein",
      "authorImage": "./images/01.jpg"
   },
   {
      "text":"Brevity is the soul of wit.",
      "author":"William Shakespeare",
      "authorImage": "./images/02.jpg"
   },
   {
      "text":"Originality is nothing but judicious imitation.",
      "author":"Voltaire",
      "authorImage": "./images/03.jpg"
   },
   {
      "text":"Everything should be made as simple as possible, but not simpler.",
      "author":"Albert Einstein",
      "authorImage": "./images/01.jpg"
   },
   {
      "text":"I have not failed, I've just found 10,000 ways that won't work.",
      "author":"Thomas Edison",
      "authorImage": "./images/04.jpg"
   },
   {
      "text":"The unexamined life is not worth living.",
      "author":"Socrates",
      "authorImage": "./images/05.jpg"
   },
   {
      "text":"An essential element of any art is risk. If you don't take a risk then how are you going to make something really beautiful, that hasn't been seen before",
      "author":"Francis Ford Coppola",
      "authorImage": "./images/06.jpg"
   },
   {
      "text":"If you tell the truth, you don't have to remember anything",
      "author":"Mark Twain",
      "authorImage": "./images/07.jpg"
   },
   {
      "text":"Always remember that you are absolutely unique. Just like everyone else.",
      "author":"Margaret Mead",
      "authorImage": "./images/08.jpg"
   },
   {
       "text":"The only way to have a friend is to be one.",
      "author":"Ralph Waldo Emerson",
      "authorImage": "./images/09.jpg"
   },
   {
      "text": "Ah, well, I am a great and sublime fool. But then I am God's fool, and all His works must be contemplated with respect.",
      "author": "Mark Twain",
      "authorImage": "./images/07.jpg"
   },
   {
      "text": "Be the change that you wish to see in the world.",
      "author": "Mahatma Gandhi",
      "authorImage": "./images/10.jpg"
   },
   {
     "text": "They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety",
     "author": "Benjamin Franklin",
     "authorImage": "./images/11.jpg"
   },
   {
       "text": "Everyone should learn how to program a computer because it teaches you how to think.",
       "author": "Steve Jobs",
       "authorImage": "./images/12.jpg"
   }
];
var lastRandom = choice = 9; 
var quoteText = document.getElementById('quoteText');
var author = document.getElementById('author');
var authorImage = document.getElementById('authorImage');
var getQuote = document.getElementById('getQuote');
// var tweetText = document.getElementById('btnTweet');
var tweetText = document.getElementById("btnTweet");

// replace quote contents on page and twitter's data-text attribute 
var newQuote = function() {
    // var choice = Math.floor(Math.random() * quotations.length);
    do {
        choice = Math.floor(Math.random() * quotations.length);
        if (choice != lastRandom) { 
            lastRandom = choice;
            break;
        }
    } while (choice == lastRandom);
    authorImage.src = quotations[choice]["authorImage"];
    quoteText.innerText = quotations[choice]["text"];
    author.innerHTML = quotations[choice]["author"];

    this.blur();
    return false;
}

getQuote.addEventListener("click", newQuote);

// DUHHH - I need to set an event listener for the tweet button
tweetText.addEventListener("click", function() {
    debugger;
    tweetText.setAttribute('data-text', quotations[choice]["text"]);
});