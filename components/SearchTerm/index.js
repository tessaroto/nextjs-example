import globalStyles from '../styles/global.js'
import style from './styles.js'

const SearchTerm = (props) => {
    if (props.dym){
        const linkDym = "/search?q=" + props.dym;
        return (
            <div className="dym">
                <h1 className="search-term">Você quis dizer: <a href={linkDym}>"{props.dym}"</a></h1>
                <style jsx>
                    {style}
                </style>
            </div>
        );
    }
    else{
        return (
            <div>
                <h1 className="search-term">Resultados para "{props.term}"</h1>
                <style jsx>
                    {style}
                </style>
            </div>
        );   
    }
};

export default SearchTerm;



