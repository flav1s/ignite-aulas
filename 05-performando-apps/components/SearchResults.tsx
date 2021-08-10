// import React, { useMemo } from "react";

import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({
  totalPrice,
  results,
  onAddToWishlist,
}: SearchResultsProps) {
  // const totalPrice = useMemo(() => {
  //   return results.reduce((total, product) => {
  //     return total + product.price;
  //   }, 0);
  // }, [results]);
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          onAddToWishlist={onAddToWishlist}
          product={results[index]}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
