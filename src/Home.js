// import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: bigBlogs, isPending, error} = useFetch('http://localhost:8000/blogs');    

    return (
        <div className="home">
            <div className="content">
                <h2 >Homepage </h2>
                
                <br />
                <br />   
                <p> Some CRUD content </p>
                { isPending && <div>Loading ... </div>}
                { error && <div> {error} </div>}
                
                {bigBlogs && <BlogList blogs={bigBlogs} title="Alls Blogs"/>}

                {/* Sample code to test useEffect HOOKS */}
                <br />   
                <br />   
                </div>
       </div>
    );
    
}

export default Home;