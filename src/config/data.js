import aave from 'main-area/images/aave.png'
import zumper from 'main-area/images/Zumper.png'
import travelstore from 'main-area/images/travelstore.png'
import rent from 'main-area/images/rent.jpg'
import pocketSuite from 'main-area/images/pocketSuite.png'
import buffini from 'main-area/images/Buffini.png'
import fast from 'main-area/images/fast.png'
import hirevibes from 'main-area/images/hirevibes.png'
import uhomie from 'main-area/images/uhomie.png'
import isatv from 'main-area/images/isatv.png'
import ecomhunt from 'main-area/images/ecomhunt.png'
import paybyphone from 'main-area/images/paybyphone.png'
import mughamahal from 'main-area/images/mughamahal.png'
import digitalseat from 'main-area/images/digitalseat.png'


const workWebData = [
  {
    id: 0,
    image: uhomie,
    company: "uhomie",
    project: "Real Estate Referral Website",
    techStack:
      "Laravel, Vue, Referral API, Google Calendar API, MySQL",
    client: "Uhomie team",
    platform: "web",
    delivery: "300 development hours",
    link: "https://www.uhomie.cl/",
    release: "Feb 2020",
    desc:
      "Uhomie - Real Estate Referral Website - Uhomie enables users eliminate the current cost overruns from the leasing process."
  },
  {
    id: 1,
    image: paybyphone,
    company: "paybyphone",
    project: "Parking Order Website",
    techStack:
      "PHP, Javascript, HTML5, jQuery, Bootstrap, MySQL",
    client: "PayByPhone team",
    platform: "web",
    delivery: "250 development hours",
    link: "https://www.paybyphone.com/",
    release: "Jan 2020",
    desc:
      "PayByPhone - Parking Order Website - PayByPhone enables users order parking by using website or mobile app."
  },
  {
    id: 2,
    image: digitalseat,
    company: "DigitalSeatMedia",
    project: "Survey Questionnaire Web App",
    techStack:
      "Node/Express, Vue, MongoDB",
    client: "DigitalSeatMedia Team",
    platform: "web",
    delivery: "80 development hours",
    link: "https://docxdata.herokuapp.com/, https://laurenbd.000webhostapp.com/",
    release: "Nov 2019",
    desc:
      "Survey Questionnaire Web App - This is web app that enables users input survey questionnaire data and send it to the company and download into type of docx"
  },
  {
    id: 3,
    image: hirevibes,
    company: "Hirevibes",
    project: "Hirevibes Job Platform",
    techStack:
      "Javascript, Vue, VueX, EOS, BULMA CSS framework",
    client: "HireVibes team",
    platform: "web",
    delivery: "300 development hours",
    link: "https://hirevibes.io, https://develop.hirevibes.io",
    release: "July 2019",
    desc:
      "HireVibes - The decentralised crypto-reward jobs platform - HireVibes is a Crowdsourcing Jobs DAPP powered by the EOS blockchain. HireVibes enables candidates to get hired, earn more and give back in the hiring process, while empowering businesses to source and hire the right talent in a social, cost effective and brand- empowering way."
  },
  {
    id: 4,
    image: fast,
    company: "FAST",
    project: "FAST Web Application",
    techStack:
      "Javascript, React, Redux, Redux-thunk, Redux-saga, Redux-actions, immutable.js",
    client: "Fast.io Team",
    platform: "web",
    delivery: "250 development hours",
    link: "https://fast.io",
    release: "June 2019",
    desc:
      "FAST.io - Fast is a simple to use content distribution platform that works for you by pairing your existing cloud storage (like Dropbox or Google Drive) with our distribution platform and reporting usage to your existing analytics service (like Google Analytics)."
  },
  {
    id: 5,
    image: aave,
    company: "AAVE",
    project: "AAVE website",
    techStack:
      "Javascript, React, Redux, Redux-thunk, Ethereum, web3.js, React-Semantic UI",
    client: "ETHLend Team(Switzerland)",
    platform: "web",
    delivery: "450 development hours",
    link: "https://aave.com",
    release: "December 2018",
    desc:
      "Aave – Lending, finance and gaming blockchain applications. Aave provides an extensive list of products and applications based on transparency, security and easiness. These ranges across several industries as technology, finance and games"
  },
  {
    id: 6,
    image: ecomhunt,
    company: "EComHunt",
    project: "eCommerce platform",
    techStack:
      "PHP, Vue, webpack, ajax, jQuery, Bootstrap, MailChimp",
    client: "EComHunt Team(Switzerland)",
    platform: "web",
    delivery: "870 development hours",
    link: "https://ecomhunt.com/",
    release: "December 2018",
    desc:
      ""
  },
  {
    id: 7,
    image: isatv,
    company: "iSaTV",
    project: "Video Channel Platform",
    techStack: "WordPress, HTML5, CSS3, MySQL",
    client: "iSaTV(United States)",
    platform: "web",
    delivery: "160 development hours",
    link: "https://isatvdemo.000webhostapp.com/",
    release: "September 2017",
    desc: ""
  },
  {
    id: 8,
    image: mughamahal,
      company: "MughalMahal",
    project: "Restaurant website",
    techStack: "PHP, Javascript, Bootstrap, MySQL",
      client: "MuguhalMahal(Kuwait)",
    platform: "web",
    delivery: "250 development hours",
    link: "http://www.mughalmahal.com/",
    release: "July 2017",
      desc: ""
  }
];

const workMobileData = [
  {
    id: 0,
    image: zumper,
    company: "Zumper, Inc",
    project: "Zumper - Apartment Finder",
    techStack: "React Native, Redux, Redux-thunk, NativeBase",
    client: "Zumper Development Team",
    platform: "iOS/Android",
    delivery: "440 development hours",
    link:
      "https://itunes.apple.com/us/app/zumper-apartments-houses-for/id678683201?mt=8",
    release: "June 2017",
    desc:
      "Zumper is a full service home and apartment rental platform trusted by tenants and landlords to easily find and rent the best places to live. We have the largest inventory of verified listings available online, list new housing inventory before other sites, and make the application process seamless."
  },
  {
    id: 1,
    image: travelstore,
    company: "trooMOBILE",
    project: "Travelstore Mobile App",
    techStack: "React Native, Redux, Redux-thunk, React Native Eelements",
    client: "Travelstore Development Team",
    platform: "iOS/Android",
    delivery: "370 development hours",
    link: "https://play.google.com/store/apps/details?id=com.travelstore&hl=en",
    release: "March 2017",
    desc:
      "TravelStore is pleased to release it's Android mobile app. We've developed this app to help TravelStore customers with their travel itineraries."
  },
  {
    id: 2,
    image: rent,
    company: "Hunt Media Group, Inc",
    project: "Homes & Apartments for Rent",
    techStack: "React Native, Redux, Redux-saga, Shoutem",
    client: "Hunt Media Group",
    platform: "iOS/Android",
    delivery: "260 development hours",
    link:
      "https://itunes.apple.com/us/app/apartments-for-rent-house-apartment-rentals/id958769679?mt=8",
    release: "December 2018",
    desc:
      "The ETHLend decentralized application (hereinafter, 'dApp') is an Alpha release and due to this may contain some bugs. "
  },
  {
    id: 3,
    image: pocketSuite,
    company: "PocketSuite, Inc",
    project: "PocketSuite - Client Booking",
    techStack: "React Native, Redux, Redux-saga, UI Kitten",
    client: "PocketSuite Development Team",
    platform: "iOS/Android",
    delivery: "360 development hours",
      link: "https://itunes.apple.com/us/app/pocketsuite-schedule-appointment-invoice-payment/id721795146?mt=8",
    release: "November 2018",
      desc: "PocketSuite has everything you need for your business, from Client management to getting paid. Be your own boss and run a mobile office - schedule clients and get paid - all from your phone. The world is going global so be ahead of your competition and make business with your clients convenient, simple & professional. "
  },
  {
    id: 4,
    image: buffini,
    company: "Subsplash Inc",
      project: "Buffini & Company Peak Producers App",
    techStack: "React Native, Redux, Redux-saga, React Native Material Kit",
      client: "Buffini Development Team",
    platform: "iOS/Android",
    delivery: "210 development hours",
    link:
      "https://itunes.apple.com/us/app/buffini-company-peak-producers-app/id488795634?mt=8",
    release: "August 2017",
    desc:
      "The Peak Producers™ app gives you free access to exclusive training content from Buffini & Company in a format convenient for the iPhone, iPod touch, and iPad."
  }
];

const ServicesInfo = [
    {
        icon: "php",
        title: "PHP Development",
        content: "Developed 20+ projects by using modern PHP frameworks such as Laravel, Symfony, CI, and CorePHP",
        color: "#00ff00"
    },
    {
        icon: "react",
        title: "React Development",
        content: "React and Redux are my major Front-End skills and I developed 12+ projects so far",
        color: "#00d8ff"
    },
    {
        icon: 'vuejs',
        title: 'Vue Development',
        content: 'I am fully understanding of Vue/VueX, and developed 4 projects so far',
        color: '#42b883'
    }
];

const ServicesInfo1 = [
  {
    icon: "node-js",
    title: "NodeJS Development",
    content:
      "Node.js/Express/loopback is my main back-end skill and I developed 10+ Node projects so far",
    color: "#00d8ff"
  },
  {
    icon: "graphql",
    title: "GraphQL Development",
    content:
      "GraphQL is also my favorite back-end language and I developed 4 projects using React+GraphQL",
    color: "#b52e31"
  },
  {
    icon: "aws",
    title: "AWS Development",
    content:
      "I am fully understanding of various AWS services such as S3, EC2, Lambda, etc",
    color: "#42b883"
  }
];

const ExperienceData = [
  {
    company: "Lenovo Group",
    title: "Senior Software Engineer",
    date: "April 2019 - present",
    content:
      "Designed a scalable micro-service backend architecture to support an application with a predicted load of over 500,000 calls an hour using MongoDB and Java Spring Booot",
    color: "#E0B060"
  },
  {
    company: "Digital Turbine Media Inc",
    title: "Senior DevOps Engineer",
    date: "Jan 2015 - April 2019",
    content:
      "Designed and built custom CI/CD solution using Gitlab, Jenkins, and Kubernetes for several enterprise leading customers. Pipelines automated the customers QA process and stabilized release, cutting deployment times down from days to hours and increasing stability and uptime.",
    color: "#B03060"
  },
  {
    company: "FAST.io",
    title: "Senior Front-End Developer",
    date: "Feb 2019 - June 2019",
    content:
      "Fast is a simple to use content distribution platform that works for you by pairing your existing cloud storage (like Dropbox or Google Drive) with our distribution platform and reporting usage to your existing analytics service (like Google Analytics).",
    color: "#C0B060"
  },
  {
    company: "AAVE",
    title: "Senior Front-End Developer",
    date: "Feb 2018 - Dec 2018",
    content:
      "ETHLend is a decentralized peer to peer lending application that is build on top of the Ethereum Network, using blockchain technology to enable secure and transparent lending.",
    color: "#0E6EB8"
  },
  {
    company: "Hedgers",
    title: "Full Stack Developer",
    date: "Jul 2017 - Dec 2017",
    content:
      "Admin dashboard, Web App, Mobile App, Mobile back-end of Hedgers.inc. So I used AngularJS 4, Ionic 3, Node.js, MongoDB.",
    color: "#FFD700"
  },
  {
    company: "ShareG",
    title: "Full Stack Developer",
    date: "Mar 2017 - Jul 2018",
    content:
      "Admin Dashboard, Website, Mobile app using MEAN Stack and React Native - ShareG App(iOS/ Android) using React Native, Admin Dashboard(MEAN Stack), Web Site(Node, Bootstrap)",
    color: "#FE9A76"
  }
];

const ServicesCountData = [
    {
        count: "309",
        type: "CUPS OF COFFEE"
    },
    {
        count: "35+",
        type: "Projects"
    },
    {
        count: "20+",
        type: "Clients"
    },
    {
        count: "5",
        type: "partners"
    }
];

export {
  workWebData,
  workMobileData,
  // blogData,
  ServicesInfo,
  ServicesInfo1,
  ServicesCountData,
  ExperienceData
};
