import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  align-items: center;

  .image {
    margin-right: 10px;
    font-size: 30px;
  }

  input {
    border: none;
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 1.5rem;
    flex: 1;
  }

  p {
    font-size: .9rem
  }

  @media (max-width: 390px) {
    p {
      visibility: hidden;
    }
  }
`;