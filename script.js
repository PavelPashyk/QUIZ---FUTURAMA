const root = document.getElementById("root");
let windowInnerWidth = window.innerWidth;

const body = document.body;
body.style.cssText = styleBody;

const wrapper = document.createElement("div");
root.append(wrapper);
wrapper.style.cssText = styleWrapper;

const quizBlock = document.createElement("div");
wrapper.append(quizBlock);
quizBlock.style.cssText = styleQuizBlock;

const quizTitle = document.createElement("h2"),
  quizBody = document.createElement("ul"),
  quizBtn = document.createElement("button");
quizBlock.append(quizTitle, quizBody, quizBtn);

quizBody.style.cssText = styleQuizBody;
quizBtn.style.cssText = styleQuizBtn;
if (windowInnerWidth >= 740) {
  quizTitle.style.cssText = styleQuizTitleBig;
} else if (windowInnerWidth < 740) {
  quizTitle.style.cssText = styleQuizTitleSmall;
}

window.addEventListener(
  "resize",
  function () {
    windowInnerWidth = window.innerWidth;

    if (windowInnerWidth >= 740) {
      quizTitle.style.cssText = styleQuizTitleBig;
    } else if (windowInnerWidth < 740) {
      quizTitle.style.cssText = styleQuizTitleSmall;
    }
  },
  false
);

const counterAnswer = 4;
for (let i = 1; i <= counterAnswer; i++) {
  const itemAnswer = document.createElement("li");
  quizBody.append(itemAnswer);

  const inputAnswer = document.createElement("input"),
    labelAnswer = document.createElement("label");

  itemAnswer.append(inputAnswer, labelAnswer);

  labelAnswer.setAttribute("for", `answer-${i}`);
  inputAnswer.setAttribute("type", "radio");
  inputAnswer.setAttribute("name", "answer");
  inputAnswer.setAttribute("id", `answer-${i}`);
  inputAnswer.setAttribute("value", `${i - 1}`);

  inputAnswer.style.display = "none";
  labelAnswer.style.cssText = styleLabelAnswer;
}

const labelListColor = document.querySelectorAll("input[type = radio] + label");
labelListColor.forEach((item) => {
  item.addEventListener("click", () => {
    labelListColor.forEach((el) => {
      el.style.color = "";
    });

    item.style.color = "red";
  });
});

const answer1Text = quizBody.querySelector("[for = answer-1]");
const answer2Text = quizBody.querySelector("[for = answer-2]");
const answer3Text = quizBody.querySelector("[for = answer-3]");
const answer4Text = quizBody.querySelector("[for = answer-4]");

answer1Text.innerText = "answer-1-text test";
answer2Text.innerText = "answer-2-text test";
answer3Text.innerText = "answer-3-text test";
answer4Text.innerText = "answer-4-text test";
quizTitle.innerText = "question-text test test test test test";
quizBtn.innerText = "Answer";

let errorText = document.createElement("p");
quizBody.append(errorText);
errorText.innerText = "Choose an answer!!!";
errorText.style.cssText = styleErrorText;

let resultBlock = document.createElement("div");
quizBtn.before(resultBlock);
resultBlock.style.cssText = styleResultBlock;

let score = 0;
let numberQuestion = getRandomNumber(0, 21);
const lengthQuestions = numberQuestion + 6;

clearPages();
showQuestion();

quizBtn.addEventListener("mouseleave", () => {
  quizBtn.style.cssText = styleQuizBtn;
});

quizBtn.addEventListener("mouseenter", () => {
  quizBtn.style.cssText =
    styleQuizBtn +
    `
      background-color: rgba(255, 229, 140, 1);
      color: #6f3274;
    `;
});

quizBtn.addEventListener("mousedown", () => {
  quizBtn.style.cssText =
    styleQuizBtn +
    `
      color: #9f0404;
      background-color: #ff9cb1;
      transition: all 0.1s linear;
    `;
});

quizBtn.addEventListener("mouseup", () => {
  quizBtn.style.cssText =
    styleQuizBtn +
    `
      background-color: rgba(255, 229, 140, 1);
      color: #6f3274;
    `;
});

quizBtn.addEventListener("click", () => {
  clickAnswerBtn();
});


function clickAnswerBtn() {
  const checkedAnswer = quizBody.querySelector("input[type = radio]:checked");
  const labelChecked = document.querySelector(
    "input[type = radio]:checked + label"
  );

  if (checkedAnswer) {
    errorText.style.display = "none";
  } else {
    errorText.style.display = "block";
    return;
  }

  const answerValueNumber = checkedAnswer.value;
  const answerValue =
    questionsArray[numberQuestion].possibleAnswers[`${answerValueNumber}`];

  labelChecked.style.color = "";

  if (answerValue === questionsArray[numberQuestion].correctAnswer) {
    score++;
  }

  if (numberQuestion + 1 !== lengthQuestions) {
    numberQuestion++;
    clearPages();
    showQuestion();
  } else {
    clearPages();
    showResult();
  }

  checkedAnswer.checked = false;
}

function showQuestion() {
  quizTitle.innerText = questionsArray[numberQuestion].question;
  answer1Text.innerText = questionsArray[numberQuestion].possibleAnswers[0];
  answer2Text.innerText = questionsArray[numberQuestion].possibleAnswers[1];
  answer3Text.innerText = questionsArray[numberQuestion].possibleAnswers[2];
  answer4Text.innerText = questionsArray[numberQuestion].possibleAnswers[3];
}

function clearPages() {
  quizTitle.innerText = "";
  answer1Text.innerText = "";
  answer2Text.innerText = "";
  answer3Text.innerText = "";
  answer4Text.innerText = "";
}

function showResult() {
  console.log("start");
  quizBody.style.display = "none";
  quizTitle.innerText = "Your result!!!";
  quizBtn.innerText = "Start over";
  resultBlock.style.display = "flex";
  resultBlock.innerText = `Your account: ${score} / 6`;
  quizBtn.onclick = () => {
    history.go();
  };
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

import {
  styleBody,
  styleWrapper,
  styleQuizBlock,
  styleQuizTitleBig,
  styleQuizTitleSmall,
  styleQuizBody,
  styleQuizBtn,
  styleLabelAnswer,
  styleErrorText,
  styleResultBlock,
} from "./js/style.js";

import { questionsArray } from "./js/mocks.js";
