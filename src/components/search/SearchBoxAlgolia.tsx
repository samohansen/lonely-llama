'use client';

import algoliasearch from 'algoliasearch/lite';
import { SearchBox } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';


const searchClient = algoliasearch('E9QF394H1I', '477120d547bc21bf291ae260135455aa');

export function SearchBoxAlgolia() {
  return (
    <InstantSearchNext indexName="Amazing_Catalog_6593473a" searchClient={searchClient}>
      <SearchBox />
    </InstantSearchNext>
  );
}
