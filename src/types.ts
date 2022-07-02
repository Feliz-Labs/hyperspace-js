import {
  MarketPlaceActionEnum,
  MarketPlaceIdentifier,
  MarketPlacePricingFilterValues,
  ProjectIdWithAttributes,
  PaginationConfig,
  MarketPlaceTxErrorEnum,
  StringInputArg,
  TimePeriodEnum,
  Day_Lookback_Enum,
  NonMarketPlaceActionEnum
} from "./sdk";

export enum DayLookbackEnum {
  Month = 'MONTH',
  OneDay = 'ONE_DAY',
  SevenDay = 'SEVEN_DAY'
}

export type GetMarketplaceSnapshotCondition = {
  name?: StringInputArg;
  projects?: ProjectIdWithAttributes[];
  tokenAddresses?: string[];
  excludeTokensWithoutMetadata?: boolean;
  onlyListings?: boolean;
  priceFilter?: MarketPlacePricingFilterValues;
  rankFilter?: MarketPlacePricingFilterValues;
  includeAttributeInformation?: boolean;
  includeProjectFloorPrice?: boolean;
};

export enum TimeGranularityEnum {
  PER_FIVE_MINUTES = "PER_FIVE_MINUTES",
  PER_HOUR = "PER_HOUR",
  PER_DAY = "PER_DAY",
}

export type MarketplaceActionEnums =
  | MarketPlaceActionEnum.Bid
  | MarketPlaceActionEnum.Delisting
  | MarketPlaceActionEnum.Listing
  | MarketPlaceActionEnum.Transaction
  | MarketPlaceActionEnum.Updatelisting
  | MarketPlaceActionEnum.Updatebid
  | MarketPlaceActionEnum.Cancelbid;

export type NonMarketplaceActionEnums =
  | NonMarketPlaceActionEnum.Mint

export type GetMarketplaceStateCondition = {
  tokenAddresses: string[];
  actionType?: MarketplaceActionEnums | string;
  buyerAddress?: string;
  sellerAddress?: string;
  marketPlaceIdentifiers?: MarketPlaceIdentifier[];
};
// GetMarketPlaceActionsByTokenAddressCondition
export type GetTokenHistoryCondition = {
  tokenAddresses: string[];
  actionType?: MarketplaceActionEnums | string;
  marketPlaceIdentifiers?: MarketPlaceIdentifier[];
};

export type GetUserActionsCondition = {
  userAddress: string;
  marketPlaceIdentifiers?: MarketPlaceIdentifier[];
};

export type GetUserHistoryCondition = {
  userAddress: string;
  actionTypes?: MarketplaceActionEnums[] | string[];
  nonMpaActionTypes?: NonMarketplaceActionEnums[] | string[];
};

export type GetProjectHistoryCondition = {
  projects: ProjectIdWithAttributes[];
  actionTypes?: MarketplaceActionEnums[] | string[];
  nonMpaActionTypes?: NonMarketplaceActionEnums[] | string[];
};

export type GetProjectStatHistCondition = {
  projects: string[];
  startTimestamp: number;
  endTimestamp: number;
  timeGranularity: TimeGranularityEnum | string;
  paginationInfo?: PaginationConfig;
};

export type SearchProjectCondition = {
  name?: String;
  matchName?: StringInputArg;
  twitter?: StringInputArg;
  meSlug?: StringInputArg;
  excludeAttributes?: boolean;
  tag?: string;
};

export type GetProjectsCondition = {
  projectIds?: string[];
  excludeProjectAttributes?: boolean;
};

export type GetBuyTxQuery = {
  __typename?: "Query";
  createBuyTx: {
    __typename?: "MarketPlaceTxOutput";
    data?: Array<number> | null;
    is_required_signers_on?: boolean | null;
    metadata?: any | null;
    error?: {
      __typename?: "MarketPlaceTxOutputError";
      error_type?: MarketPlaceTxErrorEnum | null;
      message?: string | null;
      metadata?: any | null;
    } | null;
    txObj?: any | null;
  };
};

export type GetWalletStatsCondition = {
  searchAddress?: string;
  timePeriod?: TimePeriodEnum | string;
  includeUserRank?: boolean;
}

export type GetWalletStatsHistCondition = {
  searchAddress: string;
  dayLookback?: Day_Lookback_Enum | DayLookbackEnum | string;
}