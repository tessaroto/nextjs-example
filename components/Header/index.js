import globalStyles from '../styles/global.js'
import style from './styles.js'

import { numberFormat } from '../../lib/numberFormat';
import { resolvePath } from '../../lib/resolver';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <header>
                <div className="wrapper">
                    <div className="package">
                        
                        <a className="header-brand" href="/">
                            <img class="header__logo" src={resolvePath("/nova-loja/static/images/logo.svg")} alt="Logo do iFood Shop"/>
                        </a>
                        
                        <div className="header-middle">
                            
                            <div className="actions">
                                <div className="header-action">
                                    <i className="icon address"></i>
                                    <span className="action-text">
                                        03805070
                                    </span>
                                </div>

                                <a className="header-action" href="/entrar?destino=/lista-compras">
                                    <i class="icon wishlist"></i>
                                    <span className="action-text">Minha lista de compras</span>
                                </a>
                                                                 
                                <a className="header-action" href="/entrar">
                                    <i className="icon user"></i>
                                    <span className="action-text">Entrar</span>
                                </a>    
                            </div>
                            
                            <form className="searchbar" action="/search" method="get">
                                <input className="search-field" name="q" id="q" autoComplete="off" placeholder="Olá, o que você procura?" type="text"/>
                                <button className="search-button"></button>
                                <div class="floating-box" id="dropdownSearch"></div>
                            </form>
                        </div>
                        
                        <div class="header__column header__column--medium flex column mrg-24 mrg-t-72">
                            <div class="header__actions flex column end">
                                
                    
                                <a className="header-action cart flex" id="cart" href="/comprar-agora">
                                    <div class="cart__icons flex middle center">
                                    
                                    </div>
                                    <div className="cart-price">
                                        <span>Carrinho</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>
                    {globalStyles}
                </style>
                <style jsx>
                    {style}
                </style>
                <style jsx>{`
                    header {
                        position: sticky;
                        top: 0;
                        z-index: 100;
                        background-color: var(--color-white);
                        color: var(--color-black);
                        float: left;
                        width: 100%;
                        border-bottom: 2px solid var(--color-grey-light);
                    }

                    header > div {
                        background-color: var(--color-white);
                        position: relative;
                    }

                    header.wrapper > div {
                        position: relative;
                        z-index: 10;
                    }
                    
                    .header-brand {
                        width: 11%;
                        margin: 24px;
                        float: left;
                    }

                    .header-middle {
                        -webkit-flex-grow: 1;
                        -webkit-flex-direction: column;
                        max-width: 53%;
                        min-width: 50%;
                        display: -webkit-flex;
                        margin-top: 24px;
                        margin-bottom: 24px;
                        margin-left: 16px;
                        margin-right: 16px;
                        float: left;
                    }

                    .header-middle .actions{
                        -webkit-align-items: center;
                        -webkit-justify-content: space-between;
                        position: relative;
                        min-height: 32px;
                    }

                    .header-action {
                        -webkit-align-items: center;
                        padding-right: 23px;
                        position: relative;
                        cursor: pointer;
                        float: left;
                    }

                    .action-text{
                        max-width: 171px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-weight: var(--font-weight-light);
                        margin-left: 32px;
                    }

                    .searchbar{
                        position: relative;
                        box-shadow: var(--smallsized-shadow);
                        margin-top: 16px;
                    }

                    .search-field{
                        z-index: 10;
                        position: relative;

                        width: calc(100% - 40px);
                        background-color: var(--color-lightgrey);
                        border: none;
                        border-top-left-radius: var(--border-radius-soft);
                        border-bottom-left-radius: var(--border-radius-soft);

                        height: 40px;
                        font-weight: var(--font-weight-regular);
                        padding: 0 16px;

                    }

                    .search-button {
                        height: 40px;
                        width: 40px;
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-color: var(--color-lightgrey);
                        border: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 10;
                        border-top-right-radius: var(--border-radius-soft);
                        border-bottom-right-radius: var(--border-radius-soft);
                    }


                    .icon {
                        background-size: contain;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        left: 0;
                        background-repeat: no-repeat;
                        background-position: center;
                    }

                    .icon.address:before {
                        background-image: url(../../static/images/address.svg);
                        width: 17px;
                        height: 24px;
                    }


                    .cart {
                        min-height: 40px;
                        min-width: 152px;
                        background-color: var(--color-ifood);
                        border-radius: var(--border-radius-soft);
                    }

                    .cart-price{
                        font-weight: var(--font-weight-medium);
                        font-size: 18px;
                        color: var(--color-white);
                        width: calc(100% - 48px);
                    }

                    .package {
                        max-width: 1200px;
                        margin: 0 auto;

                    }

                `}</style>

            </header>
        );
    }
}

export default Header;



