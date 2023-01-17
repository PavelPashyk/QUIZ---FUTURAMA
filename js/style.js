const styleBody = `
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: normal;
  line-height: 130%;
  color: black;
`;

const styleWrapper = `
  width: 100%;
  height: 100vh;
  background-image: url("./futurama.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleQuizBlock = `
  width: 1440px;
  min-height: 500px;
  padding: 0px 15px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: rgba(94, 208, 208, 0.8);
  display: flex;
  flex-direction: column;
`;

const styleQuizTitleBig = `
  width: 100%;
  min-height: 100px;
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 20px;
  margin: 20px auto;
`;
const styleQuizTitleSmall = `
  width: 100%;
  min-height: 100px;
  font-weight: 600;
  font-size: 22px;
  line-height: 140%;
  letter-spacing: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 10px;
  margin: 20px auto;
`;

const styleQuizBody = `
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 auto;
  margin: 0px 30px 50px;
  position: relative;
`;

const styleQuizBtn = `
  width: 100%;
  height: 60px;
  font-weight: 600;
  font-size: 22px;
  border-top: 2px solid #000;
  border-radius: 0 0 10px 10px;
  background-color: rgba(255, 229, 140, 0.7);
  transition: all 0.4s ease-in-out;
`;

const styleLabelAnswer = `
  display: block;
  width: 100%;
  min-height: 20px;
  font-size: 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: rgba(255, 229, 140, 0.8);
`;

const styleErrorText = `
  display: none;
  color: red;
  position: absolute;
  width: 80%;
  text-align: center;
  font-weight: 700;
  left: 50%;
  bottom: -45px;
  transform: translateX(-50%);
`;

const styleResultBlock = `
display: none;
flex: 1 1 auto;
min-width: 50%;
font-weight: 600;
font-size: 22px;
padding: 10px;
text-align: center;
align-items: center;
justify-content: center;
`

export {
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
};
