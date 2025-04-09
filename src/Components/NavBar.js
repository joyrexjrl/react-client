import React from 'react';

function NavBar() {
  return (
    <nav>
      <div className="nav_container flex">
        <div className="site_logo">
          <img src="images/mainPage/pageTempLogo.jpg" alt="main page logo" />
        </div>
        <div className="character_generators flex">
          <div id="ose_logo_button" className="game_sheet_buttons">
            <img src="images/OSE/oseLogo.gif" alt="ose logo" />
          </div>
          <div id="shadowrun_logo_button" className="game_sheet_buttons">
            <img src="images/shadowrun/shadowrun_nav_logo.gif" alt="shadowrun logo" />
          </div>
          <div className="game_sheet_buttons">Game 3</div>
          <div className="game_sheet_buttons">Game 4</div>
          <div className="game_sheet_buttons">Game 5</div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;