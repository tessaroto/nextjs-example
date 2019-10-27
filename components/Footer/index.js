import globalStyles from '../styles/global.js'
import style from './styles.js'

import { numberFormat } from '../../lib/numberFormat';

const staticDomain = "https://shop.ifood.com.br/"
const resolvePath = (name) => {
    return staticDomain + name;
}




const Footer = () => (

    <footer>
        <div className="footer-package">
            <div className="footer-top">
                <div className="column left">
                    <p className="item-head">
                        iFood Shop
                    </p>
                    <a className="item" target="_blank" href="https://intercom.help/ifood-shop">
                        Perguntas frequentes
                    </a>
                    <a className="item" target="_blank" href="https://intercom.help/ifood-shop">
                        Fale conosco
                    </a>
                </div>

                <div className="column center">
                    <p className="item-head">
                        Descubra
                    </p>
                    <a className="item" href="https://ifood.com.br">
                        iFood
                    </a>
                    <a className="item" target="_blank" href="https://restaurante.ifood.com.br">
                        Cadastre seu restaurante
                    </a>
                    <a className="item" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScfFy5_mYKO_TEzqsUPrb6eEKjn7eBGQMkH_SG_2f7uwxi9gQ/viewform">
                        Indique um fornecedor
                    </a>
                </div>
                <div className="column right">
                    <div>
                        <p className="item-head">
                            Formas de pagamento
                        </p>
                        <div className="item">
                            <img className="pay-method" src={resolvePath("/nova-loja/static/images/footer/boleto.svg")} alt="boleto"/>
                            <img className="pay-method" src={resolvePath("/nova-loja/static/images/footer/mastercard.svg")} alt="mastercard"/>
                            <img className="pay-method" src={resolvePath("/nova-loja/static/images/footer/hipercard.svg")} alt="hipercard"/>
                            <img className="pay-method" src={resolvePath("/nova-loja/static/images/footer/visa.svg")} alt="visa"/>
                            <img className="pay-method" src={resolvePath("/nova-loja/static/images/footer/amex.svg")} alt="amex"/>
                            <img className="pay-method" src={resolvePath("/nova-loja/static/images/footer/elo.svg")} alt="elo"/>
                        </div>
                    </div>
                    <div>
                        <p className="item-head">
                            Segurança
                        </p>
                        <img src={resolvePath("/nova-loja/static/images/footer/comodo.png")} alt="comodo secure"/>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-item copyright">
                    <img class="mrg-r-16" src={resolvePath("/nova-loja/static/images/footer/ifood.svg")} alt="logo do ifood shop no rodapé"/>
                    <span>© Copyright 2019 - iFood - Todos os<br/>
                        direitos reservados iFood com Agência de<br/>
                        Restaurantes Online S.A.</span>
                </div>
                <a className="footer-item" href="/institucional/termos-e-condicoes-de-uso">
                    Termos e condições de uso
                </a>
                <a className="footer-item" target="_blank" href="https://www.ifood.com.br/codigo-de-conduta">
                    Código de conduta
                </a>
                <a className="footer-item" href="/institucional/politica-de-privacidade-ifood">
                    Privacidade
                </a>
            </div>
        </div>
        <style jsx global>
            {globalStyles}
        </style>
        <style jsx>
            {style}
        </style>

    </footer>
);

export default Footer;



