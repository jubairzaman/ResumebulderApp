import React, { useState, useEffect } from 'react';
import { getProviders, getCsrfToken, useSession, getSession } from "next-auth/react"
import SingleCvCard from './singleCvCard';
import { data } from 'autoprefixer';
import { Divider } from '@mui/material';

const Mycvs = () => {
    const { data: session } = useSession()
    const [cvData, setData] = useState()
    const [isLoading, setLoading] = useState(false)



    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        await fetch('/api/profile-data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    };

    const refresh = () =>{
        fetchData()
    }

    return (
        <div className='container mx-auto mt-20 my-32'>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">

                {
                    (cvData??[]).map((cv) =>{
                        
                        return <div key={cv.id}>
                            <SingleCvCard
                            refresh={refresh}
                            key={cv.id}
                            cvData={cv}


                        ></SingleCvCard>
                        </div>
                    }
                        

                    )
                }
            </div>

        </div>








    );
};

export default Mycvs;