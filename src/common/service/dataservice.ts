import moment from "moment";
import { SearchResults } from "../interfaces/searchresults";
import { Media } from "../interfaces/media";
 
export async function searchMedias(queryUrl: string): Promise<SearchResults> {
    //Url example: https://api.themoviedb.org/3/search/movie?api_key=3983080328&query=endgame&page=1
    const response: Response = await fetch(queryUrl);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const apiObj: any = await response.json();
    if (apiObj.total_results > 0) {
        const imagesUrl: string = 'https://image.tmdb.org/t/p/w780';
        const filteredResults = (apiObj.results as any[]).filter((item) => item.poster_path && item.overview);
        const movies: Media[] = filteredResults.map((item: any) => {
            return {
                id: item.id,
                title: item.title ? item.title : item.name,
                overview: item.overview,
                releaseDate: item.release_date ? moment(item.release_date) : moment(item.first_air_date),
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

