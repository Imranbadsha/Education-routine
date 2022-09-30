// use local storage to manage data
const addToDb = id =>{
    let breaktimes = {};

    //get  from local storage
    const storetime = localStorage.getItem('break-time');
    if(storetime){
        breaktimes = JSON.parse(storetime);
    }

    // add quantity
    const quantity = breaktimes[id];
    if(quantity){
        const newQuantity = quantity + 1;
        breaktimes[id] = newQuantity;
    }
    else{
        breaktimes[id] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breaktimes));
}
const getstoretime =()=>{
    let breaktimes = {};

    //get  from local storage
    const storetime = localStorage.getItem('break-time');
    if(storetime){
        breaktimes = JSON.parse(storetime);
    }
    return breaktimes ;
}
export {
    addToDb,
    getstoretime 
}
