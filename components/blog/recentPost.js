import React from 'react';

const RecentPost = (props) => {


    const { publishedAt, title, description, urlToImage } = props.article;
    return (
        <div>
            <a href="#" className="flex flex-col items-center bg-white md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-20 h-20 rounded-t-lg md:h-20 md:w-28 md:rounded-none md:rounded-l-lg" src={urlToImage} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <span className='text-xs  text-gray-500'>{publishedAt}</span>

                </div>
            </a>
        </div>
    );
};

export default RecentPost;