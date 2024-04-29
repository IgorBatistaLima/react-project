import styled from "styled-components";


export const Card = styled.div`
  width: 18rem;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
`;

export const CardBody = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h5`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const CardText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

export const CardButton = styled.button`

  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

