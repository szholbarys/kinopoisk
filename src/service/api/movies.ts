import { TMovie } from '../../models/Movie';
import { axiosInstance } from './api';

class MovieAPI {
    private axios = axiosInstance("movies");

    getMovies = async() => {
        const response = await this.axios.get<TMovie[]>("/", {
            params: {
                apikey: "e081ba7b" 
            }
        });
        return response.data;
    }
}

export const movieAPI = new MovieAPI();