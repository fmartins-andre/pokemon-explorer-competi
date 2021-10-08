import { createStore } from 'redux'
import prepareQuery from '../utils/gqlQueryPreparation'
import { queryPokemonsList, config } from '../service/queryPokemonsList'
import { QueryStoreReducerState, QueryStoreReducerAction } from './QueryStore'

const defaultQueryVars = {
  limit: 6,
  offset: 0
}

const initialState = {
  query: prepareQuery(queryPokemonsList, config.listAll),
  variables: defaultQueryVars
}

function setPokemonType (state:QueryStoreReducerState, action: QueryStoreReducerAction) {
  const newState = { ...state }
  newState.query = prepareQuery(queryPokemonsList, config.filterByType)
  newState.variables.type = action.filter.type
  newState.variables.offset = 0 // reset offset
  delete newState.variables.name // reset name

  return newState
}

function setPokemonName (state:QueryStoreReducerState, action: QueryStoreReducerAction) {
  const newState = { ...state }
  newState.query = prepareQuery(queryPokemonsList, config.filterByType)
  newState.variables.name = action.filter.name
  newState.variables.offset = 0 // reset offset
  delete newState.variables.type // reset type

  return newState
}

function setOffset (state:QueryStoreReducerState, action: QueryStoreReducerAction) {
  const newState = { ...state }
  newState.variables.offset = action.filter.offset as number

  return newState
}

function storeQueries (state: QueryStoreReducerState = initialState, action: QueryStoreReducerAction) {
  switch (action.type) {
    case 'SET_POKEMON_TYPE':
      return setPokemonType(state, action)
    case 'SET_POKEMON_NAME':
      return setPokemonName(state, action)
    case 'SET_OFFSET':
      return setOffset(state, action)
    default:
      return state
  }
}

const queriesStore = createStore(storeQueries)

export default queriesStore
