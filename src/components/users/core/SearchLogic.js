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
        o.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.firstName.toString().includes(searchTerm.toLowerCase()) ||
        o.lastName.toString().includes(searchTerm.toLowerCase()) ||
        o.email.toString().includes(searchTerm.toLowerCase()) ||
        o.verified.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(result);
  };

  return [searchTerm, handleSearch, inputRef, searchResults];
}

export default SearchLogic;
