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
        "Running snuck up on me. I joined the high school cross country team mostly to hang out with friends, and somewhere along the way I actually fell for it. These days I split my time between road and trail and keep nudging the distances up.",
      image: "/images/running.jpg",
      location: "Pavement, Dirt, and Gravel",
      slug: "running",
      type: "featured",
      upcomingEvents: [
        {
          name: "Chicago Marathon",
          date: "October 11th, 2026",
          location: "Chicago, IL",
          goal: "Sub 3:00",
        },
      ],
      personalBests: {
        "5K": "18:22",
        "Half Marathon": "1:29:52",
        "10K": "40:26",
        "Marathon": "3:13:07",
        "50K": "6:11:37"
      }
    },
    {
      id: 2,
      name: "Paragliding",
      description:
        "I had a three-month gap after college before starting my first job, and the choice came down to backpacking around Europe or learning to paraglide. I went with paragliding. I bought a wing and flew just about every day that summer, logging 40 days as a total beginner. Something about it just clicked for me—part puzzle, part letting go. Now whenever I'm back in Colorado the paraglider is the first thing I dig out.",
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
        "I grew up skiing at Stratton Mountain in Vermont. East Coast skiing is mostly ice, so you learn to ski well early on. When I went to college in Boulder, the Rockies were an hour away, and I started skiing 30+ days a season. It was how I unwound after long days studying computer science in Norlin Library. I still ski every time I'm back in Colorado to see family.",
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