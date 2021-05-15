import moment from "moment";
import { SearchResults } from "../interfaces/searchresults";
import { Movie } from "../interfaces/movie";

class DataService {
    private apiUrl: string;
    private apiKey: string;

    constructor() {
        this.apiUrl = process.env.REACT_APP_TMDB_API ?? '';
        this.apiKey = process.env.REACT_APP_API_KEY ?? '';
    }
    
    public async searchMovies(queryText: string, page: number): Promise<SearchResults> {
        //Url example: https://api.themoviedb.org/3/search/movie?api_key=3983080328&query=endgame&page=1
        const apiUrl = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${queryText}&page=${page.toString()}`;
        const response: Response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const apiObj: any = await response.json();
        if (apiObj.total_results > 0) {
            const imagesUrl: string = 'https://image.tmdb.org/t/p/w780';
            const filteredResults = (apiObj.results as any[]).filter((item) => item.poster_path && item.overview);
            const movies: Movie[] = filteredResults.map((item: any) => {
                return {
                    id: item.id,
                    title: item.title,
                    overview: item.overview,
                    releaseDate: moment(item.release_date),
                    rate: item.vote_average,
                    imageUrl: item.poster_path ? `${imagesUrl}${item.poster_path}` : '',
                };    
            });
            return {
                page: apiObj.page,
                totalResults: apiObj.total_results,
                totalPages: apiObj.total_pages,
                results: movies
            };                     
        }else {
            return {
                page: apiObj.page,
                totalResults: apiObj.total_results,
                totalPages: apiObj.total_pages,
                results: []
            };
        }
    }

}

export const dataService = new DataService();
