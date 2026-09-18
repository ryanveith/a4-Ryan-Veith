import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Fragment } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <title>Scoredisplay - CS4241 Assignment 2</title>
      <meta charset='utf-8' />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css" integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls" crossorigin="anonymous"/>
      <meta name="description" content="The login page for a simple database that lets you store highscores for games you play."/>
      
      <header>
        <button type="button" onclick="logout()"> Log Out</button>
        <img id="profile picture" src="images/Black Elephant.png" alt="your profile picture" width="50" height="50"> </img>
      </header>
      <main>
        <h1> Scoredisplay Home Page </h1>
        <p id='welcome'>
          Welcome back Player 1! What would you like to do?
        </p>
        <div class="pure-g" id="layout">
          <form class="pure-u-1-2 pure-form pure-form-stacked" id="home">
            
          </form>
          <section class="pure-u-1-2">
            <h2 >Highscores</h2>
            <ul class="pure-menu" id = 'scoretable'>
              <li>
                Submit a Score to see how how it compares to other highscores
              </li>
            </ul>
          </section>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
