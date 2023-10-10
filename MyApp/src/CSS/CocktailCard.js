import styled from "styled-components";

const Wrapper = styled.article`
  margin: 4px;
  border-bottom: 1px solid gray;
  width: 60%;
  margin: auto;
  min-width: 300px;
.card-container{
  display: flex;
  background-color: #f9f9f9;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  min-width: 300px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

img {
  width: 80%;
  border-radius: 10px;
  height: 15rem;
  margin: 5px;
  transition: transform 0.3s ease; /* Added transition property for smooth scaling */
  
  &:hover {
      border-radius: 10px;
      transform: scale(1.1); /* Scale the image to 1.1 on hover */
    }}

  .discription {
    width: 208px;
    padding: 1rem;
    background-color: #f9f9f9; /* Background color for the footer */
    border-radius: 0 0 10px 10px; /* Rounded corners for the bottom */
    display: flex;
    flex-direction: column;
    align-items: center;
  }


    h4 {
      margin-bottom: 0.2rem;
      font-weight: bold;
      font-size: 1.5rem;
    }

    h5 {
      margin-bottom: 0.2rem;
      font-weight: normal;
      font-size: 1.2rem;
    }

    p {
      margin-bottom: 1rem;
      color: #555;
      font-size: 1rem;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      font-size: 1rem;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      border: 2px solid #3498db;
      color: #fff;
      background-color: #00008B;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
`;

export default Wrapper;
