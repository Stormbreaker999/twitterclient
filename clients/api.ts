import {GraphQLClient} from 'graphql-request'

const isClient=typeof window !== 'undefined';

export const graphqlClient=new GraphQLClient("https://expressdeploy-dvaa.onrender.com/graphql", {
    headers:()=>({
        Authorization:isClient?`Bearer ${window.localStorage.getItem("__twitter_token")}`:'undefined'
    })
})
