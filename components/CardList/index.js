import globalStyles from '../styles/global.js'
import style from './styles.js'
import Card from '../Card'

const elements = ['1', '2', '3'];


const CardList = () => (

	
	<div className="cards">
		
		{elements.map((item, index) => {
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
