const faqData = [
  {
      id: 1,
      question: "Who are we?",
      answer: "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
      id: 2,
      question: "What do we do?",
      answer: "Building learning communities with Our Affordable & Competent Courses",
  },
  {
      id: 3,
      question: "Are the community classes boring?",
      answer: "No, not at all!!!",
  },
];

let accordianBody = document.querySelector(".accordian_body");
const faqs = [];

function showFaq() {
  btnStatusUpdate();
  let answer = this.parentElement.nextElementSibling;
  answer.classList.toggle("hidden");
}

function createFaq() {
  faqData.forEach((item, index) => {
      const mainDiv = document.createElement("div");
      const headerDiv = document.createElement("div");
      const question = document.createElement("h3");
      const button = document.createElement("button");
      const answer = document.createElement("p");

      mainDiv.classList.add("faq");
      headerDiv.classList.add("faq_header");
      button.classList.add("show_btn");
      answer.classList.add("hidden");

      question.textContent = item.question;
      button.textContent = "+";
      answer.textContent = item.answer;

      mainDiv.appendChild(headerDiv);
      headerDiv.appendChild(question);
      headerDiv.appendChild(button);
      mainDiv.appendChild(answer);

      accordianBody.appendChild(mainDiv);
  });
}

function btnStatusUpdate() {
  allFaq.forEach((el) => {
      el.parentElement.nextElementSibling.classList.add("hidden");
  });
}

createFaq();

let allFaq = document.querySelectorAll(".show_btn");

allFaq.forEach((el) => {
  el.parentElement.nextElementSibling.classList.add("hidden");
  el.addEventListener("click", showFaq);
});