import React from 'react';
import Banner from '../Banner';

export default class Recipe extends React.Component {
  render() {
    return (
      <div className="container content">
        <h2> {this.props.params.recipeId} </h2>
        <Banner />
        <div className="col-md-4">
          <h2>Ingredients</h2>
          <p>For the crust:</p>
          <ul>
            <li> 1 ¼ cups/155 grams all-purpose flour</li>
            <li> ¼ cup/50 grams granulated sugar</li>
            <li> 3 tablespoons/25 grams confectioners’ sugar, plus more for sprinkling</li>
            <li> 1 teaspoon finely grated lemon zest</li>
            <li> ¼ teaspoon fine sea salt</li>
            <li> 10 tablespoons/142 grams cold unsalted butter, cut into cubes</li>
          </ul>

          <p>For the curd:</p>
          <ul>
            <li> 4 to 6 lemons</li>
            <li> 1 ½ cups/300 grams sugar</li>
            <li> 2 large eggs plus 3 yolks</li>
            <li> 1 ½ teaspoons/5 grams cornstarch</li>
            <li> Pinch of fine sea salt</li>
            <li> 4 tablespoons/57 grams butter</li>
            <li> ¼ cup/60 milliliters fruity extra-virgin olive oil</li>
            <li> Confectioners’ sugar</li>
            <li> Flaky sea salt, for sprinkling</li>
          </ul>
        </div>
        <div className="col-md-8">
          <h2>Preparation</h2>
          <h4>Step 1</h4>
          <p> Heat oven to 325 degrees and line a 9-by-9-inch baking pan with enough parchment to hang over two of the sides (to be used as handles later to lift the bars out of the pan).  </p>
          <h4>Step 2</h4>
          <p> To make the shortbread base, pulse together the flour, granulated sugar, confectioners’ sugar, lemon zest and salt in a food processor, or whisk together in a large bowl. Add butter and pulse (or use two knives or your fingers) to cut the butter into the flour until a crumbly dough forms. Press dough into prepared pan and bake until shortbread is pale golden all over, 30 to 35 minutes.</p>
          <h4>Step 3</h4>
          <p> While the shortbread is baking, prepare the lemon curd: Grate 1/2 tablespoon zest from lemons and set aside. Squeeze lemons to yield 3/4 cup juice. </p>
          <h4>Step 4</h4>
          <p> In a small saucepan, whisk together lemon juice, sugar, eggs and yolks, cornstarch and fine sea salt over medium heat until boiling and thickened, 2 to 5 minutes. Make sure mixture comes to a boil or the cornstarch won’t activate. But once it boils do not cook for longer than 1 minute or you risk the curd thinning out again. Remove from heat and strain into a bowl. Whisk in butter, olive oil and lemon zest.  </p>
          <h4>Step 5</h4>
          <p> When the shortbread is ready, take it out of the oven and carefully pour the lemon curd onto the shortbread base; return the pan to the oven. Bake until topping is just set, 10 to 15 minutes more. Allow to cool to room temperature, then refrigerate until cold before cutting into bars. Sprinkle with confectioners’ sugar and flaky sea salt right before serving.  </p>
        </div>
      </div>
    );
  }
}
