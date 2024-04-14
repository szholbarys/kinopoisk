import { TMovie } from '../../models/Movie';
import { UseQueryResult } from '@tanstack/react-query';
import React from 'react'
import { MovieCard } from './MovieCard';

type MovieListProps = {
  isEnabled: boolean;
  query: UseQueryResult<TMovie[], Error>;
}

export const MovieList: React.FC<MovieListProps> = ({ isEnabled, query }) => {
  const { data, status, error } = query;
  return (
    <>
      {isEnabled && status === "pending" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <div className='mt-4'>
          {data?.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </>
  )
}