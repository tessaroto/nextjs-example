import globalStyles from '../styles/global.js'
import style from './styles.js'

class Breadcrumb extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="breadcrumb-list">
                <div className={this.props.name}>
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
            </div>
        );
    }
}

export default Breadcrumb;



