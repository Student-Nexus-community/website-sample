// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
  lucide.createIcons();
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Render Upcoming Events
const eventsGrid = document.querySelector('.events-grid');
const upcomingEvents = [
  
];

upcomingEvents.forEach(event => {
  eventsGrid.innerHTML += `
    <div class="card">
      <img src="${event.image}" alt="${event.name}" class="card-image" loading="lazy">
      <div class="card-content">
        <h3>${event.name}</h3>
        <div class="event-details">
          <p><i data-lucide="calendar"></i> ${event.date}</p>
          <p><i data-lucide="clock"></i> ${event.time}</p>
          <p><i data-lucide="map-pin"></i> ${event.location}</p>
        </div>
        <p>${event.description}</p>
        <a href="${event.registerLink}" target="_blank" rel="noopener noreferrer">
          <button class="cta-button">Register Now</button>
        </a>
      </div>
    </div>
  `;
});
lucide.createIcons();


document.addEventListener("DOMContentLoaded", function () {
  const pastEventsGrid = document.querySelector(".past-events-grid");
  const showMoreBtn = document.querySelector("#show-more-btn");

  const pastEvents = [
      {
          name: "Hackathon: Hack-N-Win | 24-Hour Hackathon",
          date: "March 21 & 22, 2025",
          time: "10:00 AM - 10:00 AM IST",
          location: "Innovation Lab, MRCE",
          image: "images/hack-n-win.png",
          description: "An intensive bootcamp covering AI and ML concepts with hands-on projects.",
      },
      {
        name: "Ignite Your Idea",
        date: "March 01, 2025",
        time: "06:00 PM - 07:30 PM IST",
        location: "Virtual Event",
        image: "images/igniteyouridea.png",
        description: "A session focused on best cybersecurity practices for students and professionals.",
    },
      {
        name: "Mastering the GitHub Student Developer Pack",
        date: "February 15, 2025",
        time: "07:00 PM - 08:00 PM IST",
        location: "Microsoft Teams",
        image: "images/masteringthegsdp.png",
        description: "A session focused on best cybersecurity practices for students and professionals.",
    },
      {
          name: "GenAI 101",
          date: "February 01, 2025",
          time: "06:00 PM - 08:00 PM IST",
          location: "Microsoft Teams",
          image: "images/genai101.png",
          description: "A 24-hour hackathon where students built innovative solutions for social impact.",
      },
      {
          name: "Data Mastery with Microsoft Power BI",
          date: "January 5, 2025",
          time: "06:00 PM - 08:00 PM IST",
          location: "Microsoft Teams",
          image: "images/datamasterywithmicrosoftpowerbi.png",
          description: "A hands-on session on front-end and back-end web technologies.",
      },
  ];

  let visibleEvents = 3; // Show only 3 events initially

  function renderEvents(limit) {
      pastEventsGrid.innerHTML = ""; // Clear previous content
      pastEvents.slice(0, limit).forEach(event => {
          const eventCard = document.createElement("div");
          eventCard.classList.add("card");

          eventCard.innerHTML = `
              <img src="${event.image}" alt="${event.name}" class="card-image" loading="lazy">
              <div class="card-content">
                  <h3>${event.name}</h3>
                  <div class="event-details">
                      <p><i data-lucide="calendar"></i> ${event.date}</p>
                      <p><i data-lucide="clock"></i> ${event.time}</p>
                      <p><i data-lucide="map-pin"></i> ${event.location}</p>
                  </div>
                  <p>${event.description}</p>
              </div>
          `;
          pastEventsGrid.appendChild(eventCard);
      });

      // Update Lucide icons
      if (typeof lucide !== "undefined") {
          lucide.createIcons();
      }

      // Show or hide the "Show More" button
      if (limit >= pastEvents.length) {
          showMoreBtn.style.display = "none";
      } else {
          showMoreBtn.style.display = "block";
      }
  }

  // Initial render
  renderEvents(visibleEvents);

  // Handle "Show More" button click
  showMoreBtn.addEventListener("click", function () {
      visibleEvents = pastEvents.length; // Show all events
      renderEvents(visibleEvents);
  });
});


// Render Gallery with Auto-Scroll (Round-robin)
document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery-slider");

  // Create track to hold images
  const track = document.createElement("div");
  track.classList.add("gallery-track");
  galleryContainer.appendChild(track);

  const galleryImages = [
    { url: "images/Screenshot 2024-11-14 213437.png", caption: "Leadership Workshop 2024" },
    { url: "images/Screenshot 2024-11-17 193457.png", caption: "Tech Meetup" },
    { url: "images/Screenshot 2024-11-18 001619.png", caption: "Student Networking Event" },
    { url: "images/Screenshot-4.png", caption: "Coding Bootcamp" },
    { url: "images/Screenshot 2024-11-18 001619.png", caption: "Coding Bootcamp" },
  ];

  // Add images to the track
  galleryImages.forEach((img) => {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    galleryItem.innerHTML = `
      <img src="${img.url}" alt="${img.caption}" loading="lazy">
      <p>${img.caption}</p>
    `;
    track.appendChild(galleryItem);
  });

  // Auto-scroll logic
  let index = 0;
  function moveToSlide() {
    index = (index + 1) % galleryImages.length; // Loop back to first image
    track.style.transform = `translateX(${-index * 100}vw)`;
  }

  // Auto-slide every 5 seconds
  setInterval(moveToSlide, 5000);
});


//testimonialls

document.addEventListener('DOMContentLoaded', function() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Computer Science Major",
      quote: "Joining this community has been transformative. The support and resources available have accelerated my learning journey.",
      avatar: "images/HARISH.REDDY.jpg"
    },
    {
      name: "Samantha Lee",
      role: "Graphic Design Student",
      quote: "I've found my tribe here. The collaborative projects and workshops have helped me grow both personally and professionally.",
      avatar: "images/HARISH.REDDY.jpg"
    },
    {
      name: "Michael Chen",
      role: "Business Administration",
      quote: "The networking opportunities are unparalleled. I've made connections that I'm sure will last throughout my career.",
      avatar: "images/HARISH.REDDY.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Environmental Science",
      quote: "The passion for sustainability in this community is inspiring. I've learned so much about making a real impact.",
      avatar: "images/HARISH.REDDY.jpg"
    }
  ];

  const testimonialsGrid = document.querySelector('.testimonials-grid');

  function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
      <h3>${testimonial.name}</h3>
      <p class="testimonial-role">${testimonial.role}</p>
      <blockquote>"${testimonial.quote}"</blockquote>
    `;
    return card;
  }

  function populateTestimonials() {
    testimonials.forEach(testimonial => {
      const card = createTestimonialCard(testimonial);
      testimonialsGrid.appendChild(card);
    });

    // Clone the testimonials for seamless looping
    testimonials.forEach(testimonial => {
      const card = createTestimonialCard(testimonial);
      testimonialsGrid.appendChild(card);
    });
  }

  populateTestimonials();

  function animateTestimonials() {
    const firstCard = testimonialsGrid.firstElementChild;
    const cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
    
    testimonialsGrid.style.transition = 'transform 0.5s ease-in-out';
    testimonialsGrid.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      testimonialsGrid.style.transition = 'none';
      testimonialsGrid.style.transform = 'translateX(0)';
      testimonialsGrid.appendChild(firstCard);
    }, 500);
  }

  // Animate every 5 seconds
  setInterval(animateTestimonials, 5000);

  // Pause animation on hover
  testimonialsGrid.addEventListener('mouseenter', () => {
    clearInterval(animationInterval);
  });

  testimonialsGrid.addEventListener('mouseleave', () => {
    animationInterval = setInterval(animateTestimonials, 5000);
  });
});


// Render Founders
const foundersGrid = document.querySelector('.founders-grid');
const founders = [
  {
    name: 'Harish Reddy',
    role: 'Founder & CEO',
    bio: 'Harish Reddy is a visionary leader with a strong passion for technology, community building, and student empowerment. As the Founder & CEO of Student Nexus, he is dedicated to creating opportunities for students to learn, collaborate, and grow. With expertise in software development and leadership, he actively bridges the gap between students and industry, fostering innovation and skill development.',
    image: 'team/founder.jpg',
    linked: 'https://www.linkedin.com/in/harish-reddy-duggempudi/',
    email: 'mailto:founder@studentnexus.tech',
  },
  {
    name: 'Anusha Gonda',
    role: 'Co-Founder & CTO',
    bio: 'Anusha Gonda is a dynamic tech innovator with a passion for building impactful solutions and fostering student communities. As the Co-Founder & CTO of Student Nexus, she leads the technological vision of the platform, ensuring seamless collaboration and innovation. With a strong background in data science and software development, Anusha is committed to empowering students with the tools and knowledge needed to thrive in the tech industry.',
    image: 'team/co-founder.jpeg',
    linkedin: 'https://www.linkedin.com/in/anusha-gonda/',
    email: 'mailto:co-founder@studentnexus.tech',
  },
];

founders.forEach(founder => {
  foundersGrid.innerHTML += `
    <div class="founder-card">
      <img src="${founder.image}" alt="${founder.name}" class="founder-image" loading="lazy">
      <div class="founder-content">
        <h4>${founder.name}</h4>
        <p class="founder-role">${founder.role}</p>
        <p>${founder.bio}</p>
        <div class="founder-contact">
          <a href="${founder.linkedin}" target="_blank" class="icon-link">
            <i data-lucide="linkedin"></i> 
          </a>
          <a href="${founder.email}" class="icon-link">
            <i data-lucide="mail"></i> 
          </a>
        </div>
      </div>
    </div>
  `;
});
lucide.createIcons();


// Render Team Members
const coreTeamGrid = document.querySelector(".core-team-grid");

const coreTeam = [
  {
    name: "Devi Sri Dubakula",
    role: "Tech Lead",
    image: "team/devisree.jpeg",
    linkedin: "https://www.linkedin.com/in/devi-sri-dubakula-1398412a6/",
    email: "mailto:alice@example.com",
  },
  {
    name: "Chakradeep",
    role: "Marketing Head",
    image: "team/chakradeep.jpeg",
    linkedin: "https://www.linkedin.com/in/akonkar-chakradeep/",
    email: "mailto:Pradeepakonkar@gmail.com",
  },
  {
    name: "Vamsi Adithya",
    role: "Operations Manager",
    image: "team/vamsi.jpeg",
    linkedin: "https://www.linkedin.com/in/vamsi-adithya/",
    email: "mailto:vamsiadithyanarukulla@gmail.com",
  },
  {
    name: "Swami",
    role: "Finance Lead",
    image: "team/swami.jpeg",
    linkedin: "https://www.linkedin.com/in/laxmi-narasimhaswami-borra/",
    email: "mailto:borralaxminarasimhaswami9@gmail.com",
  }
];

// Duplicate items for seamless infinite scroll
const teamData = [...coreTeam, ...coreTeam, ...coreTeam];

teamData.forEach(member => {
  const teamCard = document.createElement("div");
  teamCard.classList.add("team-card");
  teamCard.innerHTML = `
    <img src="${member.image}" alt="${member.name}" class="team-image">
    <h4 class="team-name">${member.name}</h4>
    <p class="team-role">${member.role}</p>
    <div class="team-links">
      <a href="${member.linkedin}" target="_blank" class="icon-link"><i data-lucide="linkedin"></i></a>
      <a href="${member.email}" class="icon-link"><i data-lucide="mail"></i></a>
    </div>
  `;
  coreTeamGrid.appendChild(teamCard);
});

// Infinite side-scrolling effect (Right to Left)
function startScrolling() {
  let position = 0;
  const scrollSpeed = 0.5; // Adjust speed

  function move() {
    position -= scrollSpeed;
    if (Math.abs(position) >= coreTeamGrid.scrollWidth / 3) {
      position = 0;
    }
    coreTeamGrid.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(move);
  }

  move();
}

window.onload = startScrolling;
lucide.createIcons();


// FAQ Section
const faqList = document.querySelector('.faq-list');
const faqs = [
  {
    question: "How can I join the Student Nexus community?",
    answer: "Follow us on social media to stay updated on events, opportunities, and collaborations.",
  },
  {
    question: "Are Student Nexus events free?",
    answer: "Yes! Most of our events are free, but some special workshops may have a nominal fee.",
  },
  {
    question: "How can I become a mentor or contribute?",
    answer: "You can apply for our 'Become a Mentor' program or collaborate by volunteering at events.",
  },
  {
    question: "Will I receive a certificate for attending workshops?",
    answer: "Yes, most workshops provide an e-certificate upon successful participation.",
  },
  {
    question: "How can I contact Student Nexus for support or partnerships?",
    answer: "You can reach out to us via email at info@studentnexus.tech or through our official social media channels.",
  }
];

faqs.forEach(faq => {
  faqList.innerHTML += `
    <div class="faq-item">
      <button class="faq-question" aria-expanded="false">
        ${faq.question}
        <i data-lucide="chevron-down"></i>
      </button>
      <div class="faq-answer" aria-hidden="true">${faq.answer}</div>
    </div>
  `;
});
lucide.createIcons();

faqList.addEventListener('click', event => {
  if (event.target.closest('.faq-question')) {
    const faqItem = event.target.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    faqItem.classList.toggle('active');
    const isActive = faqItem.classList.contains('active');
    answer.setAttribute('aria-hidden', !isActive);
    faqItem.querySelector('.faq-question').setAttribute('aria-expanded', isActive);
    const icon = faqItem.querySelector('i');
    icon.setAttribute('data-lucide', isActive ? 'chevron-up' : 'chevron-down');
    lucide.createIcons();
  }
});
//patnership
document.addEventListener('DOMContentLoaded', function () {
  const partners = [
      { name: 'Partner 1', logo: 'images/mrcechapter.png' },
      { name: 'Partner 2', logo: 'images/commudle.png' },
      { name: 'Partner 3', logo: 'images/piecesfordevelopers.png' },
      { name: 'Partner 4', logo: 'images/s n student nexus.png' },
      { name: 'Partner 5', logo: 'images/d4community.png' },
      { name: 'Partner 6', logo: 'images/mrceiiic.png' },
      { name: 'Partner 7', logo: 'images/mrce.jpg' },
      { name: 'Partner 7', logo: 'images/innovista.jpeg' },


  ];

  const partnersContainer = document.querySelector('.partners-container');
  const partnersGrid = document.querySelector('.partners-grid');

  function createPartnerLogo(partner) {
      const logoDiv = document.createElement('div');
      logoDiv.className = 'partner-logo';
      
      const img = document.createElement('img');
      img.src = partner.logo;
      img.alt = partner.name;
      
      logoDiv.appendChild(img);
      return logoDiv;
  }

  function populatePartnersGrid() {
      partnersGrid.innerHTML = ''; // Clear existing logos

      // Add partners twice for smooth infinite loop
      for (let i = 0; i < 2; i++) {
          partners.forEach(partner => partnersGrid.appendChild(createPartnerLogo(partner)));
      }
  }

  function startContinuousScroll() {
      let scrollAmount = 0;
      const scrollSpeed = 0.5; // Adjust speed for smoother scrolling

      function scroll() {
          scrollAmount += scrollSpeed;
          partnersGrid.style.transform = `translateX(-${scrollAmount}px)`;

          // Reset scroll when it reaches half of the duplicated content
          if (scrollAmount >= partnersGrid.scrollWidth / 2) {
              scrollAmount = 0;
              partnersGrid.style.transform = `translateX(0)`;
          }

          requestAnimationFrame(scroll);
      }
      scroll();
  }

  populatePartnersGrid();
  startContinuousScroll();
  window.addEventListener('resize', populatePartnersGrid);
});



// Animated Counter
const counters = document.querySelectorAll('.count');
const animateCounter = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    const increment = Math.ceil(target / 200);
    const updateCounter = () => {
      const current = +counter.textContent;
      if (current < target) {
        counter.textContent = current + increment;
        setTimeout(updateCounter, 20);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
};

const observerOptions = { threshold: 0.5 };
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter();
      counterObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

counters.forEach(counter => counterObserver.observe(counter));

// Update Footer Year
document.getElementById('current-year').textContent = new Date().getFullYear();
