import { NextPage } from "next";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { GET_PRODUCTS } from "../../graphql/queries/getProducts";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      page: 1,
      perPage: 12,
      // sortOrder: "t-shirts",
      // sortField: "t-shirt",
      // filter: "t-shirts",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

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
        <h3>{id}</h3>
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
