function generate(){
    var quote= {
        " -Dalai Lama" : '"The purpose of our lives is to be happy"',
        "-John Lennon" : '"Life is what happens when you’re busy making other plans."',
        "-Stephen King" :'" Get busy living or get busy dying."',
        "-Steve Jobs" :'" our time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."',
        "-Babe Ruth" :'" Never let the fear of striking out keep you from playing the game."',
        "-Will Smith" :'" Money and success don’t change people; they merely amplify what is already there."',
        "-Socrates" :'" The unexamined life is not worth living."',
        "-Dolly Parton" :'" The way I see it, if you want the rainbow, you gotta put up with the rain."',
        "-LeBron James" :'" I like criticism. It makes you strong."',
        "-Celine Dion" :'" Life imposes things on you that you can’t control, but you still have the choice of how you’re going to live through this."'
    }
    var authors= Object.keys(quote);
    
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quotes= quote[author];
    document.getElementById("quote").innerHTML=quotes;
    document.getElementById("author").innerHTML=author;
}