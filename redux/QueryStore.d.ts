import { DocumentNode } from '@apollo/client'

export interface QueryStoreReducerAction {
  type: string
  filter: {
    offset?: number
    name?: string
    type?: string
  }
}

export interface QueryStoreReducerState {
  query: DocumentNode
  variables: {
    limit: number
    offset: number
    type?: string
    name?: string
  }
}
