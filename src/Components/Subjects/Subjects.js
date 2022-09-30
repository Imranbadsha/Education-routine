import React from 'react';
import './Subjects.css';

const Subjects = (props) => {
   
    const {img,title,detail,time} =props.subject;
    return (
        <div className='card col-lg-4 g-5'>
        <img src={img}></img>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-5">{detail}</p>
        <p className='mb-5 fw-bold'><span className='text-info'>Time :</span>  {time} min</p>
        <a onClick={()=>props.clicksubject(props.subject)} href="#" className="btn btn-primary">Add Subject</a>
        </div> 
        </div>
    );
};

export default Subjects;




