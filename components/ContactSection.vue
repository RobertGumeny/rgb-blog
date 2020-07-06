<template>
  <div class="contact-section">
    <h1>Get in Touch</h1>

    <p>I am available for freelance work, full-time employment, or to simply sit down and have a chat about any and all things related to web design, development, and beyond!</p>
    <form name="contact" method="post" netlify>
      <label for="name">Your Name:</label>
      <input type="text" name="name" />

      <label for="email">Your Email:</label>
      <input type="email" name="email" />

      <label for="message">Your Message:</label>
      <textarea name="message" id="message" cols="22" rows="8"></textarea>

      <button type="submit">Send Message</button>
    </form>
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
}
h1 {
  position: relative;
  margin-bottom: 1.5em;
}
h1:after {
  position: absolute;
  content: "";
  height: 2px;
  bottom: 0px;
  left: 1px;
  width: 5.4em;
  background-color: $secondary-color;
}

// Styling for the form

form {
  padding: 1em;
  margin: 2em auto 1em;
  width: 75%;
}

form * {
  margin: 0.2em auto;
}

form button {
  appearance: none;
  -webkit-appearance: none;
  font-family: inherit;
  padding: 7.5px 15px;
  border: none;
  background-color: $primary-color;
  color: #fff;
  border-radius: 12.5px;
  width: 100%;
  margin-top: 0.5em;
}

label {
  font-size: 1.2em;
  display: block;
}

input,
textarea {
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  padding: 7.5px;
  border: 1px solid $secondary-color;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.04);
  box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.04);
}

textarea {
  resize: none;
}
</style>