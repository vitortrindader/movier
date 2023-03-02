import Input from './components/Input';
import Table from './components/Table';
import logo from './assets/Logo.svg';
import sofa from './assets/sofasm.png';
import React from 'react';
import Api from './utils/api';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Loading from './components/Loading';

function App() {
  const [search, setSearch] = React.useState('');
  const [movieData, setMovieData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    Api.get(`/pesquisar/${search}`)
      .then((res) => {
        setMovieData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }

  return (
    <SkeletonTheme baseColor="#171616" highlightColor="#444">
      <div className="w-screen h-screen bg-dark flex flex-col items-center justify-center">
        <img src={logo} alt="logo svg" className="mb-auto mt-5" />
        <img src={sofa} alt="sofa image" className="h-[256] w-[256]" />
        <h2 className="text-2xl text-light mb-6 font-sans">If you liked</h2>
        <form action="" onSubmit={handleSubmit} className="flex">
          <Input search={search} setSearch={setSearch} />
        </form>
        <h2 className="text-2xl text-light mb-6 font-sans">
          You would problably like
        </h2>
        {!isLoading ? <Table movieData={movieData} /> : <Loading />}
      </div>
    </SkeletonTheme>
  );
}

export default App;
