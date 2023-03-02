import React from 'react';
import { Movie } from './Movie';
import './Table.css';

const Table = ({ movieData }) => {
  return (
    <div className="bg-darktable max-w-[640px] w-3/4 h-[420px] rounded-md mb-[60px] overflow-y-scroll scrollbar">
      <div className="py-4">
        {movieData?.map((filmes) => {
          return <Movie title={filmes[1]} genre={filmes[2]} key={filmes[1]} />;
        })}
      </div>
    </div>
  );
};

export default Table;
