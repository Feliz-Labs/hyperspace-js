import {
  GetAcceptBidTxQuery,
  GetAcceptBidTxQueryVariables,
  GetBidTxQuery,
  GetBidTxQueryVariables,
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
  SendBuyTxQuery,
  SendBuyTxQueryVariables,
  SortOrderEnum,
  GetWalletStatsQuery,
  GetWalletStatsHistQuery,
  Day_Lookback_Enum,
  TimePeriodEnum,
  NonMarketPlaceActionEnum,
  GetUpcomingProjectsQuery,
  GetUpcomingProjectsCondition as OldGetUpcomingProjectsCondition,
  GetOverallWalletStatsQuery,
  GetNonMpaProjectHistoryQuery,
  GetNonMpaUserHistoryQuery
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
  GetProjectStatHistCondition,
  GetBuyTxQuery,
  GetWalletStatsCondition,
  GetWalletStatsHistCondition,
  TimeGranularityEnum,
  GetUpcomingProjectsCondition,
  GetNonMarketplaceActionsByProjectCondition,
  GetNonMarketplaceActionsByUserCondition,
} from "./types";
const SolanaWeb3 = require("opensea-solana");

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
      authorization: `${apiKey}`,
    };
    this.graphqlClient.setHeaders(this.headers);
    this.sdk = getSdk(this.graphqlClient);
  }

  getWalletStats({
    condition,
    orderBy,
    paginationInfo,
  }: {
    condition: GetWalletStatsCondition;
    orderBy?: OrderConfig;
    paginationInfo?: PaginationConfig;
  }): Promise<GetWalletStatsQuery> {
    return this.sdk.getWalletStats(
      {
        condition: {
          search_address: condition.searchAddress,
          include_user_rank: condition.includeUserRank,
          time_period: condition.timePeriod as TimePeriodEnum,
        },
        orderBy,
        paginationInfo,
      },
      this.headers
    );
  }

  getWalletStatsHist({
    condition,
  }: {
    condition: GetWalletStatsHistCondition;
  }): Promise<GetWalletStatsHistQuery> {
    return this.sdk.getWalletStatsHist(
      {
        condition: {
          search_address: condition.searchAddress,
          day_lookback: condition.dayLookback as Day_Lookback_Enum,
        },
      },
      this.headers
    );
  }

  // Getters
  searchProjectByName({
    condition,
  }: {
    condition: SearchProjectCondition;
  }): Promise<SearchProjectByNameQuery> {
    const { name, tag, matchName, meSlug, twitter, excludeAttributes } =
      condition;

    let conditionInput = {};

    if (name)
      conditionInput = {
        display_name: name,
      };

    if (tag)
      conditionInput = {
        ...conditionInput,
        tag,
      };

    if (matchName)
      conditionInput = {
        ...conditionInput,
        project_name: matchName,
      };

    if (twitter)
      conditionInput = {
        ...conditionInput,
        twitter,
      };

    if (meSlug)
      conditionInput = {
        ...conditionInput,
        me_slug: meSlug,
      };

    if (excludeAttributes)
      conditionInput = {
        ...conditionInput,
        exclude_project_attributes: true,
      };

    return this.sdk.searchProjectByName(
      {
        condition: conditionInput,
      },
      this.headers
    );
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
    const parsedCondition: GetProjectStatsCondition = {};
    if (condition?.projectIds)
      parsedCondition.project_ids = condition.projectIds;
    if (condition?.excludeProjectAttributes)
      parsedCondition.exclude_project_attributes =
        condition.excludeProjectAttributes;
    if (condition?.tags) 
      parsedCondition.tags = condition.tags;
    if (condition?.isVerified)
      parsedCondition.is_verified = true;
      
    return this.sdk.getProjectStats(
      {
        conditions: parsedCondition,
        orderBy,
        paginationInfo,
      },
      this.headers
    );
  }

  getProjectStatHistory({
    projects,
    startTimestamp,
    endTimestamp,
    timeGranularity,
    paginationInfo,
  }: GetProjectStatHistCondition) {
    if (projects.length < 1)
      throw Error("Invalid input, requires 1 project id");
    const parsedCondition = {
      project_ids: projects.slice(0, 1),
      start_timestamp: startTimestamp,
      end_timestamp: endTimestamp,
      time_granularity: timeGranularity as TimeGranularityEnum,
    };

    return this.sdk.getProjectStatHistory(
      {
        conditions: parsedCondition,
        paginationInfo,
      },
      this.headers
    );
  }

  getMarketplaceStatus(): Promise<GetMarketplaceStatusQuery> {
    return this.sdk.getMarketplaceStatus(undefined, this.headers);
  }

  getUpcomingProjects({
    condition,
    orderBy,
    paginationInfo
  }: {
    condition?: GetUpcomingProjectsCondition
    orderBy?: OrderConfig;
    paginationInfo?: PaginationConfig;
  }): Promise<GetUpcomingProjectsQuery> {
    const parsedCondition: OldGetUpcomingProjectsCondition = {
      user_timestamp: condition?.userTimestamp,
      is_featured: condition?.isFeatured,
      is_moonshot: condition?.isLaunchpad,
      display_name: condition?.searchName,
      project_name: condition?.name
    }
    return this.sdk.getUpcomingProjects({
      conditions: parsedCondition,
      order_by: orderBy,
      pagination_info: paginationInfo
    }, this.headers);
  }

  getOverallWalletStats(): Promise<GetOverallWalletStatsQuery> {
    return this.sdk.getOverallWalletStats(undefined, this.headers);
  }

  getNonMpaProjectHistory({
    condition,
    paginationInfo
  } : {
    condition: GetNonMarketplaceActionsByProjectCondition;
    paginationInfo?: PaginationConfig;
  }) : Promise<GetNonMpaProjectHistoryQuery> {

    const parsedCondition = {
      projects: condition.projects,
      by_nmpa_types: condition.nonMpaActionTypes
    }

    return this.sdk.getNonMpaProjectHistory({
      condition: parsedCondition,
      paginationInfo
    }, this.headers);
  }

  getNonMpaUserHistory({
    condition,
    paginationInfo
  }: {
    condition: GetNonMarketplaceActionsByUserCondition,
    paginationInfo?: PaginationConfig;
  }): Promise<GetNonMpaUserHistoryQuery> {
    const parsedCondition = {
      source_address: condition.userAddress,
      destination_address: condition.userAddress,
      by_nmpa_types: condition.nonMpaActionTypes
    }
    return this.sdk.getNonMpaUserHistory({
      condition: parsedCondition,
      paginationInfo
    }, this.headers);
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
    if (condition?.name) parsedCondition.name = condition.name;
    if (condition?.rankFilter)
      parsedCondition.rank_filter = condition.rankFilter;
    if (condition?.onlyHyperspace)
      parsedCondition.only_listed_on_hs = true;
    if (condition?.filterPoolListings)
      parsedCondition.filter_pool_listings = true;
    return this.sdk.getMarketplaceSnapshots(
      {
        condition: parsedCondition,
        order_by: orderBy,
        pagination_info: paginationInfo,
      },
      this.headers
    );
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
      parsedCondition.action_type = condition.actionType as MarketPlaceActionEnum;
    if (condition.buyerAddress)
      parsedCondition.buyer_address = condition.buyerAddress;
    if (condition.sellerAddress)
      parsedCondition.seller_address = condition.sellerAddress;
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;

    return this.sdk.getTokenState(
      {
        //@ts-ignore
        condition: parsedCondition,
        orderBy,
        paginationInfo,
      },
      this.headers
    );
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
    return this.sdk.getUserBids(
      {
        condition: parsedCondition,
        order_by: orderBy,
      },
      this.headers
    );
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

    return this.sdk.getUserListings(
      {
        condition: parsedCondition,
        orderBy,
      },
      this.headers
    );
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
      parsedCondition.action_type = condition.actionType as MarketPlaceActionEnum;
    if (condition.marketPlaceIdentifiers)
      parsedCondition.marketplace_ids = condition.marketPlaceIdentifiers;

    return this.sdk.getTokenHistory(
      {
        condition: parsedCondition,
        orderBy: [
          { field_name: "block_timestamp", sort_order: SortOrderEnum.Desc },
        ],
        paginationInfo,
      },
      this.headers
    );
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
      parsedCondition.by_mpa_types = condition.actionTypes as MarketPlaceActionEnum[]
    else parsedCondition.by_mpa_types = [];

    if(condition.nonMpaActionTypes)
      parsedCondition.by_nmpa_types = condition.nonMpaActionTypes as NonMarketPlaceActionEnum[]
    else parsedCondition.by_nmpa_types = [];
      
    return this.sdk.getUserHistory(
      {
        condition: parsedCondition,
        paginationInfo,
      },
      this.headers
    );
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
      parsedCondition.by_mpa_types = condition.actionTypes as MarketPlaceActionEnum[]
    else parsedCondition.by_mpa_types = [];
    
    if(condition.nonMpaActionTypes)
      parsedCondition.by_nmpa_types = condition.nonMpaActionTypes as NonMarketPlaceActionEnum[]
    else parsedCondition.by_nmpa_types = [];

    return this.sdk.getProjectHistory(
      {
        condition: parsedCondition,
        paginationInfo,
      },
      this.headers
    );
  }

  async handleCreateBuyTx({
    buyerAddress,
    buyerBroker,
    buyerBrokerBasisPoints,
    price,
    tokenAddress,
    unverified,
  }: GetBuyTxQueryVariables): Promise<GetBuyTxQuery> {
    let response = await this.sdk.getBuyTx(
      {
        buyerAddress,
        buyerBroker,
        buyerBrokerBasisPoints,
        price,
        tokenAddress,
        unverified,
      },
      this.headers
    );

    if (
      response.createBuyTx.data &&
      !response.createBuyTx.error &&
      response.createBuyTx.is_required_signers_on
      // check if opensea
    ) {
      const txObj = SolanaWeb3.Transaction.from(response.createBuyTx.data);
      return {
        createBuyTx: {
          data: response.createBuyTx.data,
          //@ts-ignore
          is_required_signers_on: true,
          //@ts-ignore
          metadata: response.createBuyTx.metadata,
          txObj,
        },
      };
    }

    return response;
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
    return this.handleCreateBuyTx({
      buyerAddress,
      buyerBroker,
      buyerBrokerBasisPoints,
      price,
      tokenAddress,
      unverified,
    });
  }

  sendBuyTx({
    metadata,
    data,
    hexData,
  }: SendBuyTxQueryVariables): Promise<SendBuyTxQuery> {
    return this.sdk.sendBuyTx({
      metadata,
      data,
      hexData,
    });
  }

  createListTx({
    sellerAddress,
    sellerBroker,
    tokenAddress,
    price,
    sellerBrokerBasisPoints,
  }: GetListTxQueryVariables): Promise<GetListTxQuery> {
    return this.sdk.getListTx(
      {
        sellerAddress,
        sellerBroker,
        tokenAddress,
        price,
        sellerBrokerBasisPoints,
      },
      this.headers
    );
  }

  createDelistTx({
    sellerAddress,
    tokenAddress,
  }: GetDelistTxQueryVariables): Promise<GetDelistTxQuery> {
    return this.sdk.getDelistTx(
      {
        sellerAddress,
        tokenAddress,
      },
      this.headers
    );
  }

  createBidTx({
    buyerAddress,
    buyerBroker,
    buyerBrokerBasisPoints,
    price,
    tokenAddress,
  }: GetBidTxQueryVariables): Promise<GetBidTxQuery> {
    return this.sdk.getBidTx(
      {
        buyerAddress,
        buyerBroker,
        buyerBrokerBasisPoints,
        price,
        tokenAddress,
      },
      this.headers
    );
  }

  createAcceptBidTx({
    sellerAddress,
    price,
    tokenAddress,
    sellerBroker,
    sellerBrokerBasisPoints,
  }: GetAcceptBidTxQueryVariables): Promise<GetAcceptBidTxQuery> {
    return this.sdk.getAcceptBidTx(
      {
        sellerAddress,
        price,
        tokenAddress,
        sellerBroker,
        sellerBrokerBasisPoints,
      },
      this.headers
    );
  }

  createCancelBidTx({
    buyerAddress,
    tokenAddress,
  }: GetCancelBidTxQueryVariables): Promise<GetCancelBidTxQuery> {
    return this.sdk.getCancelBidTx(
      {
        buyerAddress,
        tokenAddress,
      },
      this.headers
    );
  }

  createWithdrawEscrowTx({
    userAddress,
    amount,
  }: GetWithdrawEscrowTxQueryVariables): Promise<GetWithdrawEscrowTxQuery> {
    return this.sdk.getWithdrawEscrowTx(
      {
        userAddress,
        amount,
      },
      this.headers
    );
  }

  getApiKey() {
    return this.apiKey;
  }
}
