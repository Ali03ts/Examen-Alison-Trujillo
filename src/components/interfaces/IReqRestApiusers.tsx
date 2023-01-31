export interface IReqRestApi {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        ID[];
    support:     ISupport;
}
export interface ID {
    id:            number;
    name:          string;
    year:          number;
    color:         string;
    Avatar: string;
}

export interface ISupport {
    url:  string;
    text: string;
}