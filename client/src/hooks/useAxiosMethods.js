import React from 'react'
import useAxiosPrivate from './useAxiosPrivate'

const useAxiosMethods = () => {

    const axiosPrivate = useAxiosPrivate()

    const get = (url, setResponse) => {

        let isMounted = true;
        const controller = new AbortController();

        const getData = async () => {
            try {
                const response = await axiosPrivate.get(url, {
                    signal: controller.signal
                });
                isMounted && setResponse(response.data);
                console.log(response);
            } catch (err) {
                console.error(err);
            }
        }

        getData();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }

    const post = (url, data, setResponse) => {
        let isMounted = true;
        const controller = new AbortController();

        const postData = async () => {
            try {
                const response = await axiosPrivate.post(url, data, {
                    signal: controller.signal
                });
                isMounted && setResponse(response.data);
                console.log(response);
            } catch (err) {
                console.error(err);
            }
        }

        postData().then();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }



  return {get, post}
}

export default useAxiosMethods