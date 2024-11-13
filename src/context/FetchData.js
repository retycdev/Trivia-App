import React, { createContext} from 'react';


export const CategoryProvider = createContext();

// Fetch data for categories and trivia questions
const FetchData = ({ children }) => {
  
  // const [questions, setQuestions] = useState([]);   // Questions for selected category
  // const { categoryId } = useParams(); // Category ID from the URL

  // Fetch categories
 

  // Fetch questions based on categoryId


  return (
    <CategoryProvider.Provider>
      {children}
    </CategoryProvider.Provider>
  );
};

export default FetchData;
