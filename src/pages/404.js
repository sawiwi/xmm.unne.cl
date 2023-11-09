import React from "react";
import Head from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import NotFoundError from "../components/NotFound404"
const NotFound = () => {
    return(
        <>
        <Head>
            <title>Página Socio de Unne | 404</title>
        </Head>
            
        <Layout>
            <NotFoundError/>
        </Layout>
        </>
    )
}