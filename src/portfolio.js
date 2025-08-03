/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Majed Alaswad",
  title: "Hi all, I'm Majed",
  subTitle: emoji(
    "Highly motivated Flutter Developer with 2+ years of experience building and leading the development of mobile applications. "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GGPejlu-EH5GxB2xnfjjMsTQH70BwMyI/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Majed-alaswad9",
  gitlab: "https://gitlab.com/majedAlaswad",
  instagram: "https://www.instagram.com/majed_alaswad",
  gmail: "alaswadmajed389@gmail.com",
  facebook: "https://www.facebook.com/M.ALaswad9",
  linkedin: "https://www.linkedin.com/in/majed-alaswad-5b2743250",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FLUTTER DEVELOPER BUILDING BEAUTIFUL, HIGH-PERFORMANCE APPS",
  skills: [
    emoji(
      "⚡ Build responsive, adaptive UIs with Flutter (SafeArea, MediaQuery, LayoutBuilder)"
    ),
    emoji("⚡ Manage state using BLoC, Riverpod"),
    emoji("⚡ Integrate RESTful APIs, Firebase & other backend services"),
    emoji(
      "⚡ Craft custom animations & transitions for smooth user experiences"
    ),
    emoji("⚡ Write clean, testable Dart code & follow best practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "BLOC"
      // fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "RIVERPOD"
      // fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Dio"
      // fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Pdf"
      // fontAwesomeClassname: "icon-typescript"
    },
    {
      skillName: "Web Socket"
      // fontAwesomeClassname: "icon-mongodb"
    },
    {
      skillName: "get_it",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "auto_route",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "flutter_screenutil",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Notifications",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "flutter_quill",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "flutter_secure_storage",
      fontAwesomeClassname: "fab fa-sass"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Aleppo University",
      logo: require("./assets/images/AleppoUn.png"),
      subHeader: "IT Engineering",
      desc: "Graduated form IT Engineering Faculty at Aleppo University with a GPA 80.67%",
      duration: "September 2019 - September 2024"
    }
  ]
};

// // Your top 3 proficient stacks/tech experience

// const techStack = {
//   viewSkillBars: true, //Set it to true to show Proficiency Section
//   experience: [
//     {
//       Stack: "Backend",
//       progressPercentage: "90%"
//     },
//     {
//       Stack: "Frontend/Design", //Insert stack or technology you have experience in
//       progressPercentage: "70%" //Insert relative proficiency in percentage
//     },
//     {
//       Stack: "Programming",
//       progressPercentage: "80%"
//     }
//   ],
//   displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
// };

// Work experience section
export const workExperiences = {
  experience: [
    {
      company: "Ulu-Tech",
      desc: "A company specialized in providing all software and marketing solutions",
      date: "19-12-2023 -> 20-05-2025",
      companylogo: require("./assets/images/ulu-tech.jpeg"),
      role: "Flutter Developer"
    },
    {
      company: "Lead",
      desc: "Damascus",
      date: "15-03-2025 -> present",
      companylogo: require("./assets/images/lead.jpeg"),
      role: "Flutter Developer"
    }
  ],
  display: true
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "My Flutter Projects",
  projects: [
    {
      image: require("./assets/images/humy.png"),
      projectName: "Humy",
      projectDesc: "a food delivery service",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.nbs.alphameal&hl=en&gl=US&pli=1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/butterfly.png"),
      projectName: "Butterfly Flight",
      projectDesc:
        "This application allows answer sheets to be automatically corrected using the camera, provides an integrated system for managing student data, organizing exams, and displaying detailed reports on individual and group performance.",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.ulutech.butterfly"
        }
      ]
    },
    {
      image: require("./assets/images/fid.png"),
      projectName: "Restaurant FID",
      projectDesc:
        "Enjoy a unique dining experience in our restaurant, where we offer a wide variety of delicious dishes carefully prepared from the finest, freshest ingredients. Whether you prefer flavourful oriental cuisine or innovative international dishes, we have something to suit your taste",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.ulutech.restaurantfid"
        }
      ]
    },
    {
      image: require("./assets/images/golden-tag-logo.png"),
      projectName: "Golden Tag",
      projectDesc:
        "a mobile app for managing jewelry stores. It supports inventory tracking, employee management, barcode scanning, and USD/SYP rates. It also allows screenshot sharing, TXT file generation, and item sales logging.",
      footerLink: [
        {
          name: "Visit App",
          url: "https://play.google.com/store/apps/details?id=com.leadbridge.golden_tag&pcampaignid=web_share"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/kaiali_logo.jpg"),
      projectName: "Kaiali App",
      projectDesc:
        "·	A mobile application that aims to provide an integrated platform for topping up mobile credit and purchasing digital gaming cards.",
      // footerLink: [
      //   {
      //     name: "Visit App",
      //     url: "https://play.google.com/store/apps/details?id=com.leadbridge.golden_tag&pcampaignid=web_share"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/ubay.ico"),
      projectName: "U-Bay Customer",
      projectDesc:
        "dynamic and user-friendly social media platform designed for the purpose of buying and selling second-hand items",
      footerLink: [
        {
          name: "Visit App",
          url: "https://github.com/Majed-alaswad9/uBay/releases/tag/1.0.0"
        }
      ]
    },
    {
      image: require("./assets/images/ubay.ico"),
      projectName: "U-Bay warehouse",
      projectDesc:
        "uBay is social media platform for selling and buying second-hand items",
      footerLink: [
        {
          name: "Visit App",
          url: "https://github.com/Majed-alaswad9/uBay_warehouse/releases/tag/1.0.0"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/naqla.png"),
      projectName: "Naqla Customer",
      projectDesc:
        "Naqla is a platform designed to simplify the process of moving house furniture and goods. Inspired by the convenience of ride-sharing apps, Naqla connects users with reliable truck drivers for a seamless, stress-free moving experience.",
      footerLink: [
        {
          name: "Visit App",
          url: "https://github.com/Majed-alaswad9/naqla-customer/releases/tag/1.0.0"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/naqla.png"),
      projectName: "Naqla Driver",
      projectDesc:
        "Naqla is a platform designed to simplify the process of moving house furniture and goods. Inspired by the convenience of ride-sharing apps, Naqla connects users with reliable truck drivers for a seamless, stress-free moving experience.",
      footerLink: [
        {
          name: "Visit App",
          url: "https://github.com/Majed-alaswad9/naqla-driver/releases/tag/1.0.0"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+963998988823",
  email_address: "alaswadmajed389@gmail.com"
};

// Twitter Section

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  // techStack,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
