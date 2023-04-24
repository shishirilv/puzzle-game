let hm=new Map([
    [1,["salman khan","His last name is khan","He owns a charity named being human foundation","He is the host of a reality show","The person is unmarried","He was convicted of culpable homicide for neglecting driving case"]],
    [2,["hrithik roshan","His birthday is on 10th january and he is from bombay","His father is a film director","He has extra thumb on his right hand","he had a supporting role in a movie which stars shahrukh and amitabh bachan","he starred as a superhero"]],
    [3,["shahrukh khan","His last name is khan","He has a production company, based in mumbai","He is associated with a team in IPL","His birthday is on November 2","He has 3 children(2 boys, 1 girl)"]],
    [4,["prabhas","His first movie was released in 2002","He was born on October 23,1979","He is the first telugu actor receive a wax sculpture at madame Tussad's wax museum","He starred in the title role in a film, which became the first Indian film ever to gross over 1,000 croreINR"]],
    [5,["dhanush","He is an actor, producer, director, lyricist and playback singer who predominantly works in Tamil cinema","His real name is Venkatesh Prabhu Kasthuri Raja","He produces films through his production company, Wunderbar films","He married to a star's daughter and later they are separated","He is an ardent devotee of lord shiva"]],
    [6,["aamir khan","His last name is khan,he is an Indian actor, film director and producer who works in Hindi films","one of his film productions recieved an Academy Award nomination","He was honoured by the Government of India with the Padma Shri in 2003 and the Padma Bhushan in 2010, and received an honorary title from the Government of China in 2017","Look for a movie poster where the lead actor wearing a distinctive hat,pointing towards the treasure chest. The actor has a mole on his left cheek and is often referred as Mr.Perfecttionist","He created and hosted the television talk show"]]
]);
let n=Math.ceil(Math.random()*6);
//console.log(n)
let c1=document.getElementById("clu1");
let c2=document.getElementById("clu2");
let c3=document.getElementById("clu3");
let c4=document.getElementById("clu4");
let c5=document.getElementById("clu5");
var myNamespace={};
let msg=document.getElementById("msg");

var score=100;
var i=1;
localStorage.setItem("n",n);
function func1()
{
    
    c1.innerHTML="<h6 style='color:red;'>"+hm.get(n)[1]+"<h6>";

}
function func2()
{
    score=score-10;
    c2.innerHTML="<h6 style='color:red;'>"+hm.get(n)[2]+"<h6>";
}
function func3()
{
    score=score-10;
    c3.innerHTML="<h6 style='color:red;'>"+hm.get(n)[3]+"<h6>";
}
function func4()
{
    score=score-10;
    c4.innerHTML="<h6 style='color:red;'>"+hm.get(n)[4]+"<h6>";
}
function func5()
{
    score=score-10;
    c5.innerHTML="<h6 style='color:red;'>"+hm.get(n)[5]+"<h6>";
}
let res=document.getElementById("res");
function check()
{
    //console.log(score);
    let inp=document.getElementById("inp").value;
    //console.log(inp);
    if(inp==hm.get(n)[0])
    {
        localStorage.setItem("score",score)
        
        window.location.assign("http://127.0.0.1:8000/success/");
        
    }
    else
    {
        console.log("&&&&&&&&");
        //msg.textContent="Wrong answer";
        alert("Wrong answer....You have "+(3-i)+" attempts");
        score=score-20;
        i=i+1;
        if(i>=4)
        {
            window.location.assign("http://127.0.0.1:8000/fail/");
        }
    }
    
}
