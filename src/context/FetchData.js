import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const CategoryProvider = createContext();

const FetchData = ({ children }) => {
  const [categories, setCategories] = useState([]); // Stores categories with images

  // Function to add images based on category name
  const addImagesToCategories = (categories) => {
    return categories.map((category) => {
      let imageUrl;
      switch (category.name) {
        case "General Knowledge":
          imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQ8Pmu317d3w9QMmijK6wDlLnLvJpusji3A&s";
          break;
        case "Entertainment: Books":
          imageUrl = "https://i.guim.co.uk/img/media/5a87aa3797fcdca6ef7874a7e8e958bec5ce759c/0_0_1772_1063/master/1772.jpg?width=620&quality=85&auto=format&fit=max&s=31155a7a5c538534833ecc21db3f1e77";
          break;
        case "Entertainment: Film":
          imageUrl = "https://www.newstatesman.com/wp-content/uploads/sites/2/2021/12/2ATHYW0-1038x778.jpg";
          break;
        case "Entertainment: Music":
          imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVEvNyXhkU7y3v8ZdDV9jSxYSSpfvZ6O84w&s";
          break;
        case "Entertainment: Musicals & Theatres":
          imageUrl = "https://dailyfreepress.com/wp-content/uploads/9C74682C-A6A0-4CAD-88DB-113D45951F1D-400x300.jpeg";
          break;
        case "Entertainment: Television":
          imageUrl = "https://www.rollingstone.com/wp-content/uploads/2022/09/The-50-Greatest-TV-Shows_Collage_Final-static.jpg?w=1600&h=900&crop=1";
          break;
        case "Entertainment: Video Games":
          imageUrl = "https://media.istockphoto.com/id/1129878609/vector/gamer-using-gaming-controller.jpg?s=612x612&w=0&k=20&c=xQjnh2ksq3Pn_mzR_VqcIYBW_j_4QtRdo9s4KHH0yXA=";
          break;
        case "Entertainment: Board Games":
          imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSvxWeDz55Wn1DPpVT6rSNpJLhoAHMRYkCqQ&s";
          break;
        case "Science & Nature":
          imageUrl = "https://media.gettyimages.com/id/1285414364/vector/artistic-painted-backgrounds-illustration.jpg?s=612x612&w=gi&k=20&c=7aL4R_3_9GYH_PbxpkdfE4ZnpLAHY5pzClcJi3JIiBU=";
          break;
        case "Science: Computers":
          imageUrl = "https://media.istockphoto.com/id/1383447162/vector/90s-retro-vaporwave-aesthetics-digital-screen-user-interface-cute-old-computer-ui-elements.jpg?s=612x612&w=0&k=20&c=NRDpByU-7UXfW-RgxyPDjukoPiPb-P7-5-_MnBc7pyo=";
          break;
        case "Science: Mathematics":
          imageUrl = "https://media.istockphoto.com/id/1044168372/vector/mathematics.jpg?s=612x612&w=0&k=20&c=02J5s_9nIBV_T4B7ng_6qo2wMfZQne-w8xNHm8XSzqo=";
          break;
        case "Mythology":
          imageUrl = "https://i.pinimg.com/originals/8c/7f/61/8c7f61ab63150785ac21308c7be6fb84.png";
          break;
        case "Sports":
          imageUrl = "https://img.freepik.com/free-vector/flat-design-people-doing-sports_52683-126625.jpg";
          break;
        case "Geography":
          imageUrl = "https://thumbs.dreamstime.com/b/set-geography-symbols-equipments-web-banners-vintage-outline-sketch-doodle-style-education-concept-back-to-school-136641079.jpg";
          break;
        case "History":
          imageUrl = "https://img.freepik.com/premium-vector/history-textbook-school-book-doodle-symbols_8071-53104.jpg?semt=ais_hybrid";
          break;
        case "Politics":
          imageUrl = "https://thumbs.dreamstime.com/b/print-328348282.jpg";
          break;
        case "Art":
          imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pNcJ8QjK3H3zVyDnNDHz87LytTNDfaaPXw&s";
          break;
        case "Celebrities":
          imageUrl = "https://assets.promptbase.com/DALLE_IMAGES%2FtrDFJNOCEahZ4qtdaCa0E1246nu1%2Fresized%2F1682517348723_800x800.webp?alt=media&token=aca336c4-ed82-493c-8260-56b7f4a755c7";
          break;
        case "Animals":
          imageUrl = "https://static.vecteezy.com/system/resources/thumbnails/046/591/724/small_2x/cartoon-cute-wild-and-domestic-animals-set-of-isolated-illustrations-vector.jpg";
          break;
        case "Vehicles":
          imageUrl = "https://img.freepik.com/free-vector/sedan-car-concept-illustration_114360-13223.jpg?semt=ais_hybrid";
          break;
        case "Entertainment: Comics":
          imageUrl = "https://backgroundillustration.online/wp-content/uploads/2023/04/A-comic-book-illustration-of-robbery-characters.jpg";
          break;
        case "Science: Gadgets":
          imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_34YrDD_s06N4QO73rSJke_dnDRAzertWg&s";
          break;
        case "Entertainment: Japanese Anime & Manga":
          imageUrl = "https://t4.ftcdn.net/jpg/06/74/13/55/360_F_674135541_MTWNPs6W79ClniLslAoJKux9d3wpp1Zp.jpg";
          break;
        case "Entertainment: Cartoon & Animations":
          imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9sN_kRQpekqAkfMF8IpMKhbCng1HPH5TcA&s";
          break;
        default:
          imageUrl = "https://via.placeholder.com/150"; // Fallback image
      }
      return { ...category, image: imageUrl }; // Return category with added image
    });
  };

  const dataURL = 'https://opentdb.com/api_category.php';

  useEffect(() => {
    axios.get(dataURL)
      .then((response) => {
        const categoriesWithImages = addImagesToCategories(response.data.trivia_categories);
        setCategories(categoriesWithImages);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, []);

  return (
    <CategoryProvider.Provider value={{ categories }}>
      {children}
    </CategoryProvider.Provider>
  );
};

export default FetchData;
