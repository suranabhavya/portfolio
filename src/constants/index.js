import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    psql,
    html,
    css,
    cpp,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    django,
    docker,
    gtgt,
    ubs,
    ms,
    oneAnimation,
    tiet,
    tau,
    algoUni,
    fruitiet,
    mps,
    edmunds,
    tietWhite,
    carrent,
    jobit,
    tripguide,
    python,
    email,
    facebook,
    instagram,
    linkedin,
    github,
    phone,
    spotify,
    website,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Research Student",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mentor and Instructor",
      icon: creator,
    },
  ];

  const educations = [
    {
      school: "Thapar Institute of Engineering and Technology",
      duration: "2018-2022",
      grade: "8.24/10",
      icon: tietWhite
    },
    {
      school: "St. Edmunds, Jaipur",
      duration: "2016-2018",
      grade: "90/100",
      icon: edmunds
    },
    {
      school: "Maheshwari Public School, Jaipur",
      duration: "2006-2016",
      grade: "9.2/10",
      icon: mps
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PostgreSQL",
      icon: psql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Merkle Science",
      icon: ms,
      iconBg: "#FFFFFF",
      date: "Aug 2022 - Present",
      points: [
        "Developed and optimized various complex APIs in DRF with enhanced queries, significantly reducing overall response times for each API call",
        "Standardized error and exception handling through effective cross-team communication, resulting in reduced error rates and substantial cost savings.",
        "Developed comprehensive unit test cases for all APIs, covering various corner cases and edge scenarios to ensure robust functionality and code reliability also developed automated batch tests to streamline testing time.",
      ],
    },
    {
      title: "Project Mentor",
      company_name: "Algo University",
      icon: algoUni,
      iconBg: "#FFFFFF",
      date: "Jun 2022 - Aug 2022",
      points: [
        "Mentored numerous students and working professionals in developing full-stack Online Judge project for programming contests using Django, Docker, and Heroku, providing end-to-end guidance from concept to deployment",
        "Skills: Django REST Framework · Docker · Heroku · Django"
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "UBS",
      icon: ubs,
      iconBg: "#FFFFFF",
      date: "Jan 2022 - July 2022",
      points: [
        "Contributed to the Investment Banking Technology team by developing scalable APIs, optimizing forex trading software, and improving overall efficiency",
      ],
    },
    {
      title: "Software Developer Summer Intern",
      company_name: "UBS",
      icon: ubs,
      iconBg: "#FFFFFF",
      date: "July 2021 - Aug 2021",
      points: [
        "Involved in Chaos Engineering project to assess application robustness. I led the development of a full stack application from scratch using React, Redux and Flask to facilitate interaction between POC applications and third-party software, Gremlin, as an integral part of Chaos Engineering testing efforts",
      ],
    },
    {
      title: "Research Scholar",
      company_name: "Tel Aviv University, Israel",
      icon: tau,
      iconBg: "#FFFFFF",
      date: "Oct 2020 - Dec 2020",
      points: [
        "Artificial Intelligence-based Digital Village System is a Project carried out jointly by Thapar Institute of Engineering and Technology (TIET) and Tel Aviv University, Israel (TAU) in a project funded by MHRD-YFRF.",
        "Developing a survey application for Digital Village Project which helps in collecting field data from farmers in their regional language and capture the visual data of crops for weed detection and crop disease identification.",
        "For more information visit: https://www.digital-village.co.in/",
        "Skills: Internet of Things (IoT) · Kotlin · Android Studio · Android Development · Data Analysis · Institutional Research · Artificial Intelligence (AI)"
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Green Turtle Gaming Technologies",
      icon: gtgt,
      iconBg: "#FFFFFF",
      date: "July 2020 - Sep 2020",
      points: [
        "Worked on the Kaptain-11 Project with more than 100,000 users, developed the back-end for the registration system and designed the necessary APIs for third-party authentication using Django.",
        "Developed a log system for customer support team, generating a file stating all the errors in the software used to go through the issues faced by the users.",
        "Skills: Python (Programming Language) · JavaScript · Django",
      ],
    },
    {
      title: "Web Developer - IEP Thapar",
      company_name: "Thapar Institute of Engineering and Technology",
      icon: tiet,
      iconBg: "#FFFFFF",
      date: "Mar 2020 - June 2020",
      points: [
        "Developed a dynamic and user-friendly website for Thapar Institute of Engineering and Technology to enhance the online presence and provide valuable information of international programs to students and staff from inception to deployment.",
        "Developed a modern and visually appealing website layout using HTML and CSS, ensuring a seamless user experience across various devices and different screen sizes.",
        "Utilized JavaScript to implement animations and interactive features, such as dynamic content updates and user-friendly forms for inquiries and feedback.",
        "Ensured fast loading times and smooth performance through efficient coding practices and optimization techniques for scalable needs.",
        "Website: https://iep.thapar.edu/",
        "Skills: css-blocks · Cascading Style Sheets (CSS) · JavaScript · HTML"
      ],
    },
    {
      title: "Co-Founder",
      company_name: "Fruitiet",
      icon: fruitiet,
      iconBg: "#FFFFFF",
      date: "Oct 2019 - Mar 2020",
      points: [
        "Initiated our own venture to deliver groceries and developed an interactive e-commerce website from scratch using Django and PostgreSQL. Implemented features including robust secure login system, rating analysis",
        "Designed dashboard for vendors and predicted changes in the prices for the fruits.",
        "Skills: Python (Programming Language) · JavaScript · Django",
      ],
    },
    {
      title: "Computer Graphics Research Intern",
      company_name: "One Animation, Singapore",
      icon: oneAnimation,
      iconBg: "#605960",
      date: "May 2019 - July 2019",
      points: [
        "Contributed significantly to the main pipeline by developing and customizing options in Autodesk Maya, enabling the efficient channeling of a substantial stream of small objects from a broader source to a narrower one using Python-based vector techniques.",
        "Involved in the processes of Python Scripting for Maya, Basic Rigging, Blend-shape Generation and Node Tree Construction for the Oddbods ",
        "Worked on some of the most well known and award winning shows from Disney and Netflix namely Oddbods and Sharkdog.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "L.O.R. for Computer Graphics Research Internship @ One Animation, Singapore",
      link: "https://drive.google.com/file/d/1TIS05wg2CutERrx8hGaBzT6saOL49sU6/view?usp=sharing",
      name: "Enrique Caballero",
      designation: "Head of CG",
      company: "One Animation, Singapore",
      image: "https://media.licdn.com/dms/image/C5103AQF6ppolfrflvA/profile-displayphoto-shrink_400_400/0/1581322699429?e=1702512000&v=beta&t=aMwwtd6uzggu2yVF2Orjesb84VUzq9gIq68bCDqDp24",
    },
    {
      testimonial:
        "L.O.R. for Backend Developer Internship @ Green Turtle Gaming Technologies Pvt. Ltd.",
      link: "https://drive.google.com/file/d/1aA-0G3pSvXoijEeP_QLB_CWO_FPQi_CY/view?usp=sharing",
      name: "Katari Mohan Krishna",
      designation: "Tech Lead",
      company: "GTGT Pvt Ltd.",
      image: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    },
    {
      testimonial:
        "Certification of Sevice for Software Developer Internship @ UBS Business Solutions",
      link: "https://drive.google.com/file/d/1hAg31s4BE2ihh4HywTpau1aMtsxEZAFQ/view?usp=sharing",
      name: "Vikash Mitruka",
      designation: "Executive Director",
      company: "UBS Business Solutions",
      image: "https://media.licdn.com/dms/image/C5103AQHpt1q90c-LjA/profile-displayphoto-shrink_100_100/0/1516344802401?e=1702512000&v=beta&t=opQav-teUYe8bLnLA2BmFDx-z0AFLSLb3OKjp_HH4m0",
    },
  ];
  
  const projects = [
    {
      name: "Quest of the Braves",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/suranabhavya/Quest-of-the-Braves",
    },
    {
      name: "IEP Thapar",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://iep.thapar.edu/",
    },
    {
      name: "Fruits Price Prediciton",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Camigence App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/suranabhavya/camigence_app/",
    },
    {
      name: "Digital Village Survey App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/suranabhavya/TIETSurveyApp",
    },
    {
      name: "AR Car Showroom",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/suranabhavya/AR-CAR-Showroom/",
    },
    {
      name: "US Police Data Visualization",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/suranabhavya/US-POLICE-DATA-VISUALIZATION",
    },
  ];

  const socials = [
    {
      social: "Instagram",
      icon: instagram,
      link: "https://www.instagram.com/suraanaaa/",
      text: "Instagram"
    },
    {
      social: "Linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/bhavya-surana/",
      text: "Linkedin"
    },
    {
      social: "Github",
      icon: github,
      link: "https://github.com/suranabhavya",
      text: "Github"
    },
    {
      social: "Facebook",
      icon: facebook,
      link: "https://www.facebook.com/bhavya.surana.52/",
      text: "Facebook"
    },
    {
      social: "Website",
      icon: website,
      link: "https://suranabhavya.github.io/portfolio/",
      text: "Website"
    },
    {
      social: "Spotify",
      icon: spotify,
      link: "https://open.spotify.com/user/8wy0rxx7qbbweqnctfr7ajsrg",
      text: "Spotify Profile"
    },
  ];

  const contacts = [
    {
      social: "Phone",
      icon: phone,
      link: "",
      text: "+919001675620"
    },
    {
      social: "Email",
      icon: email,
      link: "",
      text: "officialsurana@gmail.com"
    },
  ];
  
  export { services, educations, technologies, experiences, testimonials, projects, socials, contacts };
  