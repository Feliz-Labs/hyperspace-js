import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  Category = "CATEGORY",
  Numeric = "NUMERIC",
  Range = "RANGE",
}

export type CancelBidMarketPlaceActionInput = {
  buyer_address: Scalars["String"];
  buyer_referral_address: Scalars["String"];
  marketplace_fee_address: Scalars["String"];
  marketplace_program_id: Scalars["String"];
  signature: Scalars["String"];
  slot: Scalars["Float"];
  token_address: Scalars["String"];
};

export type CancelListingMarketPlaceActionInput = {
  marketplace_fee_address: Scalars["String"];
  marketplace_program_id: Scalars["String"];
  seller_address: Scalars["String"];
  seller_referral_address: Scalars["String"];
  signature: Scalars["String"];
  slot: Scalars["Float"];
  token_address: Scalars["String"];
};

export type CreateBidMarketPlaceActionInput = {
  buyer_address: Scalars["String"];
  buyer_referral_address: Scalars["String"];
  buyer_referral_fee: Scalars["Float"];
  marketplace_fee_address: Scalars["String"];
  marketplace_program_id: Scalars["String"];
  price: Scalars["Float"];
  signature: Scalars["String"];
  slot: Scalars["Float"];
  token_address: Scalars["String"];
};

export type CreateListingMarketPlaceActionInput = {
  marketplace_fee_address: Scalars["String"];
  marketplace_program_id: Scalars["String"];
  price: Scalars["Float"];
  seller_address: Scalars["String"];
  seller_referral_address: Scalars["String"];
  seller_referral_fee: Scalars["Float"];
  signature: Scalars["String"];
  slot: Scalars["Float"];
  token_address: Scalars["String"];
};

export type CreateMarketPlaceActionsInput = {
  amount: Scalars["Float"];
  buyer_address: Scalars["String"];
  buyer_referral_address: Scalars["String"];
  buyer_referral_fee: Scalars["Float"];
  marketplace_fee_address: Scalars["String"];
  marketplace_program_id: Scalars["String"];
  price: Scalars["Float"];
  seller_address: Scalars["String"];
  seller_referral_address: Scalars["String"];
  seller_referral_fee: Scalars["Float"];
  signature: Scalars["String"];
  slot: Scalars["Float"];
  token_address: Scalars["String"];
  type: MarketPlaceActionEnum;
};

export type CreateTransactionMarketPlaceActionInput = {
  buyer_address: Scalars["String"];
  buyer_referral_address: Scalars["String"];
  buyer_referral_fee: Scalars["Float"];
  marketplace_fee_address: Scalars["String"];
  marketplace_program_id: Scalars["String"];
  price: Scalars["Float"];
  seller_address: Scalars["String"];
  seller_referral_address: Scalars["String"];
  seller_referral_fee: Scalars["Float"];
  signature: Scalars["String"];
  slot: Scalars["Float"];
  token_address: Scalars["String"];
};

export type GetMarketPlaceActionsByProjectCondition = {
  by_mpa_types?: InputMaybe<Array<MarketPlaceActionEnum>>;
  exclude_mpa_types?: InputMaybe<Array<MarketPlaceActionEnum>>;
  project?: InputMaybe<ProjectIdWithAttributes>;
  project_id?: InputMaybe<Scalars["String"]>;
};

export type GetMarketPlaceActionsByProjectResponse = {
  __typename?: "GetMarketPlaceActionsByProjectResponse";
  pagination_info: PaginationInfoResponseType;
  project_instances: Array<ProjectInstance>;
};

export type GetMarketPlaceActionsByProjectsCondition = {
  by_mpa_types?: InputMaybe<Array<MarketPlaceActionEnum>>;
  exclude_mpa_types?: InputMaybe<Array<MarketPlaceActionEnum>>;
  projects?: InputMaybe<Array<ProjectIdWithAttributes>>;
};

export type GetMarketPlaceActionsByTokenAddressCondition = {
  action_type?: InputMaybe<MarketPlaceActionEnum>;
  marketplace_ids?: InputMaybe<Array<MarketPlaceIdentifier>>;
  token_addresses: Array<Scalars["String"]>;
};

export type GetMarketPlaceActionsByUserCondition = {
  buyer_address?: InputMaybe<Scalars["String"]>;
  by_mpa_types?: InputMaybe<Array<MarketPlaceActionEnum>>;
  seller_address?: InputMaybe<Scalars["String"]>;
};

export type GetMarketPlaceActionsByUserResponse = {
  __typename?: "GetMarketPlaceActionsByUserResponse";
  pagination_info: PaginationInfoResponseType;
  project_instances: Array<ProjectInstance>;
};

export type GetMarketPlaceActionsOutput = {
  __typename?: "GetMarketPlaceActionsOutput";
  mpas: Array<MarketPlaceActions>;
  token_address: Scalars["String"];
};

export type GetMarketPlaceActionsResponse = {
  __typename?: "GetMarketPlaceActionsResponse";
  mps: Array<MarketPlaceSnapshot>;
  pagination_info: PaginationInfoResponseType;
};

export type GetMarketPlaceSnapshotCondition = {
  has_metadata?: InputMaybe<Scalars["Boolean"]>;
  include_attribute_details?: InputMaybe<Scalars["Boolean"]>;
  include_floors?: InputMaybe<Scalars["Boolean"]>;
  listing_type?: InputMaybe<MarketPlaceActionEnum>;
  price_filter?: InputMaybe<MarketPlacePricingFilterValues>;
  project_ids?: InputMaybe<Array<ProjectIdWithAttributes>>;
  token_addresses?: InputMaybe<Array<Scalars["String"]>>;
};

export type GetMarketPlaceSnapshotsResponse = {
  __typename?: "GetMarketPlaceSnapshotsResponse";
  market_place_snapshots?: Maybe<Array<MarketPlaceSnapshotResponse>>;
  pagination_info: PaginationInfoResponseType;
};

export type GetMarketPlaceStateCondition = {
  action_type?: InputMaybe<MarketPlaceActionEnum>;
  buyer_address?: InputMaybe<Scalars["String"]>;
  marketplace_ids?: InputMaybe<Array<MarketPlaceIdentifier>>;
  seller_address?: InputMaybe<Scalars["String"]>;
  token_addresses?: InputMaybe<Array<Scalars["String"]>>;
};

export type GetMarketPlaceStateOutput = {
  __typename?: "GetMarketPlaceStateOutput";
  market_place_states: Array<ProjectInstance>;
  token_address: Scalars["String"];
};

export type GetMarketPlaceStateResponse = {
  __typename?: "GetMarketPlaceStateResponse";
  market_place_states: Array<MarketPlaceSnapshot>;
  token_address: Scalars["String"];
};

export type GetMarketPlaceStatusResponse = {
  __typename?: "GetMarketPlaceStatusResponse";
  mps: Array<MarketPlaceStatus>;
};

export type GetOverallProjectStatOutput = {
  __typename?: "GetOverallProjectStatOutput";
  market_cap?: Maybe<Scalars["Float"]>;
  previous_market_cap_change_in_sol?: Maybe<Scalars["Float"]>;
  previous_volume_change_in_sol?: Maybe<Scalars["Float"]>;
  volume?: Maybe<Scalars["Float"]>;
};

export type GetProjectStatByNameCondition = {
  display_name: Scalars["String"];
  tag?: InputMaybe<Scalars["String"]>;
};

export type GetProjectStatCount = {
  __typename?: "GetProjectStatCount";
  num_of_projects: Scalars["Float"];
};

export type GetProjectStatsCondition = {
  is_verified?: InputMaybe<Scalars["Boolean"]>;
  project_ids?: InputMaybe<Array<Scalars["String"]>>;
  tags?: InputMaybe<Array<Scalars["String"]>>;
};

export type GetProjectStatsOutput = {
  __typename?: "GetProjectStatsOutput";
  pagination_info: PaginationInfoResponseType;
  project_stats?: Maybe<Array<ProjectStat>>;
};

export type MpaPaginationConfig = {
  page_number?: InputMaybe<Scalars["Float"]>;
  page_size?: InputMaybe<Scalars["Float"]>;
};

export enum MarketPlaceActionEnum {
  Bid = "BID",
  Cancelbid = "CANCELBID",
  Delisting = "DELISTING",
  Failed = "FAILED",
  Fractionalized = "FRACTIONALIZED",
  Listing = "LISTING",
  Mint = "MINT",
  Other = "OTHER",
  Rawbid = "RAWBID",
  Rawcancelbid = "RAWCANCELBID",
  Redeemed = "REDEEMED",
  Transaction = "TRANSACTION",
  Transfer = "TRANSFER",
  Unknown = "UNKNOWN",
  Updatebid = "UPDATEBID",
  Updatelisting = "UPDATELISTING",
  Upgrade = "UPGRADE",
}

export type MarketPlaceActionResponse = {
  __typename?: "MarketPlaceActionResponse";
  amount?: Maybe<Scalars["Float"]>;
  block_timestamp?: Maybe<Scalars["Float"]>;
  broker_referral_address?: Maybe<Scalars["String"]>;
  broker_referral_fee?: Maybe<Scalars["Float"]>;
  escrow_address?: Maybe<Scalars["String"]>;
  fee?: Maybe<Scalars["Float"]>;
  marketplace_fee_address?: Maybe<Scalars["String"]>;
  marketplace_instance_id?: Maybe<Scalars["String"]>;
  marketplace_program_id?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Scalars["JSON"]>;
  price?: Maybe<Scalars["Float"]>;
  signature?: Maybe<Scalars["String"]>;
  type?: Maybe<MarketPlaceActionEnum>;
  user_address?: Maybe<Scalars["String"]>;
};

export type MarketPlaceActions = {
  __typename?: "MarketPlaceActions";
  amount?: Maybe<Scalars["Float"]>;
  block_timestamp?: Maybe<Scalars["Float"]>;
  buyer_address?: Maybe<Scalars["String"]>;
  buyer_referral_address?: Maybe<Scalars["String"]>;
  buyer_referral_fee?: Maybe<Scalars["Float"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  escrow_address?: Maybe<Scalars["String"]>;
  fee?: Maybe<Scalars["Float"]>;
  marketplace_fee_address?: Maybe<Scalars["String"]>;
  marketplace_instance_id?: Maybe<Scalars["String"]>;
  marketplace_program_id?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Scalars["JSON"]>;
  price?: Maybe<Scalars["Float"]>;
  seller_address?: Maybe<Scalars["String"]>;
  seller_referral_address?: Maybe<Scalars["String"]>;
  seller_referral_fee?: Maybe<Scalars["Float"]>;
  signature?: Maybe<Scalars["String"]>;
  token_address?: Maybe<Scalars["String"]>;
  type?: Maybe<MarketPlaceActionEnum>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type MarketPlaceIdentifier = {
  marketplace_instance_id?: InputMaybe<Scalars["String"]>;
  marketplace_program_id: Scalars["String"];
};

export type MarketPlacePricingFilterValues = {
  max?: InputMaybe<Scalars["Float"]>;
  min?: InputMaybe<Scalars["Float"]>;
};

export type MarketPlaceSnapshot = {
  __typename?: "MarketPlaceSnapshot";
  attributes?: Maybe<Scalars["JSON"]>;
  created_at: Scalars["DateTime"];
  floor_price?: Maybe<Scalars["Float"]>;
  floor_price_1day_change?: Maybe<Scalars["Float"]>;
  full_img?: Maybe<Scalars["String"]>;
  highest_bid_amount?: Maybe<Scalars["Float"]>;
  highest_bid_block_timestamp?: Maybe<Scalars["Float"]>;
  highest_bid_buyer_address?: Maybe<Scalars["String"]>;
  highest_bid_buyer_referral_address?: Maybe<Scalars["String"]>;
  highest_bid_buyer_referral_fee?: Maybe<Scalars["Float"]>;
  highest_bid_escrow_address?: Maybe<Scalars["String"]>;
  highest_bid_fee?: Maybe<Scalars["Float"]>;
  highest_bid_market_place_action?: Maybe<MarketPlaceActionEnum>;
  highest_bid_marketplace_fee_address?: Maybe<Scalars["String"]>;
  highest_bid_marketplace_instance_id?: Maybe<Scalars["String"]>;
  highest_bid_marketplace_program_id?: Maybe<Scalars["String"]>;
  highest_bid_metadata?: Maybe<Scalars["JSON"]>;
  highest_bid_price?: Maybe<Scalars["Float"]>;
  highest_bid_seller_address?: Maybe<Scalars["String"]>;
  highest_bid_seller_referral_address?: Maybe<Scalars["String"]>;
  highest_bid_seller_referral_fee?: Maybe<Scalars["Float"]>;
  highest_bid_signature?: Maybe<Scalars["String"]>;
  is_project_verified?: Maybe<Scalars["Boolean"]>;
  lowest_listing_amount?: Maybe<Scalars["Float"]>;
  lowest_listing_block_timestamp?: Maybe<Scalars["Float"]>;
  lowest_listing_escrow_address?: Maybe<Scalars["String"]>;
  lowest_listing_fee?: Maybe<Scalars["Float"]>;
  lowest_listing_market_place_action?: Maybe<MarketPlaceActionEnum>;
  lowest_listing_marketplace_fee_address?: Maybe<Scalars["String"]>;
  lowest_listing_marketplace_instance_id?: Maybe<Scalars["String"]>;
  lowest_listing_marketplace_program_id?: Maybe<Scalars["String"]>;
  lowest_listing_metadata?: Maybe<Scalars["JSON"]>;
  lowest_listing_price?: Maybe<Scalars["Float"]>;
  lowest_listing_seller_address?: Maybe<Scalars["String"]>;
  lowest_listing_seller_referral_address?: Maybe<Scalars["String"]>;
  lowest_listing_seller_referral_fee?: Maybe<Scalars["Float"]>;
  lowest_listing_signature?: Maybe<Scalars["String"]>;
  market_place_state?: Maybe<MarketPlaceState>;
  meta_data_img?: Maybe<Scalars["String"]>;
  meta_data_uri?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  owner?: Maybe<Scalars["String"]>;
  project_id: Scalars["String"];
  project_image?: Maybe<Scalars["String"]>;
  project_name?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["Float"]>;
  rank_est?: Maybe<Scalars["Float"]>;
  rarity?: Maybe<Scalars["Float"]>;
  rarity_est?: Maybe<Scalars["Float"]>;
  small_img?: Maybe<Scalars["String"]>;
  supply?: Maybe<Scalars["Float"]>;
  token_address: Scalars["String"];
  updated_at: Scalars["DateTime"];
  valuation_date?: Maybe<Scalars["DateTime"]>;
  valuation_price?: Maybe<Scalars["Float"]>;
};

export type MarketPlaceSnapshotResponse = {
  __typename?: "MarketPlaceSnapshotResponse";
  attributes?: Maybe<Scalars["JSON"]>;
  floor_price?: Maybe<Scalars["Float"]>;
  floor_price_1day_change?: Maybe<Scalars["Float"]>;
  full_img?: Maybe<Scalars["String"]>;
  highest_bid_mpa?: Maybe<MarketPlaceActionResponse>;
  is_project_verified?: Maybe<Scalars["Boolean"]>;
  lowest_listing_mpa?: Maybe<MarketPlaceActionResponse>;
  meta_data_img?: Maybe<Scalars["String"]>;
  meta_data_uri?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  owner?: Maybe<Scalars["String"]>;
  project_attributes?: Maybe<Array<ProjectAttribute>>;
  project_id: Scalars["String"];
  project_image?: Maybe<Scalars["String"]>;
  project_name?: Maybe<Scalars["String"]>;
  project_supply?: Maybe<Scalars["Float"]>;
  rank?: Maybe<Scalars["Float"]>;
  rank_est?: Maybe<Scalars["Float"]>;
  rarity?: Maybe<Scalars["Float"]>;
  rarity_est?: Maybe<Scalars["Float"]>;
  small_img?: Maybe<Scalars["String"]>;
  supply?: Maybe<Scalars["Float"]>;
  token_address: Scalars["String"];
  valuation_date?: Maybe<Scalars["DateTime"]>;
  valuation_price?: Maybe<Scalars["Float"]>;
};

export type MarketPlaceState = {
  __typename?: "MarketPlaceState";
  amount?: Maybe<Scalars["Float"]>;
  block_timestamp?: Maybe<Scalars["Float"]>;
  buyer_address?: Maybe<Scalars["String"]>;
  buyer_referral_address?: Maybe<Scalars["String"]>;
  buyer_referral_fee?: Maybe<Scalars["Float"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  escrow_address?: Maybe<Scalars["String"]>;
  fee?: Maybe<Scalars["Float"]>;
  marketplace_fee_address?: Maybe<Scalars["String"]>;
  marketplace_instance_id?: Maybe<Scalars["String"]>;
  marketplace_program_id?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Scalars["JSON"]>;
  price?: Maybe<Scalars["Float"]>;
  seller_address?: Maybe<Scalars["String"]>;
  seller_referral_address?: Maybe<Scalars["String"]>;
  seller_referral_fee?: Maybe<Scalars["Float"]>;
  signature?: Maybe<Scalars["String"]>;
  token_address?: Maybe<Scalars["String"]>;
  type?: Maybe<MarketPlaceActionEnum>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type MarketPlaceStatus = {
  __typename?: "MarketPlaceStatus";
  display_name: Scalars["String"];
  id: Scalars["String"];
  is_bidding_enabled: Scalars["Boolean"];
  is_buying_enabled: Scalars["Boolean"];
  is_delisting_enabled: Scalars["Boolean"];
  is_listing_enabled: Scalars["Boolean"];
  item_path?: Maybe<Scalars["String"]>;
  marketplace_instance_id?: Maybe<Scalars["String"]>;
  marketplace_program_id: Scalars["String"];
  website?: Maybe<Scalars["String"]>;
};

export enum MarketPlaceTxErrorEnum {
  BidNotFound = "BID_NOT_FOUND",
  BuyerHasInsufficientFunds = "BUYER_HAS_INSUFFICIENT_FUNDS",
  InternalServerError = "INTERNAL_SERVER_ERROR",
  InvalidInputError = "INVALID_INPUT_ERROR",
  InvalidTokenAddress = "INVALID_TOKEN_ADDRESS",
  InvalidUserBalance = "INVALID_USER_BALANCE",
  ItemListingNotFound = "ITEM_LISTING_NOT_FOUND",
  ItemNoLongerAvailable = "ITEM_NO_LONGER_AVAILABLE",
  MarketplaceBuyingIsDisabled = "MARKETPLACE_BUYING_IS_DISABLED",
  MarketplaceOperationIsDisabled = "MARKETPLACE_OPERATION_IS_DISABLED",
  PriceHasUpdatedToBeHigher = "PRICE_HAS_UPDATED_TO_BE_HIGHER",
  PriceHasUpdatedToBeLower = "PRICE_HAS_UPDATED_TO_BE_LOWER",
  RpcError = "RPC_ERROR",
  SellerOwnerMismatch = "SELLER_OWNER_MISMATCH",
}

export type MarketPlaceTxOutput = {
  __typename?: "MarketPlaceTxOutput";
  data?: Maybe<Array<Scalars["Float"]>>;
  error?: Maybe<MarketPlaceTxOutputError>;
};

export type MarketPlaceTxOutputError = {
  __typename?: "MarketPlaceTxOutputError";
  error_type: MarketPlaceTxErrorEnum;
  message?: Maybe<Scalars["String"]>;
  metadata?: Maybe<Scalars["JSON"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  cancelBidMarketPlaceAction: MarketPlaceActions;
  cancelListingMarketPlaceAction: MarketPlaceActions;
  createBidMarketPlaceAction: MarketPlaceActions;
  createListingMarketPlaceAction: MarketPlaceActions;
  createMarketPlaceAction: MarketPlaceActions;
  createTransactionMarketPlaceAction: MarketPlaceActions;
  updateBidMarketPlaceAction: MarketPlaceActions;
  updateListingMarketPlaceAction: MarketPlaceActions;
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

export type MutationUpdateBidMarketPlaceActionArgs = {
  data: UpdateBidMarketPlaceActionInput;
};

export type MutationUpdateListingMarketPlaceActionArgs = {
  data: UpdateListingMarketPlaceActionInput;
};

export type OrderConfig = {
  field_name: Scalars["String"];
  sort_order: SortOrderEnum;
};

export type PaginationConfig = {
  page_number?: InputMaybe<Scalars["Float"]>;
  page_size?: InputMaybe<Scalars["Float"]>;
};

export type PaginationInfoResponseType = {
  __typename?: "PaginationInfoResponseType";
  current_page_number: Scalars["Float"];
  current_page_size: Scalars["Float"];
  has_next_page: Scalars["Boolean"];
  total_page_number: Scalars["Float"];
};

export type Project = {
  __typename?: "Project";
  candy_machine_ids?: Maybe<Array<Scalars["String"]>>;
  created_at: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  discord?: Maybe<Scalars["String"]>;
  display_name: Scalars["String"];
  img_url?: Maybe<Scalars["String"]>;
  is_minting?: Maybe<Scalars["Boolean"]>;
  is_verified?: Maybe<Scalars["Boolean"]>;
  launch_date?: Maybe<Scalars["DateTime"]>;
  launch_timestamp?: Maybe<Scalars["String"]>;
  project_attributes?: Maybe<Array<ProjectAttribute>>;
  project_id: Scalars["String"];
  protocol: ProtocolEnum;
  requires_categorization?: Maybe<Scalars["Boolean"]>;
  supply?: Maybe<Scalars["Float"]>;
  tags?: Maybe<Array<ProjectTag>>;
  twitter?: Maybe<Scalars["String"]>;
  updated_at: Scalars["DateTime"];
  website?: Maybe<Scalars["String"]>;
};

export type ProjectAttribute = {
  __typename?: "ProjectAttribute";
  counts?: Maybe<Scalars["JSON"]>;
  floor_prices?: Maybe<Scalars["JSON"]>;
  name: Scalars["String"];
  type: AttributeTypeEnum;
  values: Array<Scalars["String"]>;
};

export type ProjectIdWithAttributes = {
  attributes?: InputMaybe<Array<Scalars["JSON"]>>;
  project_id: Scalars["String"];
};

export type ProjectInstance = {
  __typename?: "ProjectInstance";
  attributes?: Maybe<Scalars["JSON"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  floor_price?: Maybe<Scalars["Float"]>;
  full_img?: Maybe<Scalars["String"]>;
  is_project_verified?: Maybe<Scalars["Boolean"]>;
  latest_action?: Maybe<MarketPlaceActions>;
  latest_valuation?: Maybe<Valuation>;
  meta_data_img?: Maybe<Scalars["String"]>;
  meta_data_uri?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  owner?: Maybe<Scalars["String"]>;
  project_id: Scalars["String"];
  project_image?: Maybe<Scalars["String"]>;
  project_name?: Maybe<Scalars["String"]>;
  rank?: Maybe<Scalars["Float"]>;
  rank_est?: Maybe<Scalars["Float"]>;
  rarity?: Maybe<Scalars["Float"]>;
  rarity_est?: Maybe<Scalars["Float"]>;
  small_img?: Maybe<Scalars["String"]>;
  supply?: Maybe<Scalars["Float"]>;
  token_address: Scalars["String"];
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type ProjectStat = {
  __typename?: "ProjectStat";
  average_price?: Maybe<Scalars["Float"]>;
  average_price_1day_change?: Maybe<Scalars["Float"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  discord_members?: Maybe<Scalars["Float"]>;
  floor_price?: Maybe<Scalars["Float"]>;
  floor_price_1day_change?: Maybe<Scalars["Float"]>;
  market_cap?: Maybe<Scalars["Float"]>;
  max_price?: Maybe<Scalars["Float"]>;
  num_of_token_holders?: Maybe<Scalars["Float"]>;
  num_of_token_listed?: Maybe<Scalars["Float"]>;
  percentage_of_token_listed?: Maybe<Scalars["Float"]>;
  project?: Maybe<Project>;
  project_id: Scalars["String"];
  rank?: Maybe<Scalars["Float"]>;
  supply?: Maybe<Scalars["Float"]>;
  twitter_followers?: Maybe<Scalars["Float"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  volume_1day?: Maybe<Scalars["Float"]>;
  volume_1day_change?: Maybe<Scalars["Float"]>;
  volume_1hr?: Maybe<Scalars["Float"]>;
  volume_7day?: Maybe<Scalars["Float"]>;
};

export type ProjectTag = {
  __typename?: "ProjectTag";
  created_at: Scalars["DateTime"];
  project_id: Scalars["String"];
  tag: Scalars["String"];
  updated_at: Scalars["DateTime"];
};

export enum ProtocolEnum {
  Cardano = "CARDANO",
  Ethereum = "ETHEREUM",
  Solana = "SOLANA",
}

export type Query = {
  __typename?: "Query";
  acceptBidTx: MarketPlaceTxOutput;
  createBidTx: MarketPlaceTxOutput;
  createBuyTx: MarketPlaceTxOutput;
  createCancelBidTx: MarketPlaceTxOutput;
  createDelistTx: MarketPlaceTxOutput;
  createListTx: MarketPlaceTxOutput;
  createWithdrawEscrowTx: MarketPlaceTxOutput;
  getCurrentBidsForUser: Array<ProjectInstance>;
  getCurrentListingsForUser: Array<ProjectInstance>;
  getMarketPlaceActionsByProject: GetMarketPlaceActionsByProjectResponse;
  getMarketPlaceActionsByToken: Array<GetMarketPlaceActionsOutput>;
  getMarketPlaceActionsByUser: GetMarketPlaceActionsByUserResponse;
  getMarketPlaceSnapshots: GetMarketPlaceSnapshotsResponse;
  getMarketPlaceState: Array<GetMarketPlaceStateOutput>;
  getMarketPlaceStatus: GetMarketPlaceStatusResponse;
  getOverallProjectStats: GetOverallProjectStatOutput;
  getProjectHistory: GetMarketPlaceActionsResponse;
  getProjectStatByName: GetProjectStatsOutput;
  getProjectStatCount: GetProjectStatCount;
  getProjectStats: GetProjectStatsOutput;
  getTokenState: Array<GetMarketPlaceStateResponse>;
  getUserBids: Array<MarketPlaceSnapshot>;
  getUserHistory: GetMarketPlaceActionsResponse;
  getUserListings: Array<MarketPlaceSnapshot>;
};

export type QueryAcceptBidTxArgs = {
  price: Scalars["Float"];
  seller_address: Scalars["String"];
  seller_broker: Scalars["String"];
  seller_broker_basis_points?: InputMaybe<Scalars["Float"]>;
  token_address: Scalars["String"];
};

export type QueryCreateBidTxArgs = {
  buyer_address: Scalars["String"];
  buyer_broker: Scalars["String"];
  buyer_broker_basis_points?: InputMaybe<Scalars["Float"]>;
  price: Scalars["Float"];
  token_address: Scalars["String"];
};

export type QueryCreateBuyTxArgs = {
  buyer_address: Scalars["String"];
  buyer_broker: Scalars["String"];
  buyer_broker_basis_points?: InputMaybe<Scalars["Float"]>;
  price: Scalars["Float"];
  token_address: Scalars["String"];
  unverified?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryCreateCancelBidTxArgs = {
  buyer_address: Scalars["String"];
  token_address: Scalars["String"];
};

export type QueryCreateDelistTxArgs = {
  seller_address: Scalars["String"];
  token_address: Scalars["String"];
};

export type QueryCreateListTxArgs = {
  price: Scalars["Float"];
  seller_address: Scalars["String"];
  seller_broker: Scalars["String"];
  seller_broker_basis_points?: InputMaybe<Scalars["Float"]>;
  token_address: Scalars["String"];
};

export type QueryCreateWithdrawEscrowTxArgs = {
  amount: Scalars["Float"];
  user_address: Scalars["String"];
};

export type QueryGetCurrentBidsForUserArgs = {
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};

export type QueryGetCurrentListingsForUserArgs = {
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};

export type QueryGetMarketPlaceActionsByProjectArgs = {
  condition: GetMarketPlaceActionsByProjectCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<MpaPaginationConfig>;
};

export type QueryGetMarketPlaceActionsByTokenArgs = {
  condition: GetMarketPlaceActionsByTokenAddressCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};

export type QueryGetMarketPlaceActionsByUserArgs = {
  condition: GetMarketPlaceActionsByUserCondition;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<MpaPaginationConfig>;
};

export type QueryGetMarketPlaceSnapshotsArgs = {
  condition?: InputMaybe<GetMarketPlaceSnapshotCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};

export type QueryGetMarketPlaceStateArgs = {
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  order_by?: InputMaybe<Array<OrderConfig>>;
  pagination_info?: InputMaybe<PaginationConfig>;
};

export type QueryGetOverallProjectStatsArgs = {
  tag?: InputMaybe<Scalars["String"]>;
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

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type UpdateBidMarketPlaceActionInput = {
  buyer_address: Scalars["String"];
  buyer_referral_address: Scalars["String"];
  buyer_referral_fee: Scalars["Float"];
  marketplace_fee_address: Scalars["String"];
  marketplace_program_id: Scalars["String"];
  price: Scalars["Float"];
  signature: Scalars["String"];
  slot: Scalars["Float"];
  token_address: Scalars["String"];
};

export type UpdateListingMarketPlaceActionInput = {
  marketplace_fee_address: Scalars["String"];
  marketplace_program_id: Scalars["String"];
  price: Scalars["Float"];
  seller_address: Scalars["String"];
  seller_referral_address: Scalars["String"];
  seller_referral_fee: Scalars["Float"];
  signature: Scalars["String"];
  slot: Scalars["Float"];
  token_address: Scalars["String"];
};

export type Valuation = {
  __typename?: "Valuation";
  price: Scalars["Float"];
  project_id: Scalars["String"];
  token_address: Scalars["String"];
  valuation_date: Scalars["DateTime"];
};

export type GetBuyTxQueryVariables = Exact<{
  buyerAddress: Scalars["String"];
  price: Scalars["Float"];
  tokenAddress: Scalars["String"];
  buyerBroker: Scalars["String"];
  buyerBrokerBasisPoints?: InputMaybe<Scalars["Float"]>;
  unverified?: InputMaybe<Scalars["Boolean"]>;
}>;

export type GetBuyTxQuery = {
  __typename?: "Query";
  createBuyTx: {
    __typename?: "MarketPlaceTxOutput";
    data?: Array<number> | null;
    error?: {
      __typename?: "MarketPlaceTxOutputError";
      error_type: MarketPlaceTxErrorEnum;
      message?: string | null;
      metadata?: any | null;
    } | null;
  };
};

export type GetListTxQueryVariables = Exact<{
  sellerAddress: Scalars["String"];
  price: Scalars["Float"];
  tokenAddress: Scalars["String"];
  sellerBroker: Scalars["String"];
  sellerBrokerBasisPoints?: InputMaybe<Scalars["Float"]>;
}>;

export type GetListTxQuery = {
  __typename?: "Query";
  createListTx: {
    __typename?: "MarketPlaceTxOutput";
    data?: Array<number> | null;
    error?: {
      __typename?: "MarketPlaceTxOutputError";
      error_type: MarketPlaceTxErrorEnum;
      message?: string | null;
      metadata?: any | null;
    } | null;
  };
};

export type GetBidTxQueryVariables = Exact<{
  buyerAddress: Scalars["String"];
  price: Scalars["Float"];
  tokenAddress: Scalars["String"];
  buyerBroker: Scalars["String"];
  buyerBrokerBasisPoints?: InputMaybe<Scalars["Float"]>;
}>;

export type GetBidTxQuery = {
  __typename?: "Query";
  createBidTx: {
    __typename?: "MarketPlaceTxOutput";
    data?: Array<number> | null;
    error?: {
      __typename?: "MarketPlaceTxOutputError";
      error_type: MarketPlaceTxErrorEnum;
      message?: string | null;
      metadata?: any | null;
    } | null;
  };
};

export type GetAcceptBidTxQueryVariables = Exact<{
  sellerAddress: Scalars["String"];
  price: Scalars["Float"];
  tokenAddress: Scalars["String"];
  sellerBroker: Scalars["String"];
  sellerBrokerBasisPoints?: InputMaybe<Scalars["Float"]>;
}>;

export type GetAcceptBidTxQuery = {
  __typename?: "Query";
  acceptBidTx: {
    __typename?: "MarketPlaceTxOutput";
    data?: Array<number> | null;
    error?: {
      __typename?: "MarketPlaceTxOutputError";
      error_type: MarketPlaceTxErrorEnum;
      message?: string | null;
      metadata?: any | null;
    } | null;
  };
};

export type GetCancelBidTxQueryVariables = Exact<{
  buyerAddress: Scalars["String"];
  tokenAddress: Scalars["String"];
}>;

export type GetCancelBidTxQuery = {
  __typename?: "Query";
  createCancelBidTx: {
    __typename?: "MarketPlaceTxOutput";
    data?: Array<number> | null;
    error?: {
      __typename?: "MarketPlaceTxOutputError";
      error_type: MarketPlaceTxErrorEnum;
      message?: string | null;
      metadata?: any | null;
    } | null;
  };
};

export type GetDelistTxQueryVariables = Exact<{
  sellerAddress: Scalars["String"];
  tokenAddress: Scalars["String"];
}>;

export type GetDelistTxQuery = {
  __typename?: "Query";
  createDelistTx: {
    __typename?: "MarketPlaceTxOutput";
    data?: Array<number> | null;
    error?: {
      __typename?: "MarketPlaceTxOutputError";
      error_type: MarketPlaceTxErrorEnum;
      message?: string | null;
      metadata?: any | null;
    } | null;
  };
};

export type GetWithdrawEscrowTxQueryVariables = Exact<{
  userAddress: Scalars["String"];
  amount: Scalars["Float"];
}>;

export type GetWithdrawEscrowTxQuery = {
  __typename?: "Query";
  createWithdrawEscrowTx: {
    __typename?: "MarketPlaceTxOutput";
    data?: Array<number> | null;
    error?: {
      __typename?: "MarketPlaceTxOutputError";
      error_type: MarketPlaceTxErrorEnum;
      message?: string | null;
      metadata?: any | null;
    } | null;
  };
};

export type GetTokenHistoryQueryVariables = Exact<{
  condition: GetMarketPlaceActionsByTokenAddressCondition;
  paginationInfo?: InputMaybe<PaginationConfig>;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;

export type GetTokenHistoryQuery = {
  __typename?: "Query";
  getMarketPlaceActionsByToken: Array<{
    __typename?: "GetMarketPlaceActionsOutput";
    token_address: string;
    mpas: Array<{
      __typename?: "MarketPlaceActions";
      block_timestamp?: number | null;
      escrow_address?: string | null;
      signature?: string | null;
      seller_address?: string | null;
      buyer_address?: string | null;
      type?: MarketPlaceActionEnum | null;
      marketplace_program_id?: string | null;
      marketplace_instance_id?: string | null;
      fee?: number | null;
      amount?: number | null;
      seller_referral_fee?: number | null;
      seller_referral_address?: string | null;
      buyer_referral_address?: string | null;
      buyer_referral_fee?: number | null;
      metadata?: any | null;
    }>;
  }>;
};

export type GetUserHistoryQueryVariables = Exact<{
  condition: GetMarketPlaceActionsByUserCondition;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<MpaPaginationConfig>;
}>;

export type GetUserHistoryQuery = {
  __typename?: "Query";
  getUserHistory: {
    __typename?: "GetMarketPlaceActionsResponse";
    mps: Array<{
      __typename?: "MarketPlaceSnapshot";
      project_name?: string | null;
      name?: string | null;
      token_address: string;
      meta_data_img?: string | null;
      full_img?: string | null;
      is_project_verified?: boolean | null;
      market_place_state?: {
        __typename?: "MarketPlaceState";
        block_timestamp?: number | null;
        escrow_address?: string | null;
        signature?: string | null;
        seller_address?: string | null;
        buyer_address?: string | null;
        type?: MarketPlaceActionEnum | null;
        marketplace_program_id?: string | null;
        marketplace_instance_id?: string | null;
        fee?: number | null;
        amount?: number | null;
        seller_referral_fee?: number | null;
        seller_referral_address?: string | null;
        buyer_referral_address?: string | null;
        buyer_referral_fee?: number | null;
        metadata?: any | null;
      } | null;
    }>;
    pagination_info: {
      __typename?: "PaginationInfoResponseType";
      current_page_number: number;
      current_page_size: number;
      has_next_page: boolean;
      total_page_number: number;
    };
  };
};

export type GetProjectHistoryQueryVariables = Exact<{
  condition: GetMarketPlaceActionsByProjectsCondition;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<MpaPaginationConfig>;
}>;

export type GetProjectHistoryQuery = {
  __typename?: "Query";
  getProjectHistory: {
    __typename?: "GetMarketPlaceActionsResponse";
    mps: Array<{
      __typename?: "MarketPlaceSnapshot";
      name?: string | null;
      token_address: string;
      meta_data_img?: string | null;
      full_img?: string | null;
      rank_est?: number | null;
      market_place_state?: {
        __typename?: "MarketPlaceState";
        block_timestamp?: number | null;
        escrow_address?: string | null;
        signature?: string | null;
        seller_address?: string | null;
        buyer_address?: string | null;
        type?: MarketPlaceActionEnum | null;
        marketplace_program_id?: string | null;
        marketplace_instance_id?: string | null;
        fee?: number | null;
        amount?: number | null;
        seller_referral_fee?: number | null;
        seller_referral_address?: string | null;
        buyer_referral_address?: string | null;
        buyer_referral_fee?: number | null;
        metadata?: any | null;
      } | null;
    }>;
    pagination_info: {
      __typename?: "PaginationInfoResponseType";
      current_page_number: number;
      current_page_size: number;
      has_next_page: boolean;
      total_page_number: number;
    };
  };
};

export type GetMarketplaceSnapshotsQueryVariables = Exact<{
  condition?: InputMaybe<GetMarketPlaceSnapshotCondition>;
  pagination_info?: InputMaybe<PaginationConfig>;
  order_by?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;

export type GetMarketplaceSnapshotsQuery = {
  __typename?: "Query";
  getMarketPlaceSnapshots: {
    __typename?: "GetMarketPlaceSnapshotsResponse";
    market_place_snapshots?: Array<{
      __typename?: "MarketPlaceSnapshotResponse";
      token_address: string;
      project_id: string;
      name?: string | null;
      rarity_est?: number | null;
      rank_est?: number | null;
      supply?: number | null;
      full_img?: string | null;
      meta_data_img?: string | null;
      meta_data_uri?: string | null;
      attributes?: any | null;
      floor_price?: number | null;
      project_name?: string | null;
      project_image?: string | null;
      is_project_verified?: boolean | null;
      project_attributes?: Array<{
        __typename?: "ProjectAttribute";
        name: string;
        counts?: any | null;
        type: AttributeTypeEnum;
        values: Array<string>;
      }> | null;
      lowest_listing_mpa?: {
        __typename?: "MarketPlaceActionResponse";
        user_address?: string | null;
        price?: number | null;
        marketplace_program_id?: string | null;
        type?: MarketPlaceActionEnum | null;
        signature?: string | null;
        amount?: number | null;
        broker_referral_address?: string | null;
        block_timestamp?: number | null;
        broker_referral_fee?: number | null;
        escrow_address?: string | null;
        fee?: number | null;
        marketplace_fee_address?: string | null;
        marketplace_instance_id?: string | null;
        metadata?: any | null;
      } | null;
      highest_bid_mpa?: {
        __typename?: "MarketPlaceActionResponse";
        marketplace_fee_address?: string | null;
        fee?: number | null;
        escrow_address?: string | null;
        broker_referral_fee?: number | null;
        broker_referral_address?: string | null;
        block_timestamp?: number | null;
        signature?: string | null;
        amount?: number | null;
        type?: MarketPlaceActionEnum | null;
        marketplace_program_id?: string | null;
        marketplace_instance_id?: string | null;
        price?: number | null;
        user_address?: string | null;
        metadata?: any | null;
      } | null;
    }> | null;
    pagination_info: {
      __typename?: "PaginationInfoResponseType";
      current_page_number: number;
      current_page_size: number;
      has_next_page: boolean;
      total_page_number: number;
    };
  };
};

export type GetUserBidsQueryVariables = Exact<{
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  order_by?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;

export type GetUserBidsQuery = {
  __typename?: "Query";
  getUserBids: Array<{
    __typename?: "MarketPlaceSnapshot";
    name?: string | null;
    token_address: string;
    project_name?: string | null;
    project_id: string;
    full_img?: string | null;
    meta_data_img?: string | null;
    floor_price?: number | null;
    market_place_state?: {
      __typename?: "MarketPlaceState";
      block_timestamp?: number | null;
      escrow_address?: string | null;
      signature?: string | null;
      seller_address?: string | null;
      buyer_address?: string | null;
      type?: MarketPlaceActionEnum | null;
      marketplace_program_id?: string | null;
      marketplace_instance_id?: string | null;
      fee?: number | null;
      amount?: number | null;
      seller_referral_fee?: number | null;
      seller_referral_address?: string | null;
      buyer_referral_address?: string | null;
      buyer_referral_fee?: number | null;
      metadata?: any | null;
    } | null;
  }>;
};

export type GetUserListingsQueryVariables = Exact<{
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;

export type GetUserListingsQuery = {
  __typename?: "Query";
  getUserListings: Array<{
    __typename?: "MarketPlaceSnapshot";
    token_address: string;
    name?: string | null;
    full_img?: string | null;
    meta_data_img?: string | null;
    project_name?: string | null;
    project_id: string;
    rank_est?: number | null;
    market_place_state?: {
      __typename?: "MarketPlaceState";
      block_timestamp?: number | null;
      escrow_address?: string | null;
      signature?: string | null;
      seller_address?: string | null;
      buyer_address?: string | null;
      type?: MarketPlaceActionEnum | null;
      marketplace_program_id?: string | null;
      marketplace_instance_id?: string | null;
      fee?: number | null;
      amount?: number | null;
      seller_referral_fee?: number | null;
      seller_referral_address?: string | null;
      buyer_referral_address?: string | null;
      buyer_referral_fee?: number | null;
      metadata?: any | null;
    } | null;
  }>;
};

export type GetTokenStateQueryVariables = Exact<{
  condition?: InputMaybe<GetMarketPlaceStateCondition>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
}>;

export type GetTokenStateQuery = {
  __typename?: "Query";
  getTokenState: Array<{
    __typename?: "GetMarketPlaceStateResponse";
    token_address: string;
    market_place_states: Array<{
      __typename?: "MarketPlaceSnapshot";
      token_address: string;
      project_id: string;
      name?: string | null;
      rank_est?: number | null;
      full_img?: string | null;
      meta_data_img?: string | null;
      attributes?: any | null;
      market_place_state?: {
        __typename?: "MarketPlaceState";
        block_timestamp?: number | null;
        escrow_address?: string | null;
        signature?: string | null;
        seller_address?: string | null;
        buyer_address?: string | null;
        type?: MarketPlaceActionEnum | null;
        marketplace_program_id?: string | null;
        marketplace_instance_id?: string | null;
        fee?: number | null;
        amount?: number | null;
        seller_referral_fee?: number | null;
        seller_referral_address?: string | null;
        buyer_referral_address?: string | null;
        buyer_referral_fee?: number | null;
        metadata?: any | null;
      } | null;
    }>;
  }>;
};

export type GetMarketplaceStatusQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetMarketplaceStatusQuery = {
  __typename?: "Query";
  getMarketPlaceStatus: {
    __typename?: "GetMarketPlaceStatusResponse";
    mps: Array<{
      __typename?: "MarketPlaceStatus";
      display_name: string;
      item_path?: string | null;
      website?: string | null;
      is_bidding_enabled: boolean;
      is_buying_enabled: boolean;
      is_delisting_enabled: boolean;
      is_listing_enabled: boolean;
      marketplace_program_id: string;
      marketplace_instance_id?: string | null;
    }>;
  };
};

export type GetProjectStatsQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  conditions?: InputMaybe<GetProjectStatsCondition>;
}>;

export type GetProjectStatsQuery = {
  __typename?: "Query";
  getProjectStats: {
    __typename?: "GetProjectStatsOutput";
    project_stats?: Array<{
      __typename?: "ProjectStat";
      project_id: string;
      market_cap?: number | null;
      volume_7day?: number | null;
      volume_1day_change?: number | null;
      floor_price?: number | null;
      floor_price_1day_change?: number | null;
      average_price?: number | null;
      average_price_1day_change?: number | null;
      max_price?: number | null;
      twitter_followers?: number | null;
      num_of_token_listed?: number | null;
      num_of_token_holders?: number | null;
      percentage_of_token_listed?: number | null;
      volume_1day?: number | null;
      project?: {
        __typename?: "Project";
        supply?: number | null;
        website?: string | null;
        twitter?: string | null;
        discord?: string | null;
        img_url?: string | null;
        is_verified?: boolean | null;
        display_name: string;
        project_attributes?: Array<{
          __typename?: "ProjectAttribute";
          name: string;
          type: AttributeTypeEnum;
          values: Array<string>;
          counts?: any | null;
          floor_prices?: any | null;
        }> | null;
      } | null;
    }> | null;
    pagination_info: {
      __typename?: "PaginationInfoResponseType";
      current_page_number: number;
      current_page_size: number;
      has_next_page: boolean;
      total_page_number: number;
    };
  };
};

export type SearchProjectByNameQueryVariables = Exact<{
  order_by?: InputMaybe<Array<OrderConfig> | OrderConfig>;
  paginationInfo?: InputMaybe<PaginationConfig>;
  condition: GetProjectStatByNameCondition;
}>;

export type SearchProjectByNameQuery = {
  __typename?: "Query";
  getProjectStatByName: {
    __typename?: "GetProjectStatsOutput";
    project_stats?: Array<{
      __typename?: "ProjectStat";
      project_id: string;
      market_cap?: number | null;
      volume_7day?: number | null;
      volume_1day_change?: number | null;
      floor_price?: number | null;
      floor_price_1day_change?: number | null;
      average_price?: number | null;
      average_price_1day_change?: number | null;
      max_price?: number | null;
      twitter_followers?: number | null;
      num_of_token_listed?: number | null;
      num_of_token_holders?: number | null;
      percentage_of_token_listed?: number | null;
      volume_1day?: number | null;
      rank?: number | null;
      project?: {
        __typename?: "Project";
        supply?: number | null;
        website?: string | null;
        twitter?: string | null;
        discord?: string | null;
        img_url?: string | null;
        is_verified?: boolean | null;
        display_name: string;
        project_attributes?: Array<{
          __typename?: "ProjectAttribute";
          name: string;
          type: AttributeTypeEnum;
          values: Array<string>;
          counts?: any | null;
          floor_prices?: any | null;
        }> | null;
      } | null;
    }> | null;
    pagination_info: {
      __typename?: "PaginationInfoResponseType";
      current_page_number: number;
      current_page_size: number;
      has_next_page: boolean;
    };
  };
};

export const GetBuyTxDocument = gql`
  query getBuyTx(
    $buyerAddress: String!
    $price: Float!
    $tokenAddress: String!
    $buyerBroker: String!
    $buyerBrokerBasisPoints: Float
    $unverified: Boolean
  ) {
    createBuyTx(
      buyer_address: $buyerAddress
      price: $price
      token_address: $tokenAddress
      buyer_broker: $buyerBroker
      buyer_broker_basis_points: $buyerBrokerBasisPoints
      unverified: $unverified
    ) {
      data
      error {
        error_type
        message
        metadata
      }
    }
  }
`;
export const GetListTxDocument = gql`
  query getListTx(
    $sellerAddress: String!
    $price: Float!
    $tokenAddress: String!
    $sellerBroker: String!
    $sellerBrokerBasisPoints: Float
  ) {
    createListTx(
      seller_address: $sellerAddress
      token_address: $tokenAddress
      price: $price
      seller_broker: $sellerBroker
      seller_broker_basis_points: $sellerBrokerBasisPoints
    ) {
      data
      error {
        error_type
        message
        metadata
      }
    }
  }
`;
export const GetBidTxDocument = gql`
  query getBidTx(
    $buyerAddress: String!
    $price: Float!
    $tokenAddress: String!
    $buyerBroker: String!
    $buyerBrokerBasisPoints: Float
  ) {
    createBidTx(
      buyer_address: $buyerAddress
      price: $price
      token_address: $tokenAddress
      buyer_broker: $buyerBroker
      buyer_broker_basis_points: $buyerBrokerBasisPoints
    ) {
      data
      error {
        error_type
        message
        metadata
      }
    }
  }
`;
export const GetAcceptBidTxDocument = gql`
  query getAcceptBidTx(
    $sellerAddress: String!
    $price: Float!
    $tokenAddress: String!
    $sellerBroker: String!
    $sellerBrokerBasisPoints: Float
  ) {
    acceptBidTx(
      seller_address: $sellerAddress
      token_address: $tokenAddress
      price: $price
      seller_broker: $sellerBroker
      seller_broker_basis_points: $sellerBrokerBasisPoints
    ) {
      data
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
    createCancelBidTx(
      buyer_address: $buyerAddress
      token_address: $tokenAddress
    ) {
      data
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
    createDelistTx(
      seller_address: $sellerAddress
      token_address: $tokenAddress
    ) {
      data
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
      error {
        error_type
        message
        metadata
      }
    }
  }
`;
export const GetTokenHistoryDocument = gql`
  query getTokenHistory(
    $condition: GetMarketPlaceActionsByTokenAddressCondition!
    $paginationInfo: PaginationConfig
    $orderBy: [OrderConfig!]
  ) {
    getMarketPlaceActionsByToken(
      order_by: $orderBy
      pagination_info: $paginationInfo
      condition: $condition
    ) {
      token_address
      mpas {
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
      }
    }
  }
`;
export const GetUserHistoryDocument = gql`
  query getUserHistory(
    $condition: GetMarketPlaceActionsByUserCondition!
    $orderBy: [OrderConfig!]
    $paginationInfo: MPAPaginationConfig
  ) {
    getUserHistory(
      condition: $condition
      order_by: $orderBy
      pagination_info: $paginationInfo
    ) {
      mps {
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
  query getProjectHistory(
    $condition: GetMarketPlaceActionsByProjectsCondition!
    $orderBy: [OrderConfig!]
    $paginationInfo: MPAPaginationConfig
  ) {
    getProjectHistory(
      condition: $condition
      order_by: $orderBy
      pagination_info: $paginationInfo
    ) {
      mps {
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
export const GetMarketplaceSnapshotsDocument = gql`
  query getMarketplaceSnapshots(
    $condition: GetMarketPlaceSnapshotCondition
    $pagination_info: PaginationConfig
    $order_by: [OrderConfig!]
  ) {
    getMarketPlaceSnapshots(
      condition: $condition
      pagination_info: $pagination_info
      order_by: $order_by
    ) {
      market_place_snapshots {
        token_address
        project_id
        name
        rarity_est
        rank_est
        supply
        full_img
        meta_data_img
        meta_data_uri
        attributes
        floor_price
        project_name
        project_image
        is_project_verified
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
  query getUserBids(
    $condition: GetMarketPlaceStateCondition
    $paginationInfo: PaginationConfig
    $order_by: [OrderConfig!]
  ) {
    getUserBids(
      condition: $condition
      pagination_info: $paginationInfo
      order_by: $order_by
    ) {
      name
      token_address
      project_name
      project_id
      full_img
      meta_data_img
      floor_price
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
      }
    }
  }
`;
export const GetUserListingsDocument = gql`
  query getUserListings(
    $condition: GetMarketPlaceStateCondition
    $paginationInfo: PaginationConfig
    $orderBy: [OrderConfig!]
  ) {
    getUserListings(
      condition: $condition
      pagination_info: $paginationInfo
      order_by: $orderBy
    ) {
      token_address
      name
      full_img
      meta_data_img
      project_name
      project_id
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
      }
    }
  }
`;
export const GetTokenStateDocument = gql`
  query getTokenState(
    $condition: GetMarketPlaceStateCondition
    $paginationInfo: PaginationConfig
    $orderBy: [OrderConfig!]
  ) {
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
  query getProjectStats(
    $orderBy: [OrderConfig!]
    $paginationInfo: PaginationConfig
    $conditions: GetProjectStatsCondition
  ) {
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
        total_page_number
      }
    }
  }
`;
export const SearchProjectByNameDocument = gql`
  query searchProjectByName(
    $order_by: [OrderConfig!]
    $paginationInfo: PaginationConfig
    $condition: GetProjectStatByNameCondition!
  ) {
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
        rank
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

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    getBuyTx(
      variables: GetBuyTxQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetBuyTxQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBuyTxQuery>(GetBuyTxDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getBuyTx",
        "query"
      );
    },
    getListTx(
      variables: GetListTxQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetListTxQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetListTxQuery>(GetListTxDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getListTx",
        "query"
      );
    },
    getBidTx(
      variables: GetBidTxQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetBidTxQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBidTxQuery>(GetBidTxDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getBidTx",
        "query"
      );
    },
    getAcceptBidTx(
      variables: GetAcceptBidTxQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetAcceptBidTxQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAcceptBidTxQuery>(
            GetAcceptBidTxDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getAcceptBidTx",
        "query"
      );
    },
    getCancelBidTx(
      variables: GetCancelBidTxQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetCancelBidTxQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetCancelBidTxQuery>(
            GetCancelBidTxDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getCancelBidTx",
        "query"
      );
    },
    getDelistTx(
      variables: GetDelistTxQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetDelistTxQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetDelistTxQuery>(GetDelistTxDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getDelistTx",
        "query"
      );
    },
    getWithdrawEscrowTx(
      variables: GetWithdrawEscrowTxQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetWithdrawEscrowTxQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetWithdrawEscrowTxQuery>(
            GetWithdrawEscrowTxDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getWithdrawEscrowTx",
        "query"
      );
    },
    getTokenHistory(
      variables: GetTokenHistoryQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetTokenHistoryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTokenHistoryQuery>(
            GetTokenHistoryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getTokenHistory",
        "query"
      );
    },
    getUserHistory(
      variables: GetUserHistoryQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetUserHistoryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserHistoryQuery>(
            GetUserHistoryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getUserHistory",
        "query"
      );
    },
    getProjectHistory(
      variables: GetProjectHistoryQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetProjectHistoryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProjectHistoryQuery>(
            GetProjectHistoryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getProjectHistory",
        "query"
      );
    },
    getMarketplaceSnapshots(
      variables?: GetMarketplaceSnapshotsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetMarketplaceSnapshotsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMarketplaceSnapshotsQuery>(
            GetMarketplaceSnapshotsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getMarketplaceSnapshots",
        "query"
      );
    },
    getUserBids(
      variables?: GetUserBidsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetUserBidsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserBidsQuery>(GetUserBidsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getUserBids",
        "query"
      );
    },
    getUserListings(
      variables?: GetUserListingsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetUserListingsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUserListingsQuery>(
            GetUserListingsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getUserListings",
        "query"
      );
    },
    getTokenState(
      variables?: GetTokenStateQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetTokenStateQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTokenStateQuery>(GetTokenStateDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "getTokenState",
        "query"
      );
    },
    getMarketplaceStatus(
      variables?: GetMarketplaceStatusQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetMarketplaceStatusQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetMarketplaceStatusQuery>(
            GetMarketplaceStatusDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getMarketplaceStatus",
        "query"
      );
    },
    getProjectStats(
      variables?: GetProjectStatsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<GetProjectStatsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProjectStatsQuery>(
            GetProjectStatsDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "getProjectStats",
        "query"
      );
    },
    searchProjectByName(
      variables: SearchProjectByNameQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<SearchProjectByNameQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SearchProjectByNameQuery>(
            SearchProjectByNameDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "searchProjectByName",
        "query"
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
