import globalStyles from '../styles/global.js'
import style from './styles.js'

import { numberFormat } from '../../lib/numberFormat';

const SelectableFilter = ({title, facet}) => (
	
	<div className="filtro-section">
        <p className="title">{title}</p>

        <div className="filtro-selectables">
	        
	        {facet && facet.values.map((item) => {

	        	return <a href={item.filter} className="selectable ">
			                {item.value} ({item.count})
			        </a>
		    })}
	        
	    </div>
    
		<style jsx global>
        	{globalStyles}
      	</style>
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

        `}</style>

	</div>
);

export default SelectableFilter;
