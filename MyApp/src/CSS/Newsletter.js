import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h4 {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  .form-row {
    margin-bottom: 1rem;
  }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .form-input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f0ffff;
  }

  .btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid #3498db;
    background-color: #00008b;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6495ed;
    }
  }

  .btn-block {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

export default Wrapper;
