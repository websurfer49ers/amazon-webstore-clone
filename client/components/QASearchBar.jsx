import React, { useEffect, useState } from "react";

function QASearchBar(props) {
    const [searchText, setSearchText] = useState("");
    const [returnedResults, setReturnedResults] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/api/questions/product/${props.productId}`,{
         mode: "cors",
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setReturnedResults(data);
        }
    )},[]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = props.questions.filter((fetchedData) => {

            return fetchedData.question.toLowerCase().includes(searchText.toLowerCase());
        });

        setReturnedResults(result);
    }
    const handleChange = (e) => {

        setSearchText(e.target.value);
    }

    return (
        <div className="searchButton">     
       
            <form onSubmit={handleSubmit}>
                <input placeholder="Search Q/A Section Here!"  value={searchText} type="text" onChange={handleChange} />
                <button type="submit" className="searchButton" >
                    "Click Here to Search"
                </button>
            </form> 
            <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim commodi nesciunt sint a nam placeat assumenda quidem nulla recusandae, dolorum libero, ullam dicta adipisci ex ducimus suscipit, nisi eligendi! Mollitia ex incidunt excepturi, ipsa ea nulla officiis tenetur facere vero hic? Natus quisquam vero expedita facere quaerat id, aliquid soluta dicta doloremque recusandae delectus provident velit nostrum nisi in totam quis repudiandae voluptatibus fugit reiciendis nobis odio. Ipsa quis quibusdam quo voluptatem cupiditate atque voluptatum, laborum, sint dolores, libero officiis nulla vel distinctio id quas consequuntur odio magnam placeat cumque nam corrupti ad ratione dolorem minima! Sint perspiciatis cum, quas ut accusantium earum quibusdam minima nihil. Porro vero at ut? Praesentium ea officia sed laboriosam aut commodi omnis dolore quos exercitationem? Laudantium eligendi sunt perspiciatis minima, exercitationem dicta libero. Unde iste atque velit commodi mollitia harum ipsum possimus molestias alias officiis neque a assumenda ab sit, modi rem nobis accusamus!
                    </p>
            <div className="searchresults">
                {returnedResults.length > 0 && (<div>
                    <h2> Search Results</h2> 
                  
                    <table>
                        <thead>
                            <tr>
                                <th>Question</th>
                            </tr>
                        </thead>
                        <tbody>
                            {returnedResults.map((result) => {
                                return (
                                    <tr key={result.question}>
                                        <td>{result.answer}</td>
                                        <td>{result.question}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                

                </div>
                )}
            </div>
        </div>
    );
}

export default QASearchBar; 