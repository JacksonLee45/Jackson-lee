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
        "Fell into running by total accident when I joined the high school cross country team. What started as a way to hang out with friends quickly evolved into a genuine passion. These days, I'm all about road and trail running and pushing my endurance limits on longer distances. There's something meditative about hitting that rhythm on a good run that I can't find anywhere else.",
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
          name: "Cirque Series: Killington VT",
          date: "June 28th, 2025",
          location: "Killington, VT",
          goal: "Have Fun",
        },
        {
          name: "Brooklyn Mile",
          date: "October 12, 2025",
          location: "Brooklyn, NY",
          goal: "Sub 0:05",
        }
      ],
      personalBests: {
        "5K": "18:22",
        "Half Marathon": "1:29:52",
        "10K": "40:26",
        "Marathon": "4:13:10",
        "50K": "6:11:37"
      }
    },
    {
      id: 2,
      name: "Paragliding",
      description:
        "After college, I had a three-month gap before starting my first job. It was either backpack around Europe or learn to paraglide—I chose the latter. Dove headfirst into the sport, bought my own wing, and flew almost every day for those three months, racking up 40 flying days as a complete beginner. Something about the combination of calculated risk, technical precision, and pure freedom just clicked. Now whenever I'm back in Colorado, the first thing I do is dig out my paraglider and hunt for thermals. Nothing beats the feeling of catching a perfect updraft and watching the world shrink beneath you.",
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
        "Started skiing at Stratton Mountain in Vermont, where the ice teaches you real edge control pretty quickly. East Coast skiing isn't glamorous, but it builds solid fundamentals. When I moved to Boulder for college, having the Rockies in my backyard was a game-changer. Suddenly I was hitting 30+ days a season, exploring new terrain, and chasing powder days. Skiing became my reward after long hours buried in my computer studying computer science in the stacks of Norlin Library. Now I try to get out whenever I go back to Colorado to visit Family.",
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
      name: "Weightlifting",
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