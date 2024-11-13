import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Card from './Card'
import AppBar from './App_bar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CategoryProvider } from '../context/FetchData'

const Container=styled.div`
height:calc(100vh - 64px);
overflow-y:auto;
display:grid;
grid-template-columns:repeat(3, 1fr);
gap:32px;
padding:48px 64px;

@media(max-width:480px){
padding:48px 12px;
grid-template-columns:1fr;
}

@media(min-width:481px) and (max-width:1024px){
padding:48px 32px;
grid-template-columns:repeat(2,1fr);

}
`


const CardList = () => {
  const [categories, setCategories] = useState([]); // Categories from API

  const dataURL = 'https://opentdb.com/api_category.php';
  useEffect(() => {
    axios.get(dataURL)
      .then((response) => {
        setCategories(response.data.trivia_categories);
      })
      .catch((err) => {
        console.log('Error fetching categories ' + err);
      });
  }, []);
  
  return (
    <div>
      <AppBar/>
      <Container>
        {categories.map((category,idx)=>{
            return<Link  key={idx} to={`/Trivia-App/playroom/${category.name}`} style={{textDecoration:"none",color:"black"}}>
              <Card text={category.name}/>
            </Link>
        })}
      </Container>
     
    </div>
  )
}

export default CardList
