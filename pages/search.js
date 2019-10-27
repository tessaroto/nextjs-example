
import SearchResult from '../components/SearchResult';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

import { useRouter } from 'next/router'



export default () => {
	const router = useRouter()
	const { q } = router.query
	return (
		<div className="main">
			<Header term={q}/>
			<div className="package">
			 	<Breadcrumb/>
			  	<SearchResult query={q}/>
			</div>
			<Footer/>
			<style jsx>{`
				.main {
		            background-color: var(--main-background-color);
		            min-height: calc(100vh - 300px);
		        }

		        .package {
		        	max-width: 1200px;
	    			margin: 0 auto;
	    			clear: both;
	    		}
			`}</style>

		</div>
	);
}