import React from 'react';
import {  Form } from 'react-bootstrap';
import './Home.css';
// import fakeData from '../../fakeData/fakeData.json';
import { useState } from 'react';
import { useEffect } from 'react';
import Book from '../Book/Book';
import {BeatLoader} from 'react-spinners';


const Home = () => {
    const [bookData,setData] = useState([])
    useEffect(() => {
            fetch('https://fathomless-temple-21238.herokuapp.com/book')
            .then(res => res.json())
            .then(data => setData(data))
    },[])
    return (
        <div className="mt-2  home">
            
            <h1  className="text-center font">Drive the road of knowledge with the best collection of books.</h1>
            <div className=" d-flex justify-content-center mt-5">
                <Form>
                    <Form.Label htmlFor="inlineFormInputName" srOnly></Form.Label>
                    <Form.Control id="inlineFormInputName" placeholder="Search Book..." />
                </Form>
                <button className="btn btn-dark ">Search</button>
            </div>


            <div className="row d-flex justify-content-center">
                   <div className="spinner" style={{marginTop:"350px"}}>
                    {
                        bookData.length === 0 && <BeatLoader size={48} color ="black" loading  />
                    }
                   </div>

                    {
                       bookData.map(bk => <Book book ={bk} key ={bk._id}></Book>) 
                    }

            </div>
        </div>
    );
};

export default Home;