import { useEffect } from 'react';

// f5c10180

const API_URL = 'http://omdbapi.com?apikey=f5c10180';

const App = () => {

    const searchMovies = async (title) => {
        
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;
