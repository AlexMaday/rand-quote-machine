var quotations = 
[
   {
      "text":"The best way to predict the future is to design it.",
      "author":"Buckminster Fuller",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/bucky.jpg"
   },
   {
      "text":"Anyone who has never made a mistake, has never tried anything new.",
      "author":"Albert Einstein",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/einstein.jpg"
   },
   {
      "text":"Brevity is the soul of wit.",
      "author":"William Shakespeare",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/shakespeare.jpg"
   },
   {
      "text":"Originality is nothing but judicious imitation.",
      "author":"Voltaire",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/voltaire4.jpg"
   },
   {
      "text":"Everything should be made as simple as possible, but not simpler.",
      "author":"Albert Einstein",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/einstein.jpg"
   },
   {
      "text":"I have not failed, I've just found 10,000 ways that won't work.",
      "author":"Thomas Edison",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/edison.jpg"
   },
   {
      "text":"The unexamined life is not worth living.",
      "author":"Socrates",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/socrates.jpg"
   },
   {
      "text":"An essential element of any art is risk. If you don't take a risk then how are you going to make something really beautiful, that hasn't been seen before",
      "author":"Francis Ford Coppola",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/coppola.jpg"
   },
   {
      "text":"If you tell the truth, you don't have to remember anything",
      "author":"Mark Twain",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/twain.jpg"
   },
   {
      "text":"Always remember that you are absolutely unique. Just like everyone else.",
      "author":"Margaret Mead",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/mead.jpg"
   },
   {
       "text":"We do what we must, and call it by the best names.",
      "author":"Ralph Waldo Emerson",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/emerson.jpg"
   },
   {
      "text": "Ah, well, I am a great and sublime fool. But then I am God's fool, and all His works must be contemplated with respect.",
      "author": "Mark Twain",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/twain.jpg"
   },
   {
      "text": "Be the change that you wish to see in the world.",
      "author": "Mahatma Gandhi",
      "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/gandhi.jpg"
   },
   {
     "text": "They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety",
     "author": "Benjamin Franklin",
     "authorImage": "https://dl.dropboxusercontent.com/u/5729928/images/rqm/franklin.jpg"
   }
];
var quoteText = document.getElementById('quoteText');
var author = document.getElementById('author');
var authorImage = document.getElementById('authorImage');
var getQuote = document.getElementById('getQuote');

var lastChoice;
// replace quote contents
var newQuote = function() {
    var choice = Math.floor(Math.random() * quotations.length);
    
    // DRY - it's boring'
    while (choice != lastChoice) {
        choice = Math.floor(Math.random() * quotations.length);
        if (choice != lastChoice) { 
            lastChoice = choice;
            break;
        }
    }
    authorImage.src = quotations[choice]["authorImage"];
    quoteText.innerText = quotations[choice]["text"];
    author.innerHTML = quotations[choice]["author"];
    return true;
}

getQuote.addEventListener("click", newQuote);

document.onload = function() {

};