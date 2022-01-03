import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    String: string,
    Int: number,
    Float: number,
    Boolean: boolean,
}

export interface Attribute {
    trait?: Scalars['String']
    value?: Scalars['String']
    __typename: 'Attribute'
}

export interface AggregateAttrbute {
    trait: Scalars['String']
    values: (AggregateAttrbuteValue | undefined)[]
    __typename: 'AggregateAttrbute'
}

export interface AggregateAttrbuteValue {
    value: Scalars['String']
    count?: Scalars['Int']
    __typename: 'AggregateAttrbuteValue'
}

export interface Contract {
    id: Scalars['String']
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    address: Scalars['String']
    name?: Scalars['String']
    symbol?: Scalars['String']
    totalSupply?: Scalars['Int']
    mintSupply?: Scalars['Int']
    token?: Token
    tokens: (Token | undefined)[]
    attributes: (AggregateAttrbute | undefined)[]
    __typename: 'Contract'
}

export interface Token {
    id: Scalars['String']
    tokenId: Scalars['Int']
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    name?: Scalars['String']
    description?: Scalars['String']
    image?: Scalars['String']
    thumbnailImage?: Scalars['String']
    position?: Scalars['Int']
    avgRarity?: Scalars['Float']
    statRarity?: Scalars['Float']
    openseaUrl: Scalars['String']
    attributes: (Attribute | undefined)[]
    __typename: 'Token'
}

export interface Query {
    listContracts: (Contract | undefined)[]
    getContract?: Contract
    subscribeContract?: Contract
    __typename: 'Query'
}

export interface Mutation {
    addContract?: Contract
    reindex?: Scalars['Boolean']
    reaggregate?: Scalars['Boolean']
    __typename: 'Mutation'
}

export interface Subscription {
    subscribeContract?: Contract
    __typename: 'Subscription'
}

export interface AttributeRequest{
    trait?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AggregateAttrbuteRequest{
    trait?: boolean | number
    values?: AggregateAttrbuteValueRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AggregateAttrbuteValueRequest{
    value?: boolean | number
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContractRequest{
    id?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    address?: boolean | number
    name?: boolean | number
    symbol?: boolean | number
    totalSupply?: boolean | number
    mintSupply?: boolean | number
    token?: [{tokenId: Scalars['Int']},TokenRequest]
    tokens?: [{skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),order?: (Scalars['String'] | null)},TokenRequest] | TokenRequest
    attributes?: AggregateAttrbuteRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TokenRequest{
    id?: boolean | number
    tokenId?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    name?: boolean | number
    description?: boolean | number
    image?: boolean | number
    thumbnailImage?: boolean | number
    position?: boolean | number
    avgRarity?: boolean | number
    statRarity?: boolean | number
    openseaUrl?: boolean | number
    attributes?: AttributeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    listContracts?: [{address?: ((Scalars['String'] | null)[] | null),skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),order?: (Scalars['String'] | null)},ContractRequest] | ContractRequest
    getContract?: [{address: Scalars['String']},ContractRequest]
    subscribeContract?: [{address: Scalars['String']},ContractRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    addContract?: [{address: Scalars['String']},ContractRequest]
    reindex?: [{address: Scalars['String'],tokenIds?: ((Scalars['Int'] | null)[] | null)}]
    reaggregate?: [{address: Scalars['String']}]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionRequest{
    subscribeContract?: [{address: Scalars['String']},ContractRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Attribute_possibleTypes = ['Attribute']
export const isAttribute = (obj?: { __typename?: any } | null): obj is Attribute => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAttribute"')
  return Attribute_possibleTypes.includes(obj.__typename)
}



const AggregateAttrbute_possibleTypes = ['AggregateAttrbute']
export const isAggregateAttrbute = (obj?: { __typename?: any } | null): obj is AggregateAttrbute => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAggregateAttrbute"')
  return AggregateAttrbute_possibleTypes.includes(obj.__typename)
}



const AggregateAttrbuteValue_possibleTypes = ['AggregateAttrbuteValue']
export const isAggregateAttrbuteValue = (obj?: { __typename?: any } | null): obj is AggregateAttrbuteValue => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAggregateAttrbuteValue"')
  return AggregateAttrbuteValue_possibleTypes.includes(obj.__typename)
}



const Contract_possibleTypes = ['Contract']
export const isContract = (obj?: { __typename?: any } | null): obj is Contract => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContract"')
  return Contract_possibleTypes.includes(obj.__typename)
}



const Token_possibleTypes = ['Token']
export const isToken = (obj?: { __typename?: any } | null): obj is Token => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isToken"')
  return Token_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}


export interface AttributePromiseChain{
    trait: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    value: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface AttributeObservableChain{
    trait: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    value: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface AggregateAttrbutePromiseChain{
    trait: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    values: ({get: <R extends AggregateAttrbuteValueRequest>(request: R, defaultValue?: (FieldsSelection<AggregateAttrbuteValue, R> | undefined)[]) => Promise<(FieldsSelection<AggregateAttrbuteValue, R> | undefined)[]>})
}

export interface AggregateAttrbuteObservableChain{
    trait: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    values: ({get: <R extends AggregateAttrbuteValueRequest>(request: R, defaultValue?: (FieldsSelection<AggregateAttrbuteValue, R> | undefined)[]) => Observable<(FieldsSelection<AggregateAttrbuteValue, R> | undefined)[]>})
}

export interface AggregateAttrbuteValuePromiseChain{
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}

export interface AggregateAttrbuteValueObservableChain{
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}

export interface ContractPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    mintSupply: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    token: ((args: {tokenId: Scalars['Int']}) => TokenPromiseChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Promise<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),order?: (Scalars['String'] | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)[]) => Promise<(FieldsSelection<Token, R> | undefined)[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)[]) => Promise<(FieldsSelection<Token, R> | undefined)[]>}),
    attributes: ({get: <R extends AggregateAttrbuteRequest>(request: R, defaultValue?: (FieldsSelection<AggregateAttrbute, R> | undefined)[]) => Promise<(FieldsSelection<AggregateAttrbute, R> | undefined)[]>})
}

export interface ContractObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    address: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    symbol: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    totalSupply: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    mintSupply: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    token: ((args: {tokenId: Scalars['Int']}) => TokenObservableChain & {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)) => Observable<(FieldsSelection<Token, R> | undefined)>}),
    tokens: ((args?: {skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),order?: (Scalars['String'] | null)}) => {get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)[]) => Observable<(FieldsSelection<Token, R> | undefined)[]>})&({get: <R extends TokenRequest>(request: R, defaultValue?: (FieldsSelection<Token, R> | undefined)[]) => Observable<(FieldsSelection<Token, R> | undefined)[]>}),
    attributes: ({get: <R extends AggregateAttrbuteRequest>(request: R, defaultValue?: (FieldsSelection<AggregateAttrbute, R> | undefined)[]) => Observable<(FieldsSelection<AggregateAttrbute, R> | undefined)[]>})
}

export interface TokenPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    image: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    thumbnailImage: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    position: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    avgRarity: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    statRarity: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    openseaUrl: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    attributes: ({get: <R extends AttributeRequest>(request: R, defaultValue?: (FieldsSelection<Attribute, R> | undefined)[]) => Promise<(FieldsSelection<Attribute, R> | undefined)[]>})
}

export interface TokenObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    tokenId: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    image: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    thumbnailImage: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    position: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    avgRarity: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    statRarity: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    openseaUrl: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    attributes: ({get: <R extends AttributeRequest>(request: R, defaultValue?: (FieldsSelection<Attribute, R> | undefined)[]) => Observable<(FieldsSelection<Attribute, R> | undefined)[]>})
}

export interface QueryPromiseChain{
    listContracts: ((args?: {address?: ((Scalars['String'] | null)[] | null),skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),order?: (Scalars['String'] | null)}) => {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)[]) => Promise<(FieldsSelection<Contract, R> | undefined)[]>})&({get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)[]) => Promise<(FieldsSelection<Contract, R> | undefined)[]>}),
    getContract: ((args: {address: Scalars['String']}) => ContractPromiseChain & {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)) => Promise<(FieldsSelection<Contract, R> | undefined)>}),
    subscribeContract: ((args: {address: Scalars['String']}) => ContractPromiseChain & {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)) => Promise<(FieldsSelection<Contract, R> | undefined)>})
}

export interface QueryObservableChain{
    listContracts: ((args?: {address?: ((Scalars['String'] | null)[] | null),skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),order?: (Scalars['String'] | null)}) => {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)[]) => Observable<(FieldsSelection<Contract, R> | undefined)[]>})&({get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)[]) => Observable<(FieldsSelection<Contract, R> | undefined)[]>}),
    getContract: ((args: {address: Scalars['String']}) => ContractObservableChain & {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)) => Observable<(FieldsSelection<Contract, R> | undefined)>}),
    subscribeContract: ((args: {address: Scalars['String']}) => ContractObservableChain & {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)) => Observable<(FieldsSelection<Contract, R> | undefined)>})
}

export interface MutationPromiseChain{
    addContract: ((args: {address: Scalars['String']}) => ContractPromiseChain & {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)) => Promise<(FieldsSelection<Contract, R> | undefined)>}),
    reindex: ((args: {address: Scalars['String'],tokenIds?: ((Scalars['Int'] | null)[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>}),
    reaggregate: ((args: {address: Scalars['String']}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>})
}

export interface MutationObservableChain{
    addContract: ((args: {address: Scalars['String']}) => ContractObservableChain & {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)) => Observable<(FieldsSelection<Contract, R> | undefined)>}),
    reindex: ((args: {address: Scalars['String'],tokenIds?: ((Scalars['Int'] | null)[] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>}),
    reaggregate: ((args: {address: Scalars['String']}) => {get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>})
}

export interface SubscriptionPromiseChain{
    subscribeContract: ((args: {address: Scalars['String']}) => ContractPromiseChain & {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)) => Promise<(FieldsSelection<Contract, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    subscribeContract: ((args: {address: Scalars['String']}) => ContractObservableChain & {get: <R extends ContractRequest>(request: R, defaultValue?: (FieldsSelection<Contract, R> | undefined)) => Observable<(FieldsSelection<Contract, R> | undefined)>})
}