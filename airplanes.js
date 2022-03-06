  
      function fn1(){
         
          var str = document.getElementById("username").value;
          var str1 = document.getElementById("password").value;


            if(str === 'nyambura' && str1 === "Nyambura1"){
                window.open("https://airtable.com/app5Bkw10cwQuLL3j/tblL35WZRPB9YOwfj/viwZC4ubhxIE0MGaY?blocks=hide");
            } 
                
            else if(str === 'Shwetajuenne' && str1 === "Shweta334"){
                window.open("https://airtable.com/shrSPRqmRyQnCjQJp");
            }
    
            else{
                window.open("https://youtube.com")
            }
        }
        var quotes = new Array();
     
        
        
        let writeRandomQuote = function () {
           
           quotes[0] = "Action is the real measure of intelligence.";
           quotes[1] = "Baseball has the great advantage over cricket of being sooner ended.";
           quotes[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.";
           quotes[3] = "A good head and a good heart are always a formidable combination.";
           var rand = Math.floor(Math.random()*quotes.length);
           document.write(quotes[rand]);
           
           
         }
         writeRandomQuote();
         const music = new Audio('sound.mp3');

              function sound(){
                music.play();
              }
    