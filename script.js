const questions = [
    {
        question: "Which console is best for high FPS gaming?",
        answers: ["PlayStation", "Xbox", "Nintendo Switch", "Gaming PC"],
        correct: "Gaming PC"
    },
    {
        question: "What does FPS stand for in gaming?",
        answers: ["First Person Shooter", "Frames Per Second", "Fast Play Settings", "Flick Precision Shot"],
        correct: "Frames Per Second"
    },
    {
        question: "Which game features the character 'Master Chief'?",
        answers: ["Halo", "Call of Duty", "Fortnite", "Destiny"],
        correct: "Halo"
    },
    {
        question: "In which game do you build using blocks in a 3D world?",
        answers: ["Roblox", "Minecraft", "Terraria", "LEGO Worlds"],
        correct: "Minecraft"
    },
    {
        question: "Which game series features 'Link' as the main character?",
        answers: ["Final Fantasy", "The Legend of Zelda", "Fire Emblem", "Elder Scrolls"],
        correct: "The Legend of Zelda"
    },
    {
        question: "What is the main objective in Among Us?",
        answers: ["Build a base", "Defeat all players", "Complete tasks or find the impostor", "Race to the end"],
        correct: "Complete tasks or find the impostor"
    },
    {
        question: "Which game is known for its 'Battle Royale' mode?",
        answers: ["Overwatch", "Apex Legends", "Valorant", "League of Legends"],
        correct: "Apex Legends"
    },
    {
        question: "Which popular game involves catching and training creatures?",
        answers: ["Yu-Gi-Oh!", "Monster Hunter", "Pokémon", "Digimon"],
        correct: "Pokémon"
    },
    {
        question: "What company created the PlayStation?",
        answers: ["Microsoft", "Sony", "Nintendo", "Sega"],
        correct: "Sony"
    },
    {
        question: "Which game allows players to create and manage an island village?",
        answers: ["Stardew Valley", "The Sims", "Animal Crossing", "Harvest Moon"],
        correct: "Animal Crossing"
    },
    {
        question: "Which game features a battle between terrorists and counter-terrorists?",
        answers: ["Call of Duty", "Valorant", "CS:GO", "Rainbow Six Siege"],
        correct: "CS:GO"
    },
    {
        question: "What color is the rarest loot tier in Fortnite?",
        answers: ["Green", "Blue", "Purple", "Gold"],
        correct: "Gold"
    }
];


// Variables to keep track of the current question and the score
let currentIndex = 0;
let score = 0;

// Getting references to elements in the HTML
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const resultSection = document.querySelector(".result-section");
const resultMessage = document.getElementById("result-message");

// Event listener for the Start button
startBtn.addEventListener("click", startQuiz);

// Event listener for the Next button
nextBtn.addEventListener("click", () => {
    currentIndex++;
    showQuestion();
});

// Event listener for the Restart button
restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;

    document.querySelector('.result-section').classList.add('hidden');
    document.querySelector('.quiz-section').classList.remove('hidden');
    startQuiz();
});

// Function to start the quiz
function startQuiz() {
    score = 0;
    currentIndex = 0;

    startBtn.classList.add("hidden");
    resultSection.classList.add("hidden");

    document.querySelector(".quiz-section").classList.remove("hidden");
    showQuestion();
}

// Function to display the current question and its answers
function showQuestion() {
    clearAnswers();

    const current = questions[currentIndex];
    questionText.textContent = current.question;

    current.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(answer);
        answersDiv.appendChild(btn);
    });

    nextBtn.classList.add("hidden");
}

// Function to check if the selected answer is correct
function checkAnswer(selected) {
    const correct = questions[currentIndex].correct;

    if (selected === correct) {
        score++;
    }

    // Disable all answer buttons and show correct/incorrect colors
    Array.from(answersDiv.children).forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correct) {
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "red";
        }
    });

    // Show Next button if there are more questions, otherwise show result
    if (currentIndex < questions.length - 1) {
        nextBtn.classList.remove("hidden");
    } else {
        showResult();
    }
}

// Function to show the final result after quiz is complete
function showResult() {
    document.querySelector(".quiz-section").classList.add("hidden");
    resultSection.classList.remove("hidden");
    resultMessage.textContent = `You scored ${score} out of ${questions.length}!`;
    restartBtn.classList.remove("hidden");
}

// Function to clear previous answers from the screen
function clearAnswers() {
    answersDiv.innerHTML = "";
}
