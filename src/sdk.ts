import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export enum AttributeTypeEnum {
  Category = 'CATEGORY',
  Numeric = 'NUMERIC',
  Range = 'RANGE'
}

export type CreateBuyTxOutput = {
  __typename?: 'CreateBuyTxOutput';
  data?: Maybe<Array<Scalars['Float']>>;
  error?: Maybe<MarketPlaceTxOutputError>;
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  display_name: Scalars['String'];
  img_url?: InputMaybe<Scalars['String']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  launch_date?: InputMaybe<Scalars['DateTime']>;
  mint_auth?: InputMaybe<Scalars['String']>;
  project_id: Scalars['String'];
  protocol: ProtocolEnum;
  supply?: InputMaybe<Scalars['Float']>;
  twitter?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type GetBufferOutput = {
  __typename?: 'GetBufferOutput';
  data: Array<Scalars['Float']>;
};

export type GetMarketPlaceSnapshotCondition = {
  has_metadata?: InputMaybe<Scalars['Boolean']>;
  include_attribute_details?: InputMaybe<Scalars['Boolean']>;
  include_floors?: InputMaybe<Scalars['Boolean']>;
  listing_type?: InputMaybe<MarketPlaceActionEnum>;
  price_filter?: InputMaybe<MarketPlacePricingFilterValues>;
  project_ids?: InputMaybe<Array<ProjectIdWithAttributes>>;
  token_addresses?: InputMaybe<Array<Scalars['String']>>;
};

export type GetMarketPlaceSnapshotsResponse = {
  __typename?: 'GetMarketPlaceSnapshotsResponse';
  market_place_snapshots?: Maybe<Array<MarketPlaceSnapshotResponse>>;
  pagination_info: PaginationInfoResponseType;
};

export type GetMarketPlaceStatusResponse = {
  __typename?: 'GetMarketPlaceStatusResponse';
  mps: Array<MarketPlaceStatus>;
};

export type GetOverallProjectStatOutput = {
  __typename?: 'GetOverallProjectStatOutput';
  market_cap?: Maybe<Scalars['Float']>;
  previous_market_cap_change_in_sol?: Maybe<Scalars['Float']>;
  previous_volume_change_in_sol?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

export type GetProjectStatByNameCondition = {
  display_name: Scalars['String'];
  tag?: InputMaybe<Scalars['String']>;
};

export type GetProjectStatCount = {
  __typename?: 'GetProjectStatCount';
  num_of_projects: Scalars['Float'];
};

export type GetProjectStatsCondition = {
  is_verified?: InputMaybe<Scalars['Boolean']>;
  project_ids?: InputMaybe<Array<Scalars['String']>>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type GetProjectStatsOutput = {
  __typename?: 'GetProjectStatsOutput';
  pagination_info: PaginationInfoResponseType;
  project_stats?: Maybe<Array<ProjectStat>>;
};

export type GetProjectsCondition = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  launch_date?: InputMaybe<Scalars['DateTime']>;
  mint_auth?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Array<Scalars['String']>>;
  protocol?: InputMaybe<ProtocolEnum>;
  supply?: InputMaybe<Scalars['Float']>;
  twitter?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type GetProjectsResponse = {
  __typename?: 'GetProjectsResponse';
  pagination_info: PaginationInfoResponseType;
  projects: Array<Project>;
};

export enum MarketPlaceActionEnum {
  Bid = 'BID',
  Cancelbid = 'CANCELBID',
  Delisting = 'DELISTING',
  Failed = 'FAILED',
  Fractionalized = 'FRACTIONALIZED',
  Listing = 'LISTING',
  Mint = 'MINT',
  Other = 'OTHER',
  Rawbid = 'RAWBID',
  Rawcancelbid = 'RAWCANCELBID',
  Redeemed = 'REDEEMED',
  Transaction = 'TRANSACTION',
  Transfer = 'TRANSFER',
  Unknown = 'UNKNOWN',
  Updatebid = 'UPDATEBID',
  Updatelisting = 'UPDATELISTING',
  Upgrade = 'UPGRADE'
}

export type MarketPlaceActionResponse = {
  __typename?: 'MarketPlaceActionResponse';
  amount?: Maybe<Scalars['Float']>;
  block_timestamp?: Maybe<Scalars['Float']>;
  broker_referral_address?: Maybe<Scalars['String']>;
  broker_referral_fee?: Maybe<Scalars['Float']>;
  escrow_address?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  marketplace_fee_address?: Maybe<Scalars['String']>;
  marketplace_instance_id?: Maybe<Scalars['String']>;
  marketplace_program_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  price?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['String']>;
  type?: Maybe<MarketPlaceActionEnum>;
  user_address?: Maybe<Scalars['String']>;
};

export type MarketPlacePricingFilterValues = {
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type MarketPlaceSnapshotResponse = {
  __typename?: 'MarketPlaceSnapshotResponse';
  attributes?: Maybe<Scalars['JSON']>;
  floor_price?: Maybe<Scalars['Float']>;
  full_img?: Maybe<Scalars['String']>;
  highest_bid_mpa?: Maybe<MarketPlaceActionResponse>;
  lowest_listing_mpa?: Maybe<MarketPlaceActionResponse>;
  meta_data_img?: Maybe<Scalars['String']>;
  meta_data_uri?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  project_attributes?: Maybe<Array<ProjectAttribute>>;
  project_id: Scalars['String'];
  project_image?: Maybe<Scalars['String']>;
  project_name?: Maybe<Scalars['String']>;
  project_supply?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  rank_est?: Maybe<Scalars['Float']>;
  rarity?: Maybe<Scalars['Float']>;
  rarity_est?: Maybe<Scalars['Float']>;
  small_img?: Maybe<Scalars['String']>;
  supply?: Maybe<Scalars['Float']>;
  token_address: Scalars['String'];
  valuation_date?: Maybe<Scalars['DateTime']>;
  valuation_price?: Maybe<Scalars['Float']>;
};

export type MarketPlaceStatus = {
  __typename?: 'MarketPlaceStatus';
  display_name: Scalars['String'];
  id: Scalars['String'];
  is_bidding_enabled: Scalars['Boolean'];
  is_buying_enabled: Scalars['Boolean'];
  is_delisting_enabled: Scalars['Boolean'];
  is_listing_enabled: Scalars['Boolean'];
  item_path?: Maybe<Scalars['String']>;
  marketplace_instance_id?: Maybe<Scalars['String']>;
  marketplace_program_id: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};

export enum MarketPlaceTxErrorEnum {
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  InvalidInputError = 'INVALID_INPUT_ERROR',
  InvalidTokenAddress = 'INVALID_TOKEN_ADDRESS',
  ItemNoLongerAvailable = 'ITEM_NO_LONGER_AVAILABLE',
  MarketplaceBuyingIsDisabled = 'MARKETPLACE_BUYING_IS_DISABLED',
  PriceHasUpdated = 'PRICE_HAS_UPDATED',
  RpcError = 'RPC_ERROR'
}

export type MarketPlaceTxOutputError = {
  __typename?: 'MarketPlaceTxOutputError';
  error_type: MarketPlaceTxErrorEnum;
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  updateProject: Project;
};


export type MutationCreateProjectArgs = {
  data: CreateProjectInput;
};


export type MutationUpdateProjectArgs = {
  data: UpdateProjectInput;
};

export type OrderConfig = {
  field_name: Scalars['String'];
  sort_order: SortOrderEnum;
};

export type PaginationConfig = {
  page_number?: InputMaybe<Scalars['Float']>;
  page_size?: InputMaybe<Scalars['Float']>;
};

export type PaginationInfoResponseType = {
  __typename?: 'PaginationInfoResponseType';
  current_page_number: Scalars['Float'];
  current_page_size: Scalars['Float'];
  has_next_page: Scalars['Boolean'];
  total_page_number: Scalars['Float'];
};

export type Project = {
  __typename?: 'Project';
  candy_machine_ids?: Maybe<Array<Scalars['String']>>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  display_name: Scalars['String'];
  img_url?: Maybe<Scalars['String']>;
  is_minting?: Maybe<Scalars['Boolean']>;
  is_verified?: Maybe<Scalars['Boolean']>;
  launch_date?: Maybe<Scalars['DateTime']>;
  launch_timestamp?: Maybe<Scalars['String']>;
  project_attributes?: Maybe<Array<ProjectAttribute>>;
  project_id: Scalars['String'];
  protocol: ProtocolEnum;
  requires_categorization?: Maybe<Scalars['Boolean']>;
  supply?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<ProjectTag>>;
  twitter?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};

export type ProjectAttribute = {
  __typename?: 'ProjectAttribute';
  counts?: Maybe<Scalars['JSON']>;
  floor_prices?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  type: AttributeTypeEnum;
  values: Array<Scalars['String']>;
};

export type ProjectFindyByInput = {
  project_id: Scalars['String'];
};

export type ProjectIdWithAttributes = {
  attributes?: InputMaybe<Array<Scalars['JSON']>>;
  project_id: Scalars['String'];
};

export type ProjectStat = {
  __typename?: 'ProjectStat';
  average_price?: Maybe<Scalars['Float']>;
  average_price_1day_change?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  discord_members?: Maybe<Scalars['Float']>;
  floor_price?: Maybe<Scalars['Float']>;
  floor_price_1day_change?: Maybe<Scalars['Float']>;
  market_cap?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  num_of_token_holders?: Maybe<Scalars['Float']>;
  num_of_token_listed?: Maybe<Scalars['Float']>;
  percentage_of_token_listed?: Maybe<Scalars['Float']>;
  project?: Maybe<Project>;
  project_id: Scalars['String'];
  rank?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
  twitter_followers?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  volume_1day?: Maybe<Scalars['Float']>;
  volume_1day_change?: Maybe<Scalars['Float']>;
  volume_1hr?: Maybe<Scalars['Float']>;
  volume_7day?: Maybe<Scalars['Float']>;
};

export type ProjectTag = {
  __typename?: 'ProjectTag';
  created_at: Scalars['DateTime'];
  project_id: Scalars['String'];
  tag: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export enum ProtocolEnum {
  Cardano = 'CARDANO',
  Ethereum = 'ETHEREUM',
  Solana = 'SOLANA'
}

export type Query = {
  __typename?: 'Query';
  createBuyTx: CreateBuyTxOutput;
  getAuctionHouseExecuteSaleTransaction: GetBufferOutput;
  getMETransaction: GetBufferOutput;
  getMEv2StatefulTransaction: GetBufferOutput;
  getMEv2Transaction: GetBufferOutput;
  getMarketPlaceSnapshots: GetMarketPlaceSnapshotsResponse;
  getMarketPlaceStatus: GetMarketPlaceStatusResponse;
  getOverallProjectStats: GetOverallProjectStatOutput;
  getProjectStatByName: GetProjectStatsOutput;
  getProjectStatCount: GetProjectStatCount;
  getProjectStats: GetProjectStatsOutput;
  getProjects: GetProjectsResponse;
  getSATransaction: GetBufferOutput;
  getSMBTransaction: GetBufferOutput;
};


export type QueryCreateBuyTxArgs = {
  buyer_address: Scalars['String'];
  buyer_broker?: InputMaybe<Scalars['String']>;
  buyer_broker_basis_points?: InputMaybe<Scalars['Float']>;
  price: Scalars['Float'];
  token_address: Scalars['String'];
  unverified?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetAuctionHouseExecuteSaleTransactionArgs = {
  buyer_address: Scalars['String'];
  marketplace_instance_id: Scalars['String'];
  mint: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
};


export type QueryGetMeTransactionArgs = {
  buyer_address: Scalars['String'];
  escrow_address: Scalars['String'];
  mint: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
};


export type QueryGetMEv2StatefulTransactionArgs = {
  buyer_address: Scalars['String'];
  marketplace_instance_id: Scalars['String'];
  mint: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
  state_bump: Array<Scalars['Float']>;
};


export type QueryGetMEv2TransactionArgs = {
  buyer_address: Scalars['String'];
  marketplace_instance_id: Scalars['String'];
  mint: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
};


export type QueryGetMarketPlaceSnapshotsArgs = {
  condition?: InputMaybe<GetMarketPlaceSnapshotCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetOverallProjectStatsArgs = {
  tag?: InputMaybe<Scalars['String']>;
};


export type QueryGetProjectStatByNameArgs = {
  condition: GetProjectStatByNameCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetProjectStatsArgs = {
  conditions?: InputMaybe<GetProjectStatsCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetProjectsArgs = {
  conditions?: InputMaybe<Array<GetProjectsCondition>>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetSaTransactionArgs = {
  buyer_address: Scalars['String'];
  mint: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
  tradeState: Scalars['String'];
};


export type QueryGetSmbTransactionArgs = {
  buyer_address: Scalars['String'];
  escrow_address: Scalars['String'];
  mint: Scalars['String'];
  price: Scalars['Float'];
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type UpdateProjectInput = {
  find_by: ProjectFindyByInput;
  input_values: UpdateProjectInputValues;
};

export type UpdateProjectInputValues = {
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  img_url?: InputMaybe<Scalars['String']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  launch_date?: InputMaybe<Scalars['DateTime']>;
  mint_auth?: InputMaybe<Scalars['String']>;
  protocol?: InputMaybe<ProtocolEnum>;
  supply?: InputMaybe<Scalars['Float']>;
  twitter?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type GetProjectStatsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  conditions?: InputMaybe<GetProjectStatsCondition>;
}>;


export type GetProjectStatsQuery = { __typename?: 'Query', getProjectStats: { __typename?: 'GetProjectStatsOutput', project_stats?: Array<{ __typename?: 'ProjectStat', project_id: string, market_cap?: number | null, volume_7day?: number | null, volume_1day_change?: number | null, floor_price?: number | null, floor_price_1day_change?: number | null, average_price?: number | null, average_price_1day_change?: number | null, max_price?: number | null, twitter_followers?: number | null, num_of_token_listed?: number | null, num_of_token_holders?: number | null, percentage_of_token_listed?: number | null, volume_1day?: number | null, project?: { __typename?: 'Project', supply?: number | null, website?: string | null, twitter?: string | null, discord?: string | null, img_url?: string | null, is_verified?: boolean | null, display_name: string, project_attributes?: Array<{ __typename?: 'ProjectAttribute', name: string, type: AttributeTypeEnum, values: Array<string>, counts?: any | null, floor_prices?: any | null }> | null } | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean } } };


export const GetProjectStatsDocument = gql`
    query getProjectStats($orderBy: [OrderConfig!], $paginationInfo: PaginationConfig, $conditions: GetProjectStatsCondition) {
  getProjectStats(
    order_by: $orderBy
    pagination_info: $paginationInfo
    conditions: $conditions
  ) {
    project_stats {
      project_id
      market_cap
      volume_7day
      volume_1day_change
      floor_price
      floor_price_1day_change
      average_price
      average_price_1day_change
      max_price
      twitter_followers
      num_of_token_listed
      num_of_token_holders
      percentage_of_token_listed
      volume_1day
      project {
        supply
        website
        twitter
        discord
        img_url
        is_verified
        display_name
        project_attributes {
          name
          type
          values
          counts
          floor_prices
        }
      }
    }
    pagination_info {
      current_page_number
      current_page_size
      has_next_page
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProjectStats(variables?: GetProjectStatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProjectStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectStatsQuery>(GetProjectStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProjectStats', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;