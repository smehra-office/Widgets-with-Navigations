import React, { useState, useEffect } from 'react';
import wikiSearch from '../API/wikipedia';

const Search = () => {
    const [term, setTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (term && term !== '') {
            const search = async () => {
                try {
                    let result = await wikiSearch.get('', {
                        params: {
                            srsearch: term
                        }
                    });
                    setSearchResult(result.data.query.search);
                }
                catch (error) {
                    console.log(error);
                }
            };
            let timeoutId = setTimeout(() => search(), 2000);  //get the id of timeout function
            return () => clearTimeout(timeoutId);    // cleanup function that clears timeout function when value of dependency 
            // changes again
        }
    }, [term]);


    const renderedList = searchResult.map(result => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a className='ui button' target='_blank' href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className='ui form'>
                <div className='ui field'>
                    <label htmlFor='search'>Enter query here</label>
                    <input type='text' name='search' onChange={(e) => {
                        setTerm(e.target.value)
                    }} value={term} />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedList}
            </div>
        </div>
    );
};


export default Search;