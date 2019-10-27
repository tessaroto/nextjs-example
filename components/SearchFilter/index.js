import globalStyles from '../styles/global.js'
import style from './styles.js'

import { numberFormat } from '../../lib/numberFormat';
import RangePriceFilter from '../RangePriceFilter';
import SelectableFilter from '../SelectableFilter';

const renderFilterType = (item) => {
	switch(item.facet) {
    case 'brand':
      return <SelectableFilter title="Marca" facet={item}/>;
    case 'product_pricecents':
      return <SelectableFilter title="Preço" facet={item}/>;
    
    default:
      return null;
  }
}

const SearchFilter = ({facets}) => (
	<div className="nav-facets">
		

		<div className="filtro-wrapper">
			<RangePriceFilter title="Faixa de preço"/>

			{facets && facets.map((item) => {
		        return renderFilterType(item)
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

export default SearchFilter;
