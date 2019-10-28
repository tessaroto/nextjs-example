import globalStyles from '../styles/global.js'
import style from './styles.js'

import { numberFormat } from '../../lib/numberFormat';

class SearchFilter extends React.Component {
	constructor(props) {
		super(props);
	}

	formatValuePrices(value) {
		var prices = value.split(":");
		return numberFormat(prices[0]/100.0) + " Até " + numberFormat(prices[1]/100.0);
	}

	renderFilter(item) {
		switch(item.facet) {
		    case 'brand':
		    	return this.renderSelectableFilter({
		    		title: "Marca", 
		    		values: item.values
		    	});

		    case 'product_pricecents':
		     	return this.renderSelectableFilter({
		     		title:"Preço", 
		     		values:item.values, 
		     		isPriceRange:true
		     	});

		    default:
		     	return null;
	  	}
	}

	renderSelectableFilter ({title, values, isPriceRange}) {
		return (
			<div className="filtro-section">
		        <p className="title">{title}</p>

		        <div className="filtro-selectables">
			        
			        {values && values.map((item) => {

			        	return <a href={item.filter} className="selectable ">
					                {!isPriceRange && item.value} 
					                {isPriceRange && this.formatValuePrices(item.value)} ({item.count})
					        </a>
				    })}
			        
			    </div>
			    <style jsx>
					{style}
				</style>
			</div>
		);
	}

	renderRangePriceFilter() {
		return (
			<div className="filtro-section">
		        <p className="title">Faixa de preço</p>

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
			</div>
		);
	}

	render() {
	    return (
	      	<div className="nav-facets">
				<div className="filtro-wrapper">
					
					{this.renderRangePriceFilter()}

					{this.props.facets && this.props.facets.map((item) => {
				        return this.renderFilter(item)
				    })}
				</div>
				<style jsx global>
		        	{globalStyles}
		      	</style>
				<style jsx>
					{style}
				</style>
			</div>
	    );
  	}
}

export default SearchFilter;
