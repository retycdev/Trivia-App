import { useParams } from 'react-router-dom';
import AppBar from './App_bar';
import { useState } from 'react';

function Playroom() {
    const { categoryId } = useParams();
    const [questions, setQuestions] =useState([])

    // useEffect(() => {
    //     fetch(`https://api.example.com/questions?category=${categoryId}`)
    //         .then(response => response.json())
    //         .then(data => setQuestions(data));
    // }, [categoryId]);

    return (
        <div>
            <AppBar/>
            {/* Render questions or trivia data */}
        </div>
    );
}

export default Playroom