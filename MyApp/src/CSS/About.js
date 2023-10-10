import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out; /* Add transition for smooth scaling */

  &:hover {
    transform: scale(1.05); /* Scale the wrapper on hover */
  }

  p {
    line-height: 2;
    margin-top: 2rem;
    font-weight: 700;
  }
`;

export default Wrapper;
