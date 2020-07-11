const navLinks = {
  work: {
    hover: "images/work-crossout.jpeg",
    plain: "images/work-link.jpeg",
  },
  bio: {
    hover: "images/bio-crossout.jpeg",
    plain: "images/bio-link.jpeg",
  },
  contact: {
    hover: "images/contact-crossout.jpeg",
    plain: "images/contact-link.jpeg",
  },
  cv: {
    hover: "images/cv-crossout.jpeg",
    plain: "images/cv-link.jpeg",
  },
  home: {
    hover: "images/home-crossout.jpeg",
    plain: "images/home-link.jpeg",
  },
};

Object.keys(navLinks).map((key) => {
  const link = document.getElementById(key);
  link.addEventListener("mouseover", (e) => {
    e.target.src = navLinks[key].hover;
  });
  link.addEventListener("mouseout", (e) => {
    e.target.src = navLinks[key].plain;
  });
});
