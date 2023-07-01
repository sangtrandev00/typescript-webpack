export interface ParamInterface  {
    _q?: string;
    _limit?: number;
    _page?: number;
    _sort?:string;
    _order?:string;
    _min?: number;
    _max?: number;
    _cateIds?: string;
}

export interface Iquery {
    _limit?: number;
    _page?: number;
    _sort?: string;
    _order?: string;
    _q?: string;
    _min?: number;
    _max?: number;
    _cateIds?: string;
}
