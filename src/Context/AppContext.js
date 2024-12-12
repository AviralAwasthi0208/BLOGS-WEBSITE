import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl";


export const AppContext = createContext();

 export default function AppContextProvider({children}){

    const [loading,setLoading] =useState(false);
    const [posts,SetPosts] =useState([]);
    const [page,SetPage] =useState(1);
    const [totalPages,SetTotalPage] =useState(null);

    async function fetchBlogPosts(page=1) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            SetPage(data.page);
            SetPosts(data.posts);
            SetTotalPage(data.totalPages);
        } 
        catch(eror){
            console.log("eror in fetching data");
            SetPage(1);
            SetPosts([]);
            SetTotalPage(null);

        }  
        setLoading(false);     
    }

    function handlePageChange(page){
        SetPage(page);
        fetchBlogPosts(page);
    }

    const value={
        posts,
        SetPosts,
        loading,
        setLoading,
        page,
        SetPage,
        totalPages,
        SetTotalPage,
        fetchBlogPosts,
        handlePageChange 
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>



}