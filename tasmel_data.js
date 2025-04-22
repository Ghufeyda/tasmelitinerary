const weatherData = [
    { date: "15 May 2025", location: "Singapore", weather: "\ud83c\udf24\ufe0f Mostly clear", temperature: "26\u00b0C – 30\u00b0C", sunrise: "06:56", sunset: "19:05" },
    { date: "16 May 2025", location: "Hobart", weather: "\u26c5 Partly cloudy", temperature: "9\u00b0C – 14\u00b0C", sunrise: "07:22", sunset: "16:57" },
    { date: "17 May 2025", location: "Hobart", weather: "\ud83c\udf27\ufe0f Showers", temperature: "8\u00b0C – 13\u00b0C", sunrise: "07:23", sunset: "16:56" },
    { date: "18 May 2025", location: "Hobart", weather: "\u2600\ufe0f Sunny", temperature: "7\u00b0C – 15\u00b0C", sunrise: "07:24", sunset: "16:55" },
    { date: "19 May 2025", location: "Hobart", weather: "\ud83c\udf24\ufe0f Partly cloudy", temperature: "8\u00b0C – 14\u00b0C", sunrise: "07:25", sunset: "16:55" },
    { date: "20 May 2025", location: "Coles Bay", weather: "\u2601\ufe0f Cloudy", temperature: "7\u00b0C – 12\u00b0C", sunrise: "07:26", sunset: "16:54" },
    { date: "21 May 2025", location: "Coles Bay", weather: "\ud83c\udf2c\ufe0f Windy", temperature: "6\u00b0C – 11\u00b0C", sunrise: "07:27", sunset: "16:54" },
    { date: "22 May 2025", location: "Launceston", weather: "\u2601\ufe0f Cloudy", temperature: "5\u00b0C – 12\u00b0C", sunrise: "07:28", sunset: "16:54" },
    { date: "23 May 2025", location: "Launceston", weather: "\ud83c\udf27\ufe0f Rain", temperature: "5\u00b0C – 11\u00b0C", sunrise: "07:28", sunset: "16:53" },
    { date: "24 May 2025", location: "Melbourne", weather: "\u2600\ufe0f Sunny", temperature: "10\u00b0C – 16\u00b0C", sunrise: "07:23", sunset: "17:10" },
    { date: "25 May 2025", location: "Melbourne", weather: "\ud83c\udf24\ufe0f Partly cloudy", temperature: "11\u00b0C – 17\u00b0C", sunrise: "07:24", sunset: "17:09" },
    { date: "26 May 2025", location: "Melbourne", weather: "\ud83c\udf27\ufe0f Showers", temperature: "9\u00b0C – 14\u00b0C", sunrise: "07:25", sunset: "17:08" },
    { date: "27 May 2025", location: "Melbourne", weather: "\u2601\ufe0f Cloudy", temperature: "10\u00b0C – 15\u00b0C", sunrise: "07:25", sunset: "17:08" },
    { date: "28 May 2025", location: "Melbourne", weather: "\ud83c\udf2c\ufe0f Windy", temperature: "8\u00b0C – 13\u00b0C", sunrise: "07:26", sunset: "17:07" },
    { date: "29 May 2025", location: "Melbourne", weather: "\u2600\ufe0f Sunny", temperature: "7\u00b0C – 14\u00b0C", sunrise: "07:26", sunset: "17:07" }
];

const itineraryData = [
    { date: "15 May 2025", time: "08:15 PM", title: "Leave BB West Terra", description: "Travel to Changi Airport T1 (approx. 45 mins)", address: "", parking: "", mapsLink: "" },
    { date: "15 May 2025", time: "09:00 PM", title: "Arrive at Changi Airport T1", description: "Target 90 mins before check-in closes", address: "Changi Airport Terminal 1, Singapore", parking: "", mapsLink: "comgooglemaps://?q=Changi+Airport+Terminal+1+Singapore" },
    { date: "15 May 2025", time: "09:10 PM", title: "Check-in Luggage", description: "Qantas counter – closes at 22:30", address: "Changi Airport Terminal 1, Singapore", parking: "", mapsLink: "" },
    { date: "15 May 2025", time: "09:30 PM", title: "Brush Teeth & Freshen Up", description: "Wudhu, change into flight wear", address: "", parking: "", mapsLink: "" },
    { date: "15 May 2025", time: "11:30 PM", title: "Flight QF038 – Singapore to Melbourne", description: "Overnight flight", address: "", parking: "", mapsLink: "" },

    {
        date: "16 May 2025",
        time: "08:50 AM",
        title: "Arrive at Melbourne Tullamarine (T2)",
        description: "Flight QF038 lands at MEL",
        address: "Arrival Hall, Terminal 2, Melbourne Airport VIC 3045, Australia",
        parking: "",
        mapsLink: "comgooglemaps://?q=Arrival+Hall,+Terminal+2,+Melbourne+Airport+VIC+3045,+Australia"
    },
    {
        date: "16 May 2025",
        time: "09:30 AM",
        title: "Travel to DFO South Wharf",
        description: "~25 mins by taxi or rideshare",
        address: "20 Convention Centre Pl, South Wharf VIC 3006, Australia",
        parking: "",
        mapsLink: "comgooglemaps://?q=DFO+South+Wharf+Melbourne"
    },
    {
        date: "16 May 2025",
        time: "10:15 AM",
        title: "Brunch at Pizza Rush (Halal)",
        description: "Halal pizza at DFO South Wharf",
        address: "DFO South Wharf, 20 Convention Centre Pl, South Wharf VIC 3006, Australia",
        parking: "DFO South Wharf car park",
        mapsLink: "comgooglemaps://?q=Pizza+Rush+DFO+South+Wharf+Melbourne"
    },
    {
        date: "16 May 2025",
        time: "11:15 AM",
        title: "Shopping at DFO South Wharf",
        description: "Optional browsing and early check-in prep",
        address: "DFO South Wharf, 20 Convention Centre Pl, South Wharf VIC 3006, Australia",
        parking: "DFO South Wharf car park",
        mapsLink: "comgooglemaps://?q=DFO+South+Wharf+Melbourne"
    },
    {
        date: "16 May 2025",
        time: "12:30 PM",
        title: "Travel to Jetstar Terminal 4",
        description: "Allow ~25 min buffer for road and traffic",
        address: "Terminal 4, Departure Dr, Melbourne Airport VIC 3045, Australia",
        parking: "",
        mapsLink: "comgooglemaps://?q=Terminal+4,+Departure+Dr,+Melbourne+Airport+VIC+3045,+Australia"
    },
    {
        date: "16 May 2025",
        time: "12:40 PM",
        title: "Baggage Check-In Opens",
        description: "Jetstar check-in for flight JQ707",
        address: "Terminal 4, Departure Dr, Melbourne Airport VIC 3045, Australia",
        parking: "",
        mapsLink: "comgooglemaps://?q=Terminal+4,+Departure+Dr,+Melbourne+Airport+VIC+3045,+Australia"
    },
    {
        date: "16 May 2025",
        time: "02:40 PM",
        title: "Flight to Hobart (JQ707)",
        description: "Departure from Melbourne to Hobart",
        address: "",
        parking: "",
        mapsLink: ""
    },
    {
        date: "16 May 2025",
        time: "03:55 PM",
        title: "Arrive at Hobart Airport",
        description: "Collect baggage and prepare for pickup",
        address: "Hobart International Airport, Strachan St, Cambridge TAS 7170, Australia",
        parking: "Airport parking area",
        mapsLink: "comgooglemaps://?q=Hobart+International+Airport,+Strachan+St,+Cambridge+TAS+7170,+Australia"
    },
    {
        date: "16 May 2025",
        time: "04:15 PM",
        title: "Collect Car from Avis Hobart Airport",
        description: "Booking No: 1578936174576249 | Contact No: +61-362485424",
        address: "Airport Dr, Hobart TAS 7000, Australia",
        parking: "On-site at valet car park | Opposite Gate 1, near baggage carousel. Walk through valet car park.",
        mapsLink: "comgooglemaps://?q=Hobart+Airport+Dr"
    },
    {
        date: "16 May 2025",
        time: "05:00 PM",
        title: "Check-in to Hotel",
        description: "Check-in at Alabama Hotel Hobart",
        address: "72 Liverpool St, Hobart TAS 7000, Australia",
        parking: "Nearby street parking",
        mapsLink: "comgooglemaps://?q=Alabama+Hotel+Hobart"
    },
    {
        date: "16 May 2025",
        time: "06:30 PM",
        title: "Dinner at Kebab Rehab",
        description: "Light dinner near apartment",
        address: "323 Elizabeth St, North Hobart TAS 7000, Australia",
        parking: "Street parking along Elizabeth St",
        mapsLink: "comgooglemaps://?q=323+Elizabeth+St,+North+Hobart+TAS+7000,+Australia"
    },
    {
        date: "16 May 2025",
        time: "08:00 PM",
        title: "Return to Hotel and Rest",
        description: "Relax and prepare for the next day's activities",
        address: "72 Liverpool St, Hobart TAS 7000, Australia",
        parking: "Nearby street parking",
        mapsLink: "comgooglemaps://?q=Alabama+Hotel+Hobart"
    },

    {
        date: "17 May 2025",
        time: "07:00 AM",
        title: "Sunrise in Hobart",
        description: "Optional early walk along the Hobart waterfront",
        address: "Franklin Wharf, Hobart TAS 7000, Australia",
        parking: "Street parking along the wharf",
        mapsLink: "comgooglemaps://?q=Franklin+Wharf,+Hobart+TAS+7000,+Australia"
    },
    {
        date: "17 May 2025",
        time: "08:30 AM",
        title: "Salamanca Market",
        description: "Eat breakfast & shop halal-friendly stalls (closes 3:00 PM)",
        address: "Salamanca Pl, Hobart TAS 7001, Australia",
        parking: "Salamanca multi-storey car park",
        mapsLink: "comgooglemaps://?q=Salamanca+Pl,+Hobart+TAS+7001,+Australia"
    },
    {
        date: "17 May 2025",
        time: "11:30 AM",
        title: "Salamanca Arts Centre",
        description: "Explore local studios, art & crafts next to the market",
        address: "77 Salamanca Pl, Hobart TAS 7000, Australia",
        parking: "Salamanca car park",
        mapsLink: "comgooglemaps://?q=77+Salamanca+Pl,+Hobart+TAS+7000,+Australia"
    },
    {
        date: "17 May 2025",
        time: "12:15 PM",
        title: "Dhuhr Prayer",
        description: "Dhuhr prayer at Hobart Mosque",
        address: "166 Warwick St, West Hobart TAS 7000, Australia",
        parking: "Street parking",
        mapsLink: "comgooglemaps://?q=166+Warwick+St,+West+Hobart+TAS+7000,+Australia"
    },
    {
        date: "17 May 2025",
        time: "02:30 PM",
        title: "Battery Point Walking Trail",
        description: "Historic homes, gardens, seaside walk",
        address: "Battery Point, Hobart TAS 7004, Australia",
        parking: "Street parking available in Battery Point",
        mapsLink: "comgooglemaps://?q=Battery+Point,+Hobart+TAS+7004,+Australia"
    },
    {
        date: "17 May 2025",
        time: "03:30 PM",
        title: "Late Lunch at Mures Lower Deck",
        description: "Halal seafood options",
        address: "Victoria Dock, Hobart TAS 7000, Australia",
        parking: "Waterfront carpark nearby",
        mapsLink: "comgooglemaps://?q=Victoria+Dock,+Hobart+TAS+7000,+Australia"
    },
    {
        date: "17 May 2025",
        time: "04:30 PM",
        title: "Elizabeth Street Boutiques",
        description: "Local arts, fashion, souvenirs",
        address: "Elizabeth St, Hobart TAS 7000, Australia",
        parking: "Street parking along Elizabeth St",
        mapsLink: "comgooglemaps://?q=Elizabeth+St,+Hobart+TAS+7000,+Australia"
    },
    {
        date: "17 May 2025",
        time: "05:30 PM",
        title: "Grocery Stop – Hill Street Grocer",
        description: "Halal snacks or ingredients",
        address: "109 Hill St, West Hobart TAS 7000, Australia",
        parking: "On-site parking available",
        mapsLink: "comgooglemaps://?q=109+Hill+St,+West+Hobart+TAS+7000,+Australia"
    },
    {
        date: "17 May 2025",
        time: "08:00 PM",
        title: "Light Dinner (Optional)",
        description: "Kebab Rehab – halal-certified Turkish takeaway",
        address: "323 Elizabeth St, North Hobart TAS 7000, Australia",
        parking: "Street parking along Elizabeth St",
        mapsLink: "comgooglemaps://?q=323+Elizabeth+St,+North+Hobart+TAS+7000,+Australia"
    },
    {
        date: "17 May 2025",
        time: "08:30 PM",
        title: "Return to St Ives Apartments",
        description: "Pack for fishing trip and rest",
        address: "67 St Georges Terrace, Battery Point TAS 7004, Australia",
        parking: "Free private parking for guests",
        mapsLink: "comgooglemaps://?q=67+St+Georges+Terrace,+Battery+Point+TAS+7004,+Australia"
    },

    {
        date: "18 May 2025",
        time: "06:30 AM",
        title: "Wake up at St Ives Apartments",
        description: "Shower and prep for the day",
        address: "67 St Georges Terrace, Battery Point TAS 7004, Australia",
        parking: "Free private parking for guests",
        mapsLink: "comgooglemaps://?q=67+St+Georges+Terrace,+Battery+Point+TAS+7004,+Australia"
    },
    {
        date: "18 May 2025",
        time: "07:00 AM",
        title: "Drive to Dodges Ferry Boat Ramp",
        description: "Approx. 40 min drive – arrive early",
        address: "Dodges Ferry TAS 7173, Australia",
        parking: "Boat ramp car park",
        mapsLink: "comgooglemaps://?q=Dodges+Ferry+TAS+7173,+Australia"
    },
    {
        date: "18 May 2025",
        time: "08:00 AM",
        title: "Fishing Trip – Mr Flathead Charters",
        description: "Half-day trip, ends at 12:00 PM",
        address: "Dodges Ferry Boat Ramp, TAS 7173, Australia",
        parking: "On-site boat ramp",
        mapsLink: "comgooglemaps://?q=Dodges+Ferry+Boat+Ramp,+TAS+7173,+Australia"
    },
    {
        date: "18 May 2025",
        time: "12:15 PM",
        title: "Grocery Stop – Hill Street Grocer",
        description: "Buy ingredients to cook your catch",
        address: "109 Hill St, West Hobart TAS 7000, Australia",
        parking: "On-site parking available",
        mapsLink: "comgooglemaps://?q=109+Hill+St,+West+Hobart+TAS+7000,+Australia"
    },
    {
        date: "18 May 2025",
        time: "01:00 PM",
        title: "Lunch at Apartment",
        description: "Cook and enjoy your fresh catch at St Ives",
        address: "67 St Georges Terrace, Battery Point TAS 7004, Australia",
        parking: "Free private parking for guests",
        mapsLink: "comgooglemaps://?q=67+St+Georges+Terrace,+Battery+Point+TAS+7004,+Australia"
    },
    {
        date: "18 May 2025",
        time: "02:30 PM",
        title: "Free & Easy",
        description: "Nap, journal, or relax indoors",
        address: "",
        parking: "",
        mapsLink: ""
    },
    {
        date: "18 May 2025",
        time: "05:30 PM",
        title: "Leisurely Waterfront Walk",
        description: "Enjoy Hobart’s peaceful evening ambiance",
        address: "Franklin Wharf, Hobart TAS 7000, Australia",
        parking: "Street parking",
        mapsLink: "comgooglemaps://?q=Franklin+Wharf,+Hobart+TAS+7000,+Australia"
    },
    {
        date: "18 May 2025",
        time: "07:30 PM",
        title: "Dessert at Honey Badger Dessert Café",
        description: "Try their panookie or waffles – halal-friendly (Salamanca Square)",
        address: "Salamanca Square, Hobart TAS 7000, Australia",
        parking: "Salamanca car park",
        mapsLink: "comgooglemaps://?q=Salamanca+Square,+Hobart+TAS+7000,+Australia"
    },
    {
        date: "18 May 2025",
        time: "08:30 PM",
        title: "Return to St Ives Apartments",
        description: "Rest early for Bruny Island trip next day",
        address: "67 St Georges Terrace, Battery Point TAS 7004, Australia",
        parking: "Free private parking for guests",
        mapsLink: "comgooglemaps://?q=67+St+Georges+Terrace,+Battery+Point+TAS+7004,+Australia"
    },
    {
        date: "19 May 2025",
        time: "06:00 AM",
        title: "Light Breakfast",
        description: "At St Ives Apartments or pre-packed",
        address: "67 St Georges Terrace, Battery Point TAS 7004, Australia",
        parking: "Free private parking for guests",
        mapsLink: "comgooglemaps://?q=67+St+Georges+Terrace,+Battery+Point+TAS+7004,+Australia"
    },
    {
        date: "19 May 2025",
        time: "06:30 AM",
        title: "Drive to Kettering Ferry Terminal",
        description: "Approx. 45 min scenic drive",
        address: "Ferry Rd, Kettering TAS 7155, Australia",
        parking: "Ferry terminal parking",
        mapsLink: "comgooglemaps://?q=Ferry+Rd,+Kettering+TAS+7155,+Australia"
    },
    {
        date: "19 May 2025",
        time: "07:30 AM",
        title: "Board Ferry to Bruny Island",
        description: "Sealink Bruny Island – book in advance",
        address: "Ferry Terminal, Kettering TAS 7155, Australia",
        parking: "Ferry terminal parking",
        mapsLink: "comgooglemaps://?q=Ferry+Terminal,+Kettering+TAS+7155,+Australia"
    },
    {
        date: "19 May 2025",
        time: "08:15 AM",
        title: "Arrive & Explore The Neck Lookout",
        description: "Panoramic views + short stair climb",
        address: "Bruny Island Main Rd, Bruny Island TAS 7150, Australia",
        parking: "Lookout car park",
        mapsLink: "comgooglemaps://?q=The+Neck+Lookout,+Bruny+Island+TAS+7150,+Australia"
    },
    {
        date: "19 May 2025",
        time: "09:15 AM",
        title: "Walk at Adventure Bay",
        description: "Beach stroll, quick rest stop",
        address: "Adventure Bay, Bruny Island TAS 7150, Australia",
        parking: "Beach parking",
        mapsLink: "comgooglemaps://?q=Adventure+Bay,+Bruny+Island+TAS+7150,+Australia"
    },
    {
        date: "19 May 2025",
        time: "10:30 AM",
        title: "Brunch at Get Shucked Oysters",
        description: "Famous for fresh oysters and chips",
        address: "1735 Bruny Island Main Rd, Great Bay TAS 7150, Australia",
        parking: "Dedicated parking in front",
        mapsLink: "comgooglemaps://?q=1735+Bruny+Island+Main+Rd,+Great+Bay+TAS+7150,+Australia"
    },
    {
        date: "19 May 2025",
        time: "11:30 AM",
        title: "Stop at Bruny Island Cheese Co.",
        description: "Halal-friendly cheese tastings",
        address: "1807 Bruny Island Main Rd, Great Bay TAS 7150, Australia",
        parking: "On-site gravel lot",
        mapsLink: "comgooglemaps://?q=1807+Bruny+Island+Main+Rd,+Great+Bay+TAS+7150,+Australia"
    },
    {
        date: "19 May 2025",
        time: "12:15 PM",
        title: "Stop at Bruny Island Honey",
        description: "Taste honey, shop skincare & sweets",
        address: "2184 Bruny Island Main Rd, Great Bay TAS 7150, Australia",
        parking: "Parking adjacent to shop",
        mapsLink: "comgooglemaps://?q=2184+Bruny+Island+Main+Rd,+Great+Bay+TAS+7150,+Australia"
    },
    {
        date: "19 May 2025",
        time: "01:00 PM",
        title: "Prayer Break",
        description: "Clean open space or car mat stop",
        address: "Bruny Island, TAS",
        parking: "Roadside or open space",
        mapsLink: ""
    },
    {
        date: "19 May 2025",
        time: "03:30 PM",
        title: "Drive back to Hobart",
        description: "Arrive approx. 16:15",
        address: "St Ives Apartments, Battery Point TAS 7004, Australia",
        parking: "Free private parking for guests",
        mapsLink: "comgooglemaps://?q=67+St+Georges+Terrace,+Battery+Point+TAS+7004,+Australia"
    },
    {
        date: "19 May 2025",
        time: "06:00 PM",
        title: "Optional Light Dinner",
        description: "Pickup or rest at apartment",
        address: "",
        parking: "",
        mapsLink: ""
    },
    {
        date: "19 May 2025",
        time: "08:00 PM",
        title: "Return to St Ives Apartments",
        description: "Pack for Coles Bay trip tomorrow",
        address: "67 St Georges Terrace, Battery Point TAS 7004, Australia",
        parking: "Free private parking for guests",
        mapsLink: "comgooglemaps://?q=67+St+Georges+Terrace,+Battery+Point+TAS+7004,+Australia"
    },

    {
        date: "20 May 2025",
        time: "07:00 AM",
        title: "Light Breakfast",
        description: "At St Ives Apartments or pre-packed",
        address: "67 St Georges Terrace, Battery Point TAS 7004, Australia",
        parking: "Free private parking for guests",
        mapsLink: "comgooglemaps://?q=67+St+Georges+Terrace,+Battery+Point+TAS+7004,+Australia"
    },
    {
        date: "20 May 2025",
        time: "07:30 AM",
        title: "Grocery Stop – Hill Street Grocer",
        description: "Buy halal groceries for self-cooked meals in Coles Bay",
        address: "109 Hill St, West Hobart TAS 7000, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=109+Hill+St,+West+Hobart+TAS+7000,+Australia"
    },
    {
        date: "20 May 2025",
        time: "07:50 AM",
        title: "Drive to Petrol Station",
        description: "Head to fuel stop",
        address: "BP Hobart City, 106 Harrington St, Hobart TAS 7000",
        parking: "Petrol station lot",
        mapsLink: "comgooglemaps://?q=BP+106+Harrington+St,+Hobart"
    },
    {
        date: "20 May 2025",
        time: "08:00 AM",
        title: "Drive to Coles Bay",
        description: "Scenic 2.5–3 hr drive via East Coast",
        address: "Coles Bay, TAS 7215, Australia",
        parking: "",
        mapsLink: "comgooglemaps://?q=Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "20 May 2025",
        time: "10:30 AM",
        title: "Stop at Kate’s Berry Farm",
        description: "Enjoy berries, ice cream, and local treats",
        address: "12 Addison St, Swansea TAS 7190, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=Kate’s+Berry+Farm,+Swansea+TAS"
    },
    {
        date: "20 May 2025",
        time: "12:00 PM",
        title: "Arrive at Coles Bay Accommodation",
        description: "Check-in and relax",
        address: "Reserve Rd, Coles Bay TAS 7215, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=Reserve+Rd,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "20 May 2025",
        time: "02:30 PM",
        title: "Walk to Richardsons Beach or Cape Tourville",
        description: "Easy lookout walk or beach stroll",
        address: "Freycinet Dr, Coles Bay TAS 7215, Australia",
        parking: "Carpark near Visitor Centre",
        mapsLink: "comgooglemaps://?q=Freycinet+Dr,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "20 May 2025",
        time: "05:00 PM",
        title: "Rest & Free Time",
        description: "Shower, pray, or relax before dinner",
        address: "Reserve Rd, Coles Bay TAS 7215, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=Reserve+Rd,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "20 May 2025",
        time: "06:30 PM",
        title: "Light Dinner at Iluka Tavern",
        description: "Seafood or vegetarian (request no alcohol or pork)",
        address: "Reserve Rd, Coles Bay TAS 7215, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=Iluka+Tavern,+Coles+Bay"
    },
    {
        date: "20 May 2025",
        time: "08:00 PM",
        title: "Free & Easy + Stargazing",
        description: "Relax under the Tasmanian night sky",
        address: "Reserve Rd, Coles Bay TAS 7215, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=Reserve+Rd,+Coles+Bay+TAS+7215,+Australia"
    },
    
    {
        date: "21 May 2025",
        time: "07:00 AM",
        title: "Wake up & Light Breakfast",
        description: "At Iluka Holiday Centre",
        address: "Reserve Rd, Coles Bay TAS 7215, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=Reserve+Rd,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "08:30 AM",
        title: "Arrive at Freycinet Visitor Centre",
        description: "Collect park pass, maps, and local info",
        address: "Freycinet Dr, Coles Bay TAS 7215, Australia",
        parking: "Carpark near Freycinet Visitor Centre",
        mapsLink: "comgooglemaps://?q=Freycinet+Dr,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "09:00 AM",
        title: "Cape Tourville Walk",
        description: "Gentle 30-min boardwalk with panoramic views",
        address: "Cape Tourville Rd, Freycinet TAS 7215, Australia",
        parking: "Carpark near lookout",
        mapsLink: "comgooglemaps://?q=Cape+Tourville+Rd,+Freycinet+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "10:00 AM",
        title: "Visit Sleepy Bay",
        description: "Short walk to a secluded rocky beach",
        address: "Sleepy Bay Track, Freycinet TAS 7215, Australia",
        parking: "Small carpark at trailhead",
        mapsLink: "comgooglemaps://?q=Sleepy+Bay+Track,+Freycinet+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "11:00 AM",
        title: "Relax at Richardsons Beach",
        description: "Sit by the beach, journal, or take light walk",
        address: "Freycinet Dr, Coles Bay TAS 7215, Australia",
        parking: "Carpark near Freycinet Visitor Centre",
        mapsLink: "comgooglemaps://?q=Freycinet+Dr,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "12:30 PM",
        title: "Lunch at Freycinet Marine Farm",
        description: "Fresh oysters and seafood — halal-friendly",
        address: "1784 Coles Bay Rd, Coles Bay TAS 7215, Australia",
        parking: "Gravel car park on-site",
        mapsLink: "comgooglemaps://?q=1784+Coles+Bay+Rd,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "02:00 PM",
        title: "Optional Visit to Honeymoon Bay",
        description: "Shaded cove ideal for resting or reflection",
        address: "Freycinet Dr, Coles Bay TAS 7215, Australia",
        parking: "Nearby lot at end of Freycinet Dr",
        mapsLink: "comgooglemaps://?q=Freycinet+Dr,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "03:30 PM",
        title: "Return to Accommodation",
        description: "Freshen up, nap, or leisure time",
        address: "Reserve Rd, Coles Bay TAS 7215, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=Reserve+Rd,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "05:30 PM",
        title: "Dinner (Takeaway from Marine Farm)",
        description: "Enjoy your packed seafood meal from Freycinet Marine Farm at Iluka",
        address: "1784 Coles Bay Rd, Coles Bay TAS 7215, Australia",
        parking: "Gravel car park on-site",
        mapsLink: "comgooglemaps://?q=1784+Coles+Bay+Rd,+Coles+Bay+TAS+7215,+Australia"
    },
    {
        date: "21 May 2025",
        time: "08:00 PM",
        title: "Stargazing",
        description: "Peaceful night sky by the beach",
        address: "Reserve Rd, Coles Bay TAS 7215, Australia",
        parking: "On-site parking",
        mapsLink: "comgooglemaps://?q=Reserve+Rd,+Coles+Bay+TAS+7215,+Australia"
    },

];
