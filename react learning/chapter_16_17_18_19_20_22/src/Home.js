import Feed from "./Feed"
import { useStoreState } from "easy-peasy";

const Home = () => {
  const searchResults = useStoreState((state) => state.searchResults)
  const isLoading = useStoreState((state) => state.isLoading)
  const fetchError = useStoreState((state) => state.fetchError)

  return (
    <main className="Home">
        {isLoading && <p className="statusMessage">Loading posts...</p>}
        {!isLoading && fetchError && <p className="statusMessage" style={{color: 'red'}}>{fetchError}</p> }
        {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p className="statusMessage">No posts to display.</p>)}
    </main>
  )
}
  
  export default Home