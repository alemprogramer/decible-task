import gql from "graphql-tag";

export const CALLS_QUERY = gql`
  query GetCalls($page: Float, $limit: Float) {
    paginatedCalls(offset: $page, limit: $limit) {
      nodes {
        id
        direction
        call_type
        duration
        from
        to
        via
        created_at
        is_archived
      }
      totalCount
      hasNextPage
    }
  }
`;