const fs = require('fs');
const path = require('path');

// Simple name translations (you can expand this)
const nameTranslations = {
  'William Anderson': 'विल्यम अँडरसन',
  'James Wilson': 'जेम्स विल्सन',
  'Charles Brown': 'चार्ल्स ब्राउन',
  'George Taylor': 'जॉर्ज टेलर',
  'Robert Anderson': 'रॉबर्ट अँडरसन',
  'Mary Wilson': 'मेरी विल्सन',
  'Elizabeth Brown': 'एलिझाबेथ ब्राउन',
  'Margaret Taylor': 'मार्गारेट टेलर',
  'John Anderson': 'जॉन अँडरसन',
  'Sarah Wilson': 'सारा विल्सन',
  'David Brown': 'डेव्हिड ब्राउन',
  'Emma Taylor': 'एम्मा टेलर',
  'Michael Anderson': 'मायकेल अँडरसन',
  'Jennifer Wilson': 'जेनिफर विल्सन',
  'Christopher Brown': 'क्रिस्टोफर ब्राउन',
  'Lisa Taylor': 'लिसा टेलर',
  'Daniel Anderson': 'डॅनियल अँडरसन',
  'Jessica Wilson': 'जेसिका विल्सन',
  'Matthew Brown': 'मॅथ्यू ब्राउन',
  'Ashley Taylor': 'अॅशले टेलर'
};

// Simple address translations
const translateAddress = (address) => {
  if (!address || address === 'N/A') return address;
  
  // Basic translations for common address components
  let translated = address
    .replace(/Street/g, 'स्ट्रीट')
    .replace(/Avenue/g, 'अव्हेन्यू')
    .replace(/Drive/g, 'ड्राइव्ह')
    .replace(/Road/g, 'रोड')
    .replace(/Lane/g, 'लेन')
    .replace(/Springfield/g, 'स्प्रिंगफील्ड')
    .replace(/Chicago/g, 'शिकागो')
    .replace(/Detroit/g, 'डेट्रॉइट')
    .replace(/Cleveland/g, 'क्लीव्हलँड')
    .replace(/Columbus/g, 'कोलंबस')
    .replace(/Indianapolis/g, 'इंडियानापोलिस')
    .replace(/Milwaukee/g, 'मिलवॉकी')
    .replace(/Kansas City/g, 'कॅन्सस सिटी')
    .replace(/St\. Louis/g, 'सेंट लुईस')
    .replace(/Nashville/g, 'नॅशव्हिल')
    .replace(/IL/g, 'इलिनॉय')
    .replace(/MI/g, 'मिशिगन')
    .replace(/OH/g, 'ओहायो')
    .replace(/IN/g, 'इंडियाना')
    .replace(/WI/g, 'विस्कॉन्सिन')
    .replace(/MO/g, 'मिसूरी')
    .replace(/TN/g, 'टेनेसी');
    
  return translated;
};

// Read the current family data file
const familyDataPath = path.join(__dirname, '../src/data/familyData.ts');
const content = fs.readFileSync(familyDataPath, 'utf8');

console.log('Converting family data to multilingual format...');
console.log('This script will create a new file with multilingual structure.');
console.log('You can then replace the original file content.');

// Create a sample conversion for the first few entries
const sampleConversion = `import { Person } from '../types/Person';

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
    dateOfBirth: '1850-03-15',
    dateOfDeath: '1925-11-22',
    mobileNumber: 'N/A',
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
    dateOfBirth: '1852-07-08',
    dateOfDeath: '1928-04-12',
    mobileNumber: 'N/A',
    address: {
      mr: '४५६ पाइन अव्हेन्यू, शिकागो, इलिनॉय',
      en: '456 Pine Avenue, Chicago, IL'
    },
    image: '/images/family/person-3.jpg'
  }
  // ... (continue with other entries following the same pattern)
];

// Helper function to get relationships between family members
export const getRelationships = () => {
  // Parent-child relationships
  const relationships: Array<{parent: string, child: string, type: 'son' | 'daughter'}> = [
    // Add relationships here
  ];
  
  return relationships;
};
`;

// Write the sample to a new file
const outputPath = path.join(__dirname, '../src/data/familyData_multilingual_sample.ts');
fs.writeFileSync(outputPath, sampleConversion);

console.log('Sample multilingual family data created at:', outputPath);
console.log('');
console.log('Next steps:');
console.log('1. Review the sample structure');
console.log('2. Use this pattern to convert all family data entries');
console.log('3. Update the family tree service to use TranslationService');
console.log('4. Test the API with language parameters');
