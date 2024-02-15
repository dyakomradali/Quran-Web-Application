import {useState,useEffect } from "react";

const  useFetch=(url)=>{

        const [users,setusers]=useState([]);
        const [loader,setloader]=useState(true);
        let [error,seterror]=useState(null);

          useEffect(()=>{
            fetch(url)
             .then((response) =>{
              if(!response.status===200){
                seterror("to keshat hayale 200");
                setloader(false)
              }else if(response.status===400){
                seterror("to keshat haya 400");
                setloader(false)
              }
             return response.json()
            })
              .then(result =>{
                setusers(result.data.ayahs);
                console.log(result.data.ayahs);
                setloader(false);
                seterror(false)
              }).catch((e)=>{
                seterror("halahay jkaziu");
                setloader(false)
              })
           
          },[url]);

return {loader,users,error};
};
export default useFetch;