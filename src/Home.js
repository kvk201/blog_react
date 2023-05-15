import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //use effects runs everytime the component re-renders.. it takes a function as arg and this fn runs everytime comp rerenders
    useEffect(()=>{
        console.log('use effect ran on each render and re-render');
    });
    //best place to fetch data
    useEffect(()=>{
        console.log('use effect ran only once during intialization..');
        setTimeout(() => {
            fetch('http://localhost:8000/blogss')
                .then(res=>{
                    if (!res.ok){
                        throw Error('could not fetch data for resource')
                    }
                    return res.json();
                })
                .then((data)=>{
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    setError(err.message)
                    setIsPending(false)
                });
                }, 1000);
        
    }, []);

    useEffect(()=>{
        console.log('use effect ran on render and re-render of blog');
    }, [blogs]);


    return ( 
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>/*conditional template, only if left is true right template will be outputted*/}
            {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author==='vivek')} title="Vivek's Blogs"/>}
        </div>
     );
}
 
export default Home;