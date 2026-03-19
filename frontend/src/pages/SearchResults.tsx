import { useAppContext } from "../context/AppContext"
import Typography from "../components/common/Typography"
import Container from "../components/common/Container"
import EmptyState from "../components/common/EmptyState"

export default function SearchResults() {
  const { searchQuery } = useAppContext()

  return (
    <Container>
      <Typography variant="h1">Search Results</Typography>
      <Typography variant="body" color="textLight">
        {searchQuery 
          ? `Showing results for: "${searchQuery}"`
          : "Enter a search term to find stories"
        }
      </Typography>
      
      {!searchQuery && (
        <EmptyState
          title="No search query"
          message="Type something in the search bar to see results"
        />
      )}
    </Container>
  )
}
