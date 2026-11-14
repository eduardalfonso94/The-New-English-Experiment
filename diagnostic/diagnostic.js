
/* ==========================================
   THE NEW LANGUAGE EXPERIMENT
   ADAPTIVE ENGLISH PLACEMENT TEST
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // 1. HTML ELEMENTS
    // ======================================

    const introSection = document.getElementById("diagnostic-intro");
    const instructionsSection = document.getElementById("test-instructions");
    const testSection = document.getElementById("test-interface");
    const resultsSection = document.getElementById("test-results");

    const startButton = document.getElementById("startTestButton");
    const nextButton = document.getElementById("nextQuestionButton");
    const restartButton = document.getElementById("restartTestButton");

    const questionCounter = document.getElementById("questionCounter");
    const questionLevel = document.getElementById("questionLevel");
    const questionText = document.getElementById("questionText");
    const answerOptions = document.getElementById("answerOptions");

    const progressTrack = document.getElementById("progressTrack");
    const progressFill = document.getElementById("progressFill");

    const resultLevel = document.getElementById("resultLevel");
    const resultDescription = document.getElementById("resultDescription");

    // ======================================
    // 2. LEVEL CONFIGURATION
    // ======================================

    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

    const MAX_QUESTIONS = 12;

    let currentLevelIndex = 2; // B1
    let currentQuestion = null;
    let selectedAnswer = null;

    let questionNumber = 0;
    let correctAnswers = 0;

    let usedQuestions = new Set();
    let answerHistory = [];

    // ======================================
    // 3. QUESTION BANK
    // ======================================

    const questionBank = [

        // ---------- A1 ----------

        {
            id: 1,
            level: "A1",
            question: "She ___ a teacher.",
            options: ["am", "is", "are", "be"],
            correct: 1
        },
        {
            id: 2,
            level: "A1",
            question: "I ___ from Colombia.",
            options: ["is", "are", "am", "be"],
            correct: 2
        },
        {
            id: 3,
            level: "A1",
            question: "They ___ two brothers.",
            options: ["has", "have", "having", "had"],
            correct: 1
        },
        {
            id: 4,
            level: "A1",
            question: "What time ___ you get up?",
            options: ["does", "are", "do", "is"],
            correct: 2
        },
        {
            id: 5,
            level: "A1",
            question: "There ___ a book on the table.",
            options: ["are", "is", "be", "have"],
            correct: 1
        },

        // ---------- A2 ----------

        {
            id: 6,
            level: "A2",
            question: "Yesterday, I ___ to the supermarket.",
            options: ["go", "went", "gone", "going"],
            correct: 1
        },
        {
            id: 7,
            level: "A2",
            question: "This book is ___ than that one.",
            options: ["interesting", "more interesting", "most interesting", "interest"],
            correct: 1
        },
        {
            id: 8,
            level: "A2",
            question: "We ___ dinner when the phone rang.",
            options: ["have", "had", "were having", "are having"],
            correct: 2
        },
        {
            id: 9,
            level: "A2",
            question: "You ___ wear a seat belt in a car.",
            options: ["must", "might", "would", "could"],
            correct: 0
        },
        {
            id: 10,
            level: "A2",
            question: "I have lived here ___ 2020.",
            options: ["for", "since", "during", "from"],
            correct: 1
        },

        // ---------- B1 ----------

        {
            id: 11,
            level: "B1",
            question: "If it rains tomorrow, we ___ at home.",
            options: ["stay", "stayed", "will stay", "would stay"],
            correct: 2
        },
        {
            id: 12,
            level: "B1",
            question: "I have never ___ to London.",
            options: ["be", "been", "being", "was"],
            correct: 1
        },
        {
            id: 13,
            level: "B1",
            question: "She told me that she ___ tired.",
            options: ["is", "was", "has", "be"],
            correct: 1
        },
        {
            id: 14,
            level: "B1",
            question: "This is the person ___ helped me.",
            options: ["which", "where", "who", "whose"],
            correct: 2
        },
        {
            id: 15,
            level: "B1",
            question: "I wish I ___ more free time.",
            options: ["have", "had", "will have", "having"],
            correct: 1
        },

        // ---------- B2 ----------

        {
            id: 16,
            level: "B2",
            question: "If I had studied harder, I ___ the exam.",
            options: [
                "will pass",
                "would pass",
                "would have passed",
                "had passed"
            ],
            correct: 2
        },
        {
            id: 17,
            level: "B2",
            question: "Despite ___ tired, she continued working.",
            options: ["be", "being", "been", "was"],
            correct: 1
        },
        {
            id: 18,
            level: "B2",
            question: "The meeting ___ by the time we arrived.",
            options: [
                "already started",
                "had already started",
                "has already started",
                "was already starting"
            ],
            correct: 1
        },
        {
            id: 19,
            level: "B2",
            question: "He denied ___ the confidential document.",
            options: ["to see", "seeing", "see", "saw"],
            correct: 1
        },
        {
            id: 20,
            level: "B2",
            question: "She is believed ___ abroad for several years.",
            options: [
                "to live",
                "living",
                "to have lived",
                "lived"
            ],
            correct: 2
        },

        // ---------- C1 ----------

        {
            id: 21,
            level: "C1",
            question: "Hardly ___ the meeting begun when the alarm sounded.",
            options: [
                "has",
                "had",
                "did",
                "was"
            ],
            correct: 1
        },
        {
            id: 22,
            level: "C1",
            question: "Were it not for her support, I ___ succeeded.",
            options: [
                "will not have",
                "would not have",
                "had not",
                "did not"
            ],
            correct: 1
        },
        {
            id: 23,
            level: "C1",
            question: "The proposal was rejected on the ___ that it was too costly.",
            options: [
                "grounds",
                "reasons",
                "causes",
                "purposes"
            ],
            correct: 0
        },
        {
            id: 24,
            level: "C1",
            question: "Not until the results were published ___ the implications.",
            options: [
                "they understood",
                "did they understand",
                "they had understood",
                "had they understand"
            ],
            correct: 1
        },
        {
            id: 25,
            level: "C1",
            question: "His argument was persuasive, albeit somewhat ___.",
            options: [
                "reductive",
                "reduction",
                "reduce",
                "reducedly"
            ],
            correct: 0
        },

        // ---------- C2 ----------

        {
            id: 26,
            level: "C2",
            question: "The minister's remarks were deliberately ___, allowing multiple interpretations.",
            options: [
                "unequivocal",
                "equivocal",
                "explicit",
                "categorical"
            ],
            correct: 1
        },
        {
            id: 27,
            level: "C2",
            question: "His explanation did little to ___ the committee's concerns.",
            options: [
                "allay",
                "provoke",
                "exacerbate",
                "compound"
            ],
            correct: 0
        },
        {
            id: 28,
            level: "C2",
            question: "So ___ was the evidence that the verdict was inevitable.",
            options: [
                "compelling",
                "compelled",
                "compel",
                "compulsory"
            ],
            correct: 0
        },
        {
            id: 29,
            level: "C2",
            question: "The agreement was reached only after prolonged ___.",
            options: [
                "wrangling",
                "concurrence",
                "acquiescence",
                "compliance"
            ],
            correct: 0
        },
        {
            id: 30,
            level: "C2",
            question: "Her criticism was so ___ that few realized she was being sarcastic.",
            options: [
                "blatant",
                "heavy-handed",
                "understated",
                "overt"
            ],
            correct: 2
        }

    ];

    // ======================================
    // 4. START TEST
    // ======================================

    function startTest() {

        currentLevelIndex = 2;
        currentQuestion = null;
        selectedAnswer = null;

        questionNumber = 0;
        correctAnswers = 0;

        usedQuestions = new Set();
        answerHistory = [];

        introSection.hidden = true;
        instructionsSection.hidden = true;
        resultsSection.hidden = true;

        testSection.hidden = false;

        showNextQuestion();

        testSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // ======================================
    // 5. SELECT QUESTION
    // ======================================

    function getNextQuestion() {

        const currentLevel = levels[currentLevelIndex];

        const availableQuestions = questionBank.filter(question =>
            question.level === currentLevel &&
            !usedQuestions.has(question.id)
        );

        if (availableQuestions.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(
            Math.random() * availableQuestions.length
        );

        return availableQuestions[randomIndex];
    }

    // ======================================
    // 6. DISPLAY QUESTION
    // ======================================

    function showNextQuestion() {

        if (questionNumber >= MAX_QUESTIONS) {
            finishTest();
            return;
        }

        currentQuestion = getNextQuestion();

        if (!currentQuestion) {
            finishTest();
            return;
        }

        selectedAnswer = null;
        questionNumber++;

        usedQuestions.add(currentQuestion.id);

        questionCounter.textContent =
            `Question ${questionNumber} of ${MAX_QUESTIONS}`;

        questionLevel.textContent =
            `${currentQuestion.level} Level`;

        questionText.textContent =
            currentQuestion.question;

        answerOptions.innerHTML = "";

        currentQuestion.options.forEach((option, index) => {

            const button = document.createElement("button");

            button.type = "button";
            button.className = "answer-option";
            button.textContent = option;

            button.setAttribute("aria-pressed", "false");

            button.addEventListener("click", () => {
                selectAnswer(index);
            });

            answerOptions.appendChild(button);
        });

        nextButton.disabled = true;

        updateProgress();
    }

    // ======================================
    // 7. SELECT ANSWER
    // ======================================

    function selectAnswer(index) {

        selectedAnswer = index;

        const buttons = answerOptions.querySelectorAll(
            ".answer-option"
        );

        buttons.forEach((button, buttonIndex) => {

            const isSelected = buttonIndex === index;

            button.classList.toggle(
                "selected",
                isSelected
            );

            button.setAttribute(
                "aria-pressed",
                String(isSelected)
            );
        });

        nextButton.disabled = false;
    }

    // ======================================
    // 8. SUBMIT ANSWER
    // ======================================

    function submitAnswer() {

        if (
            selectedAnswer === null ||
            currentQuestion === null
        ) {
            return;
        }

        const isCorrect =
            selectedAnswer === currentQuestion.correct;

        answerHistory.push({
            level: currentQuestion.level,
            correct: isCorrect
        });

        if (isCorrect) {
            correctAnswers++;

            currentLevelIndex = Math.min(
                currentLevelIndex + 1,
                levels.length - 1
            );

        } else {

            currentLevelIndex = Math.max(
                currentLevelIndex - 1,
                0
            );
        }

        showNextQuestion();
    }

    // ======================================
    // 9. PROGRESS
    // ======================================

    function updateProgress() {

        const completedQuestions = questionNumber - 1;

        const percentage =
            (completedQuestions / MAX_QUESTIONS) * 100;

        progressFill.style.width = `${percentage}%`;

        progressTrack.setAttribute(
            "aria-valuenow",
            String(Math.round(percentage))
        );
    }

    // ======================================
    // 10. ESTIMATE LEVEL
    // ======================================

    function estimateLevel() {

        if (answerHistory.length === 0) {
            return "A1";
        }

        // Simple weighted performance estimate.
        // This is provisional, not a validated CEFR score.

        let totalScore = 0;

        answerHistory.forEach(answer => {

            const levelIndex = levels.indexOf(answer.level);

            if (answer.correct) {
                totalScore += levelIndex + 1;
            } else {
                totalScore -= 1;
            }
        });

        const averageScore =
            totalScore / answerHistory.length;

        if (averageScore < 0.8) return "A1";
        if (averageScore < 1.5) return "A2";
        if (averageScore < 2.3) return "B1";
        if (averageScore < 3.1) return "B2";
        if (averageScore < 4.1) return "C1";

        return "C2";
    }

    // ======================================
    // 11. FINISH TEST
    // ======================================

    function finishTest() {

        const estimatedLevel = estimateLevel();

        const descriptions = {

            A1: "You are developing the foundations of English. Start with essential vocabulary, simple grammar and everyday expressions.",

            A2: "You can work with familiar English structures. Continue developing your vocabulary and communication skills.",

            B1: "You demonstrate developing intermediate English skills. Focus on improving fluency, comprehension and accuracy.",

            B2: "You show promising upper-intermediate skills. Continue practicing complex grammar, extended reading and communication.",

            C1: "Your answers suggest advanced knowledge of English structures and vocabulary. Continue refining precision and flexibility.",

            C2: "Your performance suggests strong control of advanced language structures. A comprehensive assessment is needed to confirm proficiency."
        };

        testSection.hidden = true;
        resultsSection.hidden = false;

        resultLevel.textContent = estimatedLevel;

        resultDescription.textContent =
            descriptions[estimatedLevel];

        progressFill.style.width = "100%";

        progressTrack.setAttribute(
            "aria-valuenow",
            "100"
        );

        resultsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // ======================================
    // 12. EVENT LISTENERS
    // ======================================

    startButton.addEventListener("click", startTest);

    nextButton.addEventListener("click", submitAnswer);

    restartButton.addEventListener("click", startTest);

});
