document.addEventListener('DOMContentLoaded', function() {
  const teamMembers = [
    { name: 'Jorge Marquez', role: 'President', img: '../images/image_one.jpg' },
    { name: 'Tristan Hernandez', role: 'Vice President', img: '../images/image_two.jpg' },
    { name: 'Gonzalo Cervera', role: 'Secretary', img: '../images/image_three.jpg' },
    { name: 'Daniela Maldonado', role: 'Networking Director', img: '../images/image_four.jpg' },
    { name: 'Carlos Castillo', role: 'Treasurer', img: '../images/image_five.jpg' },
    { name: 'Erick Balboa', role: 'Recruiter', img: '../images/image_six.jpg' },
    { name: 'Hector Delgado', role: 'Social Media Manager', img: '../images/image_seven.jpg' },
    { name: 'Franky Nava (Navasthetix)', role: 'Dawg', img: '../images/image_eight.jpg' },
    // Add more team members as needed
  ];

  const teamContainer = document.querySelector('.container .row');

  for (let member of teamMembers) {
    let card = document.createElement('div');
    card.className = 'col-sm-12 col-md-6 col-lg-4';
    card.innerHTML = `
      <div class="card">
        <img class="card-img-top" src="${member.img}" alt="${member.name}">
        <div class="card-body">
          <h5 class="card-title">${member.name}</h5>
          <p class="card-text">${member.role}</p>
        </div>
      </div>
    `;
    teamContainer.appendChild(card);
  }
});
