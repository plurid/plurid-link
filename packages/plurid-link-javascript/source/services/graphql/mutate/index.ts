// #region imports
    // #region libraries
    import {
        gql,
    } from '@apollo/client/core';
    // #endregion libraries
// #endregion imports



// #region module
export const NEW_LINK = gql`
    mutation pluridLinkNewLink($input: InputPluridLinkNewLink!) {
        pluridLinkNewLink(input: $input) {
            status
        }
    }
`;


export const REMOVE_LINK = gql`
    mutation pluridLinkRemoveLink($input: InputPluridLinkRemoveLink!) {
        pluridLinkRemoveLink(input: $input) {
            status
        }
    }
`;
// #endregion module
