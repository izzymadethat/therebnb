export const navLinks = [
  { title: "Home", path: "/" },
  { title: "Packages", path: "/packages" },
  { title: "Shop", path: "/shop" },
  { title: "About", path: "/about" },
  { title: "News", path: "/news" },
  { title: "Contact", path: "/contact" },
];

/*
  vacation types: 
  relax, cultural, family fun, couples retreat, solo, shared, city, camping, resort, cruise, nightlife
*/
export const popularDestinations = [
  {
    title: "Las Vegas Strip",
    description:
      "Experience the dazzling lights and non-stop entertainment of the Las Vegas Strip, where world-class casinos, extravagant shows, and vibrant nightlife await. Explore the awe-inspiring Grand Canyon or indulge in luxury shopping and fine dining experiences, making every moment in Sin City unforgettable",
    imgSrc:
      "https://images.unsplash.com/photo-1583207884889-d79abf0d0aa3?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Las Vegas, NV",
    vacationType: ["resort", "city", "nightlife", "shared"],
    total: {
      room: 900,
      rental: 450,
      flight: 420,
      room_plus_rental: 1100,
      bundle: 1500,
    },
  },
  {
    title: "Times Square",
    description:
      "Immerse yourself in the bustling energy of the Big Apple, where iconic landmarks like the Statue of Liberty, Central Park, and Times Square captivate visitors. From Broadway shows to renowned museums and diverse culinary experiences, New York City offers a cultural melting pot of excitement and endless exploration.",
    imgSrc:
      "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "New York City, NY",
    vacationType: ["family fun", "shared", "city"],
    total: {
      room: 1250,
      rental: 210,
      flight: 400,
      room_plus_rental: 1200,
      bundle: 1650,
    },
  },
  {
    title: "Forbidden City",
    description:
      "Delve into the rich history and ancient wonders of Beijing, home to the magnificent Great Wall, Forbidden City, and Temple of Heaven. Discover traditional Chinese culture through vibrant markets, authentic cuisine, and captivating performances, creating timeless memories in this vibrant metropolis",
    imgSrc:
      "https://images.unsplash.com/photo-1592620540259-75b9f6500187?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Beijing, China",
    vacationType: ["cultural", "relax", "family fun", "solo", "shared"],
    total: {
      room: 1890,
      rental: 480,
      flight: 2100,
      room_plus_rental: 2000,
      bundle: 3800,
    },
  },
  {
    title: "Tokyo",
    description:
      "Step into the future while embracing centuries of tradition in Tokyo, where modern skyscrapers coexist with serene gardens and historic temples. Indulge in world-class sushi, vibrant street fashion, and cutting-edge technology, immersing yourself in the dynamic essence of Japan's capital city.",
    imgSrc:
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Tokyo, Japan",
    vacationType: ["family fun", "cultural", "city", "shared", "nightlife"],
    total: {
      room: 2180,
      rental: 640,
      flight: 1850,
      room_plus_rental: 2550,
      bundle: 4200,
    },
  },
  {
    title: "The Louvre",
    description:
      "Fall in love with the romance and charm of Paris, where iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral enchant visitors from around the globe. Wander through quaint cobblestone streets, savor exquisite pastries, and immerse yourself in the art, culture, and timeless beauty of the City of Light.",
    imgSrc:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Paris, France",
    vacationType: ["relax", "cultural", "shared"],
    total: {
      room: 1775,
      rental: 350,
      flight: 1290,
      room_plus_rental: 2125,
      bundle: 3000,
    },
  },
  {
    title: "Sydney Opera House",
    description:
      "Bask in the stunning beauty and laid-back vibe of Sydney, with its iconic Sydney Opera House, picturesque Bondi Beach, and bustling harbor. Explore vibrant neighborhoods, indulge in fresh seafood, and embark on adventures ranging from coastal walks to wildlife encounters, creating unforgettable memories in Australia's vibrant harbor city.",
    imgSrc:
      "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Sydney, Australia",
    vacationType: ["relax", "family fun", "camping", "resort"],
    total: {
      room: 3645,
      rental: 695,
      flight: 3680,
      room_plus_rental: 4050,
      bundle: 7500,
    },
  },
];

export const footerLinks = [
  { title: "Services", path: "/services" },
  { title: "Insurance", path: "/insurance" },
  { title: "Agency", path: "/agency" },
  { title: "Tourism", path: "/tourism" },
  { title: "Payment", path: "/payment" },
];

export const partnerLinks = [
  { title: "Bookings", path: "/bookings" },
  { title: "Flights", path: "/flights" },
  { title: "RentalGeekz", path: "/rentalgeekz" },
  { title: "La Cuarta Stays", path: "/lacuarta" },
  { title: "Canoe", path: "/canoe" },
  { title: "Expediant", path: "/expediant" },
];

export const lastMinuteTrips = [
  { destination: "London", path: "/stays/?dest=london" },
  { destination: "California", path: "/stays/?dest=california" },
  { destination: "NewYork", path: "/stays/?dest=newyork" },
  { destination: "Italy", path: "/stays/?dest=italy" },
  { destination: "Thailand", path: "/stays/?dest=thailand" },
  { destination: "Florida", path: "/stays/?dest=florida" },
];

export const vacationPackages = [
  "Room",
  "Room + Rental",
  "Room + Rental + Flight",
];
