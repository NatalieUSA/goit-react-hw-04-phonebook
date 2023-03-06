import styled from 'styled-components';

export const Btn = styled.button`
  width: 110px;
  border: 1px solid rgb(204, 204, 204);
  background-color: rgb(230, 229, 229);
  border-radius: 7px;
  text-decoration: none;
  cursor: pointer;
  color: deeppink;
  text-transform: uppercase;
  text-align: center;

  :hover {
    background-color: rgb(160, 159, 159);
    text-transform: lowercase;
  }

  @media (max-width: 320px) {
    font-size: 8px;
    padding: 0px 0px;
  }

  @media (max-width: 420px) {
    font-size: 8px;
    padding: 8px 8px;
    width: 80px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
    padding: 5px 10px;
  }

  @media (min-width: 768px) {
    font-size: 10px;
    padding: 8px 15px;
  }

  @media (min-width: 1020px) {
    font-size: 10px;
  }
`;

// .btn.active {
//   background-color: deeppink;
//   color: white;
// }
