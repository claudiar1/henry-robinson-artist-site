const navLinks = {
  work: {
    hover: "images/work-crossout.jpeg",
    plain: "images/work-link.jpeg",
    here: "images/work-here.jpeg",
  },
  bio: {
    hover: "images/bio-crossout.jpeg",
    plain: "images/bio-link.jpeg",
    here: "images/bio-here.jpeg",
  },
  contact: {
    hover: "images/contact-crossout.jpeg",
    plain: "images/contact-link.jpeg",
    here: "images/contact-here.jpeg",
  },
  cv: {
    hover: "images/cv-crossout.jpeg",
    plain: "images/cv-link.jpeg",
    here: "images/cv-here.jpeg",
  },
  home: {
    hover: "images/home-crossout.jpeg",
    plain: "images/home-link.jpeg",
    here: "images/home-here.jpeg",
  },
  statement: {
    hover: "images/statement-crossout.jpeg",
    plain: "images/statement-link.jpeg",
    here: "images/statement-here.jpeg",
  },
};

Object.keys(navLinks).map((key) => {
  console.log(key);
  const link = document.getElementById(key);
  console.log(link.src);
  console.log(navLinks[key].here);
  if (link.src.includes(navLinks[key].here)) {
    link.addEventListener("mouseover", (e) => {
      e.target.src = navLinks[key].here;
    });
    link.addEventListener("mouseout", (e) => {
      e.target.src = navLinks[key].here;
    });
  } else {
    link.addEventListener("mouseover", (e) => {
      e.target.src = navLinks[key].hover;
    });
    link.addEventListener("mouseout", (e) => {
      e.target.src = navLinks[key].plain;
    });
  }
});
