import globalStyles from '../styles/global.js'
import style from './styles.js'

import { numberFormat } from '../../lib/numberFormat';

const staticDomain = "https://shop.ifood.com.br/"
const resolvePath = (name) => {
    return staticDomain + name;
}





const Breadcrumb = ({name}) => (

    <div className="breadcrumb-list">
        <div className={name}>
            <a href="/">
                Tela Inicial
            </a>
        </div>
    
        <style jsx global>
            {globalStyles}
        </style>
        <style jsx>
            {style}
        </style>

        <style jsx>{`
        
            

        `}</style>
    </div>
);

export default Breadcrumb;



