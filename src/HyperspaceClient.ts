import { getSdk, Sdk } from "./sdk";
import { GraphQLClient } from 'graphql-request'

const apiEndpoint = process.env.NODE_ENV === 'production' ? "https://beta.api.solanalysis.com/sdk" : "http://localhost:8080";

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
  searchForProject(name: string) {
    
  }

  getProjects(){
  }

  getMarketplaceStatus() {
  }

  getMarketplaceSnapshot() {
  }

  getTokenHistory() {
  }

  getUserHistory() {
  }

  // Marketplace Actions
  createBuyTx() {
  }

  createListTx() {
  }

  createDelistTx() {
  }

  createBidTx() {
  }

  createWithdrawEscrowTx() {
  }

  getApiKey() {
    return this.apiKey;
  }
}