<template>
  <div class="portfolio-section">
    <h1>Portfolio</h1>

    <div class="wrapper">
      <PortfolioItem v-for="project in projects" :itemData="project" :key="project.name" />
    </div>
  </div>
</template>


<script>
import PortfolioItem from "./PortfolioItem"

export default {
  name: 'portfolio-section',
  data() {
    return {
      projects: [
        {
          name: 'Inspire',
          details: 'UI/UX Design, Website',
          url: 'https://robertgumeny.github.io/InspireMidterm/',
          source: 'https://github.com/RobertGumeny/InspireMidterm',
          img: require('../assets/images/portfolio/inspire.png'),
          description: `In-browser dashboard utilizing multiple APIs, updating clock, and to-do list. Converts temperatures and displays up-to-date weather icons.`
        },
        {
          name: 'Landscuber',
          details: 'UI/UX Design, Full Stack Web App',
          url: 'https://landscuber.herokuapp.com/#/',
          source: 'https://github.com/Ashley-and-the-Hairy-Coders/landscuber',
          img: require('../assets/images/portfolio/lanscuber.png'),
          description: `Gig economy style app. Users can sign up as either customer or provider and
                  create or accept jobs. Real-time updates and chat utilizing Socket.io`
        },
        {
          name: 'Breakout!',
          details: 'JavaScript, HTML5 Canvas',
          url: 'https://robertgumeny.github.io/breakoutgame/',
          source: 'https://github.com/RobertGumeny/breakoutgame',
          img: require('../assets/images/portfolio/breakout.png'),
          description: `A Breakout! game utilizing JavaScript, the HTML5 Canvas, and collision detection. Brick color is
                  generated randomly.`
        },
        {
          name: 'Color Scheme Generator',
          details: 'JavaScript, HTML5 Canvas',
          url: 'https://limitless-basin-46834.herokuapp.com/#/',
          source: 'https://github.com/RobertGumeny/color-scheme-generator',
          img: require('../assets/images/portfolio/colors.png'),
          description: `A color scheme/palette generator. User can choose their own color or generate a
                  scheme based on a random selection.`
        }
      ]
    }
  },
  computed: {},
  methods: {},
  components: {
    PortfolioItem
  }
}
</script>


<style lang="scss" scoped>
.portfolio-section {
  font-family: "Open Sans", sans-serif;
  padding-top: 80px;
  background: $primary-bg;
}

.title-underline {
  width: 7.5em;
  height: 2px;
  margin: 0 0 2.5em;
  background: $secondary-color;
}

//Media Queries

@media only screen and (min-width: 576px) {
  h1:after {
    height: 3px;
  }
}

@media only screen and (min-width: 768px) {
  h1:after {
    height: 4px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em;
  }
}

@media only screen and (min-width: 992px) {
  h1:after {
    height: 4px;
  }
}
</style>