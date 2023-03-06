import styled from 'styled-components';
import { keyframes } from 'styled-components';

// export const breatheAnimation = keyframes`
//  0% { height: 100px; width: 100px; }
//  30% { height: 400px; width: 400px; opacity: 1 }
//  40% { height: 405px; width: 405px; opacity: 0.3; }
//  100% { height: 100px; width: 100px; opacity: 0.6; }
// `;

// export const breatheAnimation = keyframes`
// //  0% { height: 100px; width: 100px; }
//  30% {background-position: 100% 50%; }
//  40% {  opacity: 0.3; }
//  100% {  opacity: 0.6; }
// `;

export const breatheAnimation = keyframes`
0% { background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% { background-position: 0% 50%;}`;
//  animation: ${gradient} 15s ease infinite;
export const Wrap = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 250px 400px;
  gap: 30px;
 animation-name: ${breatheAnimation};
 animation-duration: 8s;
 animation-iteration-count: infinite;


     @media (max-width: 640px) {
      display: block;
      width: 80%;
       margin-right: auto;
  margin-left: auto;

     @media (max-width: 320px) {
      width: 90%;
    }

     @media (min-width: 420px) {
      width: 350px;
    }
`;

export const Block = styled.div`
  border-radius: 15px;
  padding: 10% 2%;
  min-height: 300px;
  // background-color: rgb(223, 224, 224);
  //background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background: linear-gradient(0deg, #fcfbc7, #fcd3e2, #bff8f8, #b3f8e8);
  border-radius: 17px;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);

  @media (max-width: 640px) {
    margin-bottom: 15px;
  }
`;
