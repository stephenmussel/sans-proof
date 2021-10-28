import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p><b>Sans /Proof</b> is a mobile application that helps folks find zero-proof 
          beverage options at nearby bars, restaurants, and stores. It’s easy to 
          find a good selection of beer, wine, and other types of alcohol, but sometimes 
          you just want a nice drink without the buzz.
        </p>
      </div>
      <img src="images/about_page.png"/>

    </div>
  );
}

export default AboutPage;
