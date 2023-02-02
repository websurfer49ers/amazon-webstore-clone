import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

function QASearchBar(props) {
    const [searchText, setSearchText] = useState("");
    const [returnedResults, setReturnedResults] = useState([]);
    const [isTrue, setIsTrue] = useState(false);

    useEffect(() => {
        newerFetch();
    }, []);
    const newerFetch = () => {
        fetch(`http://api/questions/product/${props.productId}`, {
            mode: "cors",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setReturnedResults(data);
            }
            )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = returnedResults.filter((fetchedData) => {
            // filtered reluts. can be what you display when someone does a search. it will use all the reults, stored in returned results. and keep them there. and then when somenoe does a filter, you . if someone clears the fiter ande hits enter again, you can just return fromt eh database. pre4vents you from havingt to make the fetch request more then once. Another stater for the filtered questions. data format. want id for answer and question. to make it easy to use key. figure out.
            return fetchedData.question.toLowerCase().includes(searchText.toLowerCase());
        });

        setReturnedResults(result);
    }
    const handleChange = (e) => {
        setIsTrue(true);
        setSearchText(e.target.value);
    }
    const handleClose = (e) => {
        setIsTrue(false);
        setSearchText("");
        newerFetch();
    }

    return (
        <div className="container">
            <div className="searchwrapper">
                <h2>Looking for specific info?</h2>
                <form onSubmit={handleSubmit}>
                    <input className="searchinput" placeholder="Search Q/A Section Here!" value={searchText} type="text" onChange={handleChange} />
                    <button type="submit" className="searchButton" >
                        <BiSearchAlt2 />
                    </button>
                    <button className="xmarksthespot" type="button" style={isTrue ? { display: "block" } : { display: "none" }} onClick={handleClose}>
                        <GrFormClose />
                    </button>
                </form>
                <div className="searchresults">
                    {returnedResults.length > 0 && (<div>
                        <h2> Customer questions & answers</h2>
                        {returnedResults.map((result) => {
                            return (
                                <div className="votescontainer">
                                    <div className="votes">
                                        <span> <TiArrowSortedUp /> </span>
                                        <p> {Math.floor(Math.random()*100)} <span>votes</span></p>
                                        <span className="arrowdown"> <TiArrowSortedDown /> </span>

                                    </div>

                                    <div className="questions-wrapper" key={Math.random() * Math.random()}>
                                        <div className="question-answer">
                                            <h3>Question:</h3>
                                            <p>{result.question}</p>
                                        </div>
                                        <div className="question-answer goaheadanswertexthestypingijustsaidyou">
                                            <h3>Answer:</h3>
                                            <p>{result.answer}</p>
                                        </div>
                                    </div>
                                </div>)
                        })}

                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QASearchBar;
