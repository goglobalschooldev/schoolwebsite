
import Footer from "./Footer"
import Nav from "./Navbar/Nav"
import NavMoile from "./Navbar/NavMoile";
import { Box } from '@chakra-ui/react';
import { useContext } from "react"
import { AuthContext } from '../Context/AuthContext'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const Layout = ({ children }) => {
    const { state } = useContext(AuthContext)
    const { user } = state;
    const token = user?.token;
    const httpLink = createHttpLink({
        uri: process.env.NEXT_PUBLIC_DB_HOST
    });
    // "http://localhost:4700/graphql",process.env.NEXT_PUBLIC_DB_HOST, "https://placement-test-endpoint.go-globalschool.com/graphql"
    //  "http://localhost:4700/graphql"REACT_APP_DATABASE
    // uri: "https://endpoint.goglobalmart.com/graphql",
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: user ? token.toString() : "",
            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
    // console.log(state)
    return (
        <ApolloProvider client={client}>
            <NavMoile />
            <Nav />
            <Box
                width="100%"
                position="absolute"
            >
                {children}
                <Footer />
            </Box>
        </ApolloProvider>
    )

}

export default Layout;
