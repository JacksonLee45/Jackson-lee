// app/data/activities.ts

export interface Activity {
    id: number;
    name: string;
    description: string;
    image: string;
    location: string;
    slug: string;
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
          name: "Boston Marathon",
          date: "April 15, 2025",
          location: "Boston, MA",
          goal: "Sub 3:30",
        },
        {
          name: "Boulder Backroads Half Marathon",
          date: "June 8, 2025",
          location: "Boulder, CO",
          goal: "Sub 1:45",
        },
        {
          name: "Chicago Marathon",
          date: "October 12, 2025",
          location: "Chicago, IL",
          goal: "Sub 3:25",
        }
      ],
      personalBests: {
        "5K": "19:45",
        "10K": "41:30",
        "Half Marathon": "1:38:22",
        Marathon: "3:42:15"
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
      certifications: ["P2 Novice Rating", "P3 Intermediate Rating"]
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
        "Copper Mountain, CO",
        "Jackson Hole, WY"
      ]
    }
  ];
  
  // Other activities displayed in the secondary section
  export const otherActivities: Activity[] = [
    {
      id: 4,
      name: "Rollerblading",
      description:
        "Urban exploration and fitness combined. I picked up rollerblading during the pandemic as a way to experience my city differently and now it's a weekly ritual.",
      image: "/placeholder.svg?height=300&width=400",
      location: "Urban Trails",
      slug: "rollerblading",
      type: "other"
    },
    {
      id: 5,
      name: "Hockey",
      description:
        "Team sports provide a different kind of mental refresh than solo activities. Weekly pickup games keep me connected to my community and provide a competitive outlet.",
      image: "/placeholder.svg?height=300&width=400",
      location: "Local Ice Rinks",
      slug: "hockey",
      type: "other"
    },
    {
      id: 6,
      name: "Hiking",
      description:
        "The accessible counterpart to my more extreme outdoor pursuits. Hiking allows me to introduce friends and family to the natural world I love without the technical barriers.",
      image: "/placeholder.svg?height=300&width=400",
      location: "Front Range, Colorado",
      slug: "hiking",
      type: "other"
    },
    {
      id: 7,
      name: "Rock Climbing",
      description:
        "A newer pursuit that combines problem-solving, physical challenge, and overcoming mental barriers. The climbing community's supportive nature reminds me of the best aspects of tech communities.",
      image: "/placeholder.svg?height=300&width=400",
      location: "Indoor Gyms & Outdoor Crags",
      slug: "rock-climbing",
      type: "other"
    }
  ];
  
  // All activities combined
  export const allActivities = [...featuredActivities, ...otherActivities];