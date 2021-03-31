import React from 'react';
import {  Form } from 'react-bootstrap';
import './Home.css';
// import fakeData from '../../fakeData/fakeData.json';
import { useState } from 'react';
import { useEffect } from 'react';
import Book from '../Book/Book';


const Home = () => {
    const [data,setData] = useState([])
    useEffect(() => {
            fetch('http://localhost:5055/book')
            .then(res => res.json())
            .then(data => setData(data))
    },[])
    return (
        <div className="mt-2  home">
            <h1 className="text-center">Drive the road of knowledge with the best collection of books.</h1>
            <div className=" d-flex justify-content-center mt-5">
                <Form>
                    <Form.Label htmlFor="inlineFormInputName" srOnly></Form.Label>
                    <Form.Control id="inlineFormInputName" placeholder="Search Book..." />
                </Form>
                <button className="btn btn-dark ">Search</button>
            </div>


            <div className="row d-flex justify-content-center">

                    {
                        data.map(bk => <Book book ={bk} key ={bk._id}></Book>)
                    }

            </div>
        </div>
    );
};

export default Home;