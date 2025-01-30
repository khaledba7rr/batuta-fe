import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <header>
      <div className='container'>
        <div id="navlist">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>

          <div className="search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Movies"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <button type="submit">
                <i className="fa fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
