import React from 'react';

const Question = () => {
    return (
        <div className='container mt-5'>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How Does React Work
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
    Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
    Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What Is The Difference Between props and State In React
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p><strong>Props :</strong> Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties. </p>
        
        <p><strong>State :</strong> The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.</p>
        <p><strong>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</strong></p>
        
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How Many Ways We Can Use useEffect In React?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>I think of 4 possible ways to call the method:</strong> 
        <ul>
            <li><strong>once, when component mounts :</strong> Usually, you would like to use it for fetching data or adding event listeners.To run the function once, add an empty dependency list. If there are no dependencies in it, that means it will stay the same all the time, and will not call the function again.</li>
            <li><strong>on every component render :</strong> To call the function on each component render, skip adding the dependency list. No list, nothing to compare against, that means run the effect every time.</li>
            <li><strong>on every component render with a condition: </strong>To call a function conditionally, specify the list of dependencies.And the rule of thumb is to always add those dependencies that you are using inside the useEffect()</li>
            <li><strong>when component unmounts: </strong>To clean up (remove event listeners or stop data fetching with a side effect) after the component unmounts, a return statement with a function should be added inside the useEffect() hook.</li>
        </ul>
      </div>
    </div>
  </div>

    </div>
    </div>
        
    );
};

export default Question;