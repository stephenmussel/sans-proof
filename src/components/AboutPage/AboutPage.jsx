import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p><b>Sans /Proof</b> is a mobile application that helps users find zero-proof 
          beverage options at bars, restaurants, and liquor stores. It’s easy to find a 
          good selection of beer, wine, or other types of alcohol, but sometimes you just 
          want a nice drink without the buzz.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
