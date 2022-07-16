import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const ListItemContainer = styled.div(({done}: ContainerProps) => (
  `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;

    label {
      margin-right: 10px;
      color: #ccc;
      font-size: 1.2rem;
      text-decoration: ${done ? "line-through" : "none"};
    }

    input {
      width: 25px;
      height: 25px;
      margin-right: 15px;
      border-radius: 5px;
    }
    
    button {
      dysplay: flex;
      background-color: unset;
      border: unset;
      color: red;
      font-size: 1.6rem;
      cursor: pointer;
    }

    button:hover {
      color: #fff;
    }
      
    button svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `
))