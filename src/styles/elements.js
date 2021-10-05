import styled from "styled-components";

export const ApplicationTitle = styled.div`
  color: #7a7aff;
  font-size: 2rem;
  font-weight: 700;
  padding-bottom: 1rem;
  text-transform: capitalize
`;

export const AddItem = styled.span`
  font-size: 24px;
  padding: 0 3px 5px;
  background: #0777cc;
  border-radius: 50%;
  width: 35px;
  color: white;
  text-align: center;
  font-weight: bold;
  cursor: pointer;


  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 2px 3px rgba(0, 0, 0, .24);

  &:active {
    transform: rotate(45deg);
  }
`;


export const MessageContent = styled.div`
  padding: 1rem 0 1rem 1rem;

  display: flex;
  justify-content: flex-start;
`;
