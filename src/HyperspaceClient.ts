import {
  GetAcceptBidTxQuery,
  GetAcceptBidTxQueryVariables,
  GetBidTxQuery,
  GetBidTxQueryVariables,
  GetBuyTxQuery,
  GetBuyTxQueryVariables,
  GetCancelBidTxQuery,
  GetCancelBidTxQueryVariables,
  GetDelistTxQuery,
  GetDelistTxQueryVariables,
  GetListTxQuery,
  GetListTxQueryVariables,
  GetMarketPlaceActionsByProjectsCondition,
  GetMarketPlaceActionsByTokenAddressCondition,
  GetMarketPlaceActionsByUserCondition,
  GetMarketPlaceSnapshotCondition,
  GetMarketplaceSnapshotsQuery,
  GetMarketPlaceStateCondition,
  GetMarketplaceStatusQuery,
  GetProjectHistoryQuery,
  GetProjectStatsCondition,
  GetProjectStatsQuery,
  getSdk,
  GetTokenHistoryQuery,
  GetTokenStateQuery,
  GetUserBidsQuery,
  GetUserHistoryQuery,
  GetUserListingsQuery,
  GetWithdrawEscrowTxQuery,
  GetWithdrawEscrowTxQueryVariables,
  MarketPlaceActionEnum,
  OrderConfig,
  PaginationConfig,
  Sdk,
  SearchProjectByNameQuery,
  SortOrderEnum,
} from "./sdk";
import { GraphQLClient } from "graphql-request";
import {
  GetMarketplaceSnapshotCondition,
  GetMarketplaceStateCondition,
  GetProjectsCondition,
  GetProjectHistoryCondition,
  GetTokenHistoryCondition,
  GetUserActionsCondition,
  GetUserHistoryCondition,
  SearchProjectCondition,
} from "./types";

const apiEndpoint = "https://beta.api.solanalysis.com/sdk";

export class HyperspaceClient {
  apiKey: string;
  graphqlClient: GraphQLClient;
  sdk: Sdk;
  headers: any;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.graphqlClient = new GraphQLClient(apiEndpoint);
    this.headers = {
      authorization: `${apiKey}`
    }
    this.graphqlClient.setHeaders(this.headers);
    this.sdk = getSdk(this.graphqlClient);
  }

  // Getters
  searchProjectByName({
    condition,
  }: {
    condition: SearchProjectCondition;
  }): Promise<SearchProjectByNameQuery> {
    const { name, tag } = condition;
    return this.sdk.searchProjectByName({
      condition: {
        display_name: name,
        tag,
      },
    }, this.headers);
  }

  getProjects({
    condition,
    orderBy,
    paginationInfo,
  }: {
    condition?: GetProjectsCondition;
    orderBy?: OrderConfig;
    paginationInfo?: PaginationConfig;
  }): Promise<GetProjectStatsQuery> {
    const parsedCondition: GetProjectStatsCondition = {
    }
    if(condition?.projectIds) parsedCondition.project_ids = condition.projectIds;
    if(condition?.excludeProjectAttributes) parsedCondition.exclude_project_attributes = condition.excludeProjectAttributes;
    return this.sdk.getProjectStats({
      conditions: parsedCondition,
      orderBy,
      paginationInfo,
    }, this.headers);
  }

  getMarketplaceStatus(): Promise<GetMarketplaceStatusQuery> {
    return this.sdk.getMarketplaceStatus(undefined, this.headers);
  }

  getMarketplaceSnapshot({
    condition,
    orderBy,
    paginationInfo,
  }: {
    condition?: GetMarketplaceSnapshotCondition;
    orderBy?: OrderConfig;
    paginationInfo?: PaginationConfig;
  }): Promise<GetMarketplaceSnapshotsQuery> {
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
    }, this.headers);
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
    }, this.headers);
  }

  getUserBids({
    condition,
    orderBy,
  }: {
    condition: GetUserActionsCondition;
    orderBy?: OrderConfig;
  }): Promise<GetUserBidsQuery> {
    const parsedCondition: GetMarketPlaceStateCondition = {
      buyer_address: condition.userAddress,
    };
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;
    return this.sdk.getUserBids({
      condition: parsedCondition,
      order_by: orderBy,
    }, this.headers);
  }

  getUserListings({
    condition,
    orderBy,
  }: {
    condition: GetUserActionsCondition;
    orderBy?: OrderConfig;
  }): Promise<GetUserListingsQuery> {
    const parsedCondition: GetMarketPlaceStateCondition = {
      seller_address: condition.userAddress,
    };
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;

    return this.sdk.getUserListings({
      condition: parsedCondition,
      orderBy,
    }, this.headers);
  }

  getTokenHistory({
    condition,
    paginationInfo,
  }: {
    condition: GetTokenHistoryCondition;
    paginationInfo?: PaginationConfig;
  }): Promise<GetTokenHistoryQuery> {
    const parsedCondition: GetMarketPlaceActionsByTokenAddressCondition = {
      token_addresses: condition.tokenAddresses,
    };
    if (condition.actionType)
      parsedCondition.action_type = condition.actionType;
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;

    return this.sdk.getTokenHistory({
      condition: parsedCondition,
      orderBy: [
        { field_name: "block_timestamp", sort_order: SortOrderEnum.Desc },
      ],
      paginationInfo,
    }, this.headers);
  }

  getUserHistory({
    condition,
    paginationInfo,
  }: {
    condition: GetUserHistoryCondition;
    paginationInfo?: PaginationConfig;
  }): Promise<GetUserHistoryQuery> {
    const parsedCondition: GetMarketPlaceActionsByUserCondition = {
      seller_address: condition.userAddress,
      buyer_address: condition.userAddress,
    };

    if (condition.actionTypes)
      parsedCondition.by_mpa_types = condition.actionTypes;

    return this.sdk.getUserHistory({
      condition: parsedCondition,
      paginationInfo,
    }, this.headers);
  }

  getProjectHistory({
    condition,
    paginationInfo,
  }: {
    condition: GetProjectHistoryCondition;
    paginationInfo?: PaginationConfig;
  }): Promise<GetProjectHistoryQuery> {
    const parsedCondition: GetMarketPlaceActionsByProjectsCondition = {
      projects: condition.projects,
    };
    if (condition.actionTypes)
      parsedCondition.by_mpa_types = condition.actionTypes;
    return this.sdk.getProjectHistory({
      condition: parsedCondition,
      paginationInfo,
    }, this.headers);
  }

  // Marketplace Actions
  createBuyTx({
    buyerAddress,
    buyerBroker,
    buyerBrokerBasisPoints,
    price,
    tokenAddress,
    unverified,
  }: GetBuyTxQueryVariables): Promise<GetBuyTxQuery> {
    return this.sdk.getBuyTx({
      buyerAddress,
      buyerBroker,
      buyerBrokerBasisPoints,
      price,
      tokenAddress,
      unverified,
    }, this.headers);
  }

  createListTx({
    sellerAddress,
    sellerBroker,
    tokenAddress,
    price,
    sellerBrokerBasisPoints,
  }: GetListTxQueryVariables): Promise<GetListTxQuery> {
    return this.sdk.getListTx({
      sellerAddress,
      sellerBroker,
      tokenAddress,
      price,
      sellerBrokerBasisPoints,
    }, this.headers);
  }

  createDelistTx({
    sellerAddress,
    tokenAddress,
  }: GetDelistTxQueryVariables): Promise<GetDelistTxQuery> {
    return this.sdk.getDelistTx({
      sellerAddress,
      tokenAddress,
    }, this.headers);
  }

  createBidTx({
    buyerAddress,
    buyerBroker,
    buyerBrokerBasisPoints,
    price,
    tokenAddress,
  }: GetBidTxQueryVariables): Promise<GetBidTxQuery> {
    return this.sdk.getBidTx({
      buyerAddress,
      buyerBroker,
      buyerBrokerBasisPoints,
      price,
      tokenAddress,
    }, this.headers);
  }

  createAcceptBidTx({
    sellerAddress,
    price,
    tokenAddress,
    sellerBroker,
    sellerBrokerBasisPoints,
  }: GetAcceptBidTxQueryVariables): Promise<GetAcceptBidTxQuery> {
    return this.sdk.getAcceptBidTx({
      sellerAddress,
      price,
      tokenAddress,
      sellerBroker,
      sellerBrokerBasisPoints,
    }, this.headers);
  }

  createCancelBidTx({
    buyerAddress,
    tokenAddress,
  }: GetCancelBidTxQueryVariables): Promise<GetCancelBidTxQuery> {
    return this.sdk.getCancelBidTx({
      buyerAddress,
      tokenAddress,
    }, this.headers);
  }

  createWithdrawEscrowTx({
    userAddress,
    amount,
  }: GetWithdrawEscrowTxQueryVariables): Promise<GetWithdrawEscrowTxQuery> {
    return this.sdk.getWithdrawEscrowTx({
      userAddress,
      amount,
    }, this.headers);
  }

  getApiKey() {
    return this.apiKey;
  }
}
