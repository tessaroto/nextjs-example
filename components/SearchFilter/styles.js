import css from 'styled-jsx/css'

export default css.searchFilter`

  .nav-facets {
      width: 15.0%;
      float: left;
      padding-right: 1%;
  }

  .filtro-wrapper {

      width: 100%;
      background-color: #ffffff;
      border: 1px solid #e4e4e4;
  }


  .filtro-section {
      border-bottom: 1px solid #e4e4e4;
      padding: 10px;
  }

  .filtro-section .title {
      color: var(--color-black);
      font-weight: bold;
      margin-bottom: 5px;
  }
  
  

  .filtro-section .filtro-selectables {
    display: flex;
    flex-direction: column;
  }

  .filtro-section .filtro-selectables .selectable {
      color: #646a79;
      font-size: 15px;
      margin: 5px;
  }


  .filtro-selectables {
    display: flex;
    flex-direction: column;
  }

  .filtro-selectables .selectable {
      color: #646a79;
      font-size: 15px;
      margin: 5px;
  }




  .filtro-price .price-wrapper span {
      color: #646a79;
      font-size: 12px;
  }


  .filtro-price {
      display: flex;
      justify-content: space-between;
  }

  .filtro-price .price-wrapper {
      width: 30%;
  }


  .filtro-price .trace {
      text-align: center;
      display: flex;
      align-items: center;
      padding-top: 20px;
      color: #646a79;
      font-weight: bold;
  }

  .filtro-price .button-wrapper {
      display: flex;
      align-items: flex-end;
  }

  .filtro-price .price-wrapper .price-input {
      border-radius: 0;
      padding: 5px;
      text-align: center;
      font-size: 14px;
      width: 100%;
  }

  .filtro-price .checkBtn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      padding: 0;
      border-radius: 0;
      background-color: var(--color-ifood);
      position: relative;
      height: 30px;
      width: 30px;
      cursor: pointer;
  }

  .checkBtn:before {
      content: '';
      background-image: url(https://shop.ifood.com.br/images/novo/select.png);
      width: 24px;
      height: 24px;
  }



`