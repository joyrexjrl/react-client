import React from 'react';

const WelcomeScreen = () => {
  return (
    <section id="welcome_screen" className="welcome_screen flex col page_dislayer">
      <h1>Character Generator</h1>
      <p className="welcome_screen_info">
        This is a project I am working on that creates simple and quick characters for some tabletop role playing games.
        This is a work in progress and more should be added in the future. To begin, use the game icons above to start
        generating characters.
      </p>
    </section>
  );
};

export default WelcomeScreen;