---
layout: main
permalink: /Main_Page.html
search_exclude: true
---

<script src="js/dyk.js"></script>

<style>
    hr {
        display: none !important;
    }
</style>
<h4 style="color:rgb(97, 97, 97)">Welcome to KuroWiki!</h4>

<p>Some temporary string here....<br>TODO: add a proper description</p>

<!-- Wide card with share menu button -->
<style>
.demo-card-wide.mdl-card {
  width: 512px;
}

/* why the fuck cant i just merge these two fucking hell */
.demo-card-wide > .mdl-card__title {
  color: #fff;
  height:  60px;
  background-image: linear-gradient(rgb(100, 18, 122), rgb(117, 22, 155)) !important;
}
.demo-card-wide-m > .mdl-card__title {
  color: #fff;
  height:  60px;
  background-image: linear-gradient(rgb(100, 18, 122), rgb(117, 22, 155)) !important;


.demo-card-wide-m.mdl-card {
  width: 100%;
}
}
</style>

<!-- Large Screen -->
<div class="demo-card-wide mdl-card mdl-shadow--2dp mdl-layout--large-screen-only">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">Did you know...</h2>
  </div>
  <div class="mdl-card__supporting-text">
    <div id="facts-container" style="color:black;padding:-1;">
    <noscript>...that JavaScript is currently unavailable and several LexiWiki features are disabled?</noscript>
      </div>
  </div>
</div>


<!-- Small Screen -->
<div class="demo-card-wide-m mdl-card mdl-shadow--2dp mdl-layout--small-screen-only">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">Did you know...</h2>
  </div>
  <div class="mdl-card__supporting-text">
    <div id="facts-container-m" style="color:black;padding:-1;">
    <noscript>...that JavaScript is currently unavailable and several LexiWiki features are disabled?</noscript>
      </div>
  </div>
</div>



<!-- tooltip for a fact -->
<div class='mdl-tooltip mdl-tooltip--top' data-mdl-for='rli'>
  Specifically, it was due to Lex's power outlet being damaged, the original project file being corrupted, and operating system re-installs.
</div>

<!-- #### Recent news:

#### New layout!

This is a new layout made with the Material Design Lite CSS framework to make it look like Google's MD2014 Design, I hope y'all like it! ^^

*- Horibyte*

##### WE ARE FINALLY BETA!<br>
Recently today, May 7 2025 at 8:40pm, the HoriWiki Engine has finally reached the beta development cycle, we are proud to present this!!

Hope y'all enjoy :P

*- Horibyte* -->
