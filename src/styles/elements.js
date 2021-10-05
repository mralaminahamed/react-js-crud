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


export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  margin-right: 40px;

  font-size: 18px;
  font-weight: bold;
  line-height: 28px;
`;

export const InputTag = styled.input`
  font-family: inherit;
  font-size: 18px;
  margin-top: 10px;
  padding: 5px 10px;
`;

export const SubmitButtonTag = styled.input`
  padding: 5px 15px;
  font-family: inherit;
  cursor: pointer;
  border: none;

  width: 140px;
  border-radius: 5px;

  margin-top: 20px;
  font-size: 18px;
  color: white;

  background-color: #34abe6;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .05) 0%, rgba(0, 0, 0, .1) 100%);
  
  &:hover {
    background-color: #0777cc;
  }
`;

export const ResetButtonTag = styled.input`
  padding: 5px 15px;
  font-family: inherit;
  cursor: pointer;
  border: none;

  width: 140px;
  border-radius: 5px;
  
  margin-left: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: white;

  background-color: #f9a09a94;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .05) 0%, rgba(0, 0, 0, .1) 100%);
  
  &:hover {
    background-color: red
  }
`;

export const TableData = styled.td`
  border-bottom: .1rem solid #e8e5ef;
  padding: .5rem 1rem;
  
  &:last-child{
    text-align: center;
    width: 175px;
  }
`