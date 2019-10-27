import css from 'styled-jsx/css'

export default css.global`

  .card {
    height: auto;
    min-width: 200px;
    float: left;
    text-align: center;
    margin-bottom: 32px;
  }

  .product {
      display: flex;
      flex-direction: column;
      height: 368px;
      width: 224px;
      background-color: #ffffff;
      position: relative;
      border: 1px solid #f2f2f2;
  }

  .wrap {
      height: 100%;
      line-height: 16px;
      text-align: center;
      padding: 16px;
  }

  .image {
      height: 50%;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      margin-bottom: 16px;
  }

  img{
    margin: 0 auto;
      height: 100%;
      width: auto !important;
  }

  .info {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 45%;
  }

  .description {
      display: flex;
      flex-direction: column;
      line-height: 19px;
  }

  .name {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    max-height: 40px;
    overflow: hidden;
    font-weight: var(--font-weight-regular);
  }

  .quantity {
      color: var(--color-mediumgrey);
    font-size: 14px;
    font-weight: var(--font-weight-light);
  }

  .prices {
      display: flex;
      flex-direction: column;
      line-height: 22px;
      margin-top: 10px;
  }

  .price {
      font-size: 22px;
      font-weight: var(--font-weight-regular);
  }

  .units {
      height: 22px;
  }

  .action {
      min-height: 40px;
      max-height: 40px;
      background-color: #f7f7f7;
      border-top: 1px solid #e4e4e4;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .button-cart-add {
      padding: 5px;
      width: 100%;
      text-align: center;
      background: var(--color-ifood);
      color: #FFFFFF;
      cursor: pointer;
      font-size: 16px;
      font-weight: var(--font-weight-medium);
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 0px;
      border: none;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
  }


`