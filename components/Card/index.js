import globalStyles from '../styles/global.js'
import style from './styles.js'

import { numberFormat } from '../../lib/numberFormat';

const Card = ({product}) => (
	<div className="card">
		<div className="product">
			<div className="wrap">
				<a href="/produto/refrigerante-coca-cola-pet-600-ml-pack-com-12-0-unidades-10478">
					<div className="image">
						<img alt="Refrigerante Coca Cola Pet 600 ml      Pack com 12.0 Unidades" title="Refrigerante Coca Cola Pet 600 ml      Pack com 12.0 Unidades" src={product.imageId}/>
					</div>
					<div className="info">
						<div className="description">
							<p className="name">
								{product.name}
							</p>
							<span className="quantity">
								12
								Unidades
							</span>
						</div>
						<div className="prices">
							<strong className="price">
								{numberFormat(product.offer.price)}

							</strong>
						
							<span className="units">
									R$ 4,99/un
							</span>
						</div>
					</div>
				</a>
			</div>
			<div className="action">
				<button className="button-cart-add">
						Adicionar
				</button>
			</div>
		</div>
		<style jsx global>
        	{globalStyles}
      	</style>
		<style jsx>
			{style}
		</style>
	</div>
);

export default Card;
