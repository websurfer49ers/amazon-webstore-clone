import React, {useState} from "react"; 

function QASearchBar(props){
    const [updateSearch, setUpdateSearch] = useState("");
    const [returnedResults, setReturnedResults] = useState([]);
   const handleSubmit = (e) =>  {
  e.preventDefault();
const result = props.tasks
console.log(result)

    }
    const handleChange = (e) =>  {

  setUpdateSearch(e.target.value);
    }
    
    return(
<div className="searchButton">
    <form onSubmit={handleSubmit}>
    <input placeholder="Search Q/A Section Here!" onChange ={handleChange}/>
    <button type="submit" className="searchButton" >
      "Click Here to Search"
    </button>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim commodi nesciunt sint a nam placeat assumenda quidem nulla recusandae, dolorum libero, ullam dicta adipisci ex ducimus suscipit, nisi eligendi! Mollitia ex incidunt excepturi, ipsa ea nulla officiis tenetur facere vero hic? Natus quisquam vero expedita facere quaerat id, aliquid soluta dicta doloremque recusandae delectus provident velit nostrum nisi in totam quis repudiandae voluptatibus fugit reiciendis nobis odio. Ipsa quis quibusdam quo voluptatem cupiditate atque voluptatum, laborum, sint dolores, libero officiis nulla vel distinctio id quas consequuntur odio magnam placeat cumque nam corrupti ad ratione dolorem minima! Sint perspiciatis cum, quas ut accusantium earum quibusdam minima nihil. Porro vero at ut? Praesentium ea officia sed laboriosam aut commodi omnis dolore quos exercitationem? Laudantium eligendi sunt perspiciatis minima, exercitationem dicta libero. Unde iste atque velit commodi mollitia harum ipsum possimus molestias alias officiis neque a assumenda ab sit, modi rem nobis accusamus!
    </p>
    </form>
</div>
    )
}

export default QASearchBar; 