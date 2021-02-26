var box = document.getElementById('box');
var buttons = document.getElementById('buttons');

var questions = [

    {
        "id": 0, 
        "question": " You are Superman and you\'re at dinner with Lois Lane who doesn't know you\'re Superman. How do you leave?", "statement":"Brainiac Has attacked metropolis!",
        "image": "./media/maxresdefault.jpg",
        "answers": {
            "a": "A. Tell Lois you're not feeling well, and leave.",
            "b": "B. Tell Lois that you're Superman, and then leave.",
            "c": "C. Ditch Lois without explanation."
        }
    },
    {
        "id": 1,
        "question":"You\'re in the Superman suit and you\'re flying to fight Brainiac. Brainiac throws a car with kids in it into the ocean. How do you save them?",
        "statement": "You went to the restroom!",
        "image": "./media/unnamed.jpg",
        "answers": {
            "a": "A. Lift the car out of the water.",
            "b": "B. Freeze the water into a bridge for them to walk to land.",
            "c": "C. Don't save them. Just fight Brainiac. You're only one man."
        }
    },
    {
        "id": 2, 
        "question":"Brainiac takes over the minds of the police force and turns them into his army, which results in them arresting people without cause. What do you do now?",
        "statement": "Things get worse!",
        "image":"./media/SUPERMAN-PROTEST-1.jpg",
        "answers": {
            "a": "A. Use super speed to stop as many arrests as you can.",
            "b": "B. Find Brainiac.",
            "c": "C. Let the people deal with it."
        }
    },
    {
        "id": 3,
        "question": "He's got 100 trained ninjas under mind control, ready to fight you. How do you get to Brainiac?",
        "statement": "You arrive at Brainiac's headquarters!",
        "image": "./media/urj9w6bknhybtk5vaclp.jpg",
        "answers": {
            "a": "A. Fly around the men.",
            "b": "B. Fight the men.",
            "c": "C. Kill the men."
        } 
    },
    {
        "id": 4,
        "question": "You have a multitude of super powers to stop Brainiac with.You discover his mind control device that he uses to enslave all of Metropolis. Which power should you use to destroy it?",
        "statement": "You're ready to fight Brainiac!",
        "image": "./media/Superman_powers.png",
        "answers": {
            "a": "A. Heat Vision.",
            "b": "B. Freezer Breath.",
            "c": "C. Super Strength."
        } 
    },
    {
        "id": 5,
        "question": "Now you fight Brainiac. What powers do you use to fight him?",
        "statement": "You destroy the device!",
        "image": "./media/convergence20150401_CONV_Cv0_550cc3acd6be74.55783026_551de680db16c2.26274233.jpg",
        "answers": {
            "a": "A. Flight and Heat Vision.",
            "b": "B. Flight and Super Strength.",
            "c": "C. Flight and Ice Breath"
        } 
    },
    {
        "id": 6,
        "question": "He has you crippled. What do you do to even the playing field?",
        "statement": "Brainiac has kryptonite!",
        "image": "./media/kryptonite-main.jpg",
        "answers": {
            "a": "A. Use heat vision to desolve it.",
            "b": "B. Trick him into thinking your dead and then take him down.",
            "c": "C. Give up."
        } 
    },
    {
        "id": 7,
        "question": "How do you proceed?",
        "statement": "You have Brainiac under your foot!",
        "image": "./media/hqdefault.jpg",
        "answers": {
            "a": "A. Debilitate him. Make it so he can't use his brain powers again.",
            "b": "B. Hold him down until the cops apprehend him.",
            "c": "C. Kill him. He won't be a problem for Metropolis again."
        } 
    },
    {
        "id": 8,
        "question": "You defeated Brainiac, and the President wants to thank you on national TV. What do you do?",
        "statement": "The day is saved!",
        "image": "./media/SupermanWhiteHouse.jpg",
        "answers": {
            "a": "A. Go as Superman. Let the people celebrate you.",
            "b": "B. Go as Superman, but leave right afterwards.",
            "c": "C. Don't go. Keep your distance."
        } 
    },
];


var progress = [];

var questionIndex = 0;

window.onload(answer())



// page 1 functions
function answer(option) {
    console.log(option);
    progress.push(option)
    console.log(progress)
    console.log(questions[questionIndex]);

    if (questionIndex <= 8 ) {
        
        box.innerHTML = '<img src="' + questions[questionIndex].image + '" alt=""><h2>'+ questions[questionIndex].statement + '</h2> <p>' + questions[questionIndex].question + '</p>';

        buttons.innerHTML = '<div class="buttons1"> <button id="button1" onclick="  answer(\'a\')" class="button">' + questions[questionIndex].answers.a + '</   button> <button id="button2" onclick="answer(\'b\')" class="button">' +    questions[questionIndex].answers.b + '</button> </div> <div    class="buttons2"> <button id="button3" onclick="answer(\'c\')"     class="button">' + questions[questionIndex].answers.c + '</button></div>'

    }
    else{
        displayResults()
    }

    
    
    questionIndex++;

}

function displayResults() {

    var a = 0;
    var b = 0;
    var c = 0;
    var result = ""

    for (let index = 0; index < progress.length; index++) {
        const element = progress[index];
        if ( progress[index] == 'a') {
            a++;
            
        }else if ( progress[index] == 'b') {
            b++;
        }
        else if ( progress[index] == 'c') {
            c++
        }
    }

    if (a > b && a > c) {
        result = "Awesome"
        image = "./media/l176_11011553006253.webp"
        
    }else if (b > a && b > c) {
        result = "Good"
        image ="./media/l176_11011553006253.webp"
        
    }else if (c > a && c > b) {
        result = "Evil"
        image = "./media/Superman-black-suit-.jpg"
    }



    box.innerHTML = '<h2> You\'re a(n) ' + result + ' Superman! </h2> <img src="' + image + '" alt="">';

    buttons.innerHTML = ''

}





