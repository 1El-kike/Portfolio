import { styled } from "styled-components";

const DivContainer = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: auto;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(1, auto 1fr auto);
  grid-gap: 20px;
  margin: auto;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
const Butom = styled.button`
  display: fixed;
  margin: auto;
  width: 100%;
  bottom: 0;
`;

const DivElemPlayer = styled.div`
  /*  display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 margin: auto; */
  padding: 30px;
  background: linear-gradient(
    0deg,
    transparent,
    transparent,
    #002b36,
    #00212b,
    #002
  );
  display: grid;
  border-radius: 8px;
  grid-row: span 4;
  grid-column: span 3;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  margin-top: 40px;
  margin-bottom: 0px;
`;

const Titulo = styled.h2`
  padding-top: 10px;
  color: #2aa17f;
  font-weight: bold;
  text-shadow: 12px 15px 7px black;
  margin: auto;
  display: grid;
  grid-column: span 3;
`;

const P = styled.p`
  display: grid;
  grid-column: span 3;
  grid-template-rows: subgrid;
  margin: auto;
  font-size: 1em;
  color: aliceblue;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  text-align: start;
`;
const Bottom = styled.div`
  display: grid;
  font-size: 24px;
  color: #cccc;
  grid-template-columns: 1fr 1fr 1fr;
  transition: backdrop-filter 0.3s;
`;
const DivButton = styled.div`
  display: grid;
  grid-column: span 3;
  grid-template-columns: subgrid;
  padding: 10px;
  border-radius: 6px;
`;
const icono = {
  blue: {
    fontSize: "24px",
    color: "#21D07A",
    fontWeight: "bold",
    marginTop: "-13px",
    textShadow: "3px 3px 7px black",
  },
  red: {
    fontSize: "29px",
    color: "#cccc ",
    width: 180,
    marginTop: "-10px",
  },
  span: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "2px",
    paddingTop: "2px",
  },
};

const Progress = styled.div`
  width: 80px;
  height: 80px;
  color: ${(props) =>
    props.number > 90
      ? "#21D07A"
      : props.number > 80
      ? "#1EA198"
      : props.number > 50
      ? "#D2D531"
      : "#D9235f"};

  background: #444
    linear-gradient(
      to right,
      transparent 50%,
      ${(props) =>
          props.number > 90
            ? "#21D07A"
            : props.number > 80
            ? "#1EA198"
            : props.number > 50
            ? "#D2D531"
            : "#D9235f"}
        0
    );
  border-radius: 50%;
  position: relative;

  &::before {
    content: "";
    display: block;
    margin-left: 50%;
    height: 100%;
    transform-origin: left;
    border-radius: 0 100% 100% 0/50%;
    /* width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  
  clip: rect(0,50px,120px,0);
  z-index: 1; */
  }

  &::after {
    content: "";
    position: absolute;
    inset: 4px;
    background-color: rgb(2, 36, 53);
    border-radius: 50%;
    /*  display: block;
  margin-left: 50%;
  height: 100%;
  transform-origin: left;
  border-radius: 0 100% 100% 0/50%;   
  top: 0;
  left: 0;
  border: 10px solid #ccc;
  clip: rect(0,120px,120px,50px);
  z-index: 0;
  animation: progress-animation 2s linear; */
  }
  &::before {
    background: ${(props) =>
      props.number > 90
        ? "#21D07A"
        : props.number > 80
        ? "#1EA198"
        : props.number > 50
        ? "#D2D531"
        : "#D9235f"};
    transform: rotate(calc((${(props) => props.number} - 50) * 0.01turn));
  }

  &.less::before {
    background: var(--clr);
    transform: rotate(calc((var(--i) - 0) * 0.01turn));
  }
`;
const ProgressValue = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5em;
  font-weight: bold;
  z-index: 1;
`;

export {
  Butom,
  Div,
  DivContainer,
  icono,
  DivButton,
  Bottom,
  P,
  Titulo,
  DivElemPlayer,
  Progress,
  ProgressValue,
};
