import style from './styles.js'

import { numberFormat } from '../../lib/numberFormat';


const RangePriceFilter = ({title, facet}) => (
	<div className="filtro-section">
        <p className="title">{title}</p>

	    <div className="filtro-price">
	        <label for="initialPrice" className="price-wrapper">
	            <span>de R$</span>
	            <input type="text" className="price-input" id="initialPrice"/>
	        </label>
	        <span className="trace">-</span>
	        <label for="finalPrice" className="price-wrapper">
	            <span>até R$</span>
	            <input type="text" className="price-input" id="finalPrice"/>
	        </label>
	        <div className="button-wrapper">
	            <button className="checkBtn" id="filterPrice"></button>
	        </div>
	    </div>
		<style jsx>
			{style}
		</style>
		<style jsx>{`
        

        	.filtro-section {
			    border-bottom: 1px solid #e4e4e4;
			    padding: 10px;
			}

			.filtro-section .title {
			    color: var(--color-black);
			    font-weight: bold;
			    margin-bottom: 5px;
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



        `}</style>

	</div>
);

export default RangePriceFilter;
