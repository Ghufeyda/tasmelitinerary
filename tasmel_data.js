const itineraryName = "Tasmania - Melbourne Trip";

const weatherData = [
    { date: "15 May 2025", location: "Changi Airport, Singapore", weather: "☀️ Mostly clear", temperature: "Low: 27°C, High: 30°C", sunrise: "06:56 AM", sunset: "07:05 PM" },
  { date: "16 May 2025", location: "Hobart, Tasmania", weather: "🌥 Partly cloudy", temperature: "Low: 9°C, High: 14°C", sunrise: "07:22 AM", sunset: "04:57 PM" },
  { date: "17 May 2025", location: "Hobart, Tasmania", weather: "🌧 Showers", temperature: "Low: 8°C, High: 13°C", sunrise: "07:23 AM", sunset: "04:56 PM" },
  { date: "18 May 2025", location: "Hobart, Tasmania", weather: "☀️ Sunny", temperature: "Low: 7°C, High: 15°C", sunrise: "07:24 AM", sunset: "04:55 PM" },
  { date: "19 May 2025", location: "Hobart, Tasmania (for Bruny Island trip)", weather: "🌥 Partly cloudy", temperature: "Low: 8°C, High: 14°C", sunrise: "07:25 AM", sunset: "04:55 PM" },
  { date: "20 May 2025", location: "Coles Bay, Tasmania", weather: "☁️ Cloudy", temperature: "Low: 7°C, High: 12°C", sunrise: "07:26 AM", sunset: "04:54 PM" },
  { date: "21 May 2025", location: "Coles Bay, Tasmania", weather: "🌬️ Windy", temperature: "Low: 6°C, High: 11°C", sunrise: "07:27 AM", sunset: "04:54 PM" },
  { date: "22 May 2025", location: "Launceston, Tasmania", weather: "☁️ Cloudy", temperature: "Low: 5°C, High: 12°C", sunrise: "07:28 AM", sunset: "04:54 PM" },
  { date: "23 May 2025", location: "Launceston, Tasmania", weather: "🌧 Rain", temperature: "Low: 5°C, High: 11°C", sunrise: "07:28 AM", sunset: "04:53 PM" },
  { date: "24 May 2025", location: "Melbourne, Victoria", weather: "☀️ Sunny", temperature: "Low: 10°C, High: 16°C", sunrise: "07:23 AM", sunset: "05:10 PM" },
  { date: "25 May 2025", location: "Apollo Bay, Victoria", weather: "🌤 Partly cloudy", temperature: "Low: 11°C, High: 17°C", sunrise: "07:24 AM", sunset: "05:09 PM" },
  { date: "26 May 2025", location: "Apollo Bay, Victoria", weather: "🌧 Showers", temperature: "Low: 9°C, High: 14°C", sunrise: "07:25 AM", sunset: "05:08 PM" },
  { date: "27 May 2025", location: "Port Campbell, Victoria", weather: "🌥 Cloudy", temperature: "Low: 10°C, High: 15°C", sunrise: "07:25 AM", sunset: "05:08 PM" },
  { date: "28 May 2025", location: "Melbourne, Victoria", weather: "☀️ Sunny", temperature: "Low: 19°C, High: 21°C", sunrise: "07:26 AM", sunset: "05:07 PM" },
  { date: "29 May 2025", location: "Melbourne, Victoria", weather: "🌤 Partly cloudy", temperature: "Low: 20°C, High: 22°C", sunrise: "07:26 AM", sunset: "05:07 PM" }
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
    

  {
    date: "22 May 2025",
    time: "07:30 AM",
    title: "Wake up & Light Breakfast",
    description: "At Iluka Holiday Centre",
    address: "Reserve Rd, Coles Bay TAS 7215, Australia",
    parking: "On-site parking",
    mapsLink: "comgooglemaps://?q=Reserve+Rd,+Coles+Bay+TAS+7215,+Australia"
  },
  {
    date: "22 May 2025",
    time: "08:30 AM",
    title: "Check out and depart for Launceston",
    description: "Estimated travel time ~3 hrs with scenic stops",
    address: "Coles Bay Rd, Coles Bay TAS 7215, Australia",
    parking: "Accommodation car park",
    mapsLink: "comgooglemaps://?q=Coles+Bay+Rd,+Coles+Bay+TAS+7215,+Australia"
  },
  {
    date: "22 May 2025",
    time: "09:30 AM",
    title: "Stop at Bicheno Blowhole",
    description: "Take photos and enjoy ocean spray",
    address: "Burgess St, Bicheno TAS 7215, Australia",
    parking: "Street parking nearby",
    mapsLink: "comgooglemaps://?q=Burgess+St,+Bicheno+TAS+7215,+Australia"
  },
  {
    date: "22 May 2025",
    time: "10:30 AM",
    title: "Short break at St Marys",
    description: "Rest or café stop for light refreshment",
    address: "Main St, St Marys TAS 7215, Australia",
    parking: "Street parking",
    mapsLink: "comgooglemaps://?q=Main+St,+St+Marys+TAS+7215,+Australia"
  },
  {
    date: "22 May 2025",
    time: "12:30 PM",
    title: "Lunch at Campbell Town",
    description: "Try a local bakery or vegetarian-friendly café",
    address: "High St, Campbell Town TAS 7210, Australia",
    parking: "Street parking",
    mapsLink: "comgooglemaps://?q=High+St,+Campbell+Town+TAS+7210,+Australia"
  },
  {
    date: "22 May 2025",
    time: "02:30 PM",
    title: "Arrive in Launceston & check-in",
    description: "Settle into your hotel",
    address: "Launceston TAS 7250, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Launceston+TAS+7250,+Australia"
  },
  {
    date: "22 May 2025",
    time: "03:30 PM",
    title: "Walk at City Park",
    description: "See the monkeys, take photos, relax",
    address: "45-55 Tamar St, Launceston TAS 7250, Australia",
    parking: "City Park car park",
    mapsLink: "comgooglemaps://?q=45-55+Tamar+St,+Launceston+TAS+7250,+Australia"
  },
  {
    date: "22 May 2025",
    time: "05:30 PM",
    title: "Dinner at Halal Restaurant",
    description: "Recommended: Pickled Evenings or Zambrero",
    address: "34 Charles St, Launceston TAS 7250, Australia",
    parking: "Street parking on Charles St",
    mapsLink: "comgooglemaps://?q=34+Charles+St,+Launceston+TAS+7250,+Australia"
  },
  {
  date: "22 May 2025",
  time: "08:00 PM",
  title: "Wind down at hotel",
  description: "Relax and rest for your last full day in Launceston.",
  address: "Launceston TAS 7250, Australia",
  parking: "Hotel parking",
  mapsLink: "comgooglemaps://?q=Launceston+TAS+7250,+Australia"
},

  {
    date: "23 May 2025",
    time: "08:00 AM",
    title: "Light Breakfast",
    description: "Breakfast at Turkish Tukka – Halal snack packs & Turkish options",
    address: "Launceston TAS 7250, Australia",
    parking: "Street parking",
    mapsLink: "comgooglemaps://?q=Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "09:00 AM",
    title: "Cataract Gorge Reserve",
    description: "Easy walks, suspension bridge, chairlift",
    address: "74-90 Basin Rd, West Launceston TAS 7250, Australia",
    parking: "Gorge main car park",
    mapsLink: "comgooglemaps://?q=74-90+Basin+Rd,+West+Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "10:30 AM",
    title: "Visit Design Tasmania Gallery",
    description: "Explore local timber design and Tasmanian-made crafts next to City Park",
    address: "45-55 Tamar St, Launceston TAS 7250, Australia",
    parking: "City Park car park",
    mapsLink: "comgooglemaps://?q=45-55+Tamar+St,+Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "11:00 AM",
    title: "QVMAG Visit (Queen Victoria Museum)",
    description: "Indoor exhibits, art & science displays",
    address: "2 Invermay Rd, Invermay TAS 7248, Australia",
    parking: "Museum car park",
    mapsLink: "comgooglemaps://?q=2+Invermay+Rd,+Invermay+TAS+7248,+Australia"
  },
  {
    date: "23 May 2025",
    time: "12:30 PM",
    title: "Lunch at Local Café",
    description: "Lunch at Charcoal Fire Indian Restaurant – Halal Indian dishes",
    address: "126 York St, Launceston TAS 7250, Australia",
    parking: "Street and nearby lot parking",
    mapsLink: "comgooglemaps://?q=126+York+St,+Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "02:00 PM",
    title: "Shopping at Brisbane St Mall",
    description: "Buy souvenirs, local goods or snacks",
    address: "Brisbane St, Launceston TAS 7250, Australia",
    parking: "Brisbane St car park",
    mapsLink: "comgooglemaps://?q=Brisbane+St,+Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "04:00 PM",
    title: "Return to Hotel",
    description: "Pack up, freshen up, pray, short rest",
    address: "Launceston TAS 7250, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "05:20 PM",
    title: "Drive to Petrol Station",
    description: "Head to fuel stop.",
    address: "Launceston TAS 7250, Australia",
    parking: "Petrol station parking",
    mapsLink: "comgooglemaps://?q=Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "05:30 PM",
    title: "Petrol Stop",
    description: "Top up at United Westbury, 2 William St, Westbury TAS 7303 before returning to Launceston.",
    address: "2 William St, Westbury TAS 7303, Australia",
    parking: "Fuel station parking",
    mapsLink: "comgooglemaps://?q=2+William+St,+Westbury+TAS+7303,+Australia"
  },
  {
    date: "23 May 2025",
    time: "05:40 PM",
    title: "Continue Drive",
    description: "Resume road trip.",
    address: "Launceston TAS 7250, Australia",
    parking: "",
    mapsLink: "comgooglemaps://?q=Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "06:30 PM",
    title: "Launceston Night Market",
    description: "Street food, crafts, live music (check halal vendors) | Open 4:00 PM – 9:00 PM at Civic Square",
    address: "Civic Square, Launceston TAS 7250, Australia",
    parking: "Civic Square car park",
    mapsLink: "comgooglemaps://?q=Civic+Square,+Launceston+TAS+7250,+Australia"
  },
  {
    date: "23 May 2025",
    time: "08:30 PM",
    title: "Return to Hotel & Rest",
    description: "Return to Hotel Verge or similar – rest and prepare for morning flight",
    address: "Launceston TAS 7250, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Launceston+TAS+7250,+Australia"
  },


  {
    date: "24 May 2025",
    time: "09:30 AM",
    title: "Check-out & drive to Launceston Airport",
    description: "Depart hotel and drive approximately 15 minutes to Launceston Airport.",
    address: "201 Evandale Rd, Western Junction TAS 7212, Australia",
    parking: "Airport parking",
    mapsLink: "comgooglemaps://?q=201+Evandale+Rd,+Western+Junction+TAS+7212,+Australia"
  },
  {
    date: "24 May 2025",
    time: "10:00 AM",
    title: "Return Rental Car at Launceston Airport",
    description: "Drop off rental car at the designated area near the terminal.",
    address: "Launceston Airport, 201 Evandale Rd, Western Junction TAS 7212, Australia",
    parking: "Car rental return area",
    mapsLink: "comgooglemaps://?q=201+Evandale+Rd,+Western+Junction+TAS+7212,+Australia"
  },
  {
    date: "24 May 2025",
    time: "11:40 AM",
    title: "Flight to Melbourne",
    description: "Board your flight from Launceston to Melbourne. Flight duration is approximately 1 hour and 5 minutes.",
    address: "Launceston Airport, TAS 7212, Australia",
    parking: "N/A",
    mapsLink: "comgooglemaps://?q=Launceston+Airport,+TAS+7212,+Australia"
  },
  {
    date: "24 May 2025",
    time: "12:45 PM",
    title: "Arrive in Melbourne",
    description: "Land at Melbourne Tullamarine Airport and proceed through customs.",
    address: "Melbourne Airport, VIC 3045, Australia",
    parking: "Airport parking",
    mapsLink: "comgooglemaps://?q=Melbourne+Airport+VIC+3045,+Australia"
  },
  {
    date: "24 May 2025",
    time: "01:30 PM",
    title: "Pick up Rental Car (East Coast Car Rentals)",
    description: "Free shuttle bus to 2 Tarmac Drive, collect car from East Coast Car Rentals.",
    address: "2 Tarmac Drive, Tullamarine, Victoria, 3043, Melbourne",
    parking: "On-site car rental parking",
    mapsLink: "comgooglemaps://?q=2+Tarmac+Drive,+Tullamarine,+Victoria+3043,+Australia"
  },
  {
    date: "24 May 2025",
    time: "02:00 PM",
    title: "Lunch at South Melbourne Market",
    description: "Explore halal-friendly food stalls. Market closes at 4:00 PM.",
    address: "322-326 Coventry St, South Melbourne VIC 3205, Australia",
    parking: "Market car park",
    mapsLink: "comgooglemaps://?q=322-326+Coventry+St,+South+Melbourne+VIC+3205,+Australia"
  },
  {
    date: "24 May 2025",
    time: "03:30 PM",
    title: "Check-in at Melbourne Hotel",
    description: "Arrive at your hotel in Melbourne, drop off luggage, and freshen up.",
    address: "Melbourne VIC 3000, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },
  {
    date: "24 May 2025",
    time: "07:00 PM",
    title: "Dinner at Lord of The Fries",
    description: "Enjoy halal-friendly vegetarian fast food at the nearest Lord of The Fries outlet.",
    address: "Shop 2/189 Swanston St, Melbourne VIC 3000, Australia",
    parking: "Street parking or nearby parking facilities",
    mapsLink: "comgooglemaps://?q=189+Swanston+St,+Melbourne+VIC+3000,+Australia"
  },
  {
    date: "24 May 2025",
    time: "09:00 PM",
    title: "Return to Hotel & Prepare for Great Ocean Road Trip",
    description: "Relax and prepare for the next day's journey along the Great Ocean Road.",
    address: "Melbourne VIC 3000, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },

  {
    date: "25 May 2025",
    time: "07:30 AM",
    title: "Depart Melbourne",
    description: "Begin relaxed 3-day GOR adventure | Light traffic expected.",
    address: "",
    parking: "Hotel parking",
    mapsLink: ""
  },
  {
    date: "25 May 2025",
    time: "09:30 AM",
    title: "Photo Stop at Memorial Arch",
    description: "Quick iconic photo at Great Ocean Road Arch | Optional rest stop.",
    address: "689 Great Ocean Rd, Eastern View VIC 3231, Australia",
    parking: "Public parking near arch",
    mapsLink: "comgooglemaps://?q=689+Great+Ocean+Rd,+Eastern+View+VIC+3231,+Australia"
  },
  {
    date: "25 May 2025",
    time: "10:00 AM",
    title: "Petrol Stop",
    description: "Top up at Shell Colac East, 379 Princes Hwy, Colac VIC 3250.",
    address: "379 Princes Hwy, Colac VIC 3250, Australia",
    parking: "Fuel station parking",
    mapsLink: "comgooglemaps://?q=379+Princes+Hwy,+Colac+VIC+3250,+Australia"
  },
  {
    date: "25 May 2025",
    time: "10:30 AM",
    title: "Tea break at Aireys Inlet",
    description: "Relax at lighthouse café, optional short walk.",
    address: "Federal St, Aireys Inlet VIC 3231, Australia",
    parking: "Split Point Lighthouse car park",
    mapsLink: "comgooglemaps://?q=Federal+St,+Aireys+Inlet+VIC+3231,+Australia"
  },
  {
    date: "25 May 2025",
    time: "12:30 PM",
    title: "Lunch at Apollo Bay",
    description: "Halal-friendly or picnic meal | Seaside town with scenic views.",
    address: "21 Pascoe St, Apollo Bay VIC 3233, Australia",
    parking: "Street parking available",
    mapsLink: "comgooglemaps://?q=21+Pascoe+St,+Apollo+Bay+VIC+3233,+Australia"
  },
  {
    date: "25 May 2025",
    time: "02:30 PM",
    title: "Arrive at Accommodation in Apollo Bay",
    description: "Check-in early for seaside rest.",
    address: "Apollo Bay VIC 3233, Australia",
    parking: "Accommodation parking",
    mapsLink: "comgooglemaps://?q=Apollo+Bay+VIC+3233,+Australia"
  },
  {
    date: "25 May 2025",
    time: "04:30 PM",
    title: "Free Time or Beach Walk",
    description: "Gentle walk or chill by the coast.",
    address: "Apollo Bay Foreshore, Apollo Bay VIC 3233, Australia",
    parking: "Foreshore parking",
    mapsLink: "comgooglemaps://?q=Apollo+Bay+Foreshore,+Apollo+Bay+VIC+3233,+Australia"
  },
  {
    date: "25 May 2025",
    time: "06:30 PM",
    title: "Dinner in Apollo Bay",
    description: "Local vegetarian/seafood café (check halal).",
    address: "19 Great Ocean Rd, Apollo Bay VIC 3233, Australia",
    parking: "Street parking or nearby lot",
    mapsLink: "comgooglemaps://?q=19+Great+Ocean+Rd,+Apollo+Bay+VIC+3233,+Australia"
  },
  {
    date: "25 May 2025",
    time: "08:00 PM",
    title: "Back to Hotel and Rest",
    description: "Back to hotel and rest.",
    address: "Apollo Bay VIC 3233, Australia",
    parking: "Accommodation parking",
    mapsLink: "comgooglemaps://?q=Apollo+Bay+VIC+3233,+Australia"
  },

  {
    date: "26 May 2025",
    time: "07:30 AM",
    title: "Wake up & Breakfast in Apollo Bay",
    description: "Breakfast at Apollo Bay Bakery (opens 6:00 AM) – grab takeaway if preferred.",
    address: "125 Great Ocean Rd, Apollo Bay VIC 3233, Australia",
    parking: "Street parking available",
    mapsLink: "comgooglemaps://?q=125+Great+Ocean+Rd,+Apollo+Bay+VIC+3233,+Australia"
  },
  {
    date: "26 May 2025",
    time: "08:30 AM",
    title: "Wildlife Spotting at Kennett River",
    description: "Look for wild koalas and parrots | Parking near Grey River Road.",
    address: "Grey River Rd, Kennett River VIC 3234, Australia",
    parking: "Roadside parking",
    mapsLink: "comgooglemaps://?q=Grey+River+Rd,+Kennett+River+VIC+3234,+Australia"
  },
  {
    date: "26 May 2025",
    time: "09:30 AM",
    title: "Rainforest Walk at Maits Rest",
    description: "30–45 min scenic boardwalk through ancient rainforest.",
    address: "Great Ocean Rd, Cape Otway VIC 3233, Australia",
    parking: "Maits Rest car park",
    mapsLink: "comgooglemaps://?q=Maits+Rest,+Great+Ocean+Rd,+Cape+Otway+VIC+3233,+Australia"
  },
  {
    date: "26 May 2025",
    time: "11:00 AM",
    title: "Drive to Port Campbell",
    description: "Enjoy GOR views en route to next base.",
    address: "",
    parking: "",
    mapsLink: ""
  },
  {
    date: "26 May 2025",
    time: "01:00 PM",
    title: "Lunch Stop at Port Campbell",
    description: "Lunch at Grassroots Deli Cafe (open till 3:00 PM).",
    address: "28 Lord St, Port Campbell VIC 3269, Australia",
    parking: "Street parking",
    mapsLink: "comgooglemaps://?q=28+Lord+St,+Port+Campbell+VIC+3269,+Australia"
  },
  {
    date: "26 May 2025",
    time: "02:30 PM",
    title: "Visit 12 Apostles",
    description: "Iconic GOR site, allow time for photos | Parking available at visitor center.",
    address: "Great Ocean Rd & Booringa Rd, Princetown VIC 3269, Australia",
    parking: "Visitor center parking",
    mapsLink: "comgooglemaps://?q=12+Apostles+Visitor+Centre,+Great+Ocean+Rd,+Princetown+VIC+3269,+Australia"
  },
  {
    date: "26 May 2025",
    time: "04:00 PM",
    title: "Check-in at Port Campbell Stay",
    description: "Unwind and settle in.",
    address: "Port Campbell VIC 3269, Australia",
    parking: "Accommodation parking",
    mapsLink: "comgooglemaps://?q=Port+Campbell+VIC+3269,+Australia"
  },
  {
    date: "26 May 2025",
    time: "06:00 PM",
    title: "Dinner in Port Campbell",
    description: "Dinner at Waves Cafe Bar & Restaurant (from 5:30 PM).",
    address: "29 Lord St, Port Campbell VIC 3269, Australia",
    parking: "Street parking nearby",
    mapsLink: "comgooglemaps://?q=29+Lord+St,+Port+Campbell+VIC+3269,+Australia"
  },

  {
    date: "27 May 2025",
    time: "07:30 AM",
    title: "Wake up & Breakfast in Port Campbell",
    description: "Start the day with a relaxing breakfast before exploring.",
    address: "Port Campbell VIC 3269, Australia",
    parking: "Accommodation parking",
    mapsLink: "comgooglemaps://?q=Port+Campbell+VIC+3269,+Australia"
  },
  {
    date: "27 May 2025",
    time: "08:30 AM",
    title: "Explore Loch Ard Gorge",
    description: "Explore shipwreck history and 3 scenic walking trails.",
    address: "Loch Ard Gorge, Port Campbell VIC 3269, Australia",
    parking: "Loch Ard Gorge car park",
    mapsLink: "comgooglemaps://?q=Loch+Ard+Gorge,+Port+Campbell+VIC+3269,+Australia"
  },
  {
    date: "27 May 2025",
    time: "10:00 AM",
    title: "Visit London Arch",
    description: "Photo stop at collapsed sea arch | Short walk to viewpoint.",
    address: "Great Ocean Rd, Peterborough VIC 3270, Australia",
    parking: "London Arch car park",
    mapsLink: "comgooglemaps://?q=London+Arch,+Peterborough+VIC+3270,+Australia"
  },
  {
    date: "27 May 2025",
    time: "11:00 AM",
    title: "Visit The Grotto",
    description: "Beautiful rock formation with lookout and steps down.",
    address: "Great Ocean Rd, Port Campbell VIC 3269, Australia",
    parking: "The Grotto car park",
    mapsLink: "comgooglemaps://?q=The+Grotto,+Port+Campbell+VIC+3269,+Australia"
  },
  {
    date: "27 May 2025",
    time: "12:30 PM",
    title: "Lunch in Timboon",
    description: "Optional stop for gourmet ice cream or café lunch.",
    address: "Timboon VIC 3268, Australia",
    parking: "Street parking available",
    mapsLink: "comgooglemaps://?q=Timboon+VIC+3268,+Australia"
  },
  {
    date: "27 May 2025",
    time: "01:30 PM",
    title: "Scenic Drive Back to Melbourne",
    description: "Drive inland via Colac (approx. 3 hrs).",
    address: "",
    parking: "",
    mapsLink: ""
  },
  {
    date: "27 May 2025",
    time: "03:30 PM",
    title: "Coffee Break in Colac",
    description: "Refuel mid-journey with coffee/snack.",
    address: "Colac VIC 3250, Australia",
    parking: "Street parking",
    mapsLink: "comgooglemaps://?q=Colac+VIC+3250,+Australia"
  },
  {
    date: "27 May 2025",
    time: "05:00 PM",
    title: "Petrol Stop",
    description: "Refuel at BP Geelong, 143-149 Ryrie St, Geelong VIC 3220.",
    address: "143-149 Ryrie St, Geelong VIC 3220, Australia",
    parking: "Fuel station parking",
    mapsLink: "comgooglemaps://?q=143-149+Ryrie+St,+Geelong+VIC+3220,+Australia"
  },
  {
    date: "27 May 2025",
    time: "06:00 PM",
    title: "Check-in at Melbourne Hotel",
    description: "Drop bags, freshen up and relax (return rental car next day).",
    address: "Melbourne VIC 3000, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },

  {
    date: "28 May 2025",
    time: "08:30 AM",
    title: "Light Breakfast at Hotel",
    description: "Start the day slow and relaxed.",
    address: "Melbourne VIC 3000, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },
  {
    date: "28 May 2025",
    time: "10:30 AM",
    title: "Stroll at Fitzroy Gardens",
    description: "Peaceful gardens with historic cottages and great photo spots.",
    address: "Wellington Parade, East Melbourne VIC 3002, Australia",
    parking: "Fitzroy Gardens parking",
    mapsLink: "comgooglemaps://?q=Wellington+Parade,+East+Melbourne+VIC+3002,+Australia"
  },
  {
    date: "28 May 2025",
    time: "11:00 AM",
    title: "Visit Islamic Museum of Australia",
    description: "Explore Islamic faith, art & history | 15A Anderson Rd, Thornbury.",
    address: "15A Anderson Rd, Thornbury VIC 3071, Australia",
    parking: "Museum parking",
    mapsLink: "comgooglemaps://?q=15A+Anderson+Rd,+Thornbury+VIC+3071,+Australia"
  },
  {
    date: "28 May 2025",
    time: "02:00 PM",
    title: "Lunch at Sahara Grill",
    description: "Enjoy halal Middle Eastern cuisine at Sahara Grill.",
    address: "665 High St, Thornbury VIC 3071, Australia",
    parking: "Street parking available",
    mapsLink: "comgooglemaps://?q=665+High+St,+Thornbury+VIC+3071,+Australia"
  },
  {
    date: "28 May 2025",
    time: "02:30 PM",
    title: "Visit Melbourne Grand Mosque",
    description: "One of Melbourne's largest and most beautiful mosques.",
    address: "140 Wootten Rd, Tarneit VIC 3029, Australia",
    parking: "Mosque parking",
    mapsLink: "comgooglemaps://?q=140+Wootten+Rd,+Tarneit+VIC+3029,+Australia"
  },
  {
    date: "28 May 2025",
    time: "04:00 PM",
    title: "Free & Easy / Optional Shopping",
    description: "Emporium or Chadstone for souvenirs and last-minute gifts.",
    address: "Emporium Melbourne, 287 Lonsdale St, Melbourne VIC 3000, Australia",
    parking: "Emporium parking",
    mapsLink: "comgooglemaps://?q=287+Lonsdale+St,+Melbourne+VIC+3000,+Australia"
  },
  {
    date: "28 May 2025",
    time: "05:30 PM",
    title: "Rest at Hotel",
    description: "Freshen up, relax, or prepare bags.",
    address: "Melbourne VIC 3000, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },
  {
    date: "28 May 2025",
    time: "07:00 PM",
    title: "Final Dinner in Melbourne",
    description: "Halal seafood or Middle Eastern cuisine in the CBD.",
    address: "Melbourne VIC 3000, Australia",
    parking: "Street parking or nearby parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },
  {
    date: "28 May 2025",
    time: "08:30 PM",
    title: "Final Packing & Prepare for Departure",
    description: "Organize luggage, documents, and rest before travel.",
    address: "Melbourne VIC 3000, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },

  {
    date: "29 May 2025",
    time: "07:30 AM",
    title: "Wake Up & Light Breakfast",
    description: "Final check, early meal at hotel or takeaway.",
    address: "Melbourne VIC 3000, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },
  {
    date: "29 May 2025",
    time: "08:30 AM",
    title: "Final Packing & Hotel Checkout",
    description: "Ensure nothing left behind, check out.",
    address: "Melbourne VIC 3000, Australia",
    parking: "Hotel parking",
    mapsLink: "comgooglemaps://?q=Melbourne+VIC+3000,+Australia"
  },
  {
    date: "29 May 2025",
    time: "09:00 AM",
    title: "Drive to Airport",
    description: "30–40 min drive from city to Melbourne Airport.",
    address: "Melbourne Airport VIC 3045, Australia",
    parking: "Airport car rental area",
    mapsLink: "comgooglemaps://?q=Melbourne+Airport+VIC+3045,+Australia"
  },
  {
    date: "29 May 2025",
    time: "10:00 AM",
    title: "Return Rental Car (East Coast Car Rentals)",
    description: "Drop off car at 2 Tarmac Drive, Tullamarine. Shuttle to terminal provided.",
    address: "2 Tarmac Drive, Tullamarine, Victoria, 3043, Melbourne",
    parking: "On-site rental return parking",
    mapsLink: "comgooglemaps://?q=2+Tarmac+Drive,+Tullamarine,+Victoria+3043,+Australia"
  },
  {
    date: "29 May 2025",
    time: "10:30 AM",
    title: "Check-in & Luggage Drop",
    description: "Check in at Qantas counter, drop bags.",
    address: "Melbourne Airport, VIC 3045, Australia",
    parking: "Terminal parking",
    mapsLink: "comgooglemaps://?q=Melbourne+Airport+VIC+3045,+Australia"
  },
  {
    date: "29 May 2025",
    time: "11:00 AM",
    title: "Free & Easy at Airport",
    description: "Have breakfast, buy souvenirs, or pray.",
    address: "Melbourne Airport, VIC 3045, Australia",
    parking: "Terminal parking",
    mapsLink: "comgooglemaps://?q=Melbourne+Airport+VIC+3045,+Australia"
  },
  {
    date: "29 May 2025",
    time: "12:05 PM",
    title: "Flight: MEL to SIN (QF036)",
    description: "Qantas flight to Singapore | Departure from Melbourne T2.",
    address: "Melbourne Airport, VIC 3045, Australia",
    parking: "Terminal parking",
    mapsLink: "comgooglemaps://?q=Melbourne+Airport+VIC+3045,+Australia"
  },
  {
    date: "29 May 2025",
    time: "06:15 PM",
    title: "Arrive in Singapore",
    description: "Arrival at Singapore Changi Airport T1.",
    address: "Changi Airport, Singapore",
    parking: "N/A",
    mapsLink: "comgooglemaps://?q=Singapore+Changi+Airport"
  },

];
