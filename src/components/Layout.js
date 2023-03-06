import styled from 'styled-components';

export const Layout = styled.div`
  color: grey;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  font-size: 10px;

  // background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

  @media (max-width: 767px) {
    font-size: 11px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1020px) {
    width: 80%;
    font-size: 15px;
    padding: 16px;
  }
`;
