import {
  MarketPlaceActionEnum,
  MarketPlaceIdentifier,
  MarketPlacePricingFilterValues,
  ProjectIdWithAttributes,
} from "./sdk";

export type GetMarketplaceSnapshotCondition = {
  projects?: ProjectIdWithAttributes[];
  tokenAddresses?: string[];
  excludeTokensWithoutMetadata?: boolean;
  onlyListings?: boolean;
  priceFilter?: MarketPlacePricingFilterValues;
  includeAttributeInformation?: boolean;
  includeProjectFloorPrice?: boolean;
};

export type MarketplaceActionEnums = MarketPlaceActionEnum.Bid
| MarketPlaceActionEnum.Delisting
| MarketPlaceActionEnum.Listing
| MarketPlaceActionEnum.Transaction
| MarketPlaceActionEnum.Updatelisting
| MarketPlaceActionEnum.Updatebid
| MarketPlaceActionEnum.Cancelbid;

export type GetMarketplaceStateCondition = {
  tokenAddresses: string[];
  actionType?: MarketplaceActionEnums;
  buyerAddress?: string;
  sellerAddress?: string;
  marketPlaceIdentifiers?: MarketPlaceIdentifier[];
};
// GetMarketPlaceActionsByTokenAddressCondition
export type GetTokenHistoryCondition = {
  tokenAddresses: string[];
  actionType?: MarketplaceActionEnums;
  marketPlaceIdentifiers?: MarketPlaceIdentifier[];
}

export type GetUserActionsCondition = {
  userAddress: string;
  marketPlaceIdentifiers?: MarketPlaceIdentifier[];
}

export type GetUserHistoryCondition = {
  userAddress: string;
  actionTypes?: MarketplaceActionEnums[];
}

export type GetProjectHistoryCondition = {
  projects: ProjectIdWithAttributes[];
  actionTypes?: MarketplaceActionEnums[];
}