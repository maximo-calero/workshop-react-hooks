import { Movie } from "./movie";

export interface SearchResults {
    page: number;
    totalResults: number;
    totalPages: number;
    results: Movie[];
}
