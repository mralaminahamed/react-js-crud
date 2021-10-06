import styled, {createGlobalStyle} from "styled-components";

export const GlobalCSS = createGlobalStyle`
  html {
    background-color: #eeeef5;
    box-sizing: border-box;
    font-size: 14px;
    overflow-x: hidden;
    overflow-y: scroll
  }

  body {
    margin: 0;
    padding: 0;

    height: auto;

    color: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", SourceSansPro, SolaimanLipi;

    background: transparent;
  }
`;

export const AppContainer = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const Application = styled.section`
  width: 850px;
  height: 60vh;

  margin-top: 1rem;
  padding: 2.5rem 3rem !important;

  line-height: 1.5;

  background-color: white;
  border-radius: .7rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 2px 3px rgba(0, 0, 0, .24);
`

export const MessageContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, .05);
  border-left: 4px solid #FA85A2FF;

  margin-top: 20px;
  margin-bottom: 20px;

  font-size: 15px;
  line-height: 24px;

  display: flex;
  flex-direction: row;
  
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 2px 3px rgba(0, 0, 0, .24);
`;

export const AddItemContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  user-select: none;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  margin-bottom: 20px;
  
  border-radius:5px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 2px 3px rgba(0, 0, 0, .24);
`;

export const FormElementContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TableContainer = styled.table`
  border-collapse: collapse;
  display: table;
  height: auto;
  text-align: left;
  width: 100%;
  line-height: 28px;
`

export const TableHead = styled.thead`
  font-weight: bold;
  
  user-select: none;
  background-color: #e8e5ef;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .05) 0%, rgba(0, 0, 0, .1) 100%);
`