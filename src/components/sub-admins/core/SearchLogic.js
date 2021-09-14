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
        o.sn.toString().includes(searchTerm.toString()) ||
        o.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(result);
  };

  return [searchTerm, handleSearch, inputRef, searchResults];
}

export default SearchLogic;
