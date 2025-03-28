// app/data/activities.ts

export interface Activity {
    id: number;
    name: string;
    description?: string;
    image?: string;
    location?: string;
    slug?: string;
    type: "featured" | "other";
    
    // Running specific
    upcomingEvents?: {
      name: string;
      date: string;
      location: string;
      goal: string;
    }[];
    personalBests?: {
      [key: string]: string;
    };
    
    // Skiing specific
    favoriteResorts?: string[] | {
      name: string;
      location?: string;
      description?: string;
    }[];
    
    // Paragliding specific
    certifications?: string[];
  }
  
  // Featured activities displayed prominently on the page
  export const featuredActivities: Activity[] = [
    {
      id: 1,
      name: "Running",
      description:
        "Marathon enthusiast with a passion for long-distance running. I've completed several marathons across the country, finding that the discipline and endurance required transfers directly to solving complex technical challenges.",
      image: "/images/stravaMap.jpg",
      location: "Pavement, Dirt, and Gravel",
      slug: "running",
      type: "featured",
      upcomingEvents: [
        {
          name: "New York City Marathon",
          date: "November 2nd, 2025",
          location: "New York, NY",
          goal: "Sub 3:00",
        },
        {
          name: "Cirque Series: Killington",
          date: "July 11th, 2025",
          location: "Killington, VT",
          goal: "Have Fun",
        },
        {
          name: "Kent One Mile",
          date: "October 12, 2025",
          location: "Brooklyn, NY",
          goal: "Sub 0:05",
        }
      ],
      personalBests: {
        "5K": "18:22",
        "10K": "40:26",
        "Half Marathon": "1:29:52",
        "50k": "6:11:37",
        Marathon: "4:13:10"
      }
    },
    {
      id: 2,
      name: "Paragliding",
      description:
        "When I'm not debugging code, you might find me soaring through the skies. Paragliding taught me to make calculated decisions while embracing uncertainty – skills that prove invaluable when navigating new technologies.",
      image: "/images/paragliding.jpg",
      location: "Boulder, Colorado",
      slug: "paragliding",
      type: "featured",
      certifications: ["P2 Novice Rating", "High Altitude"]
    },
    {
      id: 3,
      name: "Skiing",
      description:
        "Alpine skiing is my winter passion. Carving through challenging terrain mirrors how I tackle complex projects – with precision, adaptability, and a willingness to adjust course as conditions change.",
      image: "/images/skiing.jpg",
      location: "Rocky Mountains",
      slug: "skiing",
      type: "featured",
      favoriteResorts: [
        "Arapahoe Basin, CO",
        "Vail, CO",
        "Aspen Highlands, CO"
      ]
    }
  ];
  
  // Other activities displayed in the secondary section
  export const otherActivities: Activity[] = [
    {
      id: 4,
      name: "Hockey",
      type: "other"
    },
    {
      id: 5,
      name: "Weight Lifting",
      type: "other"
    },
    {
      id: 6,
      name: "Rollerblading",
      type: "other"
    },
    {
      id: 7,
      name: "Rock Climbing",
      type: "other"
    }
  ];
  
  // All activities combined
  export const allActivities = [...featuredActivities, ...otherActivities];