import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
  flex-direction: column;
  width: 60%;
  padding: 10px;
  height: fit-content;

  .coffee-card_row {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 15px;
  }
  .coffee-card_item {
    font-size: 35px;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
  }
  .coffee-card_item_even {
    font-size: 35px;
    color: #f08080;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default StyledCard;
