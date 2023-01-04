import styled from '@emotion/styled';

const color = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatisticsContainer = styled.div`
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 252px;
  text-align: center;
`;
export const Title = styled.h2``;

export const StatList = styled.ul`
  margin: 0px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 10px;
  color: white;
  background-color: ${color};
  border-top: solid 1px #a5a5a5;
  :not(:last-child) {
    border-right: solid 1px #a5a5a5;
  }
`;
export const Label = styled.div`
  color: black;
`;
export const Percentage = styled.div`
  color: black;
`;
