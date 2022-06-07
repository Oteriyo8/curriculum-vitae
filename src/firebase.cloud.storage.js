import { storage } from "./firebase";

import { ref, getDownloadURL } from "firebase/storage";

export const getURL = async (ruta = 'profile/rosa.jpeg') =>{
    const pathReference = ref(storage, ruta);
    const url = await getDownloadURL(pathReference)
    return url;
}