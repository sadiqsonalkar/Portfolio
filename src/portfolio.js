/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sadiq's Portfolio",
  description:
    "Currently pursuing my Master’s in Computer Science. Previously worked as an Operation Executive in Infosys Limited. Graduated in Computer Science from Mumbai University having hands-on experience Application development website development. Seeking a position in a Cyber Security domain role where I can utilize my skills and abilities to the advantage of the organization while having scope for personal development and learning.",
  og: {
    title: "Sadiq Sonalkar Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Sadiq Sonalkar",
  logo_name: "Sadiq Sonalkar",
  nickname: "SwordX",
  subTitle:
    "Currently pursuing my Master’s in Computer Science. Previously worked as an Operation Executive in Infosys Limited. Graduated in Computer Science from Mumbai University having hands-on experience Application development website development. Seeking a position in a Cyber Security domain role where I can utilize my skills and abilities to the advantage of the organization while having scope for personal development and learning.",
  resumeLink:
    "https://drive.google.com/file/d/1k3NmsF-D1qycJQzdMTHGMgKzlRLnVjAq/view?usp=sharing",
  portfolio_repository: "https://github.com/sadiqsonalkar",
  githubProfile: "https://github.com/sadiqsonalkar",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sadiqsonalkar",
  // linkedin: "https://www.linkedin.com/in/sadiq-sonalkar-485a58133//",
  // gmail: "sadiqsonalkar21@gmail.com",
  // Behance: "https://unsplash.com/@sadiqs",
  // facebook: "https://www.facebook.com/sadiq.s0nalkar",
  // twitter: "https://twitter.com/SadiqSonalkar",
  // instagram: "https://www.instagram.com/damn.sadiq/"

  {
    name: "Gmail",
    link: "mailto:sadiqsonalkar21@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sadiq-sonalkar-485a58133/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com/SadiqSonalkar",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Github",
    link: "https://github.com/sadiqsonalkar",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Unsplash",
    link: "https://unsplash.com/@sadiqs",
    fontAwesomeIcon: "fa-behance-square", // Reference https://fontawesome.com/search?q=behance&s=solid%2Cbrandsrands
    backgroundColor: "#1769FF", // Reference https://simpleicons.org/?q=behance
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sadiq.s0nalkar",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/damn.sadiq/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];


const skills = {
  data: [
    {
      title: "Skill Set",
      fileName: "FullStackImg",
      skills: [
        "⚡ Cyber Security Tools :  Kali Linux, Metasploit, Burpsuite, Nessus, NMAP, Shodan, Virus Makers, tcpdump, Wireshark and many more.",
        "⚡ Cyber Security  : VAPT, Web Application Security, Ethical Hacking, Network security",
        "⚡ Web development	:	HTML, CSS, JavaScript",
        "⚡ Database	:	MySQL, Oracle, MongoDB",
        "⚡ Languages	:	Python, Java",
        "⚡ Operating system	:	Windows, Linux",
        "⚡ Good Intrusion Detection Skill",
        "⚡ Configuring and Updating Microsoft Windows Defender and Firewall",
        "⚡ Utilized tcpdump and Wireshark to analysis packets",
        "⚡ Android Application & Web Developer",
        "⚡ Comprehensive problem-solving abilities, Excellent verbal and written communication skills, Ability to deal with people diplomatically, willingness to learn, Team facilitator.",
      ],
      softwareSkills: [
        {
          skillName: "Cyber Security",
          fontAwesomeClassname: "fa-shield",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "fa-database",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#0078D6",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            backgroundColor: "#FCC624",
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Technical Expertise",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Cyber Security:",
        "Kali: 60%, Metasploitable: 70%, BurpSuite: 55%, Nessus: 60%, NMAP: 60%, Wireshark:70%",
        "⚡ Web development:",
        "HTML: 90%, CSS: 70%, JavaScript: 55%",
        "⚡ Database:",
        "MySQL: 90%, MongoDB: 70%, Oracle: 40% ",
        "⚡ Languages:",
        "Java: 80%, Python: 65%",
        "⚡ Operating system	:",
        "Linux: 65%, Windows: 75%",
        ],
      softwareSkills: [
        {
          skillName: "Percentage",
          fontAwesomeClassname: "foundation:graph-horizontal",
          style: {
            color: "#E34F26",
          },
        },
      ]
    },
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Certificates",
      iconifyClassname: "mdi:certificate-outline",
      style: {
        color: "#BE3455",
      },
    },
    {
      siteName: "Great Learning",
      iconifyClassname: "fa6-solid:g",
      style: {
        color: "blue",
      },
    },
    {
      siteName: "Priple",
      iconifyClassname: "mdi:alpha-p-box",
      style: {
        color: "#9933CC",
      },
    },
    {
      siteName: "Degree",
      iconifyClassname: "fluent:certificate-24-filled",
      style: {
        color: "#1F8ACB",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Mumbai University",
      subtitle: "B.Sc. in Computer Science",
      logo_path: "MU.png",
      alt_name: "M.U.",
      duration: "2018 - 2021",
      descriptions: [
        "⚡I did my Graduation in Computer Science with Distinction CGPA.",
        "⚡Participated and volunteered SynTech-X fest of our department.",
        "⚡Made 2 project in Android Studio using Java.",
      ],
      website_link: "https://mu.ac.in/",
    },
    {
      title: "R.D. National College",
      subtitle: "Higher Secondary Certificate in Electronics",
      logo_path: "RDNC.png",
      alt_name: "R.D.N.C.",
      duration: "2017 - 2018",
      descriptions: [
        "⚡Passed my Higher Secondary Certificate with First Class honours.",
        "⚡Participated in Athletics event of our College Fest.",
        "⚡Was runner-up in Chess event of our College Fest.",
      ],
      website_link: "https://rdnational.ac.in/#!home.html",
    },
    {
      title: "St. Theresa's High School",
      subtitle: "Secondary School Certificate",
      logo_path: "STHS.png",
      alt_name: "STHS",
      duration: "2015 - 2016",
      descriptions: [
        "⚡Passed my Secondary School Certificate with First Class honours.",
        "⚡Participated in many school event.",
      ],
      website_link: "https://theresianboyz.in/",
    },
  ],
  
};

const certifications = {
  certifications: [   
    {
      title: "Certified in Cybersecurity",
      subtitle: "ISC2",
      logo_path: "cc.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1GwDoWKnaAH3gPw8JgrZLP3V10IXo0VT3/view?usp=sharing",
      alt_name: "ISC2",
      color_code: "#FFFFFF",
    },
    {
      title: "Junior Cybersecurity Analyst Career Path",
      subtitle: "CISCO",
      logo_path: "cisco.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1rFHBdnd297ArNCBAXRvoGwhVee0sb2GZ/view?usp=sharing",
      alt_name: "CISCO",
      color_code: "#FFFFFF",
    },  
    {
      title: "Network Support and Security",
      subtitle: "CISCO",
      logo_path: "cisco.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1fBLZsbkh5RXnDlpLphZnYLwCKGv4hfsy/view?usp=sharing",
      alt_name: "CISCO",
      color_code: "#FFFFFF",
    },
    {
      title: "Networking Basics",
      subtitle: "CISCO",
      logo_path: "cisco.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1fT1maTTRNZAf_5_HCSw5SXrHh1jzMc2F/view?usp=sharing",
      alt_name: "CISCO",
      color_code: "#FFFFFF",
    },  
    {
      title: "Introduction to Cyber Security",
      subtitle: "CISCO",
      logo_path: "cisco.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Di02ZH-73xjlx1NeyUJo1a68hstrr3Td/view?usp=sharing",
      alt_name: "CISCO",
      color_code: "#FFFFFF",
    }, 
    {
      title: "Ethical Hacking Essentials",
      subtitle: "EC-COUNCIL",
      logo_path: "eccouncil.png",
      certificate_link:
        "https://drive.google.com/file/d/1J5WcXxIn8UzLW9pODctvMo7WjZGFBpKC/view?usp=sharing",
      alt_name: "EC-COUNCIL",
      color_code: "#FFFFFF",
    },    
    {
      title: "Certified SOC Analyst",
      subtitle: "SIEM XPERT",
      logo_path: "SX.png",
      certificate_link:
        "https://drive.google.com/file/d/1_d0Tqvq7zwbPHcd0ZOAJoISe1j286GS1/view?usp=sharing",
      alt_name: "SIEM XPERT",
      color_code: "#FFFFFF",
    },        
    {
      title: "Scrum Fundamentals Certified",
      subtitle: "VMEdu, Inc.",
      logo_path: "SFC.png",
      certificate_link:
        "https://drive.google.com/file/d/1pSX1QGYWIgt3v5815pjeuFQAcjJNHOSz/view?usp=sharing",
      alt_name: "VMEdu, Inc.",
      color_code: "#FFFFFF",
    },
    {
      title: "Programming Basic",
      subtitle: "Great Learning",
      logo_path: "gl.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1I0xGZIv8lRlIjjUfqs7es_OJYKZRAEun/view?usp=sharing",
      alt_name: "Great learning",
      color_code: "#FFFFFF",
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked as an operation executive in Infosys Limited. Had training as Network Administrator where I learned all of the operations of networking. Then did internship and learn concept of hacking and cyber security.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work and Volunteer",
      experiences: [
        {
          title: "Service Delivery Executive",
          company: "Infosys Limited",
          company_url: "https://www.infosys.com/",
          logo_path: "infosys.png",
          duration: "July 2021 - June 2022",
          location: "Pune, Maharashtra",
          description:
          "Successfully completed 3 months of training in Network Operation System. Worked on the largest Network service provider company in Singapore. Part of customer service and support team with the role of service delivery executive for global delivery, enterprise data & managed services. Acts as liaison between sales teams to ensure that all orders meet order review and processing criteria.",
          color: "#0879bf",
        },
        {
          title: "Intern",
          company: "SENSELEARNER TECHNOLOGIES",
          company_url: "https://senselearner.com/",
          logo_path: "SL.jpg",
          duration: "Sept 2023 - Nov 2023",
          location: "Pune, Maharashtra",
          description:
            "Completed various tasks, including conducting research and crafting an article emphasizing the importance of cybersecurity in today's digital landscape. Conducted in-depth information gathering on Senselearner.com, resulting in a comprehensive OSINT report. Conducted research and produced an article highlighting Nmap commands and scanning tools. Conducted research and composed an article focusing on CVE, CWE, NVD, and SANS TOP 25. Conducted extensive research on exploitation techniques, mitigation strategies, and emerging solutions. Crafted an article discussing zero-day attacks, types of malwares, and recently discovered attack methods. Applied my skills to complete the OWASP Top 10 lab on TryHackMe.",
          color: "#0879bf",
        },
        {
          title: "Intern",
          company: "THECYBERHOST",
          company_url: "https://the-cyberhost.com/",
          logo_path: "TCH.jpeg",
          duration: "Aug 2023 - Sept 2023",
          location: "Pune, Maharashtra",
          description:
            "Had the privilege of working on Android App Penetration Testing on a Vulnerable app called AndroGoat. Found many vulnerabilities such as Network Intercepting, IDOR, Input Validations, Hardcode issues, Root Detection Bypass, Emulator Bypass and many more. Honed my skills in identifying vulnerabilities, assessing security risks, and recommending robust solutions to safeguard mobile applications. Conducting in-depth vulnerability assessments and penetration testing, contributing to the enhancement of cybersecurity measures. Participating in brainstorming sessions and team meetings, where I had the opportunity to contribute amazing ideas and learn from seasoned professionals.",
          color: "#0879bf",
        },
        {
          title: "Intern",
          company: "SkillVERTEX",
          company_url: "https://www.skillvertex.com/",
          logo_path: "SV2.jpg",
          duration: "March 2023 - May 2023",
          location: "Pune, Maharashtra",
          description:
            "Created a Web Penetration Testing Report on Acunetix Acuart Website. Found a lots of Vulnerabilities and provide a solution to those Vulnerabilities. Learned all the fundamental concepts and applications of Cyber Security. Learned a lot of topics, including network security, cryptography, threat analysis, risk management, and other related fields. Do practical of Ethical Hacking i.e., Reconnaissance, Scanning, Gaining & Maintaining Access, Worms, Viruses & Trojan, System Security, Web & Network Security.",
          color: "#0879bf",
        },
        {
          title: "Head of Event",
          company: "R.D. National College",
          company_url: "https://rdnational.ac.in/",
          logo_path: "RDNC.png",
          duration: "June 2018 - May 2021",
          location: "Mumbai, Maharashtra",
          description:
            "Head of Chess Event for 2 years. And a volunter for hospitality team for 3 years. Participated in Chess in different college.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I have a very good hand-ons in JAVA,HTML and CSS. I have created a Pentesting report on Acuart, a Vulnerability Assessment on AndroGoat Application.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Extra Curricular",
  description:
  "Some of the extra curricular activities.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Participated in Chess event",
      createdAt: "2020-03-06T16:26:54Z",
      description: "I have participated in Chess event and achieved 3rd position.",

    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Volunteer for Hospitality team for 3 years",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Volunteer for Hospitality team for all the 3 years in College Fest.",

    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Joint-Head of Chess Event",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Was a joint Head of Chess event in College Fest.",

    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Runner-Up in Athletics",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Was 2 runner-up in Athletics for the College Annual Day.",

    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Particpated in Photography Competition",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Have Particpated in Photography Competition.",

    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ms-icon-310x310.png",
    description:
      "I am available on almost every social media from where you can contact me. ",
  },
  blogSection: {
    title: "Unsplash",
    subtitle:
      "I'm very much interested in Photography. Here are some of my works.",
    link: "https://unsplash.com/@sadiqs",
    avatar_image_path: "unsplash.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "33, 103, 1st Floor, Amir Sonalkar Building, Navpada, Bandra(E), Mumbai 400051",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/KJviSjj6oRtVHcWe8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8097903512",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
