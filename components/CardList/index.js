import globalStyles from '../styles/global.js'
import style from './styles.js'
import Card from '../Card'

class CardList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="cards">
				{this.props.products.map((item) => {
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
    }
}

export default CardList;
