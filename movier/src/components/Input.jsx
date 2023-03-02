import React from 'react';
import arrow from '../assets/arrow.svg';

const Input = ({ search, setSearch }) => {
  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-light placeholder-lighter max-w-[292px] w-3/4 rounded-md py-2 px-4 mb-10"
        placeholder="ex: Toy's Story"
      ></input>
      <button
        type="submit"
        className="mx-3 h-[42px] w-[42px] bg-darktable rounded-md border-2 border-orange inline-flex items-center justify-center hover:bg-dark"
      >
        <img src={arrow} alt="seta" />
      </button>
    </>
  );
};

export default Input;
