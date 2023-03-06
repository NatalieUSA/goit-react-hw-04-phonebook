import styled from 'styled-components';

export const ListItem = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 30% 5% 25% 3%;
  gap: 3px;
  margin-bottom: 8px;

   @media (max-width: 768px){
     gap: 8px;
     grid-template-columns: 30% 5% 25% 10%;
  }

  @media (min-width: 1020px){
     gap: 10px;
     margin-bottom: 10px;
     grid-template-columns: 30% 5% 25% 10%;
  }
  }
`;

export const List = styled.ul`
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
  padiding: 0px;
`;
