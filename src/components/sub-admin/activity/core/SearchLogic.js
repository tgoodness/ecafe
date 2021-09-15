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
        o.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.taskPerformed.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.registrationId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.role.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.date.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.time.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(result);
  };

  return [searchTerm, handleSearch, inputRef, searchResults];
}

export default SearchLogic;
