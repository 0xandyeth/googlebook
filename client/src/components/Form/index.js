import React from "react";
import './styles.css'

function Form(props){
return (
  <div className="container">
  {/* <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search for and save Books of Interest</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
        Search
        </button>
    </div>
  </form> */}

<div id="cover">
  <form>
    <div class="tb">
      <div class="td">
        <input 
         onChange={props.handleInputChange}
         value={props.search}
         name="search"
         type="text"
         className="form-control"
         placeholder="Search a Book"
         id="search"/> 
      </div>
      <div class="td" id="s-cover">
        <button onClick={props.handleFormSubmit} >
          <div id="s-circle"></div>
          <span></span>
        </button>
      </div>
    </div>
  </form>
  </div>
  </div>
);
}

export default Form;
