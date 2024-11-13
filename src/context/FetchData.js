import React, { createContext,useEffect,useState} from 'react';
import axios from 'axios';

export const CategoryProvider = createContext();

// Fetch data for categories and trivia questions
const FetchData = ({ children }) => {
  
  const [categories, setCategories] = useState([]); // Categories from API
  const [questions, setQuestions] = useState([]); //questions frm  API
  
  
  const dataURL = 'https://opentdb.com/api_category.php';
  useEffect(() => {
    axios.get(dataURL)
      .then((response) => {
        setCategories(response.data.trivia_categories);
      })
      .catch((err) => {
        console.log('Error fetching categories ' + err);
      });
  }, []);   // Questions for selected category
  

  return (
    <CategoryProvider.Provider value={{categories,questions,setQuestions}}>
      {children}
    </CategoryProvider.Provider>
  );
};

export default FetchData;
