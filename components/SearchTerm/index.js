import globalStyles from '../styles/global.js'
import style from './styles.js'


class SearchTerm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDymClick(e) {
        if (this.props.onDymClick)
            this.props.onDymClick(this.props.dym);
    }

    renderDym() {
        const linkDym = "/search?q=" + this.props.dym;
        return (
            <p className="dym">
                Você quis dizer: <a onClick={this.handleDymClick.bind(this)}>{this.props.dym}</a>
                <style jsx>
                    {style}
                </style>
            </p>
        );
    }

    render(){
        return (
            <div className="search-term">
                <h1 className="search-term">
                    Resultados para "{this.props.term}"
                </h1>
                {this.props.dym && this.renderDym()}
                <style jsx>
                    {style}
                </style>
            </div>
        );
    }
}

export default SearchTerm;



