import { useQuery } from "@tanstack/react-query"
import { graphqlClient } from "../clients/api"
import { getCurrentUserById, getCurrentUserQuery } from "../graphql/query/user"

export const useCurrentUser=()=>{
    const query=useQuery({
        queryKey:['current-user'],
        queryFn : ()=>graphqlClient.request(getCurrentUserQuery)
    })
    return {...query, user:query.data?.getCurrentUser}
   
}


export const useGetUserById=(payload:any)=>{
    const query=useQuery({
        queryKey:['user-by-id'],
        queryFn:()=>{
            // console.log(payload);
            
            const res= graphqlClient.request(getCurrentUserById, payload)
            
            
            return res;
        }
    })
    // console.log(query);
    return {...query, userById:query.data?.getUserById}
}