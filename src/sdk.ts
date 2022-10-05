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
  Date: any;
  DateTime: any;
  JSON: any;
};

export enum AttributeTypeEnum {
  Category = 'CATEGORY',
  Numeric = 'NUMERIC',
  Range = 'RANGE'
}

export type CancelBidMarketPlaceActionInput = {
  buyer_address: Scalars['String'];
  buyer_referral_address: Scalars['String'];
  marketplace_fee_address: Scalars['String'];
  marketplace_program_id: Scalars['String'];
  signature: Scalars['String'];
  slot: Scalars['Float'];
  token_address: Scalars['String'];
};

export type CancelListingMarketPlaceActionInput = {
  marketplace_fee_address: Scalars['String'];
  marketplace_program_id: Scalars['String'];
  seller_address: Scalars['String'];
  seller_referral_address: Scalars['String'];
  signature: Scalars['String'];
  slot: Scalars['Float'];
  token_address: Scalars['String'];
};

export enum CollectionBidActionEnum {
  Cancelcollectionbid = 'CANCELCOLLECTIONBID',
  Collectionbid = 'COLLECTIONBID',
  Transaction = 'TRANSACTION'
}

export type CollectionBidConfig = {
  __typename?: 'CollectionBidConfig';
  identifier_index?: Maybe<Scalars['Float']>;
  identifier_key: Scalars['String'];
  identifier_type: CollectionIdentifierTypeEnum;
  instance_id?: Maybe<Scalars['String']>;
  program_id: Scalars['String'];
  project_id: Scalars['String'];
};

export type CollectionBidState = {
  __typename?: 'CollectionBidState';
  amount?: Maybe<Scalars['Float']>;
  block_number?: Maybe<Scalars['Float']>;
  block_timestamp?: Maybe<Scalars['Float']>;
  buyer_address?: Maybe<Scalars['String']>;
  buyer_referral_address?: Maybe<Scalars['String']>;
  buyer_referral_fee?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  currency_price?: Maybe<Scalars['Float']>;
  decimal?: Maybe<Scalars['Float']>;
  expiration?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  fee_address?: Maybe<Scalars['String']>;
  identifier_index?: Maybe<Scalars['Float']>;
  identifier_key?: Maybe<Scalars['String']>;
  identifier_type: CollectionIdentifierTypeEnum;
  instance_id?: Maybe<Scalars['String']>;
  instruction_index?: Maybe<Scalars['Float']>;
  metadata?: Maybe<Scalars['JSON']>;
  price?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['String']>;
  seller_address?: Maybe<Scalars['String']>;
  seller_referral_address?: Maybe<Scalars['String']>;
  seller_referral_fee?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['String']>;
  trade_state?: Maybe<Scalars['String']>;
  type?: Maybe<CollectionBidActionEnum>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CollectionDist = {
  __typename?: 'CollectionDist';
  count: Scalars['Float'];
  owned_band: Scalars['String'];
};

export enum CollectionIdentifierTypeEnum {
  FirstCreator = 'FIRST_CREATOR',
  MasterEdition = 'MASTER_EDITION',
  MccId = 'MCC_ID'
}

export type CreateBidMarketPlaceActionInput = {
  buyer_address: Scalars['String'];
  buyer_referral_address: Scalars['String'];
  buyer_referral_fee: Scalars['Float'];
  marketplace_fee_address: Scalars['String'];
  marketplace_program_id: Scalars['String'];
  price: Scalars['Float'];
  signature: Scalars['String'];
  slot: Scalars['Float'];
  token_address: Scalars['String'];
};

export type CreateListingMarketPlaceActionInput = {
  marketplace_fee_address: Scalars['String'];
  marketplace_program_id: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
  seller_referral_address: Scalars['String'];
  seller_referral_fee: Scalars['Float'];
  signature: Scalars['String'];
  slot: Scalars['Float'];
  token_address: Scalars['String'];
};

export type CreateMarketPlaceActionsInput = {
  amount: Scalars['Float'];
  buyer_address: Scalars['String'];
  buyer_referral_address: Scalars['String'];
  buyer_referral_fee: Scalars['Float'];
  marketplace_fee_address: Scalars['String'];
  marketplace_program_id: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
  seller_referral_address: Scalars['String'];
  seller_referral_fee: Scalars['Float'];
  signature: Scalars['String'];
  slot: Scalars['Float'];
  token_address: Scalars['String'];
  type: MarketPlaceActionEnum;
};

export type CreateTransactionMarketPlaceActionInput = {
  buyer_address: Scalars['String'];
  buyer_referral_address: Scalars['String'];
  buyer_referral_fee: Scalars['Float'];
  marketplace_fee_address: Scalars['String'];
  marketplace_program_id: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
  seller_referral_address: Scalars['String'];
  seller_referral_fee: Scalars['Float'];
  signature: Scalars['String'];
  slot: Scalars['Float'];
  token_address: Scalars['String'];
};

export type CreateUpcomingProjectInstanceInput = {
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  has_ended?: InputMaybe<Scalars['Boolean']>;
  img_url?: InputMaybe<Scalars['String']>;
  launch_date?: InputMaybe<Scalars['Date']>;
  launch_timestamp?: InputMaybe<Scalars['String']>;
  mint_site?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  project_name: Scalars['String'];
  protocol: ProtocolEnum;
  supply?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export enum CrmPriorityEnum {
  Dead = 'DEAD',
  High = 'HIGH',
  Low = 'LOW',
  Top = 'TOP'
}

export enum Day_Lookback_Enum {
  Month = 'MONTH',
  OneDay = 'ONE_DAY',
  SevenDay = 'SEVEN_DAY'
}

export type GetCollectionBidConfigResponse = {
  __typename?: 'GetCollectionBidConfigResponse';
  config?: Maybe<CollectionBidConfig>;
};

export type GetCollectionBidsResponse = {
  __typename?: 'GetCollectionBidsResponse';
  bids?: Maybe<Array<CollectionBidState>>;
};

export type GetCollectionDistCondition = {
  project_id: Scalars['String'];
};

export type GetCollectionDistOutput = {
  __typename?: 'GetCollectionDistOutput';
  collection_dist: Array<CollectionDist>;
};

export type GetFloorPriceDistCondition = {
  attributes?: InputMaybe<Array<Scalars['JSON']>>;
  project_id: Scalars['String'];
};

export type GetFloorPriceDistOutput = {
  __typename?: 'GetFloorPriceDistOutput';
  floor_prices?: Maybe<Array<Scalars['Float']>>;
};

export type GetMarketPlaceActionsByProjectsCondition = {
  by_mpa_types?: InputMaybe<Array<MarketPlaceActionEnum>>;
  by_nmpa_types?: InputMaybe<Array<NonMarketPlaceActionEnum>>;
  price_filter?: InputMaybe<MarketPlacePricingFilterValues>;
  projects: Array<ProjectIdWithAttributes>;
  rank_filter?: InputMaybe<MarketPlacePricingFilterValues>;
};

export type GetMarketPlaceActionsByTokenAddressCondition = {
  action_type?: InputMaybe<MarketPlaceActionEnum>;
  marketplace_ids?: InputMaybe<Array<MarketPlaceIdentifier>>;
  token_addresses: Array<Scalars['String']>;
};

export type GetMarketPlaceActionsByUserCondition = {
  buyer_address?: InputMaybe<Scalars['String']>;
  by_mpa_types?: InputMaybe<Array<MarketPlaceActionEnum>>;
  by_nmpa_types?: InputMaybe<Array<NonMarketPlaceActionEnum>>;
  destination_address?: InputMaybe<Scalars['String']>;
  seller_address?: InputMaybe<Scalars['String']>;
  source_address?: InputMaybe<Scalars['String']>;
};

export type GetMarketPlaceActionsOutput = {
  __typename?: 'GetMarketPlaceActionsOutput';
  market_place_actions: Array<MarketPlaceActions>;
  token_address: Scalars['String'];
};

export type GetMarketPlaceSnapshotCondition = {
  filter_pool_listings?: InputMaybe<Scalars['Boolean']>;
  has_metadata?: InputMaybe<Scalars['Boolean']>;
  include_attribute_details?: InputMaybe<Scalars['Boolean']>;
  include_floors?: InputMaybe<Scalars['Boolean']>;
  is_project_verified?: InputMaybe<Scalars['Boolean']>;
  listing_type?: InputMaybe<MarketPlaceActionEnum>;
  name?: InputMaybe<StringInputArg>;
  only_cross_mint_verified?: InputMaybe<Scalars['Boolean']>;
  only_listed_on_hs?: InputMaybe<Scalars['Boolean']>;
  price_filter?: InputMaybe<MarketPlacePricingFilterValues>;
  project_ids?: InputMaybe<Array<ProjectIdWithAttributes>>;
  rank_filter?: InputMaybe<MarketPlacePricingFilterValues>;
  token_addresses?: InputMaybe<Array<Scalars['String']>>;
  use_project_slug?: InputMaybe<Scalars['Boolean']>;
};

export type GetMarketPlaceSnapshotsResponse = {
  __typename?: 'GetMarketPlaceSnapshotsResponse';
  market_place_snapshots?: Maybe<Array<MarketPlaceSnapshotResponse>>;
  pagination_info: PaginationInfoResponseType;
};

export type GetMarketPlaceStateCondition = {
  action_type?: InputMaybe<MarketPlaceActionEnum>;
  buyer_address?: InputMaybe<Scalars['String']>;
  marketplace_ids?: InputMaybe<Array<MarketPlaceIdentifier>>;
  seller_address?: InputMaybe<Scalars['String']>;
  token_addresses?: InputMaybe<Array<Scalars['String']>>;
};

export type GetMarketPlaceStateResponse = {
  __typename?: 'GetMarketPlaceStateResponse';
  market_place_states: Array<MarketPlaceSnapshotResponse>;
  token_address: Scalars['String'];
};

export type GetMarketPlaceStatusResponse = {
  __typename?: 'GetMarketPlaceStatusResponse';
  mps: Array<MarketPlaceStatus>;
};

export type GetNonMarketPlaceActionsByProjectCondition = {
  by_nmpa_types?: InputMaybe<Array<NonMarketPlaceActionEnum>>;
  projects: Array<ProjectIdWithAttributes>;
};

export type GetNonMarketPlaceActionsByUserCondition = {
  by_nmpa_types?: InputMaybe<Array<NonMarketPlaceActionEnum>>;
  destination_address?: InputMaybe<Scalars['String']>;
  source_address?: InputMaybe<Scalars['String']>;
};

export type GetOverallProjectStatOutput = {
  __typename?: 'GetOverallProjectStatOutput';
  market_cap?: Maybe<Scalars['Float']>;
  previous_market_cap_change_in_sol?: Maybe<Scalars['Float']>;
  previous_volume_change_in_sol?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  volume_1day?: Maybe<Scalars['Float']>;
};

export type GetOverallWalletStatOutput = {
  __typename?: 'GetOverallWalletStatOutput';
  largest_sale_1day?: Maybe<WalletStat>;
  top_buyer_1day?: Maybe<WalletStat>;
  top_seller_1day?: Maybe<WalletStat>;
};

export type GetOwnerDistOutput = {
  __typename?: 'GetOwnerDistOutput';
  owner_dist: Array<OwnerDist>;
};

export type GetOwnersDistCondition = {
  attributes?: InputMaybe<Array<Scalars['JSON']>>;
  project_id: Scalars['String'];
};

export type GetProjectAndCollectionBidsResponse = {
  __typename?: 'GetProjectAndCollectionBidsResponse';
  bids?: Maybe<Array<ProjectAndCollectionBid>>;
};

export type GetProjectStatByNameCondition = {
  display_name?: InputMaybe<Scalars['String']>;
  exclude_project_attributes?: InputMaybe<Scalars['Boolean']>;
  me_slug?: InputMaybe<StringInputArg>;
  project_name?: InputMaybe<StringInputArg>;
  tag?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<StringInputArg>;
};

export type GetProjectStatCount = {
  __typename?: 'GetProjectStatCount';
  num_of_projects: Scalars['Float'];
};

export type GetProjectStatHistCondition = {
  end_timestamp: Scalars['Float'];
  project_ids: Array<Scalars['String']>;
  start_timestamp: Scalars['Float'];
  time_granularity: Scalars['String'];
};

export type GetProjectStatHistOutput = {
  __typename?: 'GetProjectStatHistOutput';
  pagination_info: PaginationInfoResponseType;
  project_stat_hist_entries?: Maybe<Array<ProjectStatHist>>;
};

export type GetProjectStatsCondition = {
  exclude_project_attributes?: InputMaybe<Scalars['Boolean']>;
  floor_price?: InputMaybe<MarketPlacePricingFilterValues>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  project_ids?: InputMaybe<Array<Scalars['String']>>;
  supply?: InputMaybe<SupplyInput>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type GetProjectStatsOutput = {
  __typename?: 'GetProjectStatsOutput';
  pagination_info: PaginationInfoResponseType;
  project_stats?: Maybe<Array<ProjectStat>>;
};

export type GetUpcomingProjectsCondition = {
  display_name?: InputMaybe<Scalars['String']>;
  is_featured?: InputMaybe<Scalars['Boolean']>;
  is_moonshot?: InputMaybe<Scalars['Boolean']>;
  project_name?: InputMaybe<Scalars['String']>;
  user_timestamp?: InputMaybe<UserTimestamp>;
};

export type GetUpcomingProjectsResponse = {
  __typename?: 'GetUpcomingProjectsResponse';
  pagination_info: PaginationInfoResponseType;
  upcoming_projects: Array<UpcomingProject>;
};

export type GetWalletStatsCondition = {
  include_user_rank?: InputMaybe<Scalars['Boolean']>;
  search_address?: InputMaybe<Scalars['String']>;
  time_period?: InputMaybe<TimePeriodEnum>;
};

export type GetWalletStatsHistCondition = {
  day_lookback?: InputMaybe<Day_Lookback_Enum>;
  search_address: Scalars['String'];
};

export type GetWalletStatsHistOutput = {
  __typename?: 'GetWalletStatsHistOutput';
  wallet_stats_history?: Maybe<Array<WalletStatHist>>;
};

export type GetWalletStatsOutput = {
  __typename?: 'GetWalletStatsOutput';
  pagination_info: PaginationInfoResponseType;
  wallet_stats?: Maybe<Array<WalletStat>>;
};

export enum LeadStateEnum {
  Closedlost = 'CLOSEDLOST',
  Closedwon = 'CLOSEDWON',
  Discovery = 'DISCOVERY',
  Lead = 'LEAD',
  Negotiation = 'NEGOTIATION'
}

export type MpaPaginationConfig = {
  page_number?: InputMaybe<Scalars['Float']>;
  page_size?: InputMaybe<Scalars['Float']>;
  progressive_load?: InputMaybe<Scalars['Boolean']>;
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
  PoolDeposit = 'POOL_DEPOSIT',
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
  currency?: Maybe<Scalars['String']>;
  currency_price?: Maybe<Scalars['Float']>;
  decimal?: Maybe<Scalars['Float']>;
  escrow_address?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  is_cross_mint_verified?: Maybe<Scalars['Boolean']>;
  marketplace_fee_address?: Maybe<Scalars['String']>;
  marketplace_instance_id?: Maybe<Scalars['String']>;
  marketplace_program_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  price?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  type?: Maybe<MarketPlaceActionEnum>;
  user_address?: Maybe<Scalars['String']>;
};

export type MarketPlaceActions = {
  __typename?: 'MarketPlaceActions';
  amount?: Maybe<Scalars['Float']>;
  block_number?: Maybe<Scalars['Float']>;
  block_timestamp?: Maybe<Scalars['Float']>;
  buyer_address?: Maybe<Scalars['String']>;
  buyer_referral_address?: Maybe<Scalars['String']>;
  buyer_referral_fee?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  currency_price?: Maybe<Scalars['Float']>;
  decimal?: Maybe<Scalars['Float']>;
  escrow_address?: Maybe<Scalars['String']>;
  expiry_time?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  instruction_index?: Maybe<Scalars['Float']>;
  marketplace_fee_address?: Maybe<Scalars['String']>;
  marketplace_instance_id?: Maybe<Scalars['String']>;
  marketplace_program_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  price?: Maybe<Scalars['Float']>;
  seller_address?: Maybe<Scalars['String']>;
  seller_referral_address?: Maybe<Scalars['String']>;
  seller_referral_fee?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['String']>;
  token_address?: Maybe<Scalars['String']>;
  type?: Maybe<MarketPlaceActionEnum>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type MarketPlaceIdentifier = {
  marketplace_instance_id?: InputMaybe<Scalars['String']>;
  marketplace_program_id: Scalars['String'];
};

export type MarketPlacePricingFilterValues = {
  field?: InputMaybe<Scalars['String']>;
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
};

export type MarketPlaceSnapshotResponse = {
  __typename?: 'MarketPlaceSnapshotResponse';
  attributes?: Maybe<Scalars['JSON']>;
  candy_machine_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  first_creator?: Maybe<Scalars['String']>;
  floor_price?: Maybe<Scalars['Float']>;
  floor_price_1day_change?: Maybe<Scalars['Float']>;
  full_img?: Maybe<Scalars['String']>;
  highest_bid_mpa?: Maybe<MarketPlaceActionResponse>;
  howrare_rank?: Maybe<Scalars['Float']>;
  is_project_verified?: Maybe<Scalars['Boolean']>;
  lowest_listing_mpa?: Maybe<MarketPlaceActionResponse>;
  market_place_state?: Maybe<MarketPlaceState>;
  mcc_id?: Maybe<Scalars['String']>;
  meta_data_img?: Maybe<Scalars['String']>;
  meta_data_uri?: Maybe<Scalars['String']>;
  moonrank?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  non_market_place_state?: Maybe<NonMarketPlaceActions>;
  owner?: Maybe<Scalars['String']>;
  project_attributes?: Maybe<Array<ProjectAttribute>>;
  project_description?: Maybe<Scalars['String']>;
  project_id: Scalars['String'];
  project_image?: Maybe<Scalars['String']>;
  project_name?: Maybe<Scalars['String']>;
  project_slug?: Maybe<Scalars['String']>;
  project_supply?: Maybe<Scalars['Float']>;
  rank_est?: Maybe<Scalars['Float']>;
  rarity_est?: Maybe<Scalars['Float']>;
  supply?: Maybe<Scalars['Float']>;
  token_address: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
  valuation_date?: Maybe<Scalars['DateTime']>;
  valuation_price?: Maybe<Scalars['Float']>;
};

export type MarketPlaceState = {
  __typename?: 'MarketPlaceState';
  amount?: Maybe<Scalars['Float']>;
  block_number?: Maybe<Scalars['Float']>;
  block_timestamp?: Maybe<Scalars['Float']>;
  buyer_address?: Maybe<Scalars['String']>;
  buyer_referral_address?: Maybe<Scalars['String']>;
  buyer_referral_fee?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  currency_price?: Maybe<Scalars['Float']>;
  decimal?: Maybe<Scalars['Float']>;
  escrow_address?: Maybe<Scalars['String']>;
  expiry_time?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  instruction_index?: Maybe<Scalars['Float']>;
  marketplace_fee_address?: Maybe<Scalars['String']>;
  marketplace_instance_id?: Maybe<Scalars['String']>;
  marketplace_program_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  price?: Maybe<Scalars['Float']>;
  seller_address?: Maybe<Scalars['String']>;
  seller_referral_address?: Maybe<Scalars['String']>;
  seller_referral_fee?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['String']>;
  token_address?: Maybe<Scalars['String']>;
  type?: Maybe<MarketPlaceActionEnum>;
  updated_at?: Maybe<Scalars['DateTime']>;
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

export type MarketPlaceTxConfirmation = {
  __typename?: 'MarketPlaceTxConfirmation';
  error?: Maybe<MarketPlaceTxOutputError>;
  tx_id?: Maybe<Scalars['String']>;
};

export enum MarketPlaceTxErrorEnum {
  AlreadyOwnedNft = 'ALREADY_OWNED_NFT',
  BasisPointsMismatch = 'BASIS_POINTS_MISMATCH',
  BidNotFound = 'BID_NOT_FOUND',
  BidStateAlreadyExists = 'BID_STATE_ALREADY_EXISTS',
  BrokerMismatch = 'BROKER_MISMATCH',
  BuyerHasInsufficientFunds = 'BUYER_HAS_INSUFFICIENT_FUNDS',
  EscrowWithdrawAmountError = 'ESCROW_WITHDRAW_AMOUNT_ERROR',
  Generic = 'GENERIC',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  InvalidInputError = 'INVALID_INPUT_ERROR',
  InvalidTokenAddress = 'INVALID_TOKEN_ADDRESS',
  InvalidUserBalance = 'INVALID_USER_BALANCE',
  ItemListingNotFound = 'ITEM_LISTING_NOT_FOUND',
  ItemNoLongerAvailable = 'ITEM_NO_LONGER_AVAILABLE',
  MarketplaceBuyingIsDisabled = 'MARKETPLACE_BUYING_IS_DISABLED',
  MarketplaceDoesnotHaveReqOn = 'MARKETPLACE_DOESNOT_HAVE_REQ_ON',
  MarketplaceOperationIsDisabled = 'MARKETPLACE_OPERATION_IS_DISABLED',
  OpenseaPleaseTryAgain = 'OPENSEA_PLEASE_TRY_AGAIN',
  PriceHasUpdatedToBeHigher = 'PRICE_HAS_UPDATED_TO_BE_HIGHER',
  PriceHasUpdatedToBeLower = 'PRICE_HAS_UPDATED_TO_BE_LOWER',
  PriceMismatch = 'PRICE_MISMATCH',
  RpcError = 'RPC_ERROR',
  SellerOwnerMismatch = 'SELLER_OWNER_MISMATCH'
}

export type MarketPlaceTxOutput = {
  __typename?: 'MarketPlaceTxOutput';
  data?: Maybe<Array<Scalars['Float']>>;
  error?: Maybe<MarketPlaceTxOutputError>;
  is_required_signers_on?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Scalars['JSON']>;
  stdBuffer?: Maybe<Array<Scalars['Float']>>;
};

export type MarketPlaceTxOutputError = {
  __typename?: 'MarketPlaceTxOutputError';
  error_type?: Maybe<MarketPlaceTxErrorEnum>;
  message?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelBidMarketPlaceAction: MarketPlaceActions;
  cancelListingMarketPlaceAction: MarketPlaceActions;
  createBidMarketPlaceAction: MarketPlaceActions;
  createListingMarketPlaceAction: MarketPlaceActions;
  createMarketPlaceAction: MarketPlaceActions;
  createTransactionMarketPlaceAction: MarketPlaceActions;
  createUpcomingProject: UpcomingProject;
  updateBidMarketPlaceAction: MarketPlaceActions;
  updateListingMarketPlaceAction: MarketPlaceActions;
  updateUpcomingProject: UpcomingProject;
};


export type MutationCancelBidMarketPlaceActionArgs = {
  data: CancelBidMarketPlaceActionInput;
};


export type MutationCancelListingMarketPlaceActionArgs = {
  data: CancelListingMarketPlaceActionInput;
};


export type MutationCreateBidMarketPlaceActionArgs = {
  data: CreateBidMarketPlaceActionInput;
};


export type MutationCreateListingMarketPlaceActionArgs = {
  data: CreateListingMarketPlaceActionInput;
};


export type MutationCreateMarketPlaceActionArgs = {
  data: CreateMarketPlaceActionsInput;
};


export type MutationCreateTransactionMarketPlaceActionArgs = {
  data: CreateTransactionMarketPlaceActionInput;
};


export type MutationCreateUpcomingProjectArgs = {
  data: CreateUpcomingProjectInstanceInput;
};


export type MutationUpdateBidMarketPlaceActionArgs = {
  data: UpdateBidMarketPlaceActionInput;
};


export type MutationUpdateListingMarketPlaceActionArgs = {
  data: UpdateListingMarketPlaceActionInput;
};


export type MutationUpdateUpcomingProjectArgs = {
  data: UpdateUpcomingProjectInput;
};

export enum NonMarketPlaceActionEnum {
  Burn = 'BURN',
  DepositStake = 'DEPOSIT_STAKE',
  Mint = 'MINT',
  Other = 'OTHER',
  Stake = 'STAKE',
  Transfer = 'TRANSFER',
  Unstake = 'UNSTAKE',
  UpdateMetadata = 'UPDATE_METADATA',
  WithdrawStake = 'WITHDRAW_STAKE'
}

export type NonMarketPlaceActions = {
  __typename?: 'NonMarketPlaceActions';
  amount?: Maybe<Scalars['Float']>;
  bank_id?: Maybe<Scalars['String']>;
  block_number?: Maybe<Scalars['Float']>;
  block_timestamp?: Maybe<Scalars['Float']>;
  collection_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  decimal?: Maybe<Scalars['Float']>;
  destination_address?: Maybe<Scalars['String']>;
  destination_token_account?: Maybe<Scalars['String']>;
  farm_id?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  new_authority?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  source_address?: Maybe<Scalars['String']>;
  source_token_account?: Maybe<Scalars['String']>;
  token_address?: Maybe<Scalars['String']>;
  token_name?: Maybe<Scalars['String']>;
  type?: Maybe<NonMarketPlaceActionEnum>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type OrderConfig = {
  field_name: Scalars['String'];
  sort_order: SortOrderEnum;
};

export type OwnerDist = {
  __typename?: 'OwnerDist';
  listed: Scalars['Float'];
  owned: Scalars['Float'];
  owner: Scalars['String'];
  total_value?: Maybe<Scalars['Float']>;
  twitter?: Maybe<Scalars['String']>;
};

export type PaginationConfig = {
  page_number?: InputMaybe<Scalars['Float']>;
  page_size?: InputMaybe<Scalars['Float']>;
  progressive_load?: InputMaybe<Scalars['Boolean']>;
};

export type PaginationInfoResponseType = {
  __typename?: 'PaginationInfoResponseType';
  current_page_number: Scalars['Float'];
  current_page_size: Scalars['Float'];
  has_next_page: Scalars['Boolean'];
  total_page_number?: Maybe<Scalars['Float']>;
};

export type Project = {
  __typename?: 'Project';
  candy_machine_id?: Maybe<Scalars['String']>;
  candy_machine_ids?: Maybe<Array<Scalars['String']>>;
  created_at?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  display_name: Scalars['String'];
  first_creator?: Maybe<Scalars['String']>;
  img_url?: Maybe<Scalars['String']>;
  is_attribute_stats_enabled?: Maybe<Scalars['Boolean']>;
  is_minting?: Maybe<Scalars['Boolean']>;
  is_verified?: Maybe<Scalars['Boolean']>;
  launch_date?: Maybe<Scalars['DateTime']>;
  launch_timestamp?: Maybe<Scalars['String']>;
  lmnft?: Maybe<Scalars['String']>;
  mcc_id?: Maybe<Scalars['String']>;
  me_slug?: Maybe<Scalars['String']>;
  notifi_id?: Maybe<Scalars['String']>;
  project_attributes?: Maybe<Array<ProjectAttribute>>;
  project_id: Scalars['String'];
  project_slug?: Maybe<Scalars['String']>;
  protocol?: Maybe<ProtocolEnum>;
  rarities?: Maybe<Scalars['JSON']>;
  requires_categorization?: Maybe<Scalars['Boolean']>;
  supply?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<ProjectTag>>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
};

export type ProjectAndCollectionBid = {
  __typename?: 'ProjectAndCollectionBid';
  amount?: Maybe<Scalars['Float']>;
  block_number?: Maybe<Scalars['Float']>;
  block_timestamp?: Maybe<Scalars['Float']>;
  buyer_address?: Maybe<Scalars['String']>;
  buyer_referral_address?: Maybe<Scalars['String']>;
  buyer_referral_fee?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  currency_price?: Maybe<Scalars['Float']>;
  decimal?: Maybe<Scalars['Float']>;
  display_name?: Maybe<Scalars['String']>;
  expiration?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  fee_address?: Maybe<Scalars['String']>;
  identifier_index?: Maybe<Scalars['Float']>;
  identifier_key?: Maybe<Scalars['String']>;
  identifier_type: CollectionIdentifierTypeEnum;
  img_url?: Maybe<Scalars['String']>;
  instance_id?: Maybe<Scalars['String']>;
  instruction_index?: Maybe<Scalars['Float']>;
  metadata?: Maybe<Scalars['JSON']>;
  price?: Maybe<Scalars['Float']>;
  program_id?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['String']>;
  project_slug?: Maybe<Scalars['String']>;
  seller_address?: Maybe<Scalars['String']>;
  seller_referral_address?: Maybe<Scalars['String']>;
  seller_referral_fee?: Maybe<Scalars['Float']>;
  signature?: Maybe<Scalars['String']>;
  trade_state?: Maybe<Scalars['String']>;
  type?: Maybe<CollectionBidActionEnum>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProjectAttribute = {
  __typename?: 'ProjectAttribute';
  counts?: Maybe<Scalars['JSON']>;
  floor_prices?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  type: AttributeTypeEnum;
  values: Array<Scalars['String']>;
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

export type ProjectStatHist = {
  __typename?: 'ProjectStatHist';
  created_at?: Maybe<Scalars['DateTime']>;
  discord_members?: Maybe<Scalars['Float']>;
  floor_price?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  num_of_sales?: Maybe<Scalars['Float']>;
  num_of_token_holders?: Maybe<Scalars['Float']>;
  num_of_token_listed?: Maybe<Scalars['Float']>;
  project_id: Scalars['String'];
  supply?: Maybe<Scalars['Float']>;
  timestamp: Scalars['Float'];
  twitter_followers?: Maybe<Scalars['Float']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  volume?: Maybe<Scalars['Float']>;
  volume_double?: Maybe<Scalars['Float']>;
  volume_usd?: Maybe<Scalars['Float']>;
  volume_usd_double?: Maybe<Scalars['Float']>;
};

export type ProjectTag = {
  __typename?: 'ProjectTag';
  created_at?: Maybe<Scalars['DateTime']>;
  project_id?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

export enum ProtocolEnum {
  Cardano = 'CARDANO',
  Ethereum = 'ETHEREUM',
  Solana = 'SOLANA'
}

export type Query = {
  __typename?: 'Query';
  acceptBidTx: MarketPlaceTxOutput;
  confirmBuyTx: MarketPlaceTxConfirmation;
  createBidTx: MarketPlaceTxOutput;
  createBuyTx: MarketPlaceTxOutput;
  createCancelBidTx: MarketPlaceTxOutput;
  createDelistTx: MarketPlaceTxOutput;
  createListTx: MarketPlaceTxOutput;
  createWithdrawEscrowTx: MarketPlaceTxOutput;
  getCollectionBidConfig: GetCollectionBidConfigResponse;
  getCollectionBidsForProject: GetCollectionBidsResponse;
  getCollectionBidsForProjectAndUser: GetCollectionBidsResponse;
  getCollectionBidsForUser: GetProjectAndCollectionBidsResponse;
  getCollectionDistribution: GetCollectionDistOutput;
  getFloorPriceDistribution: GetFloorPriceDistOutput;
  getMarketPlaceActionsByToken: Array<GetMarketPlaceActionsOutput>;
  getMarketPlaceSnapshots: GetMarketPlaceSnapshotsResponse;
  getMarketPlaceStatus: GetMarketPlaceStatusResponse;
  getNonMpaProjectHistory: GetMarketPlaceSnapshotsResponse;
  getNonMpaUserHistory: GetMarketPlaceSnapshotsResponse;
  getOverallProjectStats: GetOverallProjectStatOutput;
  getOverallWalletStats: GetOverallWalletStatOutput;
  getOwnersDistribution: GetOwnerDistOutput;
  getProjectHistory: GetMarketPlaceSnapshotsResponse;
  getProjectStatByName: GetProjectStatsOutput;
  getProjectStatCount: GetProjectStatCount;
  getProjectStatHist: GetProjectStatHistOutput;
  getProjectStats: GetProjectStatsOutput;
  getTokenState: Array<GetMarketPlaceStateResponse>;
  getUpcomingProjectsRaw: GetUpcomingProjectsResponse;
  getUserBids: GetMarketPlaceSnapshotsResponse;
  getUserHistory: GetMarketPlaceSnapshotsResponse;
  getUserListings: GetMarketPlaceSnapshotsResponse;
  getWalletStats: GetWalletStatsOutput;
  getWalletStatsHist: GetWalletStatsHistOutput;
  validateAndConfirmSignature: ValidateAndConfirmSignatureOutput;
};


export type QueryAcceptBidTxArgs = {
  price: Scalars['Float'];
  seller_address: Scalars['String'];
  seller_broker: Scalars['String'];
  seller_broker_basis_points?: InputMaybe<Scalars['Float']>;
  token_address: Scalars['String'];
};


export type QueryConfirmBuyTxArgs = {
  data?: InputMaybe<Array<Scalars['Float']>>;
  hex_data?: InputMaybe<Scalars['String']>;
  metadata: Scalars['JSON'];
};


export type QueryCreateBidTxArgs = {
  buyer_address: Scalars['String'];
  buyer_broker: Scalars['String'];
  buyer_broker_basis_points?: InputMaybe<Scalars['Float']>;
  price: Scalars['Float'];
  token_address: Scalars['String'];
};


export type QueryCreateBuyTxArgs = {
  buyer_address: Scalars['String'];
  buyer_broker: Scalars['String'];
  buyer_broker_basis_points?: InputMaybe<Scalars['Float']>;
  ignore_funds_check?: InputMaybe<Scalars['Boolean']>;
  price: Scalars['Float'];
  token_address: Scalars['String'];
  unverified?: InputMaybe<Scalars['Boolean']>;
  validate?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCreateCancelBidTxArgs = {
  buyer_address: Scalars['String'];
  token_address: Scalars['String'];
};


export type QueryCreateDelistTxArgs = {
  seller_address: Scalars['String'];
  token_address: Scalars['String'];
};


export type QueryCreateListTxArgs = {
  price: Scalars['Float'];
  seller_address: Scalars['String'];
  seller_broker: Scalars['String'];
  seller_broker_basis_points?: InputMaybe<Scalars['Float']>;
  token_address: Scalars['String'];
};


export type QueryCreateWithdrawEscrowTxArgs = {
  amount: Scalars['Float'];
  user_address: Scalars['String'];
};


export type QueryGetCollectionBidConfigArgs = {
  project_id: Scalars['String'];
};


export type QueryGetCollectionBidsForProjectArgs = {
  project_id: Scalars['String'];
};


export type QueryGetCollectionBidsForProjectAndUserArgs = {
  buyer_address: Scalars['String'];
  project_id: Scalars['String'];
};


export type QueryGetCollectionBidsForUserArgs = {
  buyer_address: Scalars['String'];
};


export type QueryGetCollectionDistributionArgs = {
  conditions?: InputMaybe<GetCollectionDistCondition>;
};


export type QueryGetFloorPriceDistributionArgs = {
  conditions?: InputMaybe<GetFloorPriceDistCondition>;
};


export type QueryGetMarketPlaceActionsByTokenArgs = {
  condition: GetMarketPlaceActionsByTokenAddressCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetMarketPlaceSnapshotsArgs = {
  condition?: InputMaybe<GetMarketPlaceSnapshotCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetNonMpaProjectHistoryArgs = {
  condition: GetNonMarketPlaceActionsByProjectCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<MpaPaginationConfig>;
};


export type QueryGetNonMpaUserHistoryArgs = {
  condition: GetNonMarketPlaceActionsByUserCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<MpaPaginationConfig>;
};


export type QueryGetOverallProjectStatsArgs = {
  tag?: InputMaybe<Scalars['String']>;
};


export type QueryGetOwnersDistributionArgs = {
  conditions?: InputMaybe<GetOwnersDistCondition>;
};


export type QueryGetProjectHistoryArgs = {
  condition: GetMarketPlaceActionsByProjectsCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<MpaPaginationConfig>;
};


export type QueryGetProjectStatByNameArgs = {
  condition: GetProjectStatByNameCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetProjectStatHistArgs = {
  conditions: GetProjectStatHistCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetProjectStatsArgs = {
  conditions?: InputMaybe<GetProjectStatsCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetTokenStateArgs = {
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetUpcomingProjectsRawArgs = {
  conditions?: InputMaybe<Array<GetUpcomingProjectsCondition>>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetUserBidsArgs = {
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetUserHistoryArgs = {
  condition: GetMarketPlaceActionsByUserCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<MpaPaginationConfig>;
};


export type QueryGetUserListingsArgs = {
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetWalletStatsArgs = {
  condition?: InputMaybe<GetWalletStatsCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryGetWalletStatsHistArgs = {
  condition: GetWalletStatsHistCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};


export type QueryValidateAndConfirmSignatureArgs = {
  signature: Scalars['String'];
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringInputArg = {
  operation?: InputMaybe<StringInputOperationEnum>;
  value: Scalars['String'];
};

export enum StringInputOperationEnum {
  Exact = 'EXACT',
  Fuzzy = 'FUZZY'
}

export type SupplyInput = {
  operation: Scalars['String'];
  order_by?: InputMaybe<Scalars['String']>;
  supply: Scalars['Float'];
};

export enum TimePeriodEnum {
  All = 'ALL',
  OneDay = 'ONE_DAY'
}

export type UpcomingProject = {
  __typename?: 'UpcomingProject';
  calendar_event_id?: Maybe<Scalars['String']>;
  candy_machine_ids?: Maybe<Array<Scalars['String']>>;
  created_at: Scalars['DateTime'];
  crm_priority?: Maybe<CrmPriorityEnum>;
  description?: Maybe<Scalars['String']>;
  discord?: Maybe<Scalars['String']>;
  discord_members?: Maybe<Scalars['Float']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  img_url?: Maybe<Scalars['String']>;
  is_affiliate: Scalars['Boolean'];
  is_featured: Scalars['Boolean'];
  is_moonshot: Scalars['Boolean'];
  launch_date?: Maybe<Scalars['Date']>;
  launch_timestamp?: Maybe<Scalars['String']>;
  launchpad?: Maybe<Scalars['String']>;
  launchpad_contact_date?: Maybe<Scalars['Date']>;
  launchpad_stage?: Maybe<LeadStateEnum>;
  marketplace_contact_date?: Maybe<Scalars['Date']>;
  marketplace_stage?: Maybe<LeadStateEnum>;
  mint_site?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  point_person?: Maybe<Scalars['String']>;
  prediction?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Float']>;
  priority_assign_date?: Maybe<Scalars['Date']>;
  project_id?: Maybe<Scalars['String']>;
  project_name: Scalars['String'];
  protocol: ProtocolEnum;
  source?: Maybe<Scalars['String']>;
  supply?: Maybe<Scalars['String']>;
  telegram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_followers?: Maybe<Scalars['Float']>;
  updated_at: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};

export type UpcomingProjectFindyByInput = {
  project_name: Scalars['String'];
};

export type UpdateBidMarketPlaceActionInput = {
  buyer_address: Scalars['String'];
  buyer_referral_address: Scalars['String'];
  buyer_referral_fee: Scalars['Float'];
  marketplace_fee_address: Scalars['String'];
  marketplace_program_id: Scalars['String'];
  price: Scalars['Float'];
  signature: Scalars['String'];
  slot: Scalars['Float'];
  token_address: Scalars['String'];
};

export type UpdateListingMarketPlaceActionInput = {
  marketplace_fee_address: Scalars['String'];
  marketplace_program_id: Scalars['String'];
  price: Scalars['Float'];
  seller_address: Scalars['String'];
  seller_referral_address: Scalars['String'];
  seller_referral_fee: Scalars['Float'];
  signature: Scalars['String'];
  slot: Scalars['Float'];
  token_address: Scalars['String'];
};

export type UpdateUpcomingProjectInput = {
  find_by: UpcomingProjectFindyByInput;
  input_values: UpdateUpcomingProjectInputValues;
};

export type UpdateUpcomingProjectInputValues = {
  description?: InputMaybe<Scalars['String']>;
  discord?: InputMaybe<Scalars['String']>;
  display_name?: InputMaybe<Scalars['String']>;
  has_ended?: InputMaybe<Scalars['Boolean']>;
  img_url?: InputMaybe<Scalars['String']>;
  launch_date?: InputMaybe<Scalars['Date']>;
  launch_timestamp?: InputMaybe<Scalars['String']>;
  mint_site?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  supply?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type UserTimestamp = {
  locale?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<Scalars['String']>;
  timestamp: Scalars['Float'];
  timezone?: InputMaybe<Scalars['String']>;
};

export type WalletStat = {
  __typename?: 'WalletStat';
  address: Scalars['String'];
  bids_made_amount?: Maybe<Scalars['Float']>;
  bids_made_amount_1day?: Maybe<Scalars['Float']>;
  created_at?: Maybe<Scalars['DateTime']>;
  listed_nfts?: Maybe<Scalars['Float']>;
  max_purchase?: Maybe<Scalars['Float']>;
  max_purchase_1day?: Maybe<Scalars['Float']>;
  max_purchase_item?: Maybe<Scalars['JSON']>;
  max_purchase_item_1day?: Maybe<Scalars['JSON']>;
  max_sale?: Maybe<Scalars['Float']>;
  max_sale_1day?: Maybe<Scalars['Float']>;
  max_sale_item?: Maybe<Scalars['JSON']>;
  max_sale_item_1day?: Maybe<Scalars['JSON']>;
  minted_amount?: Maybe<Scalars['Float']>;
  minted_amount_1day?: Maybe<Scalars['Float']>;
  num_bids?: Maybe<Scalars['Float']>;
  num_bids_1day?: Maybe<Scalars['Float']>;
  num_bought?: Maybe<Scalars['Float']>;
  num_bought_1day?: Maybe<Scalars['Float']>;
  num_minted?: Maybe<Scalars['Float']>;
  num_minted_1day?: Maybe<Scalars['Float']>;
  num_sold?: Maybe<Scalars['Float']>;
  num_sold_1day?: Maybe<Scalars['Float']>;
  owned_nfts?: Maybe<Scalars['Float']>;
  portfolio_value?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  rank_1day?: Maybe<Scalars['Float']>;
  rank_1day_percentile?: Maybe<Scalars['Float']>;
  rank_percentile?: Maybe<Scalars['Float']>;
  sol_name?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  volume_bought?: Maybe<Scalars['Float']>;
  volume_bought_1day?: Maybe<Scalars['Float']>;
  volume_sold?: Maybe<Scalars['Float']>;
  volume_sold_1day?: Maybe<Scalars['Float']>;
  wallet_score?: Maybe<Scalars['Float']>;
  wallet_score_1day?: Maybe<Scalars['Float']>;
  wallet_stat_timestamp?: Maybe<Scalars['Float']>;
};

export type WalletStatHist = {
  __typename?: 'WalletStatHist';
  address: Scalars['String'];
  created_at: Scalars['DateTime'];
  owned_nfts?: Maybe<Scalars['Float']>;
  portfolio_value?: Maybe<Scalars['Float']>;
  timestamp: Scalars['Float'];
  updated_at: Scalars['DateTime'];
};

export type ValidateAndConfirmSignatureOutput = {
  __typename?: 'validateAndConfirmSignatureOutput';
  success: Scalars['Boolean'];
};

export type GetBuyTxQueryVariables = Exact<{
  buyerAddress: Scalars['String'];
  price: Scalars['Float'];
  tokenAddress: Scalars['String'];
  buyerBroker: Scalars['String'];
  buyerBrokerBasisPoints?: InputMaybe<Scalars['Float']>;
  unverified?: InputMaybe<Scalars['Boolean']>;
  ignoreFundCheck?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetBuyTxQuery = { __typename?: 'Query', createBuyTx: { __typename?: 'MarketPlaceTxOutput', data?: Array<number> | null, is_required_signers_on?: boolean | null, metadata?: any | null, stdBuffer?: Array<number> | null, error?: { __typename?: 'MarketPlaceTxOutputError', error_type?: MarketPlaceTxErrorEnum | null, message?: string | null, metadata?: any | null } | null } };

export type SendBuyTxQueryVariables = Exact<{
  data?: InputMaybe<Array<Scalars['Float']> | Scalars['Float']>;
  hexData?: InputMaybe<Scalars['String']>;
  metadata: Scalars['JSON'];
}>;


export type SendBuyTxQuery = { __typename?: 'Query', confirmBuyTx: { __typename?: 'MarketPlaceTxConfirmation', tx_id?: string | null, error?: { __typename?: 'MarketPlaceTxOutputError', error_type?: MarketPlaceTxErrorEnum | null, message?: string | null, metadata?: any | null } | null } };

export type GetListTxQueryVariables = Exact<{
  sellerAddress: Scalars['String'];
  price: Scalars['Float'];
  tokenAddress: Scalars['String'];
  sellerBroker: Scalars['String'];
  sellerBrokerBasisPoints?: InputMaybe<Scalars['Float']>;
}>;


export type GetListTxQuery = { __typename?: 'Query', createListTx: { __typename?: 'MarketPlaceTxOutput', data?: Array<number> | null, is_required_signers_on?: boolean | null, metadata?: any | null, error?: { __typename?: 'MarketPlaceTxOutputError', error_type?: MarketPlaceTxErrorEnum | null, message?: string | null, metadata?: any | null } | null } };

export type GetBidTxQueryVariables = Exact<{
  buyerAddress: Scalars['String'];
  price: Scalars['Float'];
  tokenAddress: Scalars['String'];
  buyerBroker: Scalars['String'];
  buyerBrokerBasisPoints?: InputMaybe<Scalars['Float']>;
}>;


export type GetBidTxQuery = { __typename?: 'Query', createBidTx: { __typename?: 'MarketPlaceTxOutput', data?: Array<number> | null, is_required_signers_on?: boolean | null, metadata?: any | null, error?: { __typename?: 'MarketPlaceTxOutputError', error_type?: MarketPlaceTxErrorEnum | null, message?: string | null, metadata?: any | null } | null } };

export type GetAcceptBidTxQueryVariables = Exact<{
  sellerAddress: Scalars['String'];
  price: Scalars['Float'];
  tokenAddress: Scalars['String'];
  sellerBroker: Scalars['String'];
  sellerBrokerBasisPoints?: InputMaybe<Scalars['Float']>;
}>;


export type GetAcceptBidTxQuery = { __typename?: 'Query', acceptBidTx: { __typename?: 'MarketPlaceTxOutput', data?: Array<number> | null, is_required_signers_on?: boolean | null, metadata?: any | null, error?: { __typename?: 'MarketPlaceTxOutputError', error_type?: MarketPlaceTxErrorEnum | null, message?: string | null, metadata?: any | null } | null } };

export type GetCancelBidTxQueryVariables = Exact<{
  buyerAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
}>;


export type GetCancelBidTxQuery = { __typename?: 'Query', createCancelBidTx: { __typename?: 'MarketPlaceTxOutput', data?: Array<number> | null, is_required_signers_on?: boolean | null, metadata?: any | null, error?: { __typename?: 'MarketPlaceTxOutputError', error_type?: MarketPlaceTxErrorEnum | null, message?: string | null, metadata?: any | null } | null } };

export type GetDelistTxQueryVariables = Exact<{
  sellerAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
}>;


export type GetDelistTxQuery = { __typename?: 'Query', createDelistTx: { __typename?: 'MarketPlaceTxOutput', data?: Array<number> | null, is_required_signers_on?: boolean | null, metadata?: any | null, error?: { __typename?: 'MarketPlaceTxOutputError', error_type?: MarketPlaceTxErrorEnum | null, message?: string | null, metadata?: any | null } | null } };

export type GetWithdrawEscrowTxQueryVariables = Exact<{
  userAddress: Scalars['String'];
  amount: Scalars['Float'];
}>;


export type GetWithdrawEscrowTxQuery = { __typename?: 'Query', createWithdrawEscrowTx: { __typename?: 'MarketPlaceTxOutput', data?: Array<number> | null, is_required_signers_on?: boolean | null, metadata?: any | null, error?: { __typename?: 'MarketPlaceTxOutputError', error_type?: MarketPlaceTxErrorEnum | null, message?: string | null, metadata?: any | null } | null } };

export type GetTokenHistoryQueryVariables = Exact<{
  condition: GetMarketPlaceActionsByTokenAddressCondition;
  paginationInfo?: InputMaybe<PaginationConfig>;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;


export type GetTokenHistoryQuery = { __typename?: 'Query', getMarketPlaceActionsByToken: Array<{ __typename?: 'GetMarketPlaceActionsOutput', token_address: string, market_place_actions: Array<{ __typename?: 'MarketPlaceActions', block_timestamp?: number | null, escrow_address?: string | null, signature?: string | null, seller_address?: string | null, buyer_address?: string | null, type?: MarketPlaceActionEnum | null, marketplace_program_id?: string | null, marketplace_instance_id?: string | null, fee?: number | null, amount?: number | null, seller_referral_fee?: number | null, seller_referral_address?: string | null, buyer_referral_address?: string | null, buyer_referral_fee?: number | null, metadata?: any | null, price?: number | null }> }> };

export type GetUserHistoryQueryVariables = Exact<{
  condition: GetMarketPlaceActionsByUserCondition;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<MpaPaginationConfig>;
}>;


export type GetUserHistoryQuery = { __typename?: 'Query', getUserHistory: { __typename?: 'GetMarketPlaceSnapshotsResponse', market_place_snapshots?: Array<{ __typename?: 'MarketPlaceSnapshotResponse', project_name?: string | null, name?: string | null, token_address: string, meta_data_img?: string | null, full_img?: string | null, is_project_verified?: boolean | null, market_place_state?: { __typename?: 'MarketPlaceState', block_timestamp?: number | null, escrow_address?: string | null, signature?: string | null, seller_address?: string | null, buyer_address?: string | null, type?: MarketPlaceActionEnum | null, marketplace_program_id?: string | null, marketplace_instance_id?: string | null, fee?: number | null, amount?: number | null, seller_referral_fee?: number | null, seller_referral_address?: string | null, buyer_referral_address?: string | null, buyer_referral_fee?: number | null, metadata?: any | null, price?: number | null } | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean, total_page_number?: number | null } } };

export type GetProjectHistoryQueryVariables = Exact<{
  condition: GetMarketPlaceActionsByProjectsCondition;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<MpaPaginationConfig>;
}>;


export type GetProjectHistoryQuery = { __typename?: 'Query', getProjectHistory: { __typename?: 'GetMarketPlaceSnapshotsResponse', market_place_snapshots?: Array<{ __typename?: 'MarketPlaceSnapshotResponse', name?: string | null, token_address: string, meta_data_img?: string | null, full_img?: string | null, rank_est?: number | null, market_place_state?: { __typename?: 'MarketPlaceState', block_timestamp?: number | null, escrow_address?: string | null, signature?: string | null, seller_address?: string | null, buyer_address?: string | null, type?: MarketPlaceActionEnum | null, marketplace_program_id?: string | null, marketplace_instance_id?: string | null, fee?: number | null, amount?: number | null, seller_referral_fee?: number | null, seller_referral_address?: string | null, buyer_referral_address?: string | null, buyer_referral_fee?: number | null, metadata?: any | null, price?: number | null } | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean, total_page_number?: number | null } } };

export type GetNonMpaProjectHistoryQueryVariables = Exact<{
  condition: GetNonMarketPlaceActionsByProjectCondition;
  paginationInfo?: InputMaybe<MpaPaginationConfig>;
}>;


export type GetNonMpaProjectHistoryQuery = { __typename?: 'Query', getNonMpaProjectHistory: { __typename?: 'GetMarketPlaceSnapshotsResponse', market_place_snapshots?: Array<{ __typename?: 'MarketPlaceSnapshotResponse', token_address: string, project_id: string, project_name?: string | null, name?: string | null, full_img?: string | null, rank_est?: number | null, meta_data_img?: string | null, non_market_place_state?: { __typename?: 'NonMarketPlaceActions', token_address?: string | null, signature?: string | null, source_address?: string | null, destination_address?: string | null, program_id?: string | null, collection_id?: string | null, new_authority?: string | null, price?: number | null, type?: NonMarketPlaceActionEnum | null, currency?: string | null, amount?: number | null, decimal?: number | null, destination_token_account?: string | null, source_token_account?: string | null, metadata?: any | null, block_timestamp?: number | null, block_number?: number | null } | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean } } };

export type GetNonMpaUserHistoryQueryVariables = Exact<{
  condition: GetNonMarketPlaceActionsByUserCondition;
  paginationInfo?: InputMaybe<MpaPaginationConfig>;
}>;


export type GetNonMpaUserHistoryQuery = { __typename?: 'Query', getNonMpaUserHistory: { __typename?: 'GetMarketPlaceSnapshotsResponse', market_place_snapshots?: Array<{ __typename?: 'MarketPlaceSnapshotResponse', token_address: string, project_id: string, project_name?: string | null, name?: string | null, full_img?: string | null, rank_est?: number | null, meta_data_img?: string | null, is_project_verified?: boolean | null, non_market_place_state?: { __typename?: 'NonMarketPlaceActions', token_address?: string | null, signature?: string | null, source_address?: string | null, destination_address?: string | null, program_id?: string | null, collection_id?: string | null, new_authority?: string | null, price?: number | null, type?: NonMarketPlaceActionEnum | null, currency?: string | null, amount?: number | null, decimal?: number | null, destination_token_account?: string | null, source_token_account?: string | null, metadata?: any | null, block_timestamp?: number | null, block_number?: number | null } | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean } } };

export type GetMarketplaceSnapshotsQueryVariables = Exact<{
  condition?: InputMaybe<GetMarketPlaceSnapshotCondition>;
  pagination_info?: InputMaybe<PaginationConfig>;
  order_by?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;


export type GetMarketplaceSnapshotsQuery = { __typename?: 'Query', getMarketPlaceSnapshots: { __typename?: 'GetMarketPlaceSnapshotsResponse', market_place_snapshots?: Array<{ __typename?: 'MarketPlaceSnapshotResponse', token_address: string, project_id: string, name?: string | null, rank_est?: number | null, moonrank?: number | null, howrare_rank?: number | null, supply?: number | null, full_img?: string | null, meta_data_img?: string | null, meta_data_uri?: string | null, attributes?: any | null, floor_price?: number | null, project_name?: string | null, project_image?: string | null, project_slug?: string | null, project_description?: string | null, is_project_verified?: boolean | null, created_at?: any | null, project_attributes?: Array<{ __typename?: 'ProjectAttribute', name: string, counts?: any | null, type: AttributeTypeEnum, values: Array<string> }> | null, lowest_listing_mpa?: { __typename?: 'MarketPlaceActionResponse', user_address?: string | null, price?: number | null, marketplace_program_id?: string | null, type?: MarketPlaceActionEnum | null, signature?: string | null, amount?: number | null, broker_referral_address?: string | null, block_timestamp?: number | null, broker_referral_fee?: number | null, escrow_address?: string | null, fee?: number | null, marketplace_fee_address?: string | null, marketplace_instance_id?: string | null, metadata?: any | null } | null, highest_bid_mpa?: { __typename?: 'MarketPlaceActionResponse', marketplace_fee_address?: string | null, fee?: number | null, escrow_address?: string | null, broker_referral_fee?: number | null, broker_referral_address?: string | null, block_timestamp?: number | null, signature?: string | null, amount?: number | null, type?: MarketPlaceActionEnum | null, marketplace_program_id?: string | null, marketplace_instance_id?: string | null, price?: number | null, user_address?: string | null, metadata?: any | null } | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean, total_page_number?: number | null } } };

export type GetUserBidsQueryVariables = Exact<{
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  order_by?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;


export type GetUserBidsQuery = { __typename?: 'Query', getUserBids: { __typename?: 'GetMarketPlaceSnapshotsResponse', market_place_snapshots?: Array<{ __typename?: 'MarketPlaceSnapshotResponse', name?: string | null, token_address: string, project_name?: string | null, project_id: string, full_img?: string | null, meta_data_img?: string | null, floor_price?: number | null, rank_est?: number | null, moonrank?: number | null, howrare_rank?: number | null, market_place_state?: { __typename?: 'MarketPlaceState', block_timestamp?: number | null, escrow_address?: string | null, signature?: string | null, seller_address?: string | null, buyer_address?: string | null, type?: MarketPlaceActionEnum | null, marketplace_program_id?: string | null, marketplace_instance_id?: string | null, fee?: number | null, amount?: number | null, seller_referral_fee?: number | null, seller_referral_address?: string | null, buyer_referral_address?: string | null, buyer_referral_fee?: number | null, metadata?: any | null, price?: number | null } | null }> | null } };

export type GetUserListingsQueryVariables = Exact<{
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;


export type GetUserListingsQuery = { __typename?: 'Query', getUserListings: { __typename?: 'GetMarketPlaceSnapshotsResponse', market_place_snapshots?: Array<{ __typename?: 'MarketPlaceSnapshotResponse', token_address: string, name?: string | null, full_img?: string | null, meta_data_img?: string | null, project_name?: string | null, project_id: string, rank_est?: number | null, moonrank?: number | null, howrare_rank?: number | null, market_place_state?: { __typename?: 'MarketPlaceState', block_timestamp?: number | null, escrow_address?: string | null, signature?: string | null, seller_address?: string | null, buyer_address?: string | null, type?: MarketPlaceActionEnum | null, marketplace_program_id?: string | null, marketplace_instance_id?: string | null, fee?: number | null, amount?: number | null, seller_referral_fee?: number | null, seller_referral_address?: string | null, buyer_referral_address?: string | null, buyer_referral_fee?: number | null, metadata?: any | null, price?: number | null } | null }> | null } };

export type GetTokenStateQueryVariables = Exact<{
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;


export type GetTokenStateQuery = { __typename?: 'Query', getTokenState: Array<{ __typename?: 'GetMarketPlaceStateResponse', token_address: string, market_place_states: Array<{ __typename?: 'MarketPlaceSnapshotResponse', token_address: string, project_id: string, name?: string | null, rank_est?: number | null, full_img?: string | null, meta_data_img?: string | null, attributes?: any | null, moonrank?: number | null, howrare_rank?: number | null, market_place_state?: { __typename?: 'MarketPlaceState', block_timestamp?: number | null, escrow_address?: string | null, signature?: string | null, seller_address?: string | null, buyer_address?: string | null, type?: MarketPlaceActionEnum | null, marketplace_program_id?: string | null, marketplace_instance_id?: string | null, fee?: number | null, amount?: number | null, seller_referral_fee?: number | null, seller_referral_address?: string | null, buyer_referral_address?: string | null, buyer_referral_fee?: number | null, metadata?: any | null, price?: number | null } | null }> }> };

export type GetMarketplaceStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMarketplaceStatusQuery = { __typename?: 'Query', getMarketPlaceStatus: { __typename?: 'GetMarketPlaceStatusResponse', mps: Array<{ __typename?: 'MarketPlaceStatus', display_name: string, item_path?: string | null, website?: string | null, is_bidding_enabled: boolean, is_buying_enabled: boolean, is_delisting_enabled: boolean, is_listing_enabled: boolean, marketplace_program_id: string, marketplace_instance_id?: string | null }> } };

export type GetProjectStatsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  conditions?: InputMaybe<GetProjectStatsCondition>;
}>;


export type GetProjectStatsQuery = { __typename?: 'Query', getProjectStats: { __typename?: 'GetProjectStatsOutput', project_stats?: Array<{ __typename?: 'ProjectStat', project_id: string, market_cap?: number | null, volume_7day?: number | null, volume_1day_change?: number | null, floor_price?: number | null, floor_price_1day_change?: number | null, average_price?: number | null, average_price_1day_change?: number | null, max_price?: number | null, twitter_followers?: number | null, num_of_token_listed?: number | null, num_of_token_holders?: number | null, percentage_of_token_listed?: number | null, volume_1day?: number | null, volume_1hr?: number | null, project?: { __typename?: 'Project', project_id: string, supply?: number | null, website?: string | null, twitter?: string | null, discord?: string | null, img_url?: string | null, is_verified?: boolean | null, display_name: string, project_slug?: string | null, me_slug?: string | null, description?: string | null, tags?: Array<{ __typename?: 'ProjectTag', tag: string }> | null, project_attributes?: Array<{ __typename?: 'ProjectAttribute', name: string, type: AttributeTypeEnum, values: Array<string>, counts?: any | null, floor_prices?: any | null }> | null } | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean, total_page_number?: number | null } } };

export type GetProjectStatHistoryQueryVariables = Exact<{
  paginationInfo?: InputMaybe<PaginationConfig>;
  conditions: GetProjectStatHistCondition;
}>;


export type GetProjectStatHistoryQuery = { __typename?: 'Query', getProjectStatHist: { __typename?: 'GetProjectStatHistOutput', project_stat_hist_entries?: Array<{ __typename?: 'ProjectStatHist', project_id: string, timestamp: number, volume?: number | null, volume_usd?: number | null, volume_double?: number | null, volume_usd_double?: number | null, floor_price?: number | null, num_of_sales?: number | null, max_price?: number | null, twitter_followers?: number | null, discord_members?: number | null, supply?: number | null, num_of_token_holders?: number | null, num_of_token_listed?: number | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean, total_page_number?: number | null } } };

export type SearchProjectByNameQueryVariables = Exact<{
  order_by?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  condition: GetProjectStatByNameCondition;
}>;


export type SearchProjectByNameQuery = { __typename?: 'Query', getProjectStatByName: { __typename?: 'GetProjectStatsOutput', project_stats?: Array<{ __typename?: 'ProjectStat', project_id: string, market_cap?: number | null, volume_7day?: number | null, volume_1day_change?: number | null, floor_price?: number | null, floor_price_1day_change?: number | null, average_price?: number | null, average_price_1day_change?: number | null, max_price?: number | null, twitter_followers?: number | null, num_of_token_listed?: number | null, num_of_token_holders?: number | null, percentage_of_token_listed?: number | null, volume_1day?: number | null, volume_1hr?: number | null, rank?: number | null, project?: { __typename?: 'Project', supply?: number | null, website?: string | null, twitter?: string | null, discord?: string | null, img_url?: string | null, is_verified?: boolean | null, display_name: string, project_slug?: string | null, me_slug?: string | null, project_attributes?: Array<{ __typename?: 'ProjectAttribute', name: string, type: AttributeTypeEnum, values: Array<string>, counts?: any | null, floor_prices?: any | null }> | null } | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean } } };

export type GetUpcomingProjectsQueryVariables = Exact<{
  conditions?: InputMaybe<Array<GetUpcomingProjectsCondition> | GetUpcomingProjectsCondition>;
  order_by?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  pagination_info?: InputMaybe<PaginationConfig>;
}>;


export type GetUpcomingProjectsQuery = { __typename?: 'Query', getUpcomingProjectsRaw: { __typename?: 'GetUpcomingProjectsResponse', upcoming_projects: Array<{ __typename?: 'UpcomingProject', project_name: string, protocol: ProtocolEnum, twitter?: string | null, discord?: string | null, website?: string | null, display_name?: string | null, supply?: string | null, description?: string | null, launch_timestamp?: string | null, launch_date?: any | null, mint_site?: string | null, img_url?: string | null, price?: string | null, is_moonshot: boolean, is_featured: boolean }> } };

export type GetWalletStatsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  condition?: InputMaybe<GetWalletStatsCondition>;
}>;


export type GetWalletStatsQuery = { __typename?: 'Query', getWalletStats: { __typename?: 'GetWalletStatsOutput', wallet_stats?: Array<{ __typename?: 'WalletStat', address: string, listed_nfts?: number | null, owned_nfts?: number | null, portfolio_value?: number | null, sol_name?: string | null, twitter?: string | null, num_sold_1day?: number | null, volume_sold_1day?: number | null, num_bought_1day?: number | null, volume_bought_1day?: number | null, num_bids_1day?: number | null, bids_made_amount_1day?: number | null, max_purchase_1day?: number | null, max_sale_1day?: number | null, num_minted_1day?: number | null, minted_amount_1day?: number | null, wallet_score_1day?: number | null, max_purchase_item_1day?: any | null, max_sale_item_1day?: any | null, num_sold?: number | null, volume_sold?: number | null, num_bought?: number | null, volume_bought?: number | null, num_bids?: number | null, bids_made_amount?: number | null, max_purchase?: number | null, max_sale?: number | null, num_minted?: number | null, minted_amount?: number | null, wallet_score?: number | null, max_purchase_item?: any | null, max_sale_item?: any | null, rank?: number | null }> | null, pagination_info: { __typename?: 'PaginationInfoResponseType', current_page_number: number, current_page_size: number, has_next_page: boolean } } };

export type GetOverallWalletStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOverallWalletStatsQuery = { __typename?: 'Query', getOverallWalletStats: { __typename?: 'GetOverallWalletStatOutput', largest_sale_1day?: { __typename?: 'WalletStat', max_purchase_item_1day?: any | null, max_purchase_1day?: number | null } | null, top_buyer_1day?: { __typename?: 'WalletStat', address: string, sol_name?: string | null, max_purchase_item_1day?: any | null } | null, top_seller_1day?: { __typename?: 'WalletStat', address: string, sol_name?: string | null, max_sale_item_1day?: any | null } | null } };

export type GetWalletStatsHistQueryVariables = Exact<{
  condition: GetWalletStatsHistCondition;
}>;


export type GetWalletStatsHistQuery = { __typename?: 'Query', getWalletStatsHist: { __typename?: 'GetWalletStatsHistOutput', wallet_stats_history?: Array<{ __typename?: 'WalletStatHist', timestamp: number, portfolio_value?: number | null, owned_nfts?: number | null }> | null } };


export const GetBuyTxDocument = gql`
    query getBuyTx($buyerAddress: String!, $price: Float!, $tokenAddress: String!, $buyerBroker: String!, $buyerBrokerBasisPoints: Float, $unverified: Boolean, $ignoreFundCheck: Boolean) {
  createBuyTx(
    buyer_address: $buyerAddress
    price: $price
    token_address: $tokenAddress
    buyer_broker: $buyerBroker
    buyer_broker_basis_points: $buyerBrokerBasisPoints
    unverified: $unverified
    ignore_funds_check: $ignoreFundCheck
  ) {
    data
    is_required_signers_on
    metadata
    stdBuffer
    error {
      error_type
      message
      metadata
    }
  }
}
    `;
export const SendBuyTxDocument = gql`
    query sendBuyTx($data: [Float!], $hexData: String, $metadata: JSON!) {
  confirmBuyTx(data: $data, hex_data: $hexData, metadata: $metadata) {
    tx_id
    error {
      error_type
      message
      metadata
    }
  }
}
    `;
export const GetListTxDocument = gql`
    query getListTx($sellerAddress: String!, $price: Float!, $tokenAddress: String!, $sellerBroker: String!, $sellerBrokerBasisPoints: Float) {
  createListTx(
    seller_address: $sellerAddress
    token_address: $tokenAddress
    price: $price
    seller_broker: $sellerBroker
    seller_broker_basis_points: $sellerBrokerBasisPoints
  ) {
    data
    is_required_signers_on
    metadata
    error {
      error_type
      message
      metadata
    }
  }
}
    `;
export const GetBidTxDocument = gql`
    query getBidTx($buyerAddress: String!, $price: Float!, $tokenAddress: String!, $buyerBroker: String!, $buyerBrokerBasisPoints: Float) {
  createBidTx(
    buyer_address: $buyerAddress
    price: $price
    token_address: $tokenAddress
    buyer_broker: $buyerBroker
    buyer_broker_basis_points: $buyerBrokerBasisPoints
  ) {
    data
    is_required_signers_on
    metadata
    error {
      error_type
      message
      metadata
    }
  }
}
    `;
export const GetAcceptBidTxDocument = gql`
    query getAcceptBidTx($sellerAddress: String!, $price: Float!, $tokenAddress: String!, $sellerBroker: String!, $sellerBrokerBasisPoints: Float) {
  acceptBidTx(
    seller_address: $sellerAddress
    token_address: $tokenAddress
    price: $price
    seller_broker: $sellerBroker
    seller_broker_basis_points: $sellerBrokerBasisPoints
  ) {
    data
    is_required_signers_on
    metadata
    error {
      error_type
      message
      metadata
    }
  }
}
    `;
export const GetCancelBidTxDocument = gql`
    query getCancelBidTx($buyerAddress: String!, $tokenAddress: String!) {
  createCancelBidTx(buyer_address: $buyerAddress, token_address: $tokenAddress) {
    data
    is_required_signers_on
    metadata
    error {
      error_type
      message
      metadata
    }
  }
}
    `;
export const GetDelistTxDocument = gql`
    query getDelistTx($sellerAddress: String!, $tokenAddress: String!) {
  createDelistTx(seller_address: $sellerAddress, token_address: $tokenAddress) {
    data
    is_required_signers_on
    metadata
    error {
      error_type
      message
      metadata
    }
  }
}
    `;
export const GetWithdrawEscrowTxDocument = gql`
    query getWithdrawEscrowTx($userAddress: String!, $amount: Float!) {
  createWithdrawEscrowTx(user_address: $userAddress, amount: $amount) {
    data
    is_required_signers_on
    metadata
    error {
      error_type
      message
      metadata
    }
  }
}
    `;
export const GetTokenHistoryDocument = gql`
    query getTokenHistory($condition: GetMarketPlaceActionsByTokenAddressCondition!, $paginationInfo: PaginationConfig, $orderBy: [OrderConfig!]) {
  getMarketPlaceActionsByToken(
    order_by: $orderBy
    pagination_info: $paginationInfo
    condition: $condition
  ) {
    token_address
    market_place_actions {
      block_timestamp
      escrow_address
      signature
      seller_address
      buyer_address
      type
      marketplace_program_id
      marketplace_instance_id
      fee
      amount
      seller_referral_fee
      seller_referral_address
      buyer_referral_address
      buyer_referral_fee
      metadata
      price
    }
  }
}
    `;
export const GetUserHistoryDocument = gql`
    query getUserHistory($condition: GetMarketPlaceActionsByUserCondition!, $orderBy: [OrderConfig!], $paginationInfo: MPAPaginationConfig) {
  getUserHistory(
    condition: $condition
    order_by: $orderBy
    pagination_info: $paginationInfo
  ) {
    market_place_snapshots {
      project_name
      name
      token_address
      meta_data_img
      full_img
      is_project_verified
      market_place_state {
        block_timestamp
        escrow_address
        signature
        seller_address
        buyer_address
        type
        marketplace_program_id
        marketplace_instance_id
        fee
        amount
        seller_referral_fee
        seller_referral_address
        buyer_referral_address
        buyer_referral_fee
        metadata
        price
      }
    }
    pagination_info {
      current_page_number
      current_page_size
      has_next_page
      total_page_number
    }
  }
}
    `;
export const GetProjectHistoryDocument = gql`
    query getProjectHistory($condition: GetMarketPlaceActionsByProjectsCondition!, $orderBy: [OrderConfig!], $paginationInfo: MPAPaginationConfig) {
  getProjectHistory(
    condition: $condition
    order_by: $orderBy
    pagination_info: $paginationInfo
  ) {
    market_place_snapshots {
      name
      token_address
      meta_data_img
      full_img
      rank_est
      market_place_state {
        block_timestamp
        escrow_address
        signature
        seller_address
        buyer_address
        type
        marketplace_program_id
        marketplace_instance_id
        fee
        amount
        seller_referral_fee
        seller_referral_address
        buyer_referral_address
        buyer_referral_fee
        metadata
        price
      }
    }
    pagination_info {
      current_page_number
      current_page_size
      has_next_page
      total_page_number
    }
  }
}
    `;
export const GetNonMpaProjectHistoryDocument = gql`
    query getNonMpaProjectHistory($condition: GetNonMarketPlaceActionsByProjectCondition!, $paginationInfo: MPAPaginationConfig) {
  getNonMpaProjectHistory(condition: $condition, pagination_info: $paginationInfo) {
    market_place_snapshots {
      token_address
      project_id
      project_name
      name
      full_img
      rank_est
      meta_data_img
      non_market_place_state {
        token_address
        signature
        source_address
        destination_address
        program_id
        collection_id
        new_authority
        price
        type
        currency
        amount
        decimal
        destination_token_account
        source_token_account
        metadata
        block_timestamp
        block_number
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
export const GetNonMpaUserHistoryDocument = gql`
    query getNonMpaUserHistory($condition: GetNonMarketPlaceActionsByUserCondition!, $paginationInfo: MPAPaginationConfig) {
  getNonMpaUserHistory(condition: $condition, pagination_info: $paginationInfo) {
    market_place_snapshots {
      token_address
      project_id
      project_name
      name
      full_img
      rank_est
      meta_data_img
      is_project_verified
      non_market_place_state {
        token_address
        signature
        source_address
        destination_address
        program_id
        collection_id
        new_authority
        price
        type
        currency
        amount
        decimal
        destination_token_account
        source_token_account
        metadata
        block_timestamp
        block_number
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
export const GetMarketplaceSnapshotsDocument = gql`
    query getMarketplaceSnapshots($condition: GetMarketPlaceSnapshotCondition, $pagination_info: PaginationConfig, $order_by: [OrderConfig!]) {
  getMarketPlaceSnapshots(
    condition: $condition
    pagination_info: $pagination_info
    order_by: $order_by
  ) {
    market_place_snapshots {
      token_address
      project_id
      name
      rank_est
      moonrank
      howrare_rank
      supply
      full_img
      meta_data_img
      meta_data_uri
      attributes
      floor_price
      project_name
      project_image
      project_slug
      project_description
      is_project_verified
      created_at
      project_attributes {
        name
        counts
        type
        values
      }
      lowest_listing_mpa {
        user_address
        price
        marketplace_program_id
        type
        signature
        amount
        broker_referral_address
        block_timestamp
        broker_referral_fee
        escrow_address
        fee
        marketplace_fee_address
        marketplace_instance_id
        metadata
      }
      highest_bid_mpa {
        marketplace_fee_address
        fee
        escrow_address
        broker_referral_fee
        broker_referral_address
        block_timestamp
        signature
        amount
        type
        marketplace_program_id
        marketplace_instance_id
        price
        user_address
        metadata
      }
    }
    pagination_info {
      current_page_number
      current_page_size
      has_next_page
      total_page_number
    }
  }
}
    `;
export const GetUserBidsDocument = gql`
    query getUserBids($condition: GetMarketPlaceStateCondition, $paginationInfo: PaginationConfig, $order_by: [OrderConfig!]) {
  getUserBids(
    condition: $condition
    pagination_info: $paginationInfo
    order_by: $order_by
  ) {
    market_place_snapshots {
      name
      token_address
      project_name
      project_id
      full_img
      meta_data_img
      floor_price
      rank_est
      moonrank
      howrare_rank
      market_place_state {
        block_timestamp
        escrow_address
        signature
        seller_address
        buyer_address
        type
        marketplace_program_id
        marketplace_instance_id
        fee
        amount
        seller_referral_fee
        seller_referral_address
        buyer_referral_address
        buyer_referral_fee
        metadata
        price
      }
    }
  }
}
    `;
export const GetUserListingsDocument = gql`
    query getUserListings($condition: GetMarketPlaceStateCondition, $paginationInfo: PaginationConfig, $orderBy: [OrderConfig!]) {
  getUserListings(
    condition: $condition
    pagination_info: $paginationInfo
    order_by: $orderBy
  ) {
    market_place_snapshots {
      token_address
      name
      full_img
      meta_data_img
      project_name
      project_id
      rank_est
      moonrank
      howrare_rank
      market_place_state {
        block_timestamp
        escrow_address
        signature
        seller_address
        buyer_address
        type
        marketplace_program_id
        marketplace_instance_id
        fee
        amount
        seller_referral_fee
        seller_referral_address
        buyer_referral_address
        buyer_referral_fee
        metadata
        price
      }
    }
  }
}
    `;
export const GetTokenStateDocument = gql`
    query getTokenState($condition: GetMarketPlaceStateCondition, $paginationInfo: PaginationConfig, $orderBy: [OrderConfig!]) {
  getTokenState(
    condition: $condition
    pagination_info: $paginationInfo
    order_by: $orderBy
  ) {
    token_address
    market_place_states {
      token_address
      project_id
      name
      rank_est
      full_img
      meta_data_img
      attributes
      rank_est
      moonrank
      howrare_rank
      market_place_state {
        block_timestamp
        escrow_address
        signature
        seller_address
        buyer_address
        type
        marketplace_program_id
        marketplace_instance_id
        fee
        amount
        seller_referral_fee
        seller_referral_address
        buyer_referral_address
        buyer_referral_fee
        metadata
        price
      }
    }
  }
}
    `;
export const GetMarketplaceStatusDocument = gql`
    query getMarketplaceStatus {
  getMarketPlaceStatus {
    mps {
      display_name
      item_path
      website
      is_bidding_enabled
      is_buying_enabled
      is_delisting_enabled
      is_listing_enabled
      marketplace_program_id
      marketplace_instance_id
    }
  }
}
    `;
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
      volume_1hr
      project {
        project_id
        supply
        website
        twitter
        discord
        img_url
        is_verified
        display_name
        project_slug
        me_slug
        description
        tags {
          tag
        }
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
      total_page_number
    }
  }
}
    `;
export const GetProjectStatHistoryDocument = gql`
    query getProjectStatHistory($paginationInfo: PaginationConfig, $conditions: GetProjectStatHistCondition!) {
  getProjectStatHist(pagination_info: $paginationInfo, conditions: $conditions) {
    project_stat_hist_entries {
      project_id
      timestamp
      volume
      volume_usd
      volume_double
      volume_usd_double
      floor_price
      num_of_sales
      max_price
      twitter_followers
      discord_members
      supply
      num_of_token_holders
      num_of_token_listed
    }
    pagination_info {
      current_page_number
      current_page_size
      has_next_page
      total_page_number
    }
  }
}
    `;
export const SearchProjectByNameDocument = gql`
    query searchProjectByName($order_by: [OrderConfig!], $paginationInfo: PaginationConfig, $condition: GetProjectStatByNameCondition!) {
  getProjectStatByName(
    order_by: $order_by
    pagination_info: $paginationInfo
    condition: $condition
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
      volume_1hr
      rank
      project {
        supply
        website
        twitter
        discord
        img_url
        is_verified
        display_name
        project_slug
        me_slug
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
export const GetUpcomingProjectsDocument = gql`
    query getUpcomingProjects($conditions: [GetUpcomingProjectsCondition!], $order_by: [OrderConfig!], $pagination_info: PaginationConfig) {
  getUpcomingProjectsRaw(
    conditions: $conditions
    order_by: $order_by
    pagination_info: $pagination_info
  ) {
    upcoming_projects {
      project_name
      protocol
      twitter
      discord
      website
      display_name
      supply
      description
      launch_timestamp
      launch_date
      mint_site
      img_url
      price
      is_moonshot
      is_featured
    }
  }
}
    `;
export const GetWalletStatsDocument = gql`
    query getWalletStats($orderBy: [OrderConfig!], $paginationInfo: PaginationConfig, $condition: GetWalletStatsCondition) {
  getWalletStats(
    order_by: $orderBy
    pagination_info: $paginationInfo
    condition: $condition
  ) {
    wallet_stats {
      address
      listed_nfts
      owned_nfts
      portfolio_value
      sol_name
      twitter
      num_sold_1day
      volume_sold_1day
      num_bought_1day
      volume_bought_1day
      num_bids_1day
      bids_made_amount_1day
      max_purchase_1day
      max_sale_1day
      num_minted_1day
      minted_amount_1day
      wallet_score_1day
      max_purchase_item_1day
      max_sale_item_1day
      num_sold
      volume_sold
      num_bought
      volume_bought
      num_bids
      bids_made_amount
      max_purchase
      max_sale
      num_minted
      minted_amount
      wallet_score
      max_purchase_item
      max_sale_item
      rank
    }
    pagination_info {
      current_page_number
      current_page_size
      has_next_page
    }
  }
}
    `;
export const GetOverallWalletStatsDocument = gql`
    query getOverallWalletStats {
  getOverallWalletStats {
    largest_sale_1day {
      max_purchase_item_1day
      max_purchase_1day
    }
    top_buyer_1day {
      address
      sol_name
      max_purchase_item_1day
    }
    top_seller_1day {
      address
      sol_name
      max_sale_item_1day
    }
  }
}
    `;
export const GetWalletStatsHistDocument = gql`
    query getWalletStatsHist($condition: GetWalletStatsHistCondition!) {
  getWalletStatsHist(condition: $condition) {
    wallet_stats_history {
      timestamp
      portfolio_value
      owned_nfts
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getBuyTx(variables: GetBuyTxQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBuyTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBuyTxQuery>(GetBuyTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBuyTx', 'query');
    },
    sendBuyTx(variables: SendBuyTxQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SendBuyTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendBuyTxQuery>(SendBuyTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sendBuyTx', 'query');
    },
    getListTx(variables: GetListTxQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetListTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetListTxQuery>(GetListTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getListTx', 'query');
    },
    getBidTx(variables: GetBidTxQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBidTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBidTxQuery>(GetBidTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBidTx', 'query');
    },
    getAcceptBidTx(variables: GetAcceptBidTxQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAcceptBidTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAcceptBidTxQuery>(GetAcceptBidTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAcceptBidTx', 'query');
    },
    getCancelBidTx(variables: GetCancelBidTxQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCancelBidTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCancelBidTxQuery>(GetCancelBidTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCancelBidTx', 'query');
    },
    getDelistTx(variables: GetDelistTxQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDelistTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDelistTxQuery>(GetDelistTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDelistTx', 'query');
    },
    getWithdrawEscrowTx(variables: GetWithdrawEscrowTxQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetWithdrawEscrowTxQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetWithdrawEscrowTxQuery>(GetWithdrawEscrowTxDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getWithdrawEscrowTx', 'query');
    },
    getTokenHistory(variables: GetTokenHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTokenHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTokenHistoryQuery>(GetTokenHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTokenHistory', 'query');
    },
    getUserHistory(variables: GetUserHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserHistoryQuery>(GetUserHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserHistory', 'query');
    },
    getProjectHistory(variables: GetProjectHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProjectHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectHistoryQuery>(GetProjectHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProjectHistory', 'query');
    },
    getNonMpaProjectHistory(variables: GetNonMpaProjectHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNonMpaProjectHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNonMpaProjectHistoryQuery>(GetNonMpaProjectHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNonMpaProjectHistory', 'query');
    },
    getNonMpaUserHistory(variables: GetNonMpaUserHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNonMpaUserHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNonMpaUserHistoryQuery>(GetNonMpaUserHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNonMpaUserHistory', 'query');
    },
    getMarketplaceSnapshots(variables?: GetMarketplaceSnapshotsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMarketplaceSnapshotsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMarketplaceSnapshotsQuery>(GetMarketplaceSnapshotsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMarketplaceSnapshots', 'query');
    },
    getUserBids(variables?: GetUserBidsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserBidsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserBidsQuery>(GetUserBidsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserBids', 'query');
    },
    getUserListings(variables?: GetUserListingsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserListingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserListingsQuery>(GetUserListingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserListings', 'query');
    },
    getTokenState(variables?: GetTokenStateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTokenStateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTokenStateQuery>(GetTokenStateDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTokenState', 'query');
    },
    getMarketplaceStatus(variables?: GetMarketplaceStatusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMarketplaceStatusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMarketplaceStatusQuery>(GetMarketplaceStatusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMarketplaceStatus', 'query');
    },
    getProjectStats(variables?: GetProjectStatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProjectStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectStatsQuery>(GetProjectStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProjectStats', 'query');
    },
    getProjectStatHistory(variables: GetProjectStatHistoryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProjectStatHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProjectStatHistoryQuery>(GetProjectStatHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProjectStatHistory', 'query');
    },
    searchProjectByName(variables: SearchProjectByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchProjectByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchProjectByNameQuery>(SearchProjectByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchProjectByName', 'query');
    },
    getUpcomingProjects(variables?: GetUpcomingProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUpcomingProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUpcomingProjectsQuery>(GetUpcomingProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUpcomingProjects', 'query');
    },
    getWalletStats(variables?: GetWalletStatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetWalletStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetWalletStatsQuery>(GetWalletStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getWalletStats', 'query');
    },
    getOverallWalletStats(variables?: GetOverallWalletStatsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOverallWalletStatsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOverallWalletStatsQuery>(GetOverallWalletStatsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOverallWalletStats', 'query');
    },
    getWalletStatsHist(variables: GetWalletStatsHistQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetWalletStatsHistQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetWalletStatsHistQuery>(GetWalletStatsHistDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getWalletStatsHist', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;