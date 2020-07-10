<template>
  <div class="contact-section">
    <h1>Get in Touch</h1>

    <div class="wrapper">
      <div class="content">
        <img src="../assets/images/headshot.jpg" alt="Photo of Robert" />
        <p>I am available for freelance work, full-time employment, or to simply sit down and have a chat about any and all things related to web design, development, and beyond!</p>
      </div>
      <form name="contact" method="post" netlify>
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" name="name" />
        </div>

        <div class="form-group">
          <label for="email">Your Email:</label>
          <input type="email" name="email" />
        </div>

        <div class="form-group">
          <label for="message">Your Message:</label>
          <textarea name="message" id="message" cols="22" rows="8"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'contact-section',
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style lang="scss" scoped>
.contact-section {
  font-family: "Open Sans", sans-serif;
  margin-bottom: 1.5em;
}

.content img {
  display: block;
  width: 70%;
  margin: 1em auto;
  border-radius: 50%;
  border: 2px solid $secondary-color;
}

// Styling for the form

form {
  margin: 2em auto 1em;
  width: 95%;
}

.form-group {
  margin: 1em 0;
}

form button {
  appearance: none;
  -webkit-appearance: none;
  font-family: inherit;
  font-size: 1em;
  padding: 7.5px 15px;
  border: none;
  background-color: $primary-color;
  color: #fff;
  border-radius: 12.5px;
  width: 90%;
  display: block;
  margin: 0.5em auto;
}

label {
  font-size: 1.1em;
  display: block;
  font-weight: bold;
  margin-bottom: 0.25em;
}

input,
textarea {
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  padding: 7.5px;
  // border: 1px solid $secondary-color;
  border: none;
  background: rgb(221, 221, 221);
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.04);
  box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.04);
}

textarea {
  resize: none;
}

@media only screen and (min-width: 576px) {
  p {
    width: 80%;
    margin: 0 auto;
  }

  form {
    width: 80%;
  }
}

@media only screen and (min-width: 576px) {
  .content img {
    width: 50%;
  }
}

@media only screen and (min-width: 768px) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em;
    margin-bottom: 1.5em;
  }

  .content {
    padding-top: 2em;
  }

  form {
    width: 100%;
  }
}
</style>