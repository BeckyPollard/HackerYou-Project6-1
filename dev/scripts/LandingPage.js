import React from 'react';

const LandingPage = () => {
        return (
          <main className="landingPage">
              <div className="landingContent">
                <h1>Wine ON, Dine ON</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At magni voluptates ipsa nihil quae consectetur nobis, sequi vel fuga doloremque quidem quibusdam nisi praesentium dicta labore iste iusto placeat dolores neque cum? Sapiente eveniet sequi vel fuga doloremque rem vitae? Excepturi, id exercitationem nisi, soluta minima quisquam ducimus quae error, nulla beatae esse laboriosam!</p>
                <form action="">
                <div>
                    <input type="checkbox" id="vegan"/><label htmlFor="vegan">vegan</label>
                    <input type="checkbox" id="paleo"/><label htmlFor="paleo">paleo</label>
                    <input type="checkbox" id="gluten"/><label htmlFor="gluten">Gluten-Free</label>
                    <input type="checkbox" id="seafood"/><label htmlFor="seafood">Seafood-Free</label>
                    <input type="checkbox" id="soy"/><label htmlFor="soy">Soy-Free</label>
                    <input type="checkbox" id="dairy"/><label htmlFor="dairy">Diary-Free</label>
                    <input type="checkbox" id="egg"/><label htmlFor="egg">Egg-Free</label>
                    <input type="checkbox" id="treenut"/><label htmlFor="treenut">Tree-Nut-Free</label>
                </div>
                <input type="submit" value="Explore"/>
                </form>
              </div>
          </main>
        )
}

export default LandingPage