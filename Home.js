import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
const [blogs, setBlogs]= useState([
  {title:'My new website',body:'lorem ipsum...',author:"mario", id:1},
  {title:'Welcome party',body:'lorem ipsum...',author:"Yoshi", id:2},
  {title:'Web dev top tips',body:'lorem ipsum...',author:"kenny", id:3},
  


])

  return (
   <div classname="Home">
    <BlogList blogs={blogs} title ="All Blogs " />
    </div>
  );
};

export default Home;
