import {graphql} from '../../gql';
export const verifyUserGoogleTokenQuery=graphql(`#graphql
    query VerifyUserGoogleToken($token:String!){
        verifyGoogleToken(token: $token)
    }`)
;

export const getCurrentUserQuery=graphql(`#graphql
    query GetCurrentUser{
        getCurrentUser{
            id
            profileImageURL
            email
            firstName
            lastName
            recommendedUsers{
                id
                firstName
                lastName
                profileImageURL
            }
            followers {
                id
                firstName
                lastName
                profileImageURL
            }
            following {
                id
                firstName
                lastName
                profileImageURL
            }
            tweets{
                id
                content
                author{
                    firstName
                    lastName
                    profileImageURL
                }
                usersLiked{
                    id
                }
            }
        }
    }
`);

export const getCurrentUserById=graphql(`#graphql
    query GetUserById($id: ID!) {
        getUserById(id: $id) {
            id
            firstName
            lastName
            profileImageURL
            recommendedUsers{
                id
                firstName
                lastName
                profileImageURL
            }
            followers {
                id
                firstName
                lastName
                profileImageURL
            }
            following {
                id
                firstName
                lastName
                profileImageURL
            }
            tweets {
            id
            content
            imageURL
            author {
                firstName
                lastName
                profileImageURL
            }
            }
        }
    }    
`)