import React from 'react';
import logo from './logo.svg';
import './App.css';
import {gql, useQuery} from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

// function ExchangeRates() {
//   const {loading, error, data} = useQuery(EXCHANGE_RATES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({currency, rate}: { currency: string, rate: number }) => (
//       <div key={currency}>
//           <p>
//               {currency}: {rate}
//           </p>
//       </div>
//   ));
// }

function App() {
  return (
      <div>
          <h2>Some data from graphql</h2>
      </div>
  );
}

export default App;
