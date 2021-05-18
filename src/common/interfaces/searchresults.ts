import { Media } from "./media";

export interface SearchResults {
    page: number;
    totalResults: number;
    totalPages: number;
    results: Media[];
}
