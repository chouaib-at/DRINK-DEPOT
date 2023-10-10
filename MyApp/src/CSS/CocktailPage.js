// Wrapper.js
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .btn {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      border: 2px solid #3498db;
      color: #fff;
      background-color: #00008b;
      border-radius: 5px;
    }

    .btn:hover {
      background-color: #0056b3;
    }
  }

  .drink {
    display: flex;
    align-items: center;

    .img {
      border-radius: 10px;
      height: 15rem;
      transition: transform 0.3s;
    }

    .img:hover {
      transform: scale(1.1);
    }

    .spacer {
      width: 20px;
    }

    .drink-info {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      .drink-data {
        font-weight: bold;
        font-size: 18px;
        color: #333;
        margin-bottom: 10px;
      }
    }
  }
`;

export default Wrapper;
