import React from 'react';
import Faq from 'react-faq-component';

const FAQ = () => {

    const data = {
        title: "",
        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: "Lorem ipsum dolor sit amet, consectetur "
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
            },
            {
                title: "What is the package version",
                content: "v1.0.5"
            }]
    }


    return (
        <div className='w-9/12 mx-auto my-32'>

            <h2 className='text-5xl text-center font-semibold text-black pt-28'>Frequently Ask Question</h2>
            <div className='my-32 w-9/12 mx-auto'><Faq data={data} /></div>
        </div>
    );
};

export default FAQ;