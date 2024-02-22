import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [universities, setUniversities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchUniversities = async () => {
            if (searchQuery) {
                setIsLoading(true);
                try {
                    const response = await axios.get(
                        `http://universities.hipolabs.com/search?name=${searchQuery}&limit=1000`
                    );
                    setUniversities(response.data);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error fetching universities:', error);
                    setIsLoading(false);
                }
            } else {
                setUniversities([]);
            }
        };

        const timeoutId = setTimeout(fetchUniversities, 300);
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleUniversitySelection = (university) => {
        const universityNameParam = encodeURIComponent(university.name);
        navigate(`/Badge Request?university=${universityNameParam}`);
    };

    return (
        <div className="SearchBar">
            <input
                type="text"
                placeholder="Search for universities..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {universities.map((university) => (
                        <li key={uuidv4()} onClick={() => handleUniversitySelection(university)}>
                            {university.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;