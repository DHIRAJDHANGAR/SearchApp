import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  border: 1px solid black;
  width: 250px;
  padding: 5px;
`;

export const CardImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const CardTitle = styled.div`
  color: rgb(29, 41, 2);
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardCategory = styled.div`
  color: rgb(255, 166, 0);
  font-style: italic;
`;
