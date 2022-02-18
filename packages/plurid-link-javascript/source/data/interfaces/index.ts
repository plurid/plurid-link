// #region module
export type Response =
    | ResponsError
    | ResponseSuccess;

export interface ResponsError {
    status: false;
    error?: string;
};

export interface ResponseSuccess {
    status: true;
    data: string;
};



export type NewOptions =
    | NewHTTPLinkOptions
    | NewServiceLinkOptions;

export type LinkExpiration =
    | '24_HOURS' | '30_DAYS'
    | number;

export interface LinkOptionsBase {
    value?: string;
    namespace?: string;
    expiration?: LinkExpiration;
}

export interface NewHTTPLinkOptions extends LinkOptionsBase {
    type?: 'http';
    target: string;
}

export interface NewServiceLinkOptions extends LinkOptionsBase {
    type: 'service';
    service: string;
    action: string;
    data?: Record<string, any>;
}
// #endregion module
