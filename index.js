const nav = document.getElementById("navBar");
const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  navLinks.classList.add("flex");
  navLinks.classList.add("flex-col");
  nav.classList.toggle("h-screen");
  nav.classList.toggle("fixed");
  nav.classList.toggle("z-20");

  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// document.getElementById("submit-order").addEventListener("click", postData);

function postOrder(args) {
  const overlay = document.getElementById("loading-overlay");
  const button = document.getElementById("order-button");
  overlay.classList.add("flex");
  button.disabled = true;

  const success = document.getElementById("order-success");
  const failure = document.getElementById("order-failure");

  fetch(
    "https://script.google.com/macros/s/AKfycbz5LiLBdNazIAzcdfv8YNgE_iNzZdiH2zVlllFycbYbxYL0DjTyKz5dg8nVvgfWZwhF/exec",
    {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(args),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      overlay.classList.remove("flex");
      button.disabled = false;
      success.style.display = "block";
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    })
    .catch((error) => {
      overlay.classList.remove("flex");
      button.disabled = false;
      failure.style.display = "block";
      failure.scrollIntoView({ behavior: "smooth", block: "center" });
      console.error("Error:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("order-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const coffee = document.getElementById("coffee").value;
      const name = document.getElementById("name").value.trim();
      const address = document.getElementById("address").value.trim();
      const phoneNumber = document.getElementById("phone").value.trim();
      const weight = document.querySelector(
        'input[name="bordered-radio"]:checked'
      );

      if (coffee === "Select a flavor") {
        alert("Please select a coffee flavor.");
        return;
      }

      if (!name) {
        alert("Please enter your name.");
        return;
      }

      if (!address) {
        alert("Please enter your address.");
        return;
      }

      if (!phoneNumber) {
        alert("Please enter your phone number.");
        return;
      }

      if (!weight) {
        alert("Please select a weight.");
        return;
      }

      args = { name, phoneNumber, address, coffee, weight: weight.value };

      postOrder(args);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const coffeeSelect = document.getElementById("coffee");

  if (coffeeSelect) {
    coffeeSelect.addEventListener("change", function () {
      const allDetails = document.querySelectorAll('[id*="-details"]');

      allDetails.forEach(function (detail) {
        detail.style.display = "none";
      });

      const selectedFlavor = coffeeSelect.value.toLowerCase();
      const selectedDetails = document.getElementById(
        selectedFlavor + "-details"
      );

      if (selectedDetails) {
        selectedDetails.style.display = "block";
      }
    });
  }
});

function sendMessage(args) {
  const overlay = document.getElementById("loading-overlay");
  const button = document.getElementById("order-button");
  overlay.classList.add("flex");
  button.disabled = true;

  const success = document.getElementById("order-success");
  const failure = document.getElementById("order-failure");

  success.style.display = "block";

  // fetch(
  //   "https://script.google.com/macros/s/AKfycbz5LiLBdNazIAzcdfv8YNgE_iNzZdiH2zVlllFycbYbxYL0DjTyKz5dg8nVvgfWZwhF/exec",
  //   {
  //     method: "POST",
  //     redirect: "follow",
  //     headers: {
  //       "Content-Type": "text/plain;charset=utf-8",
  //     },
  //     body: JSON.stringify(args),
  //   }
  // )
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.text();
  //   })
  //   .then((data) => {
  //     overlay.classList.remove("flex");
  //     button.disabled = false;
  //     success.style.display = "block";
  //     success.scrollIntoView({ behavior: "smooth", block: "center" });
  //   })
  //   .catch((error) => {
  //     overlay.classList.remove("flex");
  //     button.disabled = false;
  //     failure.style.display = "block";
  //     failure.scrollIntoView({ behavior: "smooth", block: "center" });
  //     console.error("Error:", error);
  //   });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const address = document.getElementById("contact-address").value.trim();
      const phoneNumber = document.getElementById("contact-phone").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name) {
        alert("Please enter your name.");
        return;
      }

      if (!address) {
        alert("Please enter your address.");
        return;
      }

      if (!phoneNumber) {
        alert("Please enter your phone number.");
        return;
      }

      if (!message) {
        alert("Please enter your message.");
        return;
      }

      args = { name, phoneNumber, address, message };

      sendMessage(args);
    });
  }
});
