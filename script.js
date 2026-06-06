// ======================
// QUESTION BANKS
// ======================

const mathQuestions = [
    { question: "15 + 27", answer: "42" },
    { question: "18 + 24", answer: "42" },
    { question: "50 - 17", answer: "33" },
    { question: "12 × 4", answer: "48" },
    { question: "81 ÷ 9", answer: "9" },
    { question: "100 - 45", answer: "55" },
    { question: "11 × 6", answer: "66" },
    { question: "25 + 15", answer: "40" },
    { question: "90 - 35", answer: "55" },
    { question: "14 × 3", answer: "42" },
    { question: "64 ÷ 8", answer: "8" },
    { question: "7 × 9", answer: "63" },
    { question: "45 + 18", answer: "63" },
    { question: "72 ÷ 9", answer: "8" },
    { question: "36 + 19", answer: "55" },
    { question: "13 × 5", answer: "65" },
    { question: "120 - 48", answer: "72" },
    { question: "16 × 4", answer: "64" },
    { question: "144 ÷ 12", answer: "12" },
    { question: "39 + 26", answer: "65" },
    { question: "88 - 29", answer: "59" },
    { question: "21 × 3", answer: "63" },
    { question: "99 ÷ 11", answer: "9" },
    { question: "17 + 28", answer: "45" },
    { question: "54 - 18", answer: "36" },
    { question: "8 × 8", answer: "64" },
    { question: "121 ÷ 11", answer: "11" },
    { question: "31 + 44", answer: "75" },
    { question: "75 - 26", answer: "49" },
    { question: "15 × 5", answer: "75" }
];

const logicQuestions = [
    { question: "2, 4, 8, 16, ?", answer: "32" },
    { question: "1, 3, 5, 7, ?", answer: "9" },
    { question: "10, 20, 30, ?", answer: "40" },
    { question: "5, 10, 15, ?", answer: "20" },
    { question: "3, 6, 9, ?", answer: "12" },
    { question: "1, 4, 9, 16, ?", answer: "25" },
    { question: "2, 6, 18, ?", answer: "54" },

    { question: "4, 8, 12, 16, ?", answer: "20" },
    { question: "5, 10, 20, 40, ?", answer: "80" },
    { question: "100, 90, 80, ?", answer: "70" },
    { question: "7, 14, 21, ?", answer: "28" },
    { question: "1, 2, 4, 8, ?", answer: "16" },
    { question: "9, 18, 27, ?", answer: "36" },
    { question: "12, 24, 36, ?", answer: "48" },
    { question: "6, 12, 18, ?", answer: "24" },
    { question: "8, 16, 24, ?", answer: "32" },
    { question: "11, 22, 33, ?", answer: "44" },
    { question: "13, 26, 39, ?", answer: "52" },
    { question: "20, 18, 16, ?", answer: "14" },
    { question: "50, 45, 40, ?", answer: "35" },
    { question: "100, 95, 90, ?", answer: "85" },
    { question: "2, 5, 8, 11, ?", answer: "14" },
    { question: "1, 8, 27, 64, ?", answer: "125" },
    { question: "25, 20, 15, ?", answer: "10" },
    { question: "14, 28, 42, ?", answer: "56" },
    { question: "30, 60, 90, ?", answer: "120" },
    { question: "2, 3, 5, 8, 13, ?", answer: "21" },
    { question: "1, 1, 2, 3, 5, ?", answer: "8" },
    { question: "3, 9, 27, ?", answer: "81" },
    { question: "64, 32, 16, ?", answer: "8" }
];

const riddleQuestions = [

    {
    question: "I speak without a mouth. I hear without ears. What am I?",
    answer: "echo",
    hint: "You often hear it in mountains or empty places."
},

{
    question: "What has keys but can't open locks?",
    answer: "piano",
    hint: "It is a musical instrument."
},

{
    question: "What gets wetter as it dries?",
    answer: "towel",
    hint: "You use it after bathing."
},

{
    question: "What has one eye but cannot see?",
    answer: "needle",
    hint: "It is used for sewing."
},

{
    question: "What has hands but cannot clap?",
    answer: "clock",
    hint: "It tells time."
},

{
    question: "What can travel around the world while staying in a corner?",
    answer: "stamp",
    hint: "You'll find it on an envelope."
},

{
    question: "What has a neck but no head?",
    answer: "bottle",
    hint: "You drink from it."
},

{
    question: "What has many teeth but cannot bite?",
    answer: "comb",
    hint: "Used for hair."
},

{
    question: "What goes up but never comes down?",
    answer: "age",
    hint: "Everyone gets more of it every year."
},

{
    question: "What has four wheels and flies?",
    answer: "garbage truck",
    hint: "The flies are insects."
},

{
    question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answer: "m",
    hint: "Think about letters, not time."
},

{
    question: "What begins with T, ends with T and has T in it?",
    answer: "teapot",
    hint: "Used for making tea."
},

{
    question: "What is full of holes but still holds water?",
    answer: "sponge",
    hint: "Found near sinks and bathrooms."
},

{
    question: "What has a head and a tail but no body?",
    answer: "coin",
    hint: "Used as money."
},

{
    question: "What kind of room has no doors or windows?",
    answer: "mushroom",
    hint: "It's actually a fungus."
},

{
    question: "What can you catch but not throw?",
    answer: "cold",
    hint: "People get it in winter."
},

{
    question: "What has an eye but cannot see?",
    answer: "hurricane",
    hint: "A powerful storm."
},

{
    question: "What belongs to you but others use it more than you do?",
    answer: "name",
    hint: "People call you by it."
},

{
    question: "What gets bigger the more you take away from it?",
    answer: "hole",
    hint: "Digging makes it larger."
},

{
    question: "What can run but never walks?",
    answer: "water",
    hint: "Found in rivers."
},

{
    question: "What has cities but no houses?",
    answer: "map",
    hint: "Used for navigation."
},

{
    question: "What has words but never speaks?",
    answer: "book",
    hint: "You read it."
},

{
    question: "What is always in front of you but can't be seen?",
    answer: "future",
    hint: "It hasn't happened yet."
},

{
    question: "What breaks yet never falls?",
    answer: "day",
    hint: "It starts every morning."
},

{
    question: "What falls yet never breaks?",
    answer: "night",
    hint: "It arrives every evening."
},

{
    question: "What can fill a room but takes no space?",
    answer: "light",
    hint: "It helps you see."
},

{
    question: "What has one thumb and four fingers but isn't alive?",
    answer: "glove",
    hint: "You wear it on your hand."
},

{
    question: "What invention lets you look through a wall?",
    answer: "window",
    hint: "It's part of a house."
},

{
    question: "What has legs but cannot walk?",
    answer: "table",
    hint: "Furniture."
},

{
    question: "What can you hold without touching it?",
    answer: "breath",
    hint: "You do it every second."
},

{
    question: "What is so fragile that saying its name breaks it?",
    answer: "silence",
    hint: "Speaking destroys it."
},

{
    question: "What has an endless supply of letters but starts empty?",
    answer: "mailbox",
    hint: "Letters are delivered to it."
},

{
    question: "What can be cracked, made, told, and played?",
    answer: "joke",
    hint: "It makes people laugh."
}

];

// ======================
// VARIABLES
// ======================

let score = 0;

let totalSolvedThisGame = 0;

let selectedDifficulty = "";

let timeLeft = 300;

let timerInterval;

let currentMathQuestion;
let mathQuestionsSolved = 0;
let usedMathQuestions = [];

let currentLogicQuestion;
let logicQuestionsSolved = 0;
let usedLogicQuestions = [];

let currentRiddleQuestion;

let riddleQuestionsSolved = 0;

let usedRiddleQuestions = [];

let hintUsed = false;

let digit1;
let digit2;
let digit3;

let memorySequence = "";

let usedAnyHint = false;

let achievements = [];

// ======================
// GAME START
// ======================

function startGame()
{

    score = 0;

totalSolvedThisGame = 0;

usedAnyHint = false;

achievements = [];

hintUsed = false;

updateProgress(0);

    let gamesPlayed =
    parseInt(
        localStorage.getItem("gamesPlayed")
    ) || 0;

gamesPlayed++;

localStorage.setItem(
    "gamesPlayed",
    gamesPlayed
);


    digit1 = Math.floor(Math.random() * 9) + 1;
digit2 = Math.floor(Math.random() * 9) + 1;
digit3 = Math.floor(Math.random() * 9) + 1;

timeLeft =
    parseInt(
        document.getElementById("difficulty").value
    );

    selectedDifficulty =
    document.getElementById("difficulty")
    .options[
        document.getElementById("difficulty").selectedIndex
    ].text;

    let record =
    localStorage.getItem(
        "record_" + selectedDifficulty
    );

if(record)
{
    document.getElementById("recordDisplay").innerHTML =
        "🏆 Record: " + record + "s";
}
else
{
    document.getElementById("recordDisplay").innerHTML =
        "🏆 No Record Yet";
}

    document.getElementById("timer").innerHTML =
    "Time Left: " + timeLeft + "s";

    document.getElementById("startScreen").style.display = "none";

    document.getElementById("level1").style.display = "block";

    loadMathQuestion();

    startTimer();
}

// ======================
// LEVEL 1
// ======================

function loadMathQuestion()
{
    let availableQuestions =
        mathQuestions.filter(
            q => !usedMathQuestions.includes(q)
        );

    let randomIndex =
        Math.floor(Math.random() * availableQuestions.length);

    currentMathQuestion =
        availableQuestions[randomIndex];

    usedMathQuestions.push(currentMathQuestion);

    document.getElementById("mathQuestion").innerHTML =
        currentMathQuestion.question;

    document.getElementById("mathCounter").innerHTML =
        "Question " + (mathQuestionsSolved + 1) + " / 5";
}

function checkAnswer()
{
    let userAnswer =
        document.getElementById("answer").value;

    if(userAnswer == currentMathQuestion.answer)
    {

        totalSolvedThisGame++;

        document.getElementById("correctSound").play();

        document.getElementById("answer")
    .classList.add("correctGlow");

setTimeout(function()
{
    document.getElementById("answer")
        .classList.remove("correctGlow");
}, 800);

        mathQuestionsSolved++;

        totalSolvedThisGame++;

        document.getElementById("answer").value = "";

        if(mathQuestionsSolved < 5)
        {
            loadMathQuestion();
        }
        else
        {
            document.body.classList.add("levelComplete");

setTimeout(function()
{
    document.body.classList.remove("levelComplete");
}, 1000);

document.getElementById("levelupSound").play();

            alert("Level 1 Complete! 🎉\n\nSecret Digit = " + digit1);

            updateScore(10);

            updateProgress(25);

            document.getElementById("level1").style.display = "none";

            document.getElementById("level2").style.display = "block";

            loadLogicQuestion();
        }
    }
   else
{
    score--;

    document.getElementById("wrongSound").play();

    document.getElementById("score").innerHTML =
        "Score: " + score;

    document.getElementById("answer")
    .classList.add("wrongShake");

setTimeout(function()
{
    document.getElementById("answer")
        .classList.remove("wrongShake");

    alert("❌ Wrong Answer! (-1 Point)");

}, 500);
}
}

// ======================
// LEVEL 2
// ======================

function loadLogicQuestion()
{
    let availableQuestions =
        logicQuestions.filter(
            q => !usedLogicQuestions.includes(q)
        );

    let randomIndex =
        Math.floor(Math.random() * availableQuestions.length);

    currentLogicQuestion =
        availableQuestions[randomIndex];

    usedLogicQuestions.push(currentLogicQuestion);

    document.getElementById("logicQuestion").innerHTML =
        currentLogicQuestion.question;

    document.getElementById("logicCounter").innerHTML =
        "Question " + (logicQuestionsSolved + 1) + " / 5";
}

function checkLevel2()
{
    let userAnswer =
        document.getElementById("answer2").value;

    if(userAnswer == currentLogicQuestion.answer)
    {

        document.getElementById("correctSound").play();

        logicQuestionsSolved++;

        totalSolvedThisGame++;

        document.getElementById("answer2").value = "";

        if(logicQuestionsSolved < 5)
        {
            loadLogicQuestion();
        }
        else
        {
            document.body.classList.add("levelComplete");

setTimeout(function()
{
    document.body.classList.remove("levelComplete");
}, 1000);

document.getElementById("levelupSound").play();


            alert("Level 2 Complete! 🎉\n\nSecret Digit = " + digit2);

            updateScore(10);

            updateProgress(50);

            document.getElementById("level2").style.display = "none";

            document.getElementById("level3").style.display = "block";

loadRiddleQuestion();
        }
    }
    else
{
    score--;

    document.getElementById("wrongSound").play();

    document.getElementById("score").innerHTML =
        "Score: " + score;

    document.getElementById("answer2")
    .classList.add("wrongShake");

setTimeout(function()
{
    document.getElementById("answer2")
        .classList.remove("wrongShake");

    alert("❌ Wrong Answer! (-1 Point)");

}, 500);
}
}
function loadRiddleQuestion()
{
    let availableQuestions =
        riddleQuestions.filter(
            q => !usedRiddleQuestions.includes(q)
        );

    let randomIndex =
        Math.floor(Math.random() * availableQuestions.length);

    currentRiddleQuestion =
        availableQuestions[randomIndex];

    usedRiddleQuestions.push(currentRiddleQuestion);

    document.getElementById("riddleQuestion").innerHTML =
    currentRiddleQuestion.question;

document.getElementById("hintText").innerHTML = "";

hintUsed = false;

document.getElementById("riddleCounter").innerHTML =
    "Question " + (riddleQuestionsSolved + 1) + " / 5";
}
// ======================
// LEVEL 3
// ======================

function checkLevel3()
{
    let userAnswer =
    document.getElementById("answer3").value
    .trim()
    .toLowerCase();

    if(userAnswer == currentRiddleQuestion.answer)
    {

        document.getElementById("correctSound").play();

        riddleQuestionsSolved++;

        totalSolvedThisGame++;

        document.getElementById("answer3").value = "";

        if(riddleQuestionsSolved < 5)
        {
            loadRiddleQuestion();
        }
        else
        {
            document.body.classList.add("levelComplete");

setTimeout(function()
{
    document.body.classList.remove("levelComplete");
}, 1000);


document.getElementById("levelupSound").play();

            alert("Level 3 Complete! 🎉\n\nSecret Digit = " + digit3);

            updateScore(10);

            updateProgress(75);

            document.getElementById("level3").style.display = "none";

document.getElementById("memoryLevel").style.display =
    "block";

loadMemoryLevel();
        }
    }
    else
{
    score--;

    document.getElementById("wrongSound").play();

    document.getElementById("score").innerHTML =
        "Score: " + score;

    document.getElementById("answer3")
    .classList.add("wrongShake");

setTimeout(function()
{
    document.getElementById("answer3")
        .classList.remove("wrongShake");

    alert("❌ Wrong Answer! (-1 Point)");

}, 500);
}
}

function loadMemoryLevel()
{
    memorySequence = "";

    for(let i = 0; i < 5; i++)
    {
        memorySequence +=
            Math.floor(Math.random() * 10);
    }

    document.getElementById("memorySequence").innerHTML =
        memorySequence.split("").join(" ");

    setTimeout(function()
    {
        document.getElementById("memorySequence").innerHTML =
            "❓ Enter the sequence";
    }, 5000);
}

function checkMemory()
{
    let answer =
        document.getElementById("memoryAnswer").value;

    if(answer == memorySequence)
    {
        totalSolvedThisGame++;

        alert(
            "🧠 Memory Chamber Complete!"
        );

        updateScore(10);

        updateProgress(100);

        document.getElementById("memoryLevel").style.display =
            "none";

        document.getElementById("vault").style.display =
            "block";
    }
    else
    {
        alert(
            "❌ Wrong Sequence!"
        );
    }
}

// ======================
// VAULT
// ======================

function checkVault()
{
    let code =
        document.getElementById("vaultCode").value;

    let correctCode =
    digit1.toString() +
    digit2.toString() +
    digit3.toString();

if(code == correctCode)
    {

        let gamesWon =
    parseInt(
        localStorage.getItem("gamesWon")
    ) || 0;

gamesWon++;

localStorage.setItem(
    "gamesWon",
    gamesWon
);

let totalSolved =
    parseInt(
        localStorage.getItem("totalSolved")
    ) || 0;

totalSolved += totalSolvedThisGame;

localStorage.setItem(
    "totalSolved",
    totalSolved
);

        document.getElementById("unlockSound").play();


        clearInterval(timerInterval);

        document.getElementById("finalScore").innerHTML =
            "Final Score: " + score;

            let startingTime =
    parseInt(
        document.getElementById("difficulty").value
    );

let escapeTime =
    startingTime - timeLeft;

    let fastestEver =
    localStorage.getItem("fastestEver");

if(
    fastestEver === null ||
    escapeTime < parseInt(fastestEver)
)
{
    localStorage.setItem(
        "fastestEver",
        escapeTime
    );
}
            
            document.getElementById("escapeTime").innerHTML =
    "⏱ Escape Time: " + escapeTime + "s";

    document.getElementById("victoryDifficulty").innerHTML =
    "🎯 Difficulty: " + selectedDifficulty;

let currentRecord =
    localStorage.getItem(
        "record_" + selectedDifficulty
    );

if(
    currentRecord === null ||
    escapeTime < parseInt(currentRecord)
)
{
    localStorage.setItem(
        "record_" + selectedDifficulty,
        escapeTime
    );
}

let bestRecord =
    localStorage.getItem(
        "record_" + selectedDifficulty
    );

document.getElementById("victoryRecord").innerHTML =
    "🏅 Best Record: " + bestRecord + "s";

            let medalText = "";

if(timeLeft >= 180)
{
    medalText = "🥇 Gold Master Escape Artist";
}
else if(timeLeft >= 90)
{
    medalText = "🥈 Silver Escape Artist";
}
else
{
    medalText = "🥉 Bronze Escape Artist";
}

document.getElementById("medal").innerHTML =
    medalText;

    achievements = [];

    if(!usedAnyHint)
{
    achievements.push(
        "🏅 No Hint Master"
    );
}

if(escapeTime <= 60)
{
    achievements.push(
        "⚡ Speed Runner"
    );
}

if(score >= 40)
{
    achievements.push(
        "🧠 Perfect Score"
    );
}

if(selectedDifficulty == "Hard")
{
    achievements.push(
        "🎯 Hard Mode Champion"
    );
}

if(
    !usedAnyHint &&
    score >= 40 &&
    selectedDifficulty == "Hard"
)
{
    achievements.push(
        "👑 Ultimate Escapist"
    );
}

document.getElementById("achievements").innerHTML =
    achievements.join("<br>");

let gamesPlayed =
    parseInt(
        localStorage.getItem("gamesPlayed")
    ) || 0;

    
let winRate = 0;

if(gamesPlayed > 0)
{
    winRate =
        Math.round(
            (gamesWon / gamesPlayed) * 100
        );
}

    document.getElementById("statsDisplay").innerHTML =

    "Games Played: " +
    localStorage.getItem("gamesPlayed") +

    "<br><br>" +

    "Games Won: " +
    localStorage.getItem("gamesWon") +

    "<br><br>" +

    "Questions Solved: " +
    localStorage.getItem("totalSolved") +

    "<br><br>" +

    "🏆 Fastest Escape Ever: " +
    localStorage.getItem("fastestEver") + "s" +

    "<br><br>" +

    "📈 Win Rate: " +
    winRate + "%";

        document.getElementById("vault").style.display = "none";

setTimeout(function()
{
    document.getElementById("victory").style.display = "block";

    document.getElementById("victorySound").play();

    document.getElementById("victoryTitle")
        .classList.add("victoryPulse");

}, 1000);
    }
    else
    {
        alert("Incorrect Code!");
    }
}

function updateProgress(percent)
{
    document.getElementById("progressBar").style.width =
        percent + "%";

    document.getElementById("progressText").innerHTML =
        "Progress: " + percent + "%";
}


// ======================
// SCORE
// ======================

function updateScore(points)
{
    score += points;

    document.getElementById("score").innerHTML =
        "Score: " + score;
}

// ======================
// TIMER
// ======================

function startTimer()
{
    timerInterval = setInterval(function()
    {
        timeLeft--;

        document.getElementById("timer").innerHTML =
            "Time Left: " + timeLeft + "s";

        if(timeLeft <= 0)
{
    clearInterval(timerInterval);

    document.getElementById("timeupSound").play();

    setTimeout(function()
    {
        document.getElementById("level1").style.display = "none";

        document.getElementById("level2").style.display = "none";

        document.getElementById("level3").style.display = "none";

        document.getElementById("memoryLevel").style.display = "none";

        document.getElementById("vault").style.display = "none";

        document.getElementById("gameOver").style.display = "block";

        document.getElementById("gameOverScore").innerHTML =
            "Final Score: " + score;

            document.getElementById("gameOverDifficulty").innerHTML =
    "Difficulty: " + selectedDifficulty;

    let record =
    localStorage.getItem(
        "record_" + selectedDifficulty
    );

if(record)
{
    document.getElementById("gameOverRecord").innerHTML =
        "🏆 Best Record: " + record + "s";
}

    }, 1500);
}

    }, 1000);
}

function playAgain()
{
    location.reload();
}

function showHint()
{
    if(!hintUsed)
    {

        usedAnyHint = true;

        score -= 3;

        document.getElementById("score").innerHTML =
            "Score: " + score;

        hintUsed = true;
    }

    document.getElementById("hintText").innerHTML =
        "💡 Hint: " + currentRiddleQuestion.hint;
}