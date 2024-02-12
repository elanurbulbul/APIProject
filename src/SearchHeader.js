import { useState } from "react";

function SearchHeader({search}) {

  const [valueInput, setValue] = useState('');
  const handleFormSubmit = (event) =>{
    event.preventDefault();
    debugger;
    search(valueInput);
  };
  
  const handleChange=(e)=>{
    setValue(e.target.value);//input a girilen değer);
  }

    return(
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label> Ne Arıyorsunuz? </label>
        <input value={valueInput} onChange={handleChange}/>
        {/*buradaki value değeri input içindeki başlangıç değeridir */}
        {/* <div>{valueInput}</div> */}
      </form>  
    </div> 
    );
}

export default SearchHeader;