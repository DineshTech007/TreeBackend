import { Person } from '../types/Person';

export const familyData: Person[] = [
  // Great-Great-Grandparents generation (Generation 1)
  { 
    id: '1', 
    name: {
      mr: 'विल्यम अँडरसन',
      en: 'William Anderson'
    },
    x: 175, 
    y: 50,
    dateOfBirth: {
      mr: '१५ मार्च १८५०',
      en: '1850-03-15'
    },
    dateOfDeath: {
      mr: '२२ नोव्हेंबर १९२५',
      en: '1925-11-22'
    },
    mobileNumber: {
      mr: 'उपलब्ध नाही',
      en: 'N/A'
    },
    address: {
      mr: '१२३ ओक स्ट्रीट, स्प्रिंगफील्ड, इलिनॉय',
      en: '123 Oak Street, Springfield, IL'
    },
    image: '/images/family/person-1.jpg'
  },
  { 
    id: '3', 
    name: {
      mr: 'जेम्स विल्सन',
      en: 'James Wilson'
    },
    x: 475, 
    y: 50,
    dateOfBirth: {
      mr: '८ जुलै १८५२',
      en: '1852-07-08'
    },
    dateOfDeath: {
      mr: '१२ एप्रिल १९२८',
      en: '1928-04-12'
    },
    mobileNumber: {
      mr: 'उपलब्ध नाही',
      en: 'N/A'
    },
    address: {
      mr: '४५६ पाइन अव्हेन्यू, शिकागो, इलिनॉय',
      en: '456 Pine Avenue, Chicago, IL'
    },
    image: '/images/family/person-3.jpg'
  },
  { 
    id: '5', 
    name: {
      mr: 'चार्ल्स ब्राउन',
      en: 'Charles Brown'
    }, 
    x: 775, 
    y: 50,
    dateOfBirth: {
      mr: '३ डिसेंबर १८४८',
      en: '1848-12-03'
    },
    dateOfDeath: {
      mr: '१८ सप्टेंबर १९२३',
      en: '1923-09-18'
    },
    mobileNumber: {
      mr: 'उपलब्ध नाही',
      en: 'N/A'
    },
    address: {
      mr: '७८९ एल्म ड्राइव्ह, डेट्रॉइट, मिशिगन',
      en: '789 Elm Drive, Detroit, MI'
    },
    image: '/images/family/person-5.jpg'
  },
  { 
    id: '7', 
    name: {
      mr: 'जॉर्ज टेलर',
      en: 'George Taylor'
    }, 
    x: 1075, 
    y: 50,
    dateOfBirth: {
      mr: '२० मे १८५१',
      en: '1851-05-20'
    },
    dateOfDeath: {
      mr: '३० जानेवारी १९२६',
      en: '1926-01-30'
    },
    mobileNumber: {
      mr: 'उपलब्ध नाही',
      en: 'N/A'
    },
    address: {
      mr: '३२१ मेपल लेन, क्लिव्हलँड, ओहायो',
      en: '321 Maple Lane, Cleveland, OH'
    },
    image: '/images/family/person-7.jpg'
  },

  // Great-Grandparents generation (Generation 2)
  { 
    id: '9', 
    name: {
      mr: 'रॉबर्ट अँडरसन',
      en: 'Robert Anderson'
    }, 
    x: 175, 
    y: 180, 
    parents: ['1'],
    dateOfBirth: {
      mr: '१४ ऑगस्ट १८७५',
      en: '1875-08-14'
    },
    dateOfDeath: {
      mr: '२५ जून १९५२',
      en: '1952-06-25'
    },
    mobileNumber: {
      mr: 'उपलब्ध नाही',
      en: 'N/A'
    },
    address: {
      mr: '५६७ सीडर रोड, स्प्रिंगफील्ड, इलिनॉय',
      en: '567 Cedar Road, Springfield, IL'
    },
    image: '/images/family/person-9.jpg'
  },
  { 
    id: '11', 
    name: {
      mr: 'थॉमस विल्सन',
      en: 'Thomas Wilson'
    }, 
    x: 475, 
    y: 180, 
    parents: ['3'],
    dateOfBirth: {
      mr: '२८ फेब्रुवारी १८७८',
      en: '1878-02-28'
    },
    dateOfDeath: {
      mr: '१४ ऑक्टोबर १९५५',
      en: '1955-10-14'
    },
    mobileNumber: {
      mr: 'उपलब्ध नाही',
      en: 'N/A'
    },
    address: {
      mr: '८९० बर्च स्ट्रीट, शिकागो, इलिनॉय',
      en: '890 Birch Street, Chicago, IL'
    },
    image: '/images/family/person-11.jpg'
  },
  { 
    id: '13', 
    name: 'David Brown', 
    x: 775, 
    y: 180, 
    parents: ['5'],
    dateOfBirth: '1872-11-11',
    dateOfDeath: '1948-03-07',
    mobileNumber: 'N/A',
    address: '234 Walnut Avenue, Detroit, MI',
    image: '/images/family/person-13.jpg'
  },
  { 
    id: '15', 
    name: 'Edward Taylor', 
    x: 1075, 
    y: 180, 
    parents: ['7'],
    dateOfBirth: '1876-04-05',
    dateOfDeath: '1951-12-19',
    mobileNumber: 'N/A',
    address: '678 Hickory Lane, Cleveland, OH',
    image: '/images/family/person-15.jpg'
  },

  // Grandparents generation (Generation 3)
  { 
    id: '17', 
    name: 'John Anderson', 
    x: 200, 
    y: 310, 
    parents: ['9'],
    dateOfBirth: '1900-06-12',
    dateOfDeath: '1975-08-30',
    mobileNumber: 'N/A',
    address: '345 Ash Street, Springfield, IL',
    image: '/images/family/person-17.jpg'
  },
  { 
    id: '19', 
    name: 'Paul Wilson', 
    x: 350, 
    y: 310, 
    parents: ['9'],
    dateOfBirth: '1902-09-25',
    dateOfDeath: '1978-02-14',
    mobileNumber: 'N/A',
    address: '912 Poplar Drive, Chicago, IL',
    image: '/images/family/person-19.jpg'
  },
  { 
    id: '21', 
    name: 'Frank Brown', 
    x: 800, 
    y: 310, 
    parents: ['11'],
    dateOfBirth: '1898-01-18',
    dateOfDeath: '1972-05-22',
    mobileNumber: 'N/A',
    address: '456 Willow Road, Detroit, MI',
    image: '/images/family/person-21.jpg'
  },
  { 
    id: '23', 
    name: 'Henry Taylor', 
    x: 1100, 
    y: 310, 
    parents: ['13'],
    dateOfBirth: '1901-12-07',
    dateOfDeath: '1976-11-03',
    mobileNumber: 'N/A',
    address: '789 Sycamore Avenue, Cleveland, OH',
    image: '/images/family/person-23.jpg'
  },
  { 
    id: '25', 
    name: 'Arthur Davis', 
    x: 1200, 
    y: 310, 
    parents: ['15'],
    dateOfBirth: '1904-03-30',
    dateOfDeath: '1980-07-16',
    mobileNumber: 'N/A',
    address: '123 Chestnut Lane, Columbus, OH',
    image: '/images/family/person-25.jpg'
  },

  // Parents generation (Generation 4)
  { 
    id: '27', 
    name: 'Michael Anderson', 
    x: 150, 
    y: 440, 
    parents: ['17'],
    dateOfBirth: '1925-04-22',
    dateOfDeath: '1995-12-08',
    mobileNumber: '(555) 123-4567',
    address: '567 Dogwood Street, Springfield, IL',
    image: '/images/family/person-27.jpg'
  },
  { 
    id: '29', 
    name: 'Steven Wilson', 
    x: 300, 
    y: 440, 
    parents: ['17'],
    dateOfBirth: '1928-07-15',
    dateOfDeath: '1998-09-21',
    mobileNumber: '(555) 234-5678',
    address: '890 Magnolia Drive, Chicago, IL',
    image: '/images/family/person-29.jpg'
  },
  { 
    id: '31', 
    name: 'Daniel Brown', 
    x: 675, 
    y: 440, 
    parents: ['19'],
    dateOfBirth: '1923-10-03',
    dateOfDeath: '1992-06-14',
    mobileNumber: '(555) 345-6789',
    address: '234 Redwood Avenue, Detroit, MI',
    image: '/images/family/person-31.jpg'
  },
  { 
    id: '33', 
    name: 'Richard Taylor', 
    x: 975, 
    y: 440, 
    parents: ['21'],
    dateOfBirth: '1926-01-28',
    dateOfDeath: '1996-04-05',
    mobileNumber: '(555) 456-7890',
    address: '678 Spruce Road, Cleveland, OH',
    image: '/images/family/person-33.jpg'
  },
  { 
    id: '35', 
    name: 'Kenneth Davis', 
    x: 1275, 
    y: 440, 
    parents: ['23'],
    dateOfBirth: '1929-08-11',
    dateOfDeath: '2001-11-27',
    mobileNumber: '(555) 567-8901',
    address: '345 Fir Lane, Columbus, OH',
    image: '/images/family/person-35.jpg'
  },
  { 
    id: '37', 
    name: 'Joseph Miller', 
    x: 1575, 
    y: 440, 
    parents: ['25'],
    dateOfBirth: '1932-05-06',
    dateOfDeath: '2005-03-19',
    mobileNumber: '(555) 678-9012',
    address: '912 Cypress Street, Indianapolis, IN',
    image: '/images/family/person-37.jpg'
  },

  // Current generation (Generation 5) - Sons and Daughters
  { 
    id: '39', 
    name: 'David Anderson', 
    x: 100, 
    y: 570, 
    parents: ['27'],
    dateOfBirth: '1955-02-14',
    dateOfDeath: undefined,
    mobileNumber: '(555) 789-0123',
    address: '456 Beech Drive, Springfield, IL',
    image: '/images/family/person-39.jpg'
  },
  { 
    id: '40', 
    name: 'Jennifer Anderson', 
    x: 200, 
    y: 570, 
    parents: ['27'],
    dateOfBirth: '1957-09-08',
    dateOfDeath: undefined,
    mobileNumber: '(555) 890-1234',
    address: '789 Hemlock Avenue, Chicago, IL',
    image: '/images/family/person-40.jpg'
  },
  { 
    id: '41', 
    name: 'Christopher Wilson', 
    x: 250, 
    y: 570, 
    parents: ['29'],
    dateOfBirth: '1952-11-23',
    dateOfDeath: undefined,
    mobileNumber: '(555) 901-2345',
    address: '123 Juniper Road, Detroit, MI',
    image: '/images/family/person-41.jpg'
  },
  { 
    id: '43', 
    name: 'Matthew Brown', 
    x: 625, 
    y: 570, 
    parents: ['31'],
    dateOfBirth: '1950-06-17',
    dateOfDeath: undefined,
    mobileNumber: '(555) 012-3456',
    address: '567 Locust Lane, Cleveland, OH',
    image: '/images/family/person-43.jpg'
  },
  { 
    id: '44', 
    name: 'Lisa Brown', 
    x: 725, 
    y: 570, 
    parents: ['31'],
    dateOfBirth: '1953-03-12',
    dateOfDeath: undefined,
    mobileNumber: '(555) 123-4567',
    address: '890 Basswood Street, Columbus, OH',
    image: '/images/family/person-44.jpg'
  },
  { 
    id: '45', 
    name: 'Andrew Taylor', 
    x: 925, 
    y: 570, 
    parents: ['33'],
    dateOfBirth: '1954-12-01',
    dateOfDeath: undefined,
    mobileNumber: '(555) 234-5678',
    address: '234 Cottonwood Drive, Indianapolis, IN',
    image: '/images/family/person-45.jpg'
  },
  { 
    id: '47', 
    name: 'Joshua Davis', 
    x: 1225, 
    y: 570, 
    parents: ['35'],
    dateOfBirth: '1958-07-26',
    dateOfDeath: undefined,
    mobileNumber: '(555) 345-6789',
    address: '678 Mulberry Avenue, Milwaukee, WI',
    image: '/images/family/person-47.jpg'
  },
  { 
    id: '48', 
    name: 'Sarah Davis', 
    x: 1325, 
    y: 570, 
    parents: ['35'],
    dateOfBirth: '1960-04-19',
    dateOfDeath: undefined,
    mobileNumber: '(555) 456-7890',
    address: '345 Pecan Road, Kansas City, MO',
    image: '/images/family/person-48.jpg'
  },
  { 
    id: '49', 
    name: 'Ryan Miller', 
    x: 1525, 
    y: 570, 
    parents: ['37'],
    dateOfBirth: '1956-10-04',
    dateOfDeath: undefined,
    mobileNumber: '(555) 567-8901',
    address: '912 Hazel Lane, St. Louis, MO',
    image: '/images/family/person-49.jpg'
  },
  { 
    id: '51', 
    name: 'Brandon Garcia', 
    x: 1625, 
    y: 570, 
    parents: ['37'],
    dateOfBirth: '1959-01-29',
    dateOfDeath: undefined,
    mobileNumber: '(555) 678-9012',
    address: '456 Alder Street, Nashville, TN',
    image: '/images/family/person-51.jpg'
  },

  // Children generation (Generation 6) - Sons and Daughters
  { 
    id: '53', 
    name: 'Tyler Anderson', 
    x: 50, 
    y: 700, 
    parents: ['39'],
    dateOfBirth: '1985-08-12',
    dateOfDeath: undefined,
    mobileNumber: '(555) 789-0123',
    address: '789 Cherry Street, Springfield, IL',
    image: '/images/family/person-53.jpg'
  },
  { 
    id: '54', 
    name: 'Ashley Wilson', 
    x: 200, 
    y: 700, 
    parents: ['41'],
    dateOfBirth: '1987-05-07',
    dateOfDeath: undefined,
    mobileNumber: '(555) 890-1234',
    address: '123 Apple Drive, Chicago, IL',
    image: '/images/family/person-54.jpg'
  },
  { 
    id: '55', 
    name: 'Justin Brown', 
    x: 600, 
    y: 700, 
    parents: ['43'],
    dateOfBirth: '1982-12-22',
    dateOfDeath: undefined,
    mobileNumber: '(555) 901-2345',
    address: '567 Pear Avenue, Detroit, MI',
    image: '/images/family/person-55.jpg'
  },
  { 
    id: '56', 
    name: 'Brittany Taylor', 
    x: 900, 
    y: 700, 
    parents: ['45'],
    dateOfBirth: '1984-03-15',
    dateOfDeath: undefined,
    mobileNumber: '(555) 012-3456',
    address: '890 Plum Road, Cleveland, OH',
    image: '/images/family/person-56.jpg'
  },
  { 
    id: '57', 
    name: 'Zachary Davis', 
    x: 1200, 
    y: 700, 
    parents: ['47'],
    dateOfBirth: '1986-09-30',
    dateOfDeath: undefined,
    mobileNumber: '(555) 123-4567',
    address: '234 Grape Lane, Columbus, OH',
    image: '/images/family/person-57.jpg'
  },
  { 
    id: '58', 
    name: 'Samantha Miller', 
    x: 1500, 
    y: 700, 
    parents: ['49'],
    dateOfBirth: '1988-06-18',
    dateOfDeath: undefined,
    mobileNumber: '(555) 234-5678',
    address: '678 Orange Street, Indianapolis, IN',
    image: '/images/family/person-58.jpg'
  },
  { 
    id: '59', 
    name: 'Austin Garcia', 
    x: 1600, 
    y: 700, 
    parents: ['51'],
    dateOfBirth: '1983-11-03',
    dateOfDeath: undefined,
    mobileNumber: '(555) 345-6789',
    address: '345 Lemon Drive, Milwaukee, WI',
    image: '/images/family/person-59.jpg'
  },

  // Grandchildren generation (Generation 7) - Sons and Daughters
  { 
    id: '63', 
    name: 'Mason Anderson', 
    x: 50, 
    y: 830, 
    parents: ['53'],
    dateOfBirth: '2010-04-25',
    dateOfDeath: undefined,
    mobileNumber: 'N/A (Minor)',
    address: '912 Lime Avenue, Springfield, IL',
    image: '/images/family/person-63.jpg'
  },
  { 
    id: '64', 
    name: 'Madison Wilson', 
    x: 200, 
    y: 830, 
    parents: ['54'],
    dateOfBirth: '2012-01-10',
    dateOfDeath: undefined,
    mobileNumber: 'N/A (Minor)',
    address: '456 Coconut Road, Chicago, IL',
    image: '/images/family/person-64.jpg'
  },
  { 
    id: '65', 
    name: 'Logan Brown', 
    x: 600, 
    y: 830, 
    parents: ['55'],
    dateOfBirth: '2008-07-14',
    dateOfDeath: undefined,
    mobileNumber: 'N/A (Minor)',
    address: '789 Mango Lane, Detroit, MI',
    image: '/images/family/person-65.jpg'
  },
  { 
    id: '66', 
    name: 'Olivia Taylor', 
    x: 900, 
    y: 830, 
    parents: ['56'],
    dateOfBirth: '2011-10-28',
    dateOfDeath: undefined,
    mobileNumber: 'N/A (Minor)',
    address: '123 Banana Street, Cleveland, OH',
    image: '/images/family/person-66.jpg'
  },
  { 
    id: '67', 
    name: 'Connor Davis', 
    x: 1200, 
    y: 830, 
    parents: ['57'],
    dateOfBirth: '2009-02-16',
    dateOfDeath: undefined,
    mobileNumber: 'N/A (Minor)',
    address: '567 Kiwi Drive, Columbus, OH',
    image: '/images/family/person-67.jpg'
  },
  { 
    id: '68', 
    name: 'Emma Miller', 
    x: 1500, 
    y: 830, 
    parents: ['58'],
    dateOfBirth: '2013-08-09',
    dateOfDeath: undefined,
    mobileNumber: 'N/A (Minor)',
    address: '890 Peach Avenue, Indianapolis, IN',
    image: '/images/family/person-68.jpg'
  },
  { 
    id: '69', 
    name: 'Hunter Garcia', 
    x: 1600, 
    y: 830, 
    parents: ['59'],
    dateOfBirth: '2007-05-21',
    dateOfDeath: undefined,
    mobileNumber: 'N/A (Minor)',
    address: '234 Strawberry Road, Milwaukee, WI',
    image: '/images/family/person-69.jpg'
  }
];
