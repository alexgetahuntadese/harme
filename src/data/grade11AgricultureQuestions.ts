
export interface AgricultureQuestion {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const grade11AgricultureQuestions: { [chapter: string]: AgricultureQuestion[] } = {
  'Chapter 1: Introduction to Crop Production': [
    // Easy Questions
    {
      id: 'agr11_intro_e1',
      question: 'What is crop production?',
      options: ['The cultivation of plants for food and other uses', 'Animal breeding', 'Soil testing', 'Water management'],
      correct: 'The cultivation of plants for food and other uses',
      explanation: 'Crop production is the practice of growing plants for food, fiber, fuel, and other agricultural products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e2',
      question: 'Which of the following is a primary crop?',
      options: ['Wheat', 'Furniture', 'Clothing', 'Paper'],
      correct: 'Wheat',
      explanation: 'Wheat is a cereal grain that is a primary crop grown for food production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e3',
      question: 'What is the main purpose of agriculture?',
      options: ['To produce food and raw materials', 'To build houses', 'To create entertainment', 'To generate electricity'],
      correct: 'To produce food and raw materials',
      explanation: 'Agriculture primarily aims to produce food for human consumption and raw materials for various industries.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e4',
      question: 'Which season is typically best for planting most crops?',
      options: ['Spring', 'Winter', 'Late autumn', 'Mid-winter'],
      correct: 'Spring',
      explanation: 'Spring provides optimal conditions with moderate temperatures and adequate moisture for seed germination.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e5',
      question: 'What do plants need to grow?',
      options: ['Sunlight, water, and nutrients', 'Only water', 'Only sunlight', 'Only soil'],
      correct: 'Sunlight, water, and nutrients',
      explanation: 'Plants require sunlight for photosynthesis, water for transport and metabolism, and nutrients for growth.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e6',
      question: 'What is a seed?',
      options: ['A plant embryo with stored food', 'A type of soil', 'A farming tool', 'A type of fertilizer'],
      correct: 'A plant embryo with stored food',
      explanation: 'A seed contains a plant embryo along with stored nutrients needed for initial growth.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e7',
      question: 'Which of these is a root crop?',
      options: ['Carrot', 'Tomato', 'Apple', 'Wheat'],
      correct: 'Carrot',
      explanation: 'Carrots are root vegetables where the edible part grows underground.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e8',
      question: 'What is harvesting?',
      options: ['Collecting mature crops', 'Planting seeds', 'Watering plants', 'Preparing soil'],
      correct: 'Collecting mature crops',
      explanation: 'Harvesting is the process of gathering mature crops from the field.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e9',
      question: 'Which tool is commonly used for digging soil?',
      options: ['Hoe', 'Scissors', 'Hammer', 'Screwdriver'],
      correct: 'Hoe',
      explanation: 'A hoe is an agricultural tool designed for digging and cultivating soil.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_intro_e10',
      question: 'What is irrigation?',
      options: ['Supplying water to crops', 'Removing weeds', 'Adding fertilizer', 'Harvesting crops'],
      correct: 'Supplying water to crops',
      explanation: 'Irrigation is the artificial application of water to crops to support growth.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_intro_m1',
      question: 'Which factors are essential for successful crop production?',
      options: ['Climate, soil, water, and seeds', 'Only water and soil', 'Only climate', 'Only good seeds'],
      correct: 'Climate, soil, water, and seeds',
      explanation: 'Successful crop production requires optimal climate conditions, fertile soil, adequate water supply, and quality seeds.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m2',
      question: 'What is the difference between annual and perennial crops?',
      options: ['Annual crops complete their life cycle in one year, perennial crops live for multiple years', 'No difference', 'Annual crops are bigger', 'Perennial crops grow faster'],
      correct: 'Annual crops complete their life cycle in one year, perennial crops live for multiple years',
      explanation: 'Annual crops like wheat complete their entire life cycle in one growing season, while perennial crops like fruit trees live for many years.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m3',
      question: 'What is crop rotation?',
      options: ['Growing different crops in sequence on the same land', 'Turning plants around', 'Moving crops to different fields', 'Harvesting at different times'],
      correct: 'Growing different crops in sequence on the same land',
      explanation: 'Crop rotation involves systematically changing the type of crops grown on the same land to maintain soil health.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m4',
      question: 'Which of these is a cash crop?',
      options: ['Cotton', 'Potatoes for home use', 'Backyard vegetables', 'Herbs for cooking'],
      correct: 'Cotton',
      explanation: 'Cash crops like cotton are grown primarily for sale and profit rather than personal consumption.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m5',
      question: 'What is soil pH and why is it important?',
      options: ['Soil acidity/alkalinity level that affects nutrient availability', 'Soil temperature', 'Soil color', 'Soil texture'],
      correct: 'Soil acidity/alkalinity level that affects nutrient availability',
      explanation: 'Soil pH measures acidity or alkalinity and determines how well plants can absorb nutrients from the soil.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m6',
      question: 'What are the main types of fertilizers?',
      options: ['Organic and inorganic', 'Liquid and solid', 'Expensive and cheap', 'Local and imported'],
      correct: 'Organic and inorganic',
      explanation: 'Fertilizers are classified as organic (from living materials) or inorganic (synthetic chemicals).',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m7',
      question: 'What is intercropping?',
      options: ['Growing two or more crops together in the same field', 'Growing crops in sequence', 'Growing crops in greenhouses', 'Growing crops without soil'],
      correct: 'Growing two or more crops together in the same field',
      explanation: 'Intercropping involves cultivating multiple crop species simultaneously in the same area.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m8',
      question: 'Which pest control method is most environmentally friendly?',
      options: ['Biological control', 'Chemical pesticides', 'Burning fields', 'Ignoring pests'],
      correct: 'Biological control',
      explanation: 'Biological control uses natural predators and organisms to control pests without harmful chemicals.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m9',
      question: 'What is soil erosion?',
      options: ['Loss of topsoil due to wind or water', 'Soil becoming too wet', 'Soil becoming too dry', 'Soil changing color'],
      correct: 'Loss of topsoil due to wind or water',
      explanation: 'Soil erosion is the removal of fertile topsoil by natural forces like wind and water.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_intro_m10',
      question: 'What is the purpose of soil testing?',
      options: ['To determine soil fertility and nutrient content', 'To check soil color', 'To measure soil weight', 'To determine soil age'],
      correct: 'To determine soil fertility and nutrient content',
      explanation: 'Soil testing analyzes the chemical composition and fertility status to guide fertilization decisions.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_intro_h1',
      question: 'What is the difference between subsistence and commercial farming?',
      options: ['Subsistence is for family consumption, commercial is for market sale', 'No difference', 'Commercial uses more water', 'Subsistence uses modern technology'],
      correct: 'Subsistence is for family consumption, commercial is for market sale',
      explanation: 'Subsistence farming is primarily for family consumption while commercial farming focuses on producing crops for market sale and profit.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h2',
      question: 'How does climate change affect crop production?',
      options: ['Alters rainfall patterns, temperatures, and growing seasons', 'Has no effect', 'Only affects temperature', 'Only affects rainfall'],
      correct: 'Alters rainfall patterns, temperatures, and growing seasons',
      explanation: 'Climate change disrupts traditional weather patterns, affecting when and how crops can be grown successfully.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h3',
      question: 'What is precision agriculture?',
      options: ['Using technology to optimize crop production with minimal inputs', 'Farming very small areas', 'Using only hand tools', 'Growing only one type of crop'],
      correct: 'Using technology to optimize crop production with minimal inputs',
      explanation: 'Precision agriculture uses GPS, sensors, and data analysis to apply inputs precisely where and when needed.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h4',
      question: 'What is integrated pest management (IPM)?',
      options: ['Combining multiple pest control methods sustainably', 'Using only chemical pesticides', 'Ignoring all pests', 'Using only biological control'],
      correct: 'Combining multiple pest control methods sustainably',
      explanation: 'IPM combines biological, cultural, physical, and chemical methods to manage pests in an environmentally responsible way.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h5',
      question: 'How does soil organic matter affect crop production?',
      options: ['Improves soil structure, water retention, and nutrient availability', 'Only affects soil color', 'Makes soil too heavy', 'Reduces crop yields'],
      correct: 'Improves soil structure, water retention, and nutrient availability',
      explanation: 'Organic matter enhances soil physical properties and provides slow-release nutrients for sustained crop growth.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h6',
      question: 'What is sustainable agriculture?',
      options: ['Farming practices that maintain productivity while protecting the environment', 'Farming without any inputs', 'Farming only organic crops', 'Farming for short-term profits'],
      correct: 'Farming practices that maintain productivity while protecting the environment',
      explanation: 'Sustainable agriculture balances productive farming with environmental stewardship and economic viability.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h7',
      question: 'What role do cover crops play in crop production?',
      options: ['Protect soil, improve fertility, and suppress weeds', 'Only provide decoration', 'Compete with main crops', 'Reduce soil fertility'],
      correct: 'Protect soil, improve fertility, and suppress weeds',
      explanation: 'Cover crops protect soil from erosion, add organic matter, and help manage weeds and pests.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h8',
      question: 'How does crop breeding improve production?',
      options: ['Develops varieties with better yield, disease resistance, and quality traits', 'Only changes crop appearance', 'Makes crops grow faster', 'Reduces crop diversity'],
      correct: 'Develops varieties with better yield, disease resistance, and quality traits',
      explanation: 'Plant breeding systematically improves crop characteristics to enhance productivity and adaptability.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h9',
      question: 'What is water use efficiency in agriculture?',
      options: ['Maximizing crop yield per unit of water used', 'Using as much water as possible', 'Watering crops daily', 'Using only rainwater'],
      correct: 'Maximizing crop yield per unit of water used',
      explanation: 'Water use efficiency focuses on getting the maximum agricultural output from each unit of water applied.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_intro_h10',
      question: 'What is agroecology?',
      options: ['Applying ecological principles to agricultural systems', 'Farming without any technology', 'Growing only native plants', 'Farming in forests'],
      correct: 'Applying ecological principles to agricultural systems',
      explanation: 'Agroecology integrates ecological concepts and principles into the design and management of agricultural systems.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 2: Field Crops Production and Management': [
    // Easy Questions
    {
      id: 'agr11_field_e1',
      question: 'What are field crops?',
      options: ['Crops grown in large fields like cereals and legumes', 'Garden vegetables', 'Fruit trees', 'Flowers'],
      correct: 'Crops grown in large fields like cereals and legumes',
      explanation: 'Field crops are plants grown extensively in large fields, including cereals like wheat, maize, and legumes like beans.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e2',
      question: 'Which of these is a cereal crop?',
      options: ['Maize', 'Beans', 'Potatoes', 'Carrots'],
      correct: 'Maize',
      explanation: 'Maize (corn) is a cereal grain crop that belongs to the grass family.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e3',
      question: 'What is plowing?',
      options: ['Breaking and turning over soil before planting', 'Harvesting crops', 'Watering plants', 'Applying fertilizer'],
      correct: 'Breaking and turning over soil before planting',
      explanation: 'Plowing is the process of breaking up and turning over soil to prepare it for planting.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e4',
      question: 'Which tool is used for plowing?',
      options: ['Plow', 'Sickle', 'Watering can', 'Basket'],
      correct: 'Plow',
      explanation: 'A plow is a farming tool used to break up and turn over soil.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e5',
      question: 'What is weeding?',
      options: ['Removing unwanted plants from crops', 'Planting seeds', 'Harvesting crops', 'Applying water'],
      correct: 'Removing unwanted plants from crops',
      explanation: 'Weeding involves removing weeds (unwanted plants) that compete with crops for resources.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e6',
      question: 'Which of these is a legume crop?',
      options: ['Beans', 'Wheat', 'Maize', 'Rice'],
      correct: 'Beans',
      explanation: 'Beans are leguminous crops that can fix nitrogen from the atmosphere.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e7',
      question: 'What is thinning?',
      options: ['Removing excess seedlings to give space to others', 'Adding more seeds', 'Cutting mature crops', 'Watering less'],
      correct: 'Removing excess seedlings to give space to others',
      explanation: 'Thinning involves removing some seedlings to reduce competition and allow remaining plants to grow better.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e8',
      question: 'When should field crops be harvested?',
      options: ['When they are fully mature', 'Immediately after planting', 'When they are still green', 'Before they flower'],
      correct: 'When they are fully mature',
      explanation: 'Field crops should be harvested when they reach full maturity for maximum yield and quality.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e9',
      question: 'What is broadcasting?',
      options: ['Scattering seeds evenly over a field', 'Planting in rows', 'Harvesting crops', 'Applying pesticides'],
      correct: 'Scattering seeds evenly over a field',
      explanation: 'Broadcasting is a seeding method where seeds are scattered uniformly over the field surface.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_field_e10',
      question: 'Which season is best for planting cereal crops?',
      options: ['Rainy season', 'Dry season', 'Winter', 'Any season'],
      correct: 'Rainy season',
      explanation: 'Most cereal crops are planted at the beginning of the rainy season when moisture is adequate.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_field_m1',
      question: 'What is crop rotation?',
      options: ['Growing different crops in sequence on the same land', 'Turning crops upside down', 'Moving crops to different locations', 'Harvesting at different times'],
      correct: 'Growing different crops in sequence on the same land',
      explanation: 'Crop rotation involves growing different types of crops in a planned sequence on the same land to maintain soil fertility and reduce pest problems.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m2',
      question: 'What is the recommended plant spacing for optimal growth?',
      options: ['Adequate space to minimize competition for resources', 'Very close together', 'Very far apart', 'Random spacing'],
      correct: 'Adequate space to minimize competition for resources',
      explanation: 'Proper plant spacing ensures plants have adequate access to light, water, and nutrients without excessive competition.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m3',
      question: 'What is minimum tillage?',
      options: ['Reducing soil disturbance during land preparation', 'Tilling as much as possible', 'Never tilling the soil', 'Tilling only with hand tools'],
      correct: 'Reducing soil disturbance during land preparation',
      explanation: 'Minimum tillage involves minimal soil disturbance to preserve soil structure and reduce erosion.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m4',
      question: 'Which method is best for controlling weeds in field crops?',
      options: ['Integrated weed management', 'Only chemical herbicides', 'Only manual weeding', 'Ignoring weeds'],
      correct: 'Integrated weed management',
      explanation: 'Integrated weed management combines multiple control methods for effective and sustainable weed control.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m5',
      question: 'What is the purpose of field leveling?',
      options: ['Ensure uniform water distribution and drainage', 'Make fields look neat', 'Reduce field size', 'Increase soil depth'],
      correct: 'Ensure uniform water distribution and drainage',
      explanation: 'Field leveling creates uniform slopes for proper water distribution and prevents waterlogging.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m6',
      question: 'What is seed rate?',
      options: ['Amount of seed used per unit area', 'Speed of planting', 'Cost of seeds', 'Quality of seeds'],
      correct: 'Amount of seed used per unit area',
      explanation: 'Seed rate refers to the quantity of seeds planted per unit area to achieve optimal plant population.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m7',
      question: 'What is the advantage of line sowing over broadcasting?',
      options: ['Better plant spacing and easier field operations', 'Uses less seed', 'Requires less water', 'Grows faster'],
      correct: 'Better plant spacing and easier field operations',
      explanation: 'Line sowing allows for uniform plant spacing and makes cultivation practices like weeding easier.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m8',
      question: 'What is topdressing?',
      options: ['Applying fertilizer to growing crops', 'Removing top soil', 'Covering seeds with soil', 'Pruning plant tops'],
      correct: 'Applying fertilizer to growing crops',
      explanation: 'Topdressing is the application of fertilizer to crops during their growing period.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m9',
      question: 'What is the main purpose of earthing up?',
      options: ['Supporting plant stems and covering roots', 'Removing soil from plants', 'Planting deeper', 'Harvesting roots'],
      correct: 'Supporting plant stems and covering roots',
      explanation: 'Earthing up involves mounding soil around plant stems for support and to cover exposed roots.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_field_m10',
      question: 'What is green manuring?',
      options: ['Growing crops specifically to be plowed into soil for nutrients', 'Using only green fertilizers', 'Composting green waste', 'Planting green vegetables'],
      correct: 'Growing crops specifically to be plowed into soil for nutrients',
      explanation: 'Green manuring involves growing crops that are then incorporated into the soil to improve fertility.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_field_h1',
      question: 'Why is nitrogen fixation important in legume crops?',
      options: ['It enriches soil with nitrogen naturally', 'It makes crops grow faster', 'It prevents diseases', 'It increases water retention'],
      correct: 'It enriches soil with nitrogen naturally',
      explanation: 'Legumes have symbiotic bacteria in their root nodules that fix atmospheric nitrogen, enriching the soil naturally and reducing the need for nitrogen fertilizers.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h2',
      question: 'What is the C:N ratio and why is it important in crop residue management?',
      options: ['Carbon to nitrogen ratio that affects decomposition rate', 'Crop to nitrogen ratio', 'Cost to nutrition ratio', 'Climate to nitrogen ratio'],
      correct: 'Carbon to nitrogen ratio that affects decomposition rate',
      explanation: 'C:N ratio determines how quickly organic matter decomposes and releases nutrients to plants.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h3',
      question: 'How does no-till farming benefit field crop production?',
      options: ['Reduces soil erosion, conserves moisture, and improves soil structure', 'Increases tillage costs', 'Requires more fertilizer', 'Reduces crop yields'],
      correct: 'Reduces soil erosion, conserves moisture, and improves soil structure',
      explanation: 'No-till farming maintains soil structure, reduces erosion, and conserves soil moisture and organic matter.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h4',
      question: 'What is allelopathy in crop production?',
      options: ['Chemical interactions between plants that affect growth', 'Physical support between plants', 'Nutrient sharing between plants', 'Water sharing between plants'],
      correct: 'Chemical interactions between plants that affect growth',
      explanation: 'Allelopathy involves the release of chemicals by plants that can inhibit or promote the growth of other plants.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h5',
      question: 'How does crop canopy management affect yield?',
      options: ['Optimizes light interception and reduces disease pressure', 'Only affects plant height', 'Reduces water usage', 'Increases fertilizer needs'],
      correct: 'Optimizes light interception and reduces disease pressure',
      explanation: 'Proper canopy management maximizes light capture while improving air circulation to reduce disease risks.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h6',
      question: 'What is the critical period for weed control?',
      options: ['Early growth stage when crops are most vulnerable to weed competition', 'Just before harvest', 'During flowering', 'After crop maturity'],
      correct: 'Early growth stage when crops are most vulnerable to weed competition',
      explanation: 'The critical period is when crops are most sensitive to weed competition, typically during early growth stages.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h7',
      question: 'How does soil compaction affect field crop production?',
      options: ['Reduces root penetration, water infiltration, and nutrient uptake', 'Improves soil structure', 'Increases crop yields', 'Reduces pest problems'],
      correct: 'Reduces root penetration, water infiltration, and nutrient uptake',
      explanation: 'Soil compaction restricts root growth, reduces water and air movement, and limits nutrient availability.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h8',
      question: 'What is precision seeding and what are its advantages?',
      options: ['Accurate seed placement for optimal plant population and resource use', 'Planting many seeds closely', 'Planting only expensive seeds', 'Planting without measuring'],
      correct: 'Accurate seed placement for optimal plant population and resource use',
      explanation: 'Precision seeding ensures optimal plant spacing and population density for maximum resource efficiency.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h9',
      question: 'How does photosynthetically active radiation (PAR) affect crop yields?',
      options: ['Determines the amount of light energy available for photosynthesis', 'Affects soil temperature only', 'Influences water uptake only', 'Controls pest populations'],
      correct: 'Determines the amount of light energy available for photosynthesis',
      explanation: 'PAR is the portion of solar radiation that plants can use for photosynthesis, directly affecting yield potential.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_field_h10',
      question: 'What is the harvest index and why is it important?',
      options: ['Ratio of grain yield to total plant biomass', 'Speed of harvesting', 'Quality of harvest', 'Cost of harvesting'],
      correct: 'Ratio of grain yield to total plant biomass',
      explanation: 'Harvest index measures the efficiency of converting total plant growth into harvestable yield.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 3: Industrial Crops Production and Management': [
    // Easy Questions
    {
      id: 'agr11_industrial_e1',
      question: 'What are industrial crops?',
      options: ['Crops grown for industrial purposes like cotton and sugarcane', 'Crops grown in factories', 'Crops for home use', 'Wild plants'],
      correct: 'Crops grown for industrial purposes like cotton and sugarcane',
      explanation: 'Industrial crops are grown primarily for industrial processing rather than direct consumption, including cotton, sugarcane, and oil seeds.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e2',
      question: 'Which of these is an industrial crop?',
      options: ['Cotton', 'Lettuce', 'Carrots', 'Tomatoes'],
      correct: 'Cotton',
      explanation: 'Cotton is grown primarily for textile production, making it an industrial crop.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e3',
      question: 'What is cotton used for?',
      options: ['Making textiles and clothing', 'Food production', 'Building materials', 'Fuel'],
      correct: 'Making textiles and clothing',
      explanation: 'Cotton fibers are primarily used in the textile industry to make fabrics and clothing.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e4',
      question: 'Which crop is used to make sugar?',
      options: ['Sugarcane', 'Wheat', 'Maize', 'Barley'],
      correct: 'Sugarcane',
      explanation: 'Sugarcane is processed to extract sugar for various industrial and food applications.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e5',
      question: 'What are oil seeds used for?',
      options: ['Producing cooking oil and industrial oils', 'Making bread', 'Animal feed only', 'Decoration'],
      correct: 'Producing cooking oil and industrial oils',
      explanation: 'Oil seeds like sunflower and sesame are processed to extract oils for cooking and industrial uses.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e6',
      question: 'Which of these is an oil seed crop?',
      options: ['Sunflower', 'Rice', 'Wheat', 'Potato'],
      correct: 'Sunflower',
      explanation: 'Sunflower seeds contain oil that can be extracted for various uses.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e7',
      question: 'What is tobacco used for?',
      options: ['Cigarettes and other tobacco products', 'Food flavoring', 'Medicine', 'Building materials'],
      correct: 'Cigarettes and other tobacco products',
      explanation: 'Tobacco is primarily grown for the production of cigarettes and other tobacco products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e8',
      question: 'Which crop is used to make rubber?',
      options: ['Rubber tree', 'Cotton', 'Wheat', 'Maize'],
      correct: 'Rubber tree',
      explanation: 'Rubber trees produce latex that is processed into rubber products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e9',
      question: 'What is jute used for?',
      options: ['Making ropes and sacks', 'Food production', 'Medicine', 'Fuel'],
      correct: 'Making ropes and sacks',
      explanation: 'Jute fibers are used to make ropes, sacks, and other coarse textiles.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_industrial_e10',
      question: 'Which climate is best for growing cotton?',
      options: ['Warm and humid', 'Cold and dry', 'Very cold', 'Desert conditions'],
      correct: 'Warm and humid',
      explanation: 'Cotton grows best in warm temperatures with adequate moisture during the growing season.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_industrial_m1',
      question: 'Which of these is an example of an industrial crop in Ethiopia?',
      options: ['Cotton', 'Tomato', 'Lettuce', 'Apple'],
      correct: 'Cotton',
      explanation: 'Cotton is a major industrial crop in Ethiopia, grown for textile production and export.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m2',
      question: 'What is the difference between food crops and industrial crops?',
      options: ['Food crops are for consumption, industrial crops are for processing', 'No difference', 'Industrial crops are bigger', 'Food crops grow faster'],
      correct: 'Food crops are for consumption, industrial crops are for processing',
      explanation: 'Food crops are grown primarily for human consumption, while industrial crops are grown for processing into other products.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m3',
      question: 'What processing is required for cotton after harvest?',
      options: ['Ginning to separate fibers from seeds', 'Grinding into flour', 'Fermenting', 'Drying only'],
      correct: 'Ginning to separate fibers from seeds',
      explanation: 'Cotton ginning removes seeds from cotton fibers, preparing them for textile processing.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m4',
      question: 'Which factor is most important for sugarcane production?',
      options: ['Adequate water supply', 'Cold temperatures', 'Sandy soil only', 'Shade conditions'],
      correct: 'Adequate water supply',
      explanation: 'Sugarcane requires abundant water throughout its growing period for optimal sugar production.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m5',
      question: 'What is the main challenge in industrial crop storage?',
      options: ['Maintaining quality for processing', 'Keeping crops fresh for eating', 'Preventing spoilage for immediate consumption', 'Maintaining appearance'],
      correct: 'Maintaining quality for processing',
      explanation: 'Industrial crops must maintain specific quality standards required for industrial processing.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m6',
      question: 'Which oil seed crop is drought tolerant?',
      options: ['Sesame', 'Sunflower', 'Soybean', 'Groundnut'],
      correct: 'Sesame',
      explanation: 'Sesame is known for its ability to grow in semi-arid conditions with limited water.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m7',
      question: 'What is the harvesting indicator for cotton?',
      options: ['When bolls are fully opened and dry', 'When plants are green', 'Immediately after flowering', 'When leaves fall'],
      correct: 'When bolls are fully opened and dry',
      explanation: 'Cotton is harvested when the bolls split open and the fiber is dry and white.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m8',
      question: 'Which part of the sugarcane plant contains the most sugar?',
      options: ['The stem', 'The leaves', 'The roots', 'The flowers'],
      correct: 'The stem',
      explanation: 'Sugarcane stems accumulate the highest concentration of sugar and are the part that is processed.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m9',
      question: 'What is the primary pest problem in cotton production?',
      options: ['Bollworm', 'Aphids', 'Grasshoppers', 'Snails'],
      correct: 'Bollworm',
      explanation: 'Bollworms are major pests that attack cotton bolls, causing significant yield losses.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_industrial_m10',
      question: 'Which processing step is first for oil seed crops?',
      options: ['Cleaning and drying', 'Oil extraction', 'Grinding', 'Packaging'],
      correct: 'Cleaning and drying',
      explanation: 'Oil seeds must be cleaned of impurities and properly dried before oil extraction.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_industrial_h1',
      question: 'What are the main challenges in industrial crop production?',
      options: ['Market fluctuations, processing requirements, and quality standards', 'Only weather problems', 'Only soil issues', 'Only pest problems'],
      correct: 'Market fluctuations, processing requirements, and quality standards',
      explanation: 'Industrial crops face complex challenges including volatile market prices, specific processing requirements, and strict quality standards for industrial use.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h2',
      question: 'How does fiber quality affect cotton marketing?',
      options: ['Determines price and end-use applications', 'Has no effect on marketing', 'Only affects color', 'Only affects quantity'],
      correct: 'Determines price and end-use applications',
      explanation: 'Cotton fiber quality parameters like length, strength, and fineness directly influence market value and industrial applications.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h3',
      question: 'What is the relationship between sugar content and harvesting time in sugarcane?',
      options: ['Sugar content peaks at optimal maturity', 'Sugar content decreases over time', 'Sugar content remains constant', 'Sugar content increases indefinitely'],
      correct: 'Sugar content peaks at optimal maturity',
      explanation: 'Sugarcane reaches maximum sugar content at physiological maturity, after which it may decline.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h4',
      question: 'How does oil content vary in different oil seed crops?',
      options: ['Ranges from 20-50% depending on crop species and variety', 'All oil seeds have the same oil content', 'Oil content is always 50%', 'Oil content depends only on soil'],
      correct: 'Ranges from 20-50% depending on crop species and variety',
      explanation: 'Oil content varies significantly among oil seed crops, with sunflower containing 35-45% oil and sesame containing 45-55% oil.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h5',
      question: 'What is integrated pest management in cotton production?',
      options: ['Combining biological, cultural, and chemical control methods', 'Using only chemical pesticides', 'Using only biological control', 'Ignoring pest problems'],
      correct: 'Combining biological, cultural, and chemical control methods',
      explanation: 'IPM in cotton involves using multiple control strategies to manage pests while minimizing environmental impact.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h6',
      question: 'How does processing affect the value addition of industrial crops?',
      options: ['Transforms raw materials into higher-value products', 'Reduces crop value', 'Has no effect on value', 'Only changes appearance'],
      correct: 'Transforms raw materials into higher-value products',
      explanation: 'Processing adds value by converting raw industrial crops into finished products with higher market prices.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h7',
      question: 'What role does mechanization play in industrial crop production?',
      options: ['Increases efficiency and reduces labor costs', 'Only increases costs', 'Reduces crop quality', 'Has no significant impact'],
      correct: 'Increases efficiency and reduces labor costs',
      explanation: 'Mechanization improves operational efficiency, reduces labor requirements, and enables timely field operations.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h8',
      question: 'How do climate conditions affect industrial crop quality?',
      options: ['Temperature and humidity during growth and harvest affect final product quality', 'Climate has no effect on quality', 'Only rainfall affects quality', 'Only temperature affects quality'],
      correct: 'Temperature and humidity during growth and harvest affect final product quality',
      explanation: 'Climate conditions throughout the growing season and at harvest significantly influence the quality characteristics of industrial crops.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h9',
      question: 'What is contract farming and how does it benefit industrial crop production?',
      options: ['Predetermined agreements ensuring market access and price stability', 'Farming without contracts', 'Only large-scale farming', 'Government-controlled farming'],
      correct: 'Predetermined agreements ensuring market access and price stability',
      explanation: 'Contract farming provides farmers with guaranteed markets and processors with reliable supply of quality raw materials.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_industrial_h10',
      question: 'How does post-harvest handling affect industrial crop quality?',
      options: ['Proper handling maintains quality required for processing', 'Post-harvest handling is not important', 'Only affects appearance', 'Only affects quantity'],
      correct: 'Proper handling maintains quality required for processing',
      explanation: 'Appropriate post-harvest handling preserves the quality characteristics essential for industrial processing and market value.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 4: Introduction to Farm Animals': [
    // Easy Questions
    {
      id: 'agr11_animals_e1',
      question: 'What are farm animals?',
      options: ['Domesticated animals raised for agricultural purposes', 'Wild animals', 'Pet animals only', 'Zoo animals'],
      correct: 'Domesticated animals raised for agricultural purposes',
      explanation: 'Farm animals are domesticated animals raised specifically for agricultural production including meat, milk, eggs, and other products.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e2',
      question: 'Which of these is a farm animal?',
      options: ['Cow', 'Lion', 'Elephant', 'Tiger'],
      correct: 'Cow',
      explanation: 'Cows are domesticated animals commonly raised on farms for milk and meat production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e3',
      question: 'What do cattle produce?',
      options: ['Milk and meat', 'Only milk', 'Only meat', 'Eggs'],
      correct: 'Milk and meat',
      explanation: 'Cattle are raised for both milk production (dairy cattle) and meat production (beef cattle).',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e4',
      question: 'Which animal produces eggs?',
      options: ['Chicken', 'Cow', 'Sheep', 'Goat'],
      correct: 'Chicken',
      explanation: 'Chickens are the primary source of eggs in agricultural production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e5',
      question: 'What is animal husbandry?',
      options: ['The care and management of farm animals', 'Building animal shelters', 'Buying animals', 'Selling animals'],
      correct: 'The care and management of farm animals',
      explanation: 'Animal husbandry involves the breeding, feeding, and general care of domestic animals.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e6',
      question: 'Which animal is known for producing wool?',
      options: ['Sheep', 'Chicken', 'Pig', 'Cow'],
      correct: 'Sheep',
      explanation: 'Sheep are raised for their wool, which is used to make clothing and textiles.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e7',
      question: 'What is the main purpose of raising pigs?',
      options: ['Meat production', 'Milk production', 'Egg production', 'Wool production'],
      correct: 'Meat production',
      explanation: 'Pigs are primarily raised for pork production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e8',
      question: 'Which animal is smallest among common farm animals?',
      options: ['Chicken', 'Cow', 'Horse', 'Sheep'],
      correct: 'Chicken',
      explanation: 'Chickens are typically the smallest among common farm animals.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e9',
      question: 'What do goats provide?',
      options: ['Milk, meat, and hide', 'Only milk', 'Only meat', 'Only hide'],
      correct: 'Milk, meat, and hide',
      explanation: 'Goats are versatile animals that provide milk, meat, and hides for various uses.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_animals_e10',
      question: 'Which animal is used for transportation in some areas?',
      options: ['Horse', 'Chicken', 'Pig', 'Rabbit'],
      correct: 'Horse',
      explanation: 'Horses have been traditionally used for transportation and are still used in some agricultural areas.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_animals_m1',
      question: 'Which animals are commonly raised in Ethiopian agriculture?',
      options: ['Cattle, sheep, goats, and chickens', 'Only cattle', 'Only chickens', 'Tigers and lions'],
      correct: 'Cattle, sheep, goats, and chickens',
      explanation: 'Ethiopia has diverse livestock including cattle, sheep, goats, chickens, and other animals that contribute significantly to agriculture.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m2',
      question: 'What is the difference between ruminants and non-ruminants?',
      options: ['Ruminants have multi-chambered stomachs, non-ruminants have simple stomachs', 'No difference', 'Ruminants are bigger', 'Non-ruminants eat more'],
      correct: 'Ruminants have multi-chambered stomachs, non-ruminants have simple stomachs',
      explanation: 'Ruminants like cattle and sheep have complex, multi-chambered stomachs that allow them to digest fibrous plant material.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m3',
      question: 'What is selective breeding in animals?',
      options: ['Choosing animals with desirable traits for reproduction', 'Random breeding', 'Breeding only one type of animal', 'Avoiding breeding'],
      correct: 'Choosing animals with desirable traits for reproduction',
      explanation: 'Selective breeding involves choosing parent animals with desired characteristics to improve offspring quality.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m4',
      question: 'Which animals are considered monogastric?',
      options: ['Pigs and chickens', 'Cattle and sheep', 'Goats and cattle', 'Sheep and chickens'],
      correct: 'Pigs and chickens',
      explanation: 'Monogastric animals like pigs and chickens have single-chambered stomachs similar to humans.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m5',
      question: 'What is the gestation period of cattle?',
      options: ['About 9 months', 'About 3 months', 'About 12 months', 'About 6 months'],
      correct: 'About 9 months',
      explanation: 'Cattle have a gestation period of approximately 9 months (280 days).',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m6',
      question: 'What is the main difference between dairy and beef cattle?',
      options: ['Dairy cattle are bred for milk production, beef cattle for meat', 'No difference', 'Dairy cattle are smaller', 'Beef cattle produce more milk'],
      correct: 'Dairy cattle are bred for milk production, beef cattle for meat',
      explanation: 'Dairy cattle are selected for high milk production, while beef cattle are bred for meat quality and quantity.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m7',
      question: 'What is animal welfare?',
      options: ['Ensuring animals are healthy, comfortable, and free from distress', 'Only providing food', 'Only providing shelter', 'Only providing water'],
      correct: 'Ensuring animals are healthy, comfortable, and free from distress',
      explanation: 'Animal welfare encompasses the physical and mental well-being of animals in human care.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m8',
      question: 'Which factor is most important for animal reproduction?',
      options: ['Proper nutrition and health management', 'Only good shelter', 'Only clean water', 'Only adequate space'],
      correct: 'Proper nutrition and health management',
      explanation: 'Adequate nutrition and health care are essential for successful animal reproduction.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m9',
      question: 'What is the purpose of animal identification?',
      options: ['Track individual animals for health and production records', 'Make animals look different', 'Prevent theft only', 'For decoration'],
      correct: 'Track individual animals for health and production records',
      explanation: 'Animal identification helps farmers track health, breeding, and production records of individual animals.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_animals_m10',
      question: 'What is the lactation period in dairy cows?',
      options: ['About 10 months', 'About 3 months', 'About 24 months', 'About 1 month'],
      correct: 'About 10 months',
      explanation: 'Dairy cows typically lactate for about 10 months after giving birth.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_animals_h1',
      question: 'What is the importance of livestock in mixed farming systems?',
      options: ['Provides manure, income diversification, and soil fertility', 'Only for meat production', 'Only for transportation', 'Only for companionship'],
      correct: 'Provides manure, income diversification, and soil fertility',
      explanation: 'In mixed farming systems, livestock provides multiple benefits including organic manure for crops, income diversification, and improved soil fertility through integrated management.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h2',
      question: 'How does genetic diversity affect livestock production?',
      options: ['Maintains breed resilience and adaptation to environmental changes', 'Has no effect', 'Only affects appearance', 'Reduces production'],
      correct: 'Maintains breed resilience and adaptation to environmental changes',
      explanation: 'Genetic diversity ensures livestock populations can adapt to changing environmental conditions and resist diseases.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h3',
      question: 'What is the role of indigenous livestock breeds in sustainable agriculture?',
      options: ['Adapted to local conditions with low input requirements', 'Only for traditional purposes', 'Less productive than exotic breeds', 'Difficult to manage'],
      correct: 'Adapted to local conditions with low input requirements',
      explanation: 'Indigenous breeds are naturally adapted to local climates and conditions, requiring fewer external inputs.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h4',
      question: 'How does livestock contribute to food security?',
      options: ['Provides protein, micronutrients, and income for food purchase', 'Only provides meat', 'Reduces food security', 'Only provides income'],
      correct: 'Provides protein, micronutrients, and income for food purchase',
      explanation: 'Livestock contributes to food security through direct food production and income generation for purchasing other foods.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h5',
      question: 'What is the concept of carbon footprint in livestock production?',
      options: ['Greenhouse gas emissions from animal agriculture', 'Animal footprint size', 'Cost of production', 'Land area used'],
      correct: 'Greenhouse gas emissions from animal agriculture',
      explanation: 'Carbon footprint measures the total greenhouse gas emissions associated with livestock production.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h6',
      question: 'How does stress affect animal productivity?',
      options: ['Reduces growth, reproduction, and immune function', 'Improves productivity', 'Has no effect', 'Only affects behavior'],
      correct: 'Reduces growth, reproduction, and immune function',
      explanation: 'Stress negatively impacts animal health and productivity by suppressing immune function and reducing growth rates.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h7',
      question: 'What is the relationship between animal nutrition and environmental impact?',
      options: ['Efficient nutrition reduces waste and environmental pollution', 'No relationship', 'Better nutrition increases pollution', 'Only affects animal health'],
      correct: 'Efficient nutrition reduces waste and environmental pollution',
      explanation: 'Proper nutrition improves feed efficiency and reduces nutrient excretion, minimizing environmental impact.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h8',
      question: 'How does climate change affect livestock production?',
      options: ['Alters temperature, rainfall patterns, and disease pressure', 'Has no effect', 'Only affects temperature', 'Only affects rainfall'],
      correct: 'Alters temperature, rainfall patterns, and disease pressure',
      explanation: 'Climate change affects livestock through heat stress, altered feed availability, and changing disease patterns.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h9',
      question: 'What is precision livestock farming?',
      options: ['Using technology to monitor and manage individual animals', 'Traditional farming methods', 'Large-scale farming only', 'Manual record keeping'],
      correct: 'Using technology to monitor and manage individual animals',
      explanation: 'Precision livestock farming uses sensors and data analytics to monitor individual animal health and productivity.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_animals_h10',
      question: 'How does livestock production integrate with crop production in sustainable systems?',
      options: ['Animals provide manure while crops provide feed, creating nutrient cycling', 'They compete for resources', 'No integration possible', 'Only through separate management'],
      correct: 'Animals provide manure while crops provide feed, creating nutrient cycling',
      explanation: 'Integrated systems create synergies where livestock manure fertilizes crops, and crop residues feed animals.',
      difficulty: 'Hard'
    }
  ],
  'Chapter 5: Animal Feeds and Feeding Practices': [
    // Easy Questions
    {
      id: 'agr11_feeds_e1',
      question: 'What is animal feed?',
      options: ['Food given to animals for nutrition', 'Water for animals', 'Medicine for animals', 'Shelter for animals'],
      correct: 'Food given to animals for nutrition',
      explanation: 'Animal feed is any nutritious substance provided to animals to meet their dietary requirements for growth, maintenance, and production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e2',
      question: 'Which of these is a common animal feed?',
      options: ['Grass', 'Stones', 'Plastic', 'Metal'],
      correct: 'Grass',
      explanation: 'Grass is a natural feed that provides nutrients for grazing animals.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e3',
      question: 'What do animals need from their feed?',
      options: ['Energy, protein, vitamins, and minerals', 'Only energy', 'Only protein', 'Only water'],
      correct: 'Energy, protein, vitamins, and minerals',
      explanation: 'Animals require a balanced diet containing energy, protein, vitamins, minerals, and water for optimal health and production.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e4',
      question: 'Which animal eats grass?',
      options: ['Cow', 'Dog', 'Cat', 'Fish'],
      correct: 'Cow',
      explanation: 'Cows are herbivores that primarily eat grass and other plant materials.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e5',
      question: 'What is grazing?',
      options: ['Animals eating grass in the field', 'Animals sleeping', 'Animals drinking water', 'Animals playing'],
      correct: 'Animals eating grass in the field',
      explanation: 'Grazing is when animals feed on grass and other plants directly in pastures or fields.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e6',
      question: 'Which grain is commonly fed to chickens?',
      options: ['Maize', 'Stones', 'Leaves', 'Bark'],
      correct: 'Maize',
      explanation: 'Maize (corn) is a common grain feed for chickens, providing energy and some protein.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e7',
      question: 'What is hay?',
      options: ['Dried grass used as animal feed', 'Fresh grass', 'Animal medicine', 'Building material'],
      correct: 'Dried grass used as animal feed',
      explanation: 'Hay is grass that has been cut and dried for preservation and later use as animal feed.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e8',
      question: 'Why do animals need clean water?',
      options: ['For digestion and body functions', 'Only for drinking', 'Only for cooling', 'Only for cleaning'],
      correct: 'For digestion and body functions',
      explanation: 'Clean water is essential for digestion, nutrient transport, temperature regulation, and all body functions.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e9',
      question: 'Which feed is high in protein?',
      options: ['Legumes', 'Straw', 'Sand', 'Wood'],
      correct: 'Legumes',
      explanation: 'Legumes like beans and peas are high in protein and are valuable feed sources.',
      difficulty: 'Easy'
    },
    {
      id: 'agr11_feeds_e10',
      question: 'What happens if animals don\'t get enough food?',
      options: ['They become weak and sick', 'They become stronger', 'Nothing happens', 'They grow faster'],
      correct: 'They become weak and sick',
      explanation: 'Insufficient food leads to malnutrition, weakness, poor health, and reduced productivity.',
      difficulty: 'Easy'
    },
    // Medium Questions
    {
      id: 'agr11_feeds_m1',
      question: 'What are the main types of animal feeds?',
      options: ['Roughages, concentrates, and supplements', 'Only grass', 'Only grain', 'Only water'],
      correct: 'Roughages, concentrates, and supplements',
      explanation: 'Animal feeds are classified into roughages (high fiber feeds like hay), concentrates (high energy feeds like grains), and supplements (vitamins and minerals).',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m2',
      question: 'What is the difference between roughages and concentrates?',
      options: ['Roughages are high in fiber, concentrates are high in energy', 'No difference', 'Roughages are more expensive', 'Concentrates have more water'],
      correct: 'Roughages are high in fiber, concentrates are high in energy',
      explanation: 'Roughages like hay and straw are high in fiber and low in energy, while concentrates like grains are high in energy and low in fiber.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m3',
      question: 'Which animals require more concentrates in their diet?',
      options: ['High-producing animals like dairy cows', 'Animals that only graze', 'Old animals', 'Young animals only'],
      correct: 'High-producing animals like dairy cows',
      explanation: 'High-producing animals like dairy cows need energy-dense concentrates to meet their increased nutritional requirements.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m4',
      question: 'What is silage?',
      options: ['Fermented feed preserved in anaerobic conditions', 'Dried feed', 'Fresh feed', 'Cooked feed'],
      correct: 'Fermented feed preserved in anaerobic conditions',
      explanation: 'Silage is feed that has been fermented and stored in oxygen-free conditions to preserve nutrients.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m5',
      question: 'Why is feed storage important?',
      options: ['To preserve nutritional value and prevent spoilage', 'To save space only', 'To make feed look better', 'To reduce costs only'],
      correct: 'To preserve nutritional value and prevent spoilage',
      explanation: 'Proper feed storage maintains nutritional quality and prevents contamination and spoilage.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m6',
      question: 'What is a feed ration?',
      options: ['The amount and type of feed given to an animal per day', 'Any feed given to animals', 'Feed given once a week', 'Feed given randomly'],
      correct: 'The amount and type of feed given to an animal per day',
      explanation: 'A feed ration is the planned combination and quantity of feeds provided to meet an animal\'s daily nutritional needs.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m7',
      question: 'Which vitamin is produced by ruminants through microbial synthesis?',
      options: ['Vitamin B12', 'Vitamin A', 'Vitamin C', 'Vitamin D'],
      correct: 'Vitamin B12',
      explanation: 'Ruminants can synthesize vitamin B12 through microbial fermentation in their rumen.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m8',
      question: 'What is the purpose of feed additives?',
      options: ['To improve feed quality and animal performance', 'To change feed color', 'To reduce feed costs', 'To increase feed volume'],
      correct: 'To improve feed quality and animal performance',
      explanation: 'Feed additives are substances added to feeds to enhance nutritional value, preserve quality, or improve animal health.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m9',
      question: 'Which mineral is essential for bone formation?',
      options: ['Calcium', 'Iron', 'Copper', 'Zinc'],
      correct: 'Calcium',
      explanation: 'Calcium is crucial for bone and teeth formation, muscle function, and other physiological processes.',
      difficulty: 'Medium'
    },
    {
      id: 'agr11_feeds_m10',
      question: 'What is the function of fiber in ruminant diets?',
      options: ['Maintains rumen health and stimulates chewing', 'Provides energy only', 'Provides protein only', 'Provides vitamins only'],
      correct: 'Maintains rumen health and stimulates chewing',
      explanation: 'Fiber is essential for proper rumen function, stimulates saliva production, and maintains digestive health.',
      difficulty: 'Medium'
    },
    // Hard Questions
    {
      id: 'agr11_feeds_h1',
      question: 'How does balanced nutrition affect animal productivity?',
      options: ['Improves growth, reproduction, and disease resistance', 'Only affects growth', 'Has no effect', 'Only affects appetite'],
      correct: 'Improves growth, reproduction, and disease resistance',
      explanation: 'Balanced nutrition is crucial for optimal animal performance, affecting growth rates, reproductive efficiency, milk production, and immune system function.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h2',
      question: 'What is the concept of feed conversion efficiency?',
      options: ['Amount of feed required to produce a unit of animal product', 'Speed of feeding', 'Cost of feed', 'Quality of feed'],
      correct: 'Amount of feed required to produce a unit of animal product',
      explanation: 'Feed conversion efficiency measures how effectively animals convert feed into products like meat, milk, or eggs.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h3',
      question: 'How does rumen microbiology affect feed utilization?',
      options: ['Microbes break down fiber and synthesize nutrients', 'Microbes reduce feed quality', 'Microbes have no effect', 'Microbes only cause disease'],
      correct: 'Microbes break down fiber and synthesize nutrients',
      explanation: 'Rumen microorganisms ferment fiber and synthesize amino acids and vitamins, enabling ruminants to utilize fibrous feeds.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h4',
      question: 'What is the relationship between feed protein quality and amino acid profile?',
      options: ['Protein quality depends on essential amino acid composition', 'All proteins have the same quality', 'Protein quality depends only on quantity', 'Amino acids are not related to protein quality'],
      correct: 'Protein quality depends on essential amino acid composition',
      explanation: 'Protein quality is determined by the availability and balance of essential amino acids that animals cannot synthesize.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h5',
      question: 'How does feed processing affect nutritional value?',
      options: ['Can improve digestibility but may reduce some nutrients', 'Always improves nutritional value', 'Always reduces nutritional value', 'Has no effect on nutrition'],
      correct: 'Can improve digestibility but may reduce some nutrients',
      explanation: 'Feed processing can enhance digestibility and availability of nutrients but may also destroy heat-sensitive vitamins.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h6',
      question: 'What is the role of anti-nutritional factors in feed?',
      options: ['Compounds that reduce nutrient availability or cause toxicity', 'Compounds that improve nutrition', 'Compounds that add flavor', 'Compounds that preserve feed'],
      correct: 'Compounds that reduce nutrient availability or cause toxicity',
      explanation: 'Anti-nutritional factors are natural or artificial compounds that interfere with nutrient utilization or cause harmful effects.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h7',
      question: 'How does body condition scoring relate to feeding management?',
      options: ['Assesses energy reserves to adjust feeding programs', 'Only measures animal weight', 'Determines feed costs', 'Measures feed intake'],
      correct: 'Assesses energy reserves to adjust feeding programs',
      explanation: 'Body condition scoring evaluates energy reserves to determine if animals are receiving adequate nutrition.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h8',
      question: 'What is the significance of metabolizable energy in feed formulation?',
      options: ['Energy available for productive functions after digestion and metabolism', 'Total energy in feed', 'Energy lost in feces', 'Energy used for maintenance only'],
      correct: 'Energy available for productive functions after digestion and metabolism',
      explanation: 'Metabolizable energy represents the energy available for maintenance, growth, and production after accounting for losses.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h9',
      question: 'How does feed particle size affect ruminant digestion?',
      options: ['Affects rumen pH, microbial activity, and passage rate', 'Has no effect on digestion', 'Only affects feed intake', 'Only affects feed storage'],
      correct: 'Affects rumen pH, microbial activity, and passage rate',
      explanation: 'Feed particle size influences rumen fermentation patterns, pH stability, and the rate of passage through the digestive system.',
      difficulty: 'Hard'
    },
    {
      id: 'agr11_feeds_h10',
      question: 'What is precision feeding in livestock nutrition?',
      options: ['Tailoring feed formulations to individual animal requirements', 'Feeding at precise times', 'Using expensive feeds', 'Feeding in small quantities'],
      correct: 'Tailoring feed formulations to individual animal requirements',
      explanation: 'Precision feeding involves customizing diets based on individual animal needs, production stage, and performance goals.',
      difficulty: 'Hard'
    }
  ]
};

export const getGrade11AgricultureQuestions = (chapter: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): AgricultureQuestion[] => {
  const chapterQuestions = grade11AgricultureQuestions[chapter] || [];
  const difficultyMap = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };
  const targetDifficulty = difficultyMap[difficulty];
  
  const filteredQuestions = chapterQuestions.filter(q => q.difficulty === targetDifficulty);
  
  // Shuffle and return requested count
  const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
