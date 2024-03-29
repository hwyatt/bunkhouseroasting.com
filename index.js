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

document.getElementById('postDataBtn').addEventListener('click', postData);

    function postData() {
      const data = {
        name: 'Test Name 1',
        address: 'Test Address 2'
      };

      fetch('https://script.google.com/macros/s/AKfycbzbMwviKXrmxkISAWaDk4pinjghzmejUEz7GciRGgVhBiWD4o92btizkEAka5Vq5j8y/exec', {
        method: 'POST',
        redirect: "follow",
        headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Success:', data);
        alert('Data added successfully');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error occurred while adding data');
      });
    }