/* eslint-disable 
console.log([pronoun, adj, noun, domain]); 
 domainNames.push("${pronouns}${adjs}${nouns}${domains}");
 npm run start */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#Domain").innerHTML = GenerateDomain();
};

let GenerateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
        }
      }
    }
  }
};
