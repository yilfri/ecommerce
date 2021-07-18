import React from 'react';

const Search = () => {
	const handleSearchProduct = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSearchProduct}>
			<input type="text" placeholder="Ej. Goku, Batman..." />

			<input type="submit" value="Buscar" />
		</form>
	);
};

export default Search;
