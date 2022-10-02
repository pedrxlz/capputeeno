import { NextPage } from "next";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";

const GET_LOCATIONS = gql`
  query (
    $page: Int
    $perPage: Int
    $sortFilter: ProductFilter
    $sortOrder: String
    $sortField: String
  ) {
    allProducts(
      page: 2
      perPage: 20
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

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data?.allProducts);

  //   return <>Home</>;

  return data?.allProducts.map(
    ({
      id,
      name,
      priceInCents,
      imageUrl,
    }: {
      id: string;
      name: string;
      priceInCents: number;
      imageUrl: string;
    }) => (
      <div key={id}>
        <h3>{name}</h3>
        <Image
          width="400"
          height="250"
          alt="location-reference"
          src={`${imageUrl}`}
        />
        <br />
        <b>About this location:</b>
        <p>{priceInCents}</p>
        <br />
      </div>
    )
  );
};

export default Home;
