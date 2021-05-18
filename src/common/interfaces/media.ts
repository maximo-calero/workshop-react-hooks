import moment from "moment";

export interface Media {
    id: string;
    title: string;
    overview: string;
    releaseDate: moment.Moment;
    rate: number;
    imageUrl: string;
}