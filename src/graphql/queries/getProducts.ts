import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query (
    $page: Int
    $perPage: Int
    $sortFilter: ProductFilter
    $sortOrder: String
    $sortField: String
  ) {
    allProducts(
      page: $page
      perPage: $perPage
      sortOrder: $sortOrder
      sortField: $sortField
      filter: $sortFilter
    ) {
      id
      name
      imageUrl: image_url
      priceInCents: price_in_cents
      category
    }
    _allProductsMeta(perPage: $perPage, page: $page, filter: $sortFilter) {
      count
    }
  }
`;
