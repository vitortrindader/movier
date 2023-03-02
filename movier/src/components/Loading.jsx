import React from 'react';
import Skeleton from 'react-loading-skeleton';

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const Loading = () => {
  [...Array(10).keys()].forEach(() => console.log('1'));

  return (
    <div className="bg-darktable max-w-[640px] w-3/4 h-[420px] rounded-md mb-[60px] overflow-y-scroll scrollbar">
      <div className="py-4">
        {[...Array(10).keys()].map(() => (
          <div className="flex flex-col">
            <div className="text-lighter flex text-base justify-between px-5">
              <Skeleton
                style={{ heigth: '30px', width: `${between(150, 250)}px` }}
              />
              <Skeleton
                style={{ heigth: '30px', width: `${between(150, 250)}px` }}
              />
            </div>
            <div className="h-[2px] w-11/12 bg-lightdark mx-auto my-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
