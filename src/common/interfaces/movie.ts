import moment from "moment";

export interface Movie {
    id: string;
    title: string;
    overview: string;
    releaseDate: moment.Moment;
    rate: number;
    imageUrl: string;
}