import React from "react"
import axios from 'axios';
import './Home.scss';
import PostListWrapper from './Components/PostListWrapper'
import ProductListWrapper from '../../Components/ProductListWrapper/ProductListWrapper';
const Home = () => {
axios.get('https://dummyjson.com/products').then(function(response){
console.log(response);
})

return(
<React.Fragment>
<div className="imgBackgroundHome">
    <p> Tu będzie zdjęcie</p>
</div>
<PostListWrapper />
<div>
<ProductListWrapper />
</div>
</React.Fragment>
)
}

export default Home;