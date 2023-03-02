export function Movie({ title, genre }) {
  return (
    <div className="flex flex-col">
      <div className="text-lighter flex text-base justify-between px-5">
        <h2>{title}</h2>
        <h2>{genre}</h2>
      </div>
      <div className="h-[2px] w-11/12 bg-lightdark mx-auto my-3"></div>
    </div>
  );
}
