import React, { useEffect, useState } from 'react';
import Subjects from '../Subjects/Subjects';
import imran from '../../imran.jpg';
import toast, { Toaster } from 'react-hot-toast';
import { addToDb, getstoretime } from '../../utilities/fakedb';
const notify = () => toast('Congratulations! You Check Your Routine');

const Main = () => {
    
    const breaktime =[{id:1 ,t: 10},{id:2,t: 15},{id:3,t: 20},{id:4,t: 30}];
    const [subjectsbook, setsubjectsbook]= useState([]);
    const [routinetime, setroutinetime]= useState([]);
    const [routinetotal, setroutinetotal]= useState([0]);
    const [countbreaktime, setcountbreaktime]= useState([0]);
    
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json()
        .then(data=>setsubjectsbook(data)))
        
    },[])
    useEffect(()=>{
        const breaktime = getstoretime()
        const timearray =[];
        for (const id in breaktime) {
            timearray.push(id);  
            setcountbreaktime(timearray);
        }
    },[])

    const clicksubject =(subject)=>{
        
        const totaltime =[...routinetime,subject.time ];
        setroutinetime(totaltime);
        let totalsubjecttime = 0;
        for (let i=0; i<totaltime.length; i++) {
            totalsubjecttime= totalsubjecttime + totaltime[i];  
        } 
        setroutinetotal(totalsubjecttime);
    }

    const clickbreaktime =(btime)=>{
        setcountbreaktime(btime.t);  
        addToDb(btime.t);     
    }
    

   
    return (
        <div className='row  mt-5 ms-5'>
            <div className='row col-lg-8'>
                {
                subjectsbook.map(subject => <Subjects 
                        key={subject.id}
                         subject={subject}
                         clicksubject = {clicksubject} >   
                        </Subjects>)
                }
            </div>
            

            <div className='col-lg-4 ms-4 ps-2'>
            {/* personal info  */}
            <div className='mt-5'>
             <img className='rounded-circle' src={imran}></img>
             <h1 className='text-success text-opacity-75'>Imran Badsha</h1>
             <p>Lives in Dhaka , Bangladesh</p>
             <p>Graduated From AIUB </p>
            </div>
            <h3 className='my-5'>ADD A BREAK</h3>
            <div>
                {
                    breaktime.map((btime)=><button onClick={()=>clickbreaktime(btime)} className='bg-info m-2 px-2' key={btime.id}>{btime.t} min</button>)
                }
            
            </div>
            {/* Educational time  */}
            
            <div className='mt-5'>
                
                <h3 className='bg-secondary p-3'>Educational time :<small>{routinetotal} min</small></h3>
                <h3 className='bg-secondary p-3'>Break time : <small>{countbreaktime} min</small> </h3>
            </div>
            <div>
                
                <button onClick={notify} className='bg-info'>Activity Completed </button> 
                <Toaster/>
                  
            </div>
            </div>
    </div>
    );
};

export default Main;

