import { styled } from "styled-components";

export const Body = styled.body`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const DivFirst = styled.div`
  position: relative;

  width: 480px;
  height: 520px;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 480px;
    height: 520px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #4106e4,
      #e9d30e
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 480px;
    height: 520px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #e60c04,
      #dae907,
      #1be025
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;
export const Borderline = styled.span`
  position: absolute;
  top: 0;
  inset: 0;
`;
export const Formulario = styled.form`
  position: absolute;
  inset: 4px;
  background: #222;
  padding: 50px 40px;
  border-radius: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;
export const H2 = styled.h2`
  color: #fff;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1em;
`;
export const InputBox = styled.div`
  position: relative;
  width: 95%;
  margin-top: 35px;

  &: (max-width: 900px) {
    width: 300px;
  }
`;
export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 20px 0px 10px;
  background: transparent;
  outline: none;
  border: none;
  box-shadow: none;
  color: #23242a;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;

  &:valid ~ span,
  &:focus ~ span {
    color: #fff;
    font-size: 0.75em;
    transform: translateY(-34px);
  }

  &:valid ~ i,
  &:focus ~ i {
    height: 48px;
  }
`;
export const Spanuser = styled.span`
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  pointer-events: none;
  color: #8f8f8f;
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
`;
export const Submit = styled.input`
  border: none;
  outline: none;
  padding: 9px 25px;
  background: #fff;
  cursor: pointer;
  font-size: 0.9em;
  border-radius: 4px;
  font-weight: 600;
  width: 100px;
  margin-top: 10px;

  &:hover {
    background-color: #242458;
    color: #fff;
  }
`;

export const I = styled.i`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.5s;
  pointer-events: none;
`;
export const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const A = styled.a`
  font-size: 0.95em;
  color: #8f8f8f;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;
export const DivSubmit = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-last-child(2) {
    margin-left: auto;
  }
`;
