import globalStyles from '../styles/global.js'
import style from './styles.js'

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import withData from "../../lib/apollo";

import SearchTerm from '../SearchTerm';
import SearchFilter from '../SearchFilter';
import CardList from '../CardList';



const SEARCH = gql`
  query search($query: String, $page: Int, $sessionId: String, $userId: String){
	  search(query:$query, page:$page, sessionId:$sessionId, userId:$userId){
	    placements{
	      spellchecked,
	      facets{
	        min,
	        max,
	        facet,
	        values{
	          filter,
	          value,
	          count
	        }
	      },
	      docs{
	        id,
	        name,
	        imageId,
	        offer{
	          listPrice,
	          price
	        }
	      }
	    }
	  }
  }
`;

const SearchResult = withData(props => {

	const { loading, error, data, fetchMore } = useQuery(SEARCH, {
    	variables: { query: props.query, page:1, sessionId:"rr_test", userId:null },
    	notifyOnNetworkStatusChange: true
  	});

  	if (data && data.search) {
    	const products = data.search.placements[0].docs;
    	const dym = data.search.placements[0].spellchecked
    	const facets = data.search.placements[0].facets

    	console.log(facets)

		return (
			<div>
				<SearchTerm dym={dym} term={props.query}/>
				<SearchFilter facets={facets}/>
			  	<CardList products={data.search.placements[0].docs}/>
			</div>
		);
	}
	else{
		return (
			<div>
			  <p>carregando...</p>
			</div>
		);	
	}
});

export default SearchResult;
