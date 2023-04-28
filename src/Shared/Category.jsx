import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {
    const {_id} =useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            { _id && <h1>this is category {categoryNews.length} </h1>}
            {
                categoryNews.map(news => <NewsCard
                key={_id}
                news ={news}
                ></NewsCard> )
            }
        </div>
    );
};

export default Category;