import React, { useState, useEffect } from 'react';
import { getProviders, getCsrfToken, useSession, getSession } from "next-auth/react"
import SingleCvCard from './singleCvCard';
import { data } from 'autoprefixer';

const Mycvs = () => {
    const { data: session } = useSession()
    const [cvData, setData] = useState([0])
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

    return (
        <div className='container mx-auto mt-20 my-32'>





            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">

                {
                    cvData.map(cv =>
                        <SingleCvCard
                            key={cv.id}
                            cvData={cv}

                        ></SingleCvCard>

                    )
                }
            </div>

        </div>








    );
};

export default Mycvs;