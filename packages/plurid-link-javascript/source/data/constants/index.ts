// #region module
export const defaultPluridLinkApiEndpoint = 'https://api.plurid.com/graphql';

export const pluridLinkAPI = typeof process !== 'undefined'
    ? process.env.PLURID_LINK_API_ENDPOINT || defaultPluridLinkApiEndpoint
    : defaultPluridLinkApiEndpoint;
// #endregion module
