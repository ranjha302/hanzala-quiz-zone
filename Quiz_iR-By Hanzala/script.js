 // Show Register Form
function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
  }
  
  // Show Login Form
  function showLogin() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
  }
  
  // Handle Registration
  function handleRegister(event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
  
    // Check if user is already registered
    if (localStorage.getItem(email)) {
      alert("This email is already registered. Please log in.");
      showLogin();
    } else {
      // Store user data in localStorage
      const user = { username, password };
      localStorage.setItem(email, JSON.stringify(user));
      alert("Registration successful! You can now log in.");
      showLogin(); // Switch to login form
    }
  }
  
  // Handle Login
  function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
  
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem(email));
  
    if (storedUser && storedUser.password === password) {
      // Show welcome message
      document.getElementById('login-form').classList.add('hidden');
      document.getElementById('register-form').classList.add('hidden');
      document.getElementById('welcome-message').classList.remove('hidden');
      document.getElementById('welcome-text').textContent = `Welcome, ${storedUser.username}!`;
    } else {
      alert("Invalid email or password!");
    }
  }
  

  const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');


// Make an array of objects that stores question, choices of question and answer
const quiz = [
 
 
    {
        question: "Q. In the context of social perspectives, which of the following emphasizes stability and cohesion in society?",
        choices: ["Conflict theory", "Symbolic interactionism", "Structural functionalism", "Social exchange theory"],
        answer: "Structural functionalism"
    },
 
    {
        question: "Q. Social mobility can best be described as:",
        choices: ["A person's physical movement", "Changes in social position within a hierarchy", "A shift in cultural values", "The migration from one country to another"],
        answer: "Changes in social position within a hierarchy"
    },
    {
        question: "Q. Culture in the Science of Society refers to:",
        choices: ["Technological advancements", "A set of shared beliefs, values, and practices", "Scientific methods and discoveries", "Political governance"],
        answer: "A set of shared beliefs, values, and practices"
    },
    {
        question: "Q. Which perspective views social stratification as necessary for societal function?",
        choices: ["Conflict theory", "Functionalist perspective", "Symbolic interactionism", "Evolutionary theory"],
        answer: "Functionalist perspective"
    },
    {
        question: "Q. Socialization primarily occurs through:",
        choices: ["Scientific experiments", "Cultural transmission", "Economic exchange", "Political influence"],
        answer: "Cultural transmission"
    },
    {
        question: "Q. The concept of ‘ascribed status’ in social stratification refers to:",
        choices: ["A position one achieves based on merit", "A status assigned at birth", "A role based on personal skills", "A temporary position within a community"],
        answer: "A status assigned at birth"
    },
    {
        question: "Q. The idea that society is a complex system whose parts work together to promote solidarity and stability is best associated with:",
        choices: ["Symbolic interactionism", "Conflict theory", "Functionalism", "Social constructionism"],
        answer: "Functionalism"
    },
    {
        question: "Q. Which of the following best describes the concept of 'role conflict' in socialization?",
        choices: ["A clash between personal desires and social norms", "Conflicting expectations between two or more roles", "The inability to perform a social role", "The change from one social status to another"],
        answer: "Conflicting expectations between two or more roles"
    },
    {
        question: "Q. Which theory emphasizes the importance of symbols and language in social interactions?",
        choices: ["Conflict theory", "Functionalism", "Symbolic interactionism", "Social Darwinism"],
        answer: "Symbolic interactionism"
    },
    {
        question: "Q. The process of learning and adopting norms, values, and behaviors of a society is known as:",
        choices: ["Stratification", "Assimilation", "Socialization", "Marginalization"],
        answer: "Socialization"
    },
    {
        question: "Q. Social mobility that occurs within a single generation is referred to as:",
        choices: ["Horizontal mobility", "Intergenerational mobility", "Intragenerational mobility", "Geographic mobility"],
        answer: "Intragenerational mobility"
    },
    {
        question: "Q. The concept of 'social roles' refers to:",
        choices: ["Economic positions in society", "The expected behaviors associated with a social position", "Inherited genetic traits", "Cultural rituals"],
        answer: "The expected behaviors associated with a social position"
    },
    {
        question: "Q. The term 'cultural lag' refers to:",
        choices: ["The time gap between technological advancement and social adaptation", "Differences in cultural norms between societies", "The decline of cultural practices over time", "The process of cultural transmission"],
        answer: "The time gap between technological advancement and social adaptation"
    },
    {
        question: "Q. Which perspective views culture as a source of conflict and inequality?",
        choices: ["Functionalism", "Conflict theory", "Symbolic interactionism", "Social exchange theory"],
        answer: "Conflict theory"
    },
    {
        question: "Q. Which sociological theory emphasizes the interconnectedness of societal institutions and structures?",
        choices: ["Functionalism", "Symbolic interactionism", "Conflict theory", "Social constructivism"],
        answer: "Functionalism"
    },
    {
        question: "Q. 'Achieved status' in social stratification refers to:",
        choices: ["A status one is born into", "A temporary role in a community", "A social position acquired through personal efforts", "A position granted by society"],
        answer: "A social position acquired through personal efforts"
    },
    {
        question: "Q. Which of the following concepts describes a society in which people are bound by shared values and common beliefs?",
        choices: ["Organic solidarity", "Mechanical solidarity", "Functional interdependence", "Conflict-oriented society"],
        answer: "Mechanical solidarity"
    },
    {
        question: "Q. In socialization, 'agents of socialization' include all of the following EXCEPT:",
        choices: ["Family", "Mass media", "Peers", "Genetic traits"],
        answer: "Genetic traits"
    },
    {
        question: "Q. Which theory argues that social inequality is necessary for a society's functioning?",
        choices: ["Conflict theory", "Evolutionary theory", "Functionalist theory", "Interactionist theory"],
        answer: "Functionalist theory"
    },
    {
        question: "Q. The term 'cultural assimilation' refers to:",
        choices: ["Maintaining cultural diversity", "The process of adapting to and blending into the dominant culture", "Rejecting cultural norms", "The creation of new cultural practices"],
        answer: "The process of adapting to and blending into the dominant culture"
    },
    {
        question: "Q. Which of the following terms describes the movement from a lower to a higher social class?",
        choices: ["Horizontal mobility", "Vertical mobility", "Intragenerational mobility", "Status mobility"],
        answer: "Vertical mobility"
    },
    {
        question: "Q. Which theory in sociology is concerned with power dynamics and the control of resources?",
        choices: ["Functionalism", "Conflict theory", "Symbolic interactionism", "Systems theory"],
        answer: "Conflict theory"
    },
    {
        question: "Q. The lifelong process by which individuals acquire values, attitudes, and behaviors is known as:",
        choices: ["Cultural integration", "Socialization", "Structural functionalism", "Social stratification"],
        answer: "Socialization"
    },
    {
        question: "Q. Social institutions include all of the following EXCEPT:",
        choices: ["Family", "Religion", "Education", "Personal hobbies"],
        answer: "Personal hobbies"
    },
    {
        question: "Q. A society characterized by a high degree of individuality and role differentiation exhibits:",
        choices: ["Mechanical solidarity", "Cultural homogeneity", "Organic solidarity", "Social equilibrium"],
        answer: "Organic solidarity"
    },
    {
        question: "Q. Which sociological concept refers to shared norms, values, and practices that govern social interactions?",
        choices: ["Social institutions", "Cultural integration", "Social structure", "Culture"],
        answer: "Culture"
    },
    {
        question: "Q. The process by which social, political, and economic inequalities become structured into law is called:",
        choices: ["Institutionalization", "Socialization", "Stratification", "Assimilation"],
        answer: "Stratification"
    },
    {
        question: "Q. Which type of social mobility is possible when an individual changes jobs within the same social class?",
        choices: ["Vertical mobility", "Horizontal mobility", "Generational mobility", "Class mobility"],
        answer: "Horizontal mobility"
    },
    {
        question: "Q. Which theoretical perspective in sociology emphasizes the roles of power and inequality in shaping social life?",
        choices: ["Functionalism", "Conflict theory", "Symbolic interactionism", "Postmodernism"],
        answer: "Conflict theory"
    },
    {
        question: "Q. 'Norms' in a cultural context are best described as:",
        choices: ["Individual opinions", "Expected behaviors and practices within a society", "Exceptions to rules", "Official laws and regulations"],
        answer: "Expected behaviors and practices within a society"
    },
    {
        question: "Q. Which term describes the way society is organized into predictable relationships?",
        choices: ["Social institution", "Social stratification", "Social structure", "Social interaction"],
        answer: "Social structure"
    },
    {
        question: "Q. Which term describes the movement of individuals or groups within a social hierarchy?",
        choices: ["Socialization", "Social stratification", "Social mobility", "Social integration"],
        answer: "Social mobility"
    },
    {
        question: "Q. Which concept refers to the shared beliefs and moral attitudes that operate as a unifying force in society?",
        choices: ["Collective consciousness", "Functionalism", "Social cohesion", "Cultural diversity"],
        answer: "Collective consciousness"
    },
    {
        question: "Q. The belief that all cultures should be judged according to their own standards is known as:",
        choices: ["Ethnocentrism", "Cultural relativism", "Cultural assimilation", "Cultural shock"],
        answer: "Cultural relativism"
    },
    {
        question: "Q. Which type of culture consists of the ideas, attitudes, and beliefs of a society?",
        choices: ["Material culture", "Non-material culture", "Popular culture", "High culture"],
        answer: "Non-material culture"
    },
    {
        question: "Q. Which concept refers to the deliberate spreading of ideas and information to influence people’s opinions and actions?",
        choices: ["Propaganda", "Socialization", "Assimilation", "Social stratification"],
        answer: "Propaganda"
    },
    {
        question: "Q. In sociology, 'values' are defined as:",
        choices: ["Guidelines for what is desirable or undesirable in society", "Temporary rules for social behavior", "Legal requirements", "Instinctual behaviors"],
        answer: "Guidelines for what is desirable or undesirable in society"
    },
    {
        question: "Q. The process through which a society’s culture is passed from one generation to the next is known as:",
        choices: ["Socialization", "Cultural transmission", "Cultural lag", "Assimilation"],
        answer: "Cultural transmission"
    },
    {
        question: "Q. Which concept refers to internalized norms that govern behavior?",
        choices: ["Sanctions", "Mores", "Values", "Taboos"],
        answer: "Mores"
    },
    {
        question: "Q. Which theory focuses on daily interactions and meanings?",
        choices: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Structuralism"],
        answer: "Symbolic Interactionism"
    },
    {
        question: "Q. What term describes mobility across generations?",
        choices: ["Intragenerational", "Intergenerational", "Horizontal", "Vertical"],
        answer: "Intergenerational"
    },
    {
        question: "Q. What is the basis of 'organic solidarity'?",
        choices: ["Shared values", "Interdependence", "Power struggle", "Tradition"],
        answer: "Interdependence"
    },
    {
        question: "Q. The 'glass ceiling' concept refers to:",
        choices: ["Social mobility", "Invisible barriers", "Class stratification", "Status inconsistency"],
        answer: "Invisible barriers"
    },
    {
        question: "Q. Which term defines unequal access to resources?",
        choices: ["Inequality", "Social stratification", "Meritocracy", "Class conflict"],
        answer: "Social stratification"
    },
    {
        question: "Q. Which theory emphasizes social cohesion?",
        choices: ["Functionalism", "Conflict Theory", "Exchange Theory", "Rational Choice Theory"],
        answer: "Functionalism"
    },
    {
        question: "Q. Status achieved by choice is known as:",
        choices: ["Ascribed", "Achieved", "Master", "Primary"],
        answer: "Achieved"
    },
    {
        question: "Q. Which theory suggests norms arise from consensus?",
        choices: ["Conflict", "Functionalist", "Symbolic Interactionist", "Postmodern"],
        answer: "Functionalist"
    },
    {
        question: "Q. 'Role strain' occurs when:",
        choices: ["Roles clash", "Single role conflicts", "Status changes", "Socialization fails"],
        answer: "Single role conflicts"
    },
    {
        question: "Q. Which term describes symbols representing ideas?",
        choices: ["Sanctions", "Roles", "Values", "Language"],
        answer: "Language"
    },
    {
        question: "Q. In sociology, 'anomie' means:",
        choices: ["Social order", "Role ambiguity", "Normlessness", "Cultural uniformity"],
        answer: "Normlessness"
    },
    {
        question: "Q. Deviance defined by society is called:",
        choices: ["Absolute", "Relative", "Universal", "Fixed"],
        answer: "Relative"
    },
    {
        question: "Q. 'Social capital' primarily refers to:",
        choices: ["Wealth", "Skills", "Networks", "Education"],
        answer: "Networks"
    },
    {
        question: "Q. Stratification maintained through ideology is called:",
        choices: ["Caste system", "Hegemony", "Social mobility", "Class consciousness"],
        answer: "Hegemony"
    },
    {
        question: "Q. A 'meritocracy' emphasizes:",
        choices: ["Wealth", "Inheritance", "Achievement", "Charisma"],
        answer: "Achievement"
    },
    {
        question: "Q. Role exit describes:",
        choices: ["Role change", "Role abandonment", "Status conflict", "Status gain"],
        answer: "Role abandonment"
    },
    {
        question: "Q. Which term defines an overgeneralized belief?",
        choices: ["Bias", "Prejudice", "Stereotype", "Norm"],
        answer: "Stereotype"
    },
    {
        question: "Q. Cultural beliefs that justify social arrangements are called:",
        choices: ["Sanctions", "Values", "Ideologies", "Ethics"],
        answer: "Ideologies"
    },
    {
        question: "Q. Social norms that lack moral significance are called:",
        choices: ["Mores", "Folkways", "Laws", "Sanctions"],
        answer: "Folkways"
    },
    {
        question: "Q. 'Cultural relativism' encourages:",
        choices: ["Judging cultures", "Universal norms", "Open-mindedness", "Isolation"],
        answer: "Open-mindedness"
    },
    {
        question: "Q. Power concentrated in a few individuals is termed:",
        choices: ["Democracy", "Plutocracy", "Oligarchy", "Meritocracy"],
        answer: "Oligarchy"
    },
    {
        question: "Q. Social control achieved through coercion is known as:",
        choices: ["Influence", "Authority", "Power", "Force"],
        answer: "Force"
    },
    {
        question: "Q. Which theory asserts society benefits elites?",
        choices: ["Functionalism", "Conflict Theory", "Symbolic Interactionism", "Exchange Theory"],
        answer: "Conflict Theory"
    },
    {
        question: "Q. Role ambiguity often arises in:",
        choices: ["Clear roles", "Defined roles", "Unclear expectations", "Stable systems"],
        answer: "Unclear expectations"
    },
    {
        question: "Q. Which type of group is task-oriented?",
        choices: ["Primary", "Secondary", "Tertiary", "Reference"],
        answer: "Secondary"
    },
    {
        question: "Q. Alienation typically results from:",
        choices: ["Integration", "Isolation", "Engagement", "Empowerment"],
        answer: "Isolation"
    },
    {
        question: "Q. Cultural 'diffusion' refers to:",
        choices: ["Isolation", "Integration", "Borrowing ideas", "Internalization"],
        answer: "Borrowing ideas"
    },
    {
        question: "Q. Group think leads to:",
        choices: ["Innovative ideas", "Critical thinking", "Conformity", "Diversity"],
        answer: "Conformity"
    },
    {
        question: "Q. Which theory sees crime as a social function?",
        choices: ["Strain Theory", "Functionalist Theory", "Conflict Theory", "Subculture Theory"],
        answer: "Functionalist Theory"
    },
    {
        question: "Q. 'Normative social influence' results in:",
        choices: ["Deviance", "Conformity", "Independence", "Rebellion"],
        answer: "Conformity"
    },
    {
        question: "Q. Which concept refers to the separation of culture into elite and popular categories?",
        choices: ["Subculture", "High culture", "Cultural capital", "Counterculture"],
        answer: "High culture"
    },
    {
        question: "Q. 'Looking-glass self' suggests self-concept develops through:",
        choices: ["Cultural norms", "Social reflection", "Genetics", "Personal choices"],
        answer: "Social reflection"
    }
    
    
        
];

let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 30; // 30 seconds for each question

let timerID;

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.innerHTML = ""; // Clear previous choices
    questionDetails.choices.forEach(choice => {
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = choice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
            choiceDiv.classList.add('selected');
        });
    });

    startTimer(); // Start the timer for the new question
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice && selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        displayAlert("Correct Answer!");
        score++;
    } else {
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        timeLeft = 30; // Reset to 30 seconds for the next question
        showQuestions();
    } else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.innerHTML = "";

    // Format and display the score
    scoreCard.innerHTML = `
        <h2>Your Score</h2>
        <p style="font-size: 20px;">You Scored <strong>${score}</strong> out of <strong>${quiz.length}</strong>!</p>
        <h3>Correct Answers:</h3>
        <div style="margin-top: 10px; line-height: 1.6;">
    `;

    // Display the correct answers
    quiz.forEach((question, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.textContent = `Q${index + 1}: ${question.question} (Correct Answer: ${question.answer})`;
        scoreCard.appendChild(answerDiv);
    });

    scoreCard.innerHTML += "</div>"; // Close the div for answers

    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(() => {
        alert.style.display = "none";
    }, 2000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Clear any existing timer
    timer.textContent = timeLeft; // Display initial time

    timerID = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft <= 0) {
            stopTimer(); // Stop the timer
            const confirmUser = confirm("Time Up!!! Do you want to play the quiz again?");
            if (confirmUser) {
                resetQuiz();
            } else {
                alert.textContent = "Thanks for playing!";
                alert.style.display = "block";
                setTimeout(() => {
                    alert.style.display = "none";
                }, 2000);
            }
        }
    }, 1000);
}

// Function to stop timer
const stopTimer = () => {
    clearInterval(timerID);
}

// Function to reset the quiz
const resetQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    quizOver = false;
    timeLeft = 30;
    showQuestions();
    timer.style.display = "block";
}

// Start the quiz on button click
startBtn.addEventListener('click', () => {
    container.style.display = "block"; // Show the quiz container
    resetQuiz(); // Start the quiz
});

nextBtn.addEventListener('click', () => {
    if (quizOver) {
        resetQuiz(); // Reset the quiz to play again
    } else {
        checkAnswer(); // Check the answer for the current question
    }
});

// Initialize the quiz
container.style.display = "none"; // Hide the quiz initially