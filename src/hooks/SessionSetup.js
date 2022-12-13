import uuid from 'react-uuid';
import { useState, useEffect } from "react";
import axios from "axios";

const SessionSetup = () => {
    const token = localStorage['token'] || uuid();
    const dataUrl = `http://localhost:3500/sessions/`;
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if(isMounted) {
                    setData(response.data);
                    setFetchError(null);
                }
            } catch (error) {
                if(isMounted) {
                    setFetchError(error.message);
                    setData([]);
                }
            } finally {
                isMounted && setIsLoading(false)
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }
        return cleanUp;
    },[dataUrl]);
    
    let session = (!fetchError && !isLoading && data?.length && data.filter((data)=>{return data['id'] === token }))?data.filter((data)=>{return data['id'] === token })[0]:{'id':token,'note':(new Date()).toString()};

    return {session:session,fetchError:fetchError,isLoading:isLoading}

};

export default SessionSetup;