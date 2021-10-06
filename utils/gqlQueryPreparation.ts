import { gql, DocumentNode } from '@apollo/client'

interface GqlConfig {
  declarations: string
  filters: string
}

export default function prepareQuery (query:string, config: GqlConfig): DocumentNode {
  return gql(
    query
      .replace(/#declarations#/g, config.declarations)
      .replace(/#filters#/g, config.filters)
  )
}
