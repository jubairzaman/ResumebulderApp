import * as React from 'react';


const SingleBlogPost = (props) => {
    const { title, description, urlToImage } = props.article;
    return (
        <div className=''>

            <div className="flex justify-center my-5 ">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={urlToImage} alt="" />
                    <div className="p-6 flex flex-col justify-start mt-3">
                        <h5 className="text-gray-900 text-2xl font-medium mb-2">{title}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {description}
                        </p>
                        <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>

                        <a className='mt-3 text-gray-500'>Read More <i class="las la-angle-right mt-2"></i></a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleBlogPost;