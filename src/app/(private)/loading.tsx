"use client"
import { deleteTokenLocalStorage, getTokenLocalStorage } from "@/utils/LocalStorage";
import { isTokenValid } from "@/utils/Token";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loading(){
    const router = useRouter();
    const token = getTokenLocalStorage();
    useEffect(() => {
    
        if(!token) {
        router.push("/");
        }
        if(!isTokenValid(token ? token :'')){
          deleteTokenLocalStorage()
          router.push("/");
      }
      }, [token])
    return(
        <p>Aguarde</p>
    )
}