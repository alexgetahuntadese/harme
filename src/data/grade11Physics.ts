export interface PhysicsQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade11PhysicsQuestions: { [chapter: string]: PhysicsQuestion[] } = {
'Unit 1: Physics and Human Society': [

/* =========================
   10 EASY QUESTIONS
========================= */

{
id: 'phy11_u1_e1',
question: 'What is physics mainly concerned with?',
options: ['Matter and energy', 'Only plants', 'Human behavior', 'Ancient history'],
correct: 'Matter and energy',
explanation: 'Physics studies matter, energy, motion, and forces.',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e2',
question: 'Which device works based on electricity?',
options: ['Light bulb', 'Notebook', 'Chair', 'Spoon'],
correct: 'Light bulb',
explanation: 'A light bulb converts electrical energy into light energy.',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e3',
question: 'Which branch of physics studies motion?',
options: ['Mechanics', 'Optics', 'Thermodynamics', 'Nuclear physics'],
correct: 'Mechanics',
explanation: 'Mechanics deals with motion and forces.',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e4',
question: 'Physics helps improve which sector?',
options: ['Technology', 'Only sports', 'Only music', 'Only art'],
correct: 'Technology',
explanation: 'Physics principles are applied in modern technology.',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e5',
question: 'Solar panels convert sunlight into:',
options: ['Electricity', 'Sound', 'Wind', 'Coal'],
correct: 'Electricity',
explanation: 'Solar panels convert light energy into electrical energy.',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e6',
question: 'Which energy source is renewable?',
options: ['Wind energy', 'Coal', 'Petroleum', 'Natural gas'],
correct: 'Wind energy',
explanation: 'Wind energy is renewable because it is naturally replenished.',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e7',
question: 'Which tool measures temperature?',
options: ['Thermometer', 'Barometer', 'Voltmeter', 'Ammeter'],
correct: 'Thermometer',
explanation: 'A thermometer measures temperature.',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e8',
question: 'Electric current is measured in:',
options: ['Ampere', 'Meter', 'Kelvin', 'Newton'],
correct: 'Ampere',
explanation: 'Electric current is measured in amperes (A).',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e9',
question: 'Which invention improved communication globally?',
options: ['Radio', 'Stone tools', 'Clay pot', 'Wheelbarrow'],
correct: 'Radio',
explanation: 'Radio uses electromagnetic waves for communication.',
difficulty: 'Easy'
},
{
id: 'phy11_u1_e10',
question: 'Which field studies light?',
options: ['Optics', 'Mechanics', 'Acoustics', 'Thermodynamics'],
correct: 'Optics',
explanation: 'Optics deals with light and its properties.',
difficulty: 'Easy'
},

/* =========================
   10 MEDIUM QUESTIONS
========================= */

{
id: 'phy11_u1_m1',
question: 'Why is physics important in transportation?',
options: [
'It explains motion and fuel efficiency',
'It builds roads',
'It designs uniforms',
'It writes traffic laws'
],
correct: 'It explains motion and fuel efficiency',
explanation: 'Physics principles like force and motion improve vehicle design.',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m2',
question: 'MRI machines work using:',
options: ['Magnetic fields', 'Sound waves', 'Coal power', 'Wind turbines'],
correct: 'Magnetic fields',
explanation: 'MRI uses strong magnetic fields and radio waves.',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m3',
question: 'The law of conservation of energy states:',
options: [
'Energy cannot be created or destroyed',
'Energy disappears',
'Energy only increases',
'Energy is unlimited'
],
correct: 'Energy cannot be created or destroyed',
explanation: 'Energy only changes form but total energy remains constant.',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m4',
question: 'Which physical quantity is measured in Newton?',
options: ['Force', 'Mass', 'Temperature', 'Voltage'],
correct: 'Force',
explanation: 'Force is measured in Newton (N).',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m5',
question: 'Satellites stay in orbit due to:',
options: [
'Gravity and forward motion',
'Air resistance',
'Magnetism only',
'Wind pressure'
],
correct: 'Gravity and forward motion',
explanation: 'Gravity pulls inward while motion keeps it moving forward.',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m6',
question: 'Hydroelectric power is produced using:',
options: ['Moving water', 'Coal burning', 'Gas explosion', 'Nuclear waste'],
correct: 'Moving water',
explanation: 'Flowing water turns turbines to generate electricity.',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m7',
question: 'Sound travels fastest in:',
options: ['Solids', 'Liquids', 'Gases', 'Vacuum'],
correct: 'Solids',
explanation: 'Sound travels fastest in solids due to closely packed particles.',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m8',
question: 'Which quantity is measured in Joules?',
options: ['Energy', 'Speed', 'Mass', 'Current'],
correct: 'Energy',
explanation: 'Energy is measured in Joules (J).',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m9',
question: 'Wind turbines convert:',
options: ['Kinetic energy into electrical energy', 'Light into heat', 'Sound into coal', 'Water into oil'],
correct: 'Kinetic energy into electrical energy',
explanation: 'Wind motion turns turbines to produce electricity.',
difficulty: 'Medium'
},
{
id: 'phy11_u1_m10',
question: 'Which branch studies heat?',
options: ['Thermodynamics', 'Optics', 'Mechanics', 'Electrostatics'],
correct: 'Thermodynamics',
explanation: 'Thermodynamics studies heat and temperature.',
difficulty: 'Medium'
},

/* =========================
   10 HARD QUESTIONS
========================= */

{
id: 'phy11_u1_h1',
question: 'Why is precise measurement important in physics?',
options: [
'To ensure reproducible scientific results',
'To waste time',
'To increase cost',
'To confuse data'
],
correct: 'To ensure reproducible scientific results',
explanation: 'Accuracy allows experiments to be repeated and verified.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h2',
question: 'Electromagnetic waves include:',
options: ['Radio waves', 'Water waves', 'Sound waves', 'Ocean tides'],
correct: 'Radio waves',
explanation: 'Radio waves are part of the electromagnetic spectrum.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h3',
question: 'Physics contributes to climate studies through:',
options: [
'Energy balance and radiation laws',
'Cooking methods',
'Music theory',
'Political debates'
],
correct: 'Energy balance and radiation laws',
explanation: 'Climate models use physical principles of radiation and energy transfer.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h4',
question: 'Which principle explains airplane lift?',
options: ['Bernoulli’s principle', 'Ohm’s law', 'Hooke’s law', 'Pascal’s law'],
correct: 'Bernoulli’s principle',
explanation: 'Faster airflow over wings reduces pressure creating lift.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h5',
question: 'Nuclear energy is produced by:',
options: ['Nuclear fission', 'Wind rotation', 'Water boiling only', 'Coal burning'],
correct: 'Nuclear fission',
explanation: 'Nuclear fission splits atoms releasing large energy.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h6',
question: 'Efficiency in machines is calculated as:',
options: [
'Useful output / Total input × 100%',
'Mass × speed',
'Force × time',
'Voltage × current'
],
correct: 'Useful output / Total input × 100%',
explanation: 'Efficiency measures how much input energy becomes useful output.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h7',
question: 'Global communication satellites rely on:',
options: ['Electromagnetic waves', 'Sound waves', 'Water pressure', 'Coal energy'],
correct: 'Electromagnetic waves',
explanation: 'Satellites transmit signals using electromagnetic waves.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h8',
question: 'Which concept explains energy transformation?',
options: ['Conservation of energy', 'Random motion', 'Gravity only', 'Magnetism only'],
correct: 'Conservation of energy',
explanation: 'Energy changes form but total energy remains constant.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h9',
question: 'Which factor reduces environmental impact of energy?',
options: ['Using renewable sources', 'Burning more coal', 'Cutting forests', 'Ignoring efficiency'],
correct: 'Using renewable sources',
explanation: 'Renewables reduce pollution and greenhouse gases.',
difficulty: 'Hard'
},
{
id: 'phy11_u1_h10',
question: 'Scientific models in physics are used to:',
options: [
'Predict and explain natural phenomena',
'Replace experiments',
'Avoid measurement',
'Eliminate mathematics'
],
correct: 'Predict and explain natural phenomena',
explanation: 'Models help explain observations and predict outcomes.',
difficulty: 'Hard'
}

]
};
