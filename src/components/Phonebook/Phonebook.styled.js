import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const breatheAnimation = keyframes`
0% { background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% { background-position: 0% 50%;}`;
//  animation: ${gradient} 15s ease infinite;
export const Wrap = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 250px 500px;
  // gap: 30px;
  margin-top: 200px;
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
  padding: 10% 2%;
  min-height: 300px;

  background-color: lightgrey;

  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.6),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);

  @media (max-width: 640px) {
    margin-bottom: 15px;
  }
`;
