import {
  GetMarketPlaceActionsByProjectsCondition,
  GetMarketPlaceActionsByTokenAddressCondition,
  GetMarketPlaceActionsByUserCondition,
  GetMarketPlaceSnapshotCondition,
  GetMarketPlaceStateCondition,
  GetMarketplaceStatusQuery,
  GetProjectStatsCondition,
  GetProjectStatsQuery,
  getSdk,
  GetTokenHistoryQuery,
  GetTokenStateQuery,
  GetUserBidsQuery,
  GetUserHistoryQuery,
  GetUserListingsQuery,
  MarketPlaceActionEnum,
  OrderConfig,
  PaginationConfig,
  Sdk,
  SearchProjectByNameQuery,
} from "./sdk";
import { GraphQLClient } from "graphql-request";
import {
  GetMarketplaceSnapshotCondition,
  GetMarketplaceStateCondition,
  GetProjectHistoryCondition,
  GetTokenHistoryCondition,
  GetUserActionsCondition,
  GetUserHistoryCondition,
} from "./types";

const apiEndpoint =
  process.env.NODE_ENV === "production"
    ? "https://beta.api.solanalysis.com/sdk"
    : "http://localhost:8080";

export class HyperspaceClient {
  apiKey: string;
  graphqlClient: GraphQLClient;
  sdk: Sdk;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.graphqlClient = new GraphQLClient(apiEndpoint);
    this.sdk = getSdk(this.graphqlClient);
  }

  // Getters
  searchProjectByName(name: string): Promise<SearchProjectByNameQuery> {
    return this.sdk.searchProjectByName({
      condition: {
        display_name: name,
      },
    });
  }

  getProjects({
    condition,
    orderBy,
    paginationInfo,
  }: {
    condition: GetProjectStatsCondition;
    orderBy?: OrderConfig;
    paginationInfo?: PaginationConfig;
  }): Promise<GetProjectStatsQuery> {
    return this.sdk.getProjectStats({
      conditions: condition,
      orderBy,
      paginationInfo,
    });
  }

  getMarketplaceStatus(): Promise<GetMarketplaceStatusQuery> {
    return this.sdk.getMarketplaceStatus();
  }

  getMarketplaceSnapshot({
    condition,
    orderBy,
    paginationInfo,
  }: {
    condition?: GetMarketplaceSnapshotCondition;
    orderBy?: OrderConfig;
    paginationInfo?: PaginationConfig;
  }) {
    const parsedCondition: GetMarketPlaceSnapshotCondition = {};
    if (condition?.projects) parsedCondition.project_ids = condition.projects;
    if (condition?.excludeTokensWithoutMetadata)
      parsedCondition.has_metadata = true;
    if (condition?.includeAttributeInformation)
      parsedCondition.include_attribute_details = true;
    if (condition?.includeProjectFloorPrice)
      parsedCondition.include_floors = true;
    if (condition?.onlyListings)
      parsedCondition.listing_type = MarketPlaceActionEnum.Listing;
    if (condition?.tokenAddresses)
      parsedCondition.token_addresses = condition.tokenAddresses;
    if (condition?.priceFilter)
      parsedCondition.price_filter = condition.priceFilter;

    return this.sdk.getMarketplaceSnapshots({
      condition: parsedCondition,
      order_by: orderBy,
      pagination_info: paginationInfo,
    });
  }

  getTokenState({
    condition,
    orderBy,
    paginationInfo,
  }: {
    condition: GetMarketplaceStateCondition;
    orderBy?: OrderConfig;
    paginationInfo?: PaginationConfig;
  }): Promise<GetTokenStateQuery> {
    const parsedCondition: GetMarketPlaceStateCondition = {
      token_addresses: condition.tokenAddresses,
    };
    if (condition.actionType)
      parsedCondition.action_type = condition.actionType;
    if (condition.buyerAddress)
      parsedCondition.buyer_address = condition.buyerAddress;
    if (condition.sellerAddress)
      parsedCondition.seller_address = condition.sellerAddress;
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;

    return this.sdk.getTokenState({
      //@ts-ignore
      condition: parsedCondition,
      orderBy,
      paginationInfo,
    });
  }

  getUserBids({
    condition,
    orderBy,
  }: {
    condition: GetUserActionsCondition;
    orderBy?: OrderConfig;
  }): Promise<GetUserBidsQuery>  {
    const parsedCondition: GetMarketPlaceStateCondition = {
      buyer_address: condition.userAddress,
    };
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;
    return this.sdk.getUserBids({
      condition: parsedCondition,
      order_by: orderBy,
    });
  }

  getUserListings({
    condition,
    orderBy,
  }: {
    condition: GetUserActionsCondition;
    orderBy?: OrderConfig;
  }):  Promise<GetUserListingsQuery> {
    const parsedCondition: GetMarketPlaceStateCondition = {
      seller_address: condition.userAddress,
    };
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;

    return this.sdk.getUserListings({
      condition: parsedCondition,
      orderBy,
    });
  }

  getTokenHistory({
    condition,
    orderBy,
    paginationInfo,
  }: {
    condition: GetTokenHistoryCondition;
    orderBy?: OrderConfig;
    paginationInfo?: PaginationConfig;
  }): Promise<GetTokenHistoryQuery>  {
    const parsedCondition: GetMarketPlaceActionsByTokenAddressCondition = {
      token_addresses: condition.tokenAddresses,
    };
    if (condition.actionType)
      parsedCondition.action_type = condition.actionType;
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;

    return this.sdk.getTokenHistory({
      condition: parsedCondition,
      orderBy,
      paginationInfo,
    });
  }

  getUserHistory({
    condition,
    paginationInfo,
  }: {
    condition: GetUserHistoryCondition;
    paginationInfo?: PaginationConfig;
  }):  Promise<GetUserHistoryQuery>  {
    const parsedCondition: GetMarketPlaceActionsByUserCondition = {
      seller_address: condition.userAddress,
      buyer_address: condition.userAddress,
    };

    if (condition.actionTypes)
      parsedCondition.by_mpa_types = condition.actionTypes;

    return this.sdk.getUserHistory({
      condition: parsedCondition,
      paginationInfo,
    });
  }

  getProjectHistory({
    condition,
    paginationInfo,
  }: {
    condition: GetProjectHistoryCondition;
    paginationInfo?: PaginationConfig;
  }) {
    const parsedCondition: GetMarketPlaceActionsByProjectsCondition = {
      projects: condition.projects,
    };
    if (condition.actionTypes)
      parsedCondition.by_mpa_types = condition.actionTypes;
    return this.sdk.getProjectHistory({
      condition: parsedCondition,
      paginationInfo,
    });
  }

  // Marketplace Actions
  createBuyTx() {}

  createListTx() {}

  createDelistTx() {}

  createBidTx() {}

  createWithdrawEscrowTx() {}

  getApiKey() {
    return this.apiKey;
  }
}
