import { TMovie } from '../../models/Movie';
import React from 'react'
import { Link } from 'react-router-dom';

type MovieCardProps = {
  movie: TMovie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className='border p-3 flex flex-col items-start justify-center gap-1 max-w-2xl mx-auto my-2 bg-slate-200' key={movie.imdbID}>
      <p className='font-bold text-xl'>{movie.title}</p>
      <p>{movie.year}</p>
      <button type='submit' className='mt-2'>
        <Link to={`/movie/${movie.genre}`}>
          Read More
        </Link>
      </button>
    </div>
  )
}