import globalStyles from '../styles/global.js'
import style from './styles.js'
import Card from '../Card'


const CardList = ({products}) => (
	<div className="cards">
		
		{products.map((item) => {
	        return <Card product={item}/>
	    })}
		
		
		<style jsx global>
        	{globalStyles}
      	</style>
		<style jsx>
			{style}
		</style>


	</div>
);

export default CardList;
