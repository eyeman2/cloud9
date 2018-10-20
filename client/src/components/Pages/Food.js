import React, { Component } from "react";
import Scrape from "../Scrape/Scrape";
import recipes from "../../scraped_recipes.json";
import "../../css/style.css";
import { Carousel } from 'react-materialize';

const styles = {
  recipeCon: {
    height: "960px"
  },
  recipeMod: {
    height: "90%"
  }
}
class Food extends Component {
    state = {
      
    };

    render () {
      return(
        <div style={styles.recipeCon} className="recipeBox"> 
          <div  className="container center">
            <br />
            <div className="row">
              <div className="col s12 m6">
              <h2><i>Recipes & Cooking Tips</i></h2>
                <div className="recipe">
                  
                  {recipes.map((recipe, i) => (
                    <Scrape
                      key={i}
                      title= {recipe.title}
                      image= {recipe.image}
                      link= {recipe.link}
                      children= "View Recipe"
                    />
                  ))}

                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>  
              </div>

       
            </div>
          </div>
        </div>

      );}
}

export default Food;

