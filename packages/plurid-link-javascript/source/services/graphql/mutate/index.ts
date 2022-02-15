// #region imports
    // #region libraries
    import {
        gql,
    } from '@apollo/client/core';
    // #endregion libraries
// #endregion imports



// #region module
export const NEW_LINK = gql`
    mutation PluridLinkClientNewLink($input: InputValueString!) {
        pluridLinkClientNewLink(input: $input) {
            status
        }
    }
`;


export const REMOVE_LINK = gql`
    mutation PluridLinkClientRemoveLink($input: InputValueString!) {
        pluridLinkClientRemoveLink(input: $input) {
            status
        }
    }
`;
// #endregion module
