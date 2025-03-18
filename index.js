function addingEventListener() {
    const button = document.getElementById("button"); // Make sure this element exists in your HTML
    button.addEventListener("click", function () {
      alert("Button clicked!");
    });
  }
  
  module.exports = addingEventListener; // Export function for testing