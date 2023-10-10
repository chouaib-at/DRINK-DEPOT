import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 2rem;

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 80px;
    width: 100%;
  }

  .form-input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 50%;
    max-width: 300px;
    border-right: none;
    outline: none;
  }

  .btn {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
    background-color: #3498db;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default Wrapper;
