const NA_SECTORS = {
  alaska: {
    name: 'Alaska',
    vertices: [
      {
        x: 390,  // Alaska west north
        y: 0,
      },
      {
        x: 332,  // Alaska central
        y: 63,
      },
      {
        x: 430, //Alaska west south
        y: 150,
      },
      {
        x: 192, // Alaska west tip
        y: 295,
      },
      {
        x: 633,  // Alaska south central
        y: 130,
      },
      {
        x: 729, // Alaska south coast
        y: 222,
      },
      {
        x: 730,  // Alaska south tip
        y: 294,
      },
      {
        x: 757, //Alaska mid canada joint
        y: 197,
      },
      {
        x: 778, // Alaska northeast
        y: 0,
      },
    ]
  },
  britishColumbia: {
    name: 'British Columbia',
    vertices: [
      {
        x: 730, // Alaska south tip
        y: 294,
      },
      {
        x: 757, // Alaska mid canada joint
        y: 197,
      },
      {
        x: 922, // BC northeast
        y: 237,
      },
      {
        x: 912, // BC southeast
        y: 520,
      },
      {
        x: 823, // BC southwest
        y: 503,
      }, 
      {
        x: 818, // Vancouver south
        y: 521,
      }, 
      {
        x: 766, // Vancouver north
        y: 466,
      }, 
      {
        x: 776, // BC midcoast
        y: 407,
      },
    ]
  },
  canadianWilderness: {
    name: 'Canadian Wilderness',
    vertices: [
      {
        x: 778, // Alaska northeast
        y: 0,
      },
      {
        x: 757, // Alaska mid canada joint
        y: 197,
      },
      {
        x: 922, // BC northeast
        y: 237,
      },
      {
        x: 1343, // Hudson southwest
        y: 339,
      },
      {
        x: 1336, // Hudson west
        y: 254,
      },
      {
        x: 1456, // Hudson north
        y: 166,
      },
      {
        x: 1489, // Southampton south
        y: 195,
      },
      {
        x: 1563, // Southampton east
        y: 186,
      },
      {
        x: 1521, // Southampton north
        y: 112,
      },
      {
        x: 1592, // Canadian wilderness east
        y: 74,
      },
      {
        x: 1611, // Canadian wilderness northeast
        y: 0,
      },
    ],
  },
  centralCanada: {
    name: 'Central Canada',
    vertices: [
      {
        x: 922, // BC northeast
        y: 237,
      },
      {
        x: 1343, // Hudson southwest
        y: 339,
      },
      {
        x: 1390, // Hudson south 1
        y: 369,
      },
      {
        x: 1343, // Lake Superior central
        y: 586,
      },
      {
        x: 1223, // Minnesota north
        y: 571,
      },
      {
        x: 1004, // Montana north
        y: 534,
      },
      {
        x: 912, // BC southeast
        y: 520,
      },
    ]
  },
  ontario: {
    name: 'Ontario',
    vertices: [
      {
        x: 1390, // Hudson south 1
        y: 369,
      },
      {
        x: 1430, // Hudson south 2
        y: 409,
      },
      {
        x: 1467, // Hudson south 3
        y: 414,
      },
      {
        x: 1452, // Hudson south 4
        y: 470,
      },
      {
        x: 1478, // Hudson south 5
        y: 511,
      },
      {
        x: 1492, // Hudson south 6
        y: 497,
      },
      {
        x: 1476, // Lake Ontario central
        y: 673,
      },
      {
        x: 1452, // Lake Erie east
        y: 690,
      },
      {
        x: 1393, // Lake Erie west
        y: 712,
      },
      {
        x: 1425, // Lake Huron central
        y: 637,
      },
      {
        x: 1386, // Lake Superior east
        y: 610,
      },
      {
        x: 1343, // Lake Superior central
        y: 586,
      },
    ],
  },
  quebec: {
    name: 'Quebec',
    vertices: [
      {
        x: 1492, // Hudson south 6
        y: 497,
      },
      {
        x: 1500, // Hudson south 7
        y: 426,
      },
      {
        x: 1545, // Hudson south east
        y: 406,
      },
      {
        x: 1559, // Hudson east 1
        y: 367,
      },
      {
        x: 1543, // Hudson east 2
        y: 330,
      },
      {
        x: 1584, // Hudson north east
        y: 227,
      },
      {
        x: 1639, // Quebec north 1
        y: 234,
      },
      {
        x: 1685, // Quebec north 2
        y: 279,
      },
      {
        x: 1692, // Quebec north 3
        y: 357,
      },
      {
        x: 1750, // Quebec north 4
        y: 300,
      },
      {
        x: 1784, // Quebec north east
        y: 437,
      },
      {
        x: 1835, // Quebec east
        y: 481,
      },
      {
        x: 1826, // Newfoundland north
        y: 569,
      },
      {
        x: 1854, // Newfoundland north east
        y: 569,
      },
      {
        x: 1856, // Newfoundland south east
        y: 626,
      },
      {
        x: 1763, // Newfoundland south west
        y: 604,
      },
      {
        x: 1810, // Newfoundland north
        y: 528,
      },
      {
        x: 1691, // New Brunswick north
        y: 574,
      },
      {
        x: 1693, // Nova Scotia north
        y: 636,
      },
      {
        x: 1743, // Nova Scotia northeast
        y: 618,
      },
      {
        x: 1752, // Nova Scotia east
        y: 640,
      },
      {
        x: 1656, // Nova Scotia south
        y: 686,
      },
      {
        x: 1622, // New Brunswick west
        y: 614,
      },
      {
        x: 1558, // New Hampshire
        y: 669,
      },
      {
        x: 1476, // Lake Ontario central
        y: 673,
      },
    ],
  },
  pacificNorthwest: {
    name: 'Pacific Northwest',
  },
  california: {
    name: 'California',
  },
  americanSouthwest: {
    name: 'American Southwest',
  },
  texas: {
    name: 'Texas',
  },
  greatPlains: {
    name: 'Great Plains',
  },
  americanMidwest: {
    name: 'American Midwest',
  },
  americanSouth: {
    name: 'American South',
  },
  americanNortheast: {
    name: 'American Northeast',
  },
  cuba: {
    name: 'Cuba',
  },
  haiti: {
    name: 'Haiti',
  },
  northernMexico: {
    name: 'Northern Mexico',
  },
  centralMexico: {
    name: 'Central Mexico',
  },
  yucatanPeninsula: {
    name: 'Yucatan Peninsula',
  },
  centralAmerica: {
    name: 'Central America',
  },
  panama: {
    name: 'Panama',
  },
};

export default NA_SECTORS;