const faqList = document.getElementById('faq-list');

// Default questions and answers
const defaultFAQs = [
    { question: "What are some common pests and how can I control them?", answer: "Some common pests include aphids, caterpillars, and slugs. You can control them by using natural predators, traps, or organic pesticides." },
    { question: "When is the best time to plant tomatoes?", answer: "The best time to plant tomatoes depends on your climate. In most regions, it's best to plant them after the last frost date in spring." },
    { question: "Which crop combinations in delta regions can maximize yield and income?", answer: "1.Rice & Sugarcane &nbsp&nbsp2.Rice & Turmeric&nbsp&nbsp 3.Coconut & Banana &nbsp&nbsp  4.Groundnut,sesame along with redgram ,chickpea&nbsp&nbsp 5.Mango & cashew&nbsp&nbsp 6.paddy & Mustard &nbsp&nbsp7.Rice & Sunflower." },
    { question: "How often should I water my crops?", answer: "The frequency of watering depends on several factors like soil type, weather, and plant type. Generally, it's best to water deeply but infrequently, ensuring the soil stays consistently moist but not waterlogged." },
    { question: "what are some companion plants can be used alongside other crops to reduce need for chemical pesticides?", answer: "Marigold, Chrysanthemum, nasturtium, Garlic,Sunflower, Lavender,Basil." },
    { question: "Some Cultivation Tips", answer: "Soil Testing,Crop Rotation, Nutrient Management, Continuous learning,Environmental Conservation" }
];

// Function to display default FAQs
function displayDefaultFAQs() {
    defaultFAQs.forEach(faq => {
        const questionItem = createQuestionItem(faq.question, faq.answer);
        faqList.appendChild(questionItem);
    });
}

// Function to create a question item
function createQuestionItem(question, answer) {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question');
    questionItem.innerHTML = `
        <h3 onclick="toggleAnswer(this)">${question}</h3>
        <p class="answer">${answer}</p>
    `;
    return questionItem;
}

// Function to add a new question
function addQuestion() {
    const question = prompt("Enter your question:", ""); // Set default value as empty string
    const answer = prompt("Enter your answer:");

    if (question && answer) {
        const questionItem = createQuestionItem(question, answer);
        faqList.appendChild(questionItem);
    } else {
        alert("Please provide both question and answer.");
    }
}


// Function to toggle answer visibility
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Display default FAQs when the page loads
displayDefaultFAQs();