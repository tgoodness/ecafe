import { useState, useRef } from 'react';

function SearchLogic(data) {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm === '') {
      inputRef.current.focus();
    }

    const result = data.filter(
      (o) =>
        o.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.amountInDollar.toString().includes(searchTerm.toLowerCase()) ||
        o.amountInCoin.toString().includes(searchTerm.toLowerCase()) ||
        o.feeInDollar.toString().includes(searchTerm.toLowerCase()) ||
        o.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.time.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(result);
  };

  return [searchTerm, handleSearch, inputRef, searchResults];
}

export default SearchLogic;
