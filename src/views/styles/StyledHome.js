import styled from 'styled-components';
import coffeeImg from '../images/coffee.jpg';
const StyledHome = styled.div`
  background-image: url(${coffeeImg});
  background-color: #cccccc;
  width: 100%;
  display: block;
  max-width: 500px;
  margin: 100px auto;
  padding-top: 20px;
  text-align: center;
  height: 100vh;
`;

export default StyledHome;
