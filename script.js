let arr=['What falls, but never needs a bandage? The rain.',
         'I was going to tell you a joke about boxing but I forgot the punch line.',
         'Im not a fan of spring cleaning. Lets be honest, Im not into summer, fall, or winter cleaning either.',
         'Why did the egg hide? It was a little chicken.',
         'What did the dirt say to the rain? If you keep this up, my name will be mud!',
         'Why couldnt the sunflower ride its bike? It lost its petals.',
         'Whats an eggs favorite vacation spot? New Yolk City.',
         'I ate a sock yesterday. It was very time-consuming.',
         'What kind of candy do astronauts like? Mars bars.',
         'I wanted to buy some camo pants but couldnt find any.',
         'I ordered a chicken and an egg from Amazon. Ill let you know.',
         'What month is the shortest of the year? May, it only has three letters.',
         'What did the snail who was riding on the turtles back say? Wheeeee!',
         'I was going to tell a time traveling joke, but you guys didnt like it.',
         'What do you call a lazy kangaroo? A pouch potato.',
         'I used to run a dating service for chickens, but I was struggling to make hens meet.',
         'Why do we tell actors to "break a leg?" Because every play has a cast.',
         'What does a pig put on dry skin? Oinkment.',
         'What do you call it when a snowman throws a tantrum? A meltdown.',
         'My uncle named his dogs Timex and Rolex. Theyre his watch dogs.',
         'Did you hear about the guy whose left side was cut off? Hes all right now.',
         'How do you open a banana? With a mon-key.'];

let joke=arr[Math.floor(Math.random() * arr.length)];

let jContainer= document.getElementById("jokeC").firstElementChild

let nButton = document.getElementById("jButtn")
 
nButton.addEventListener('click',jChange)
function jChange(e){
  jContainer.innerHTML=joke;
  }
 

