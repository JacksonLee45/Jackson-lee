// app/outside/page.tsx

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

import { featuredActivities, otherActivities } from "../data/activities";

export default function OutsidePage() {
  // Combine all activities
  const allActivities = [...featuredActivities, ...otherActivities];

  return (
    <div className="pt-20">
      <section className="container-custom section-spacing">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-xl mb-6">Outside</h1>
          <p className="body-lg text-muted-foreground">
            Life beyond the screen. A glimpse into the activities that fuel my creativity and problem-solving abilities.
          </p>
        </div>

        {/* Featured Activities */}
        <div className="mb-24">
          <h2 className="heading-lg mb-10 relative">
            Featured Activities
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">01</span>
          </h2>

          <div className="grid gap-16 md:gap-24">
            {featuredActivities.map((activity, index) => (
              <div key={activity.id} className="group">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}>
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="text-8xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl font-bold mb-6 -mt-8 group-hover:translate-x-2 transition-transform">
                      {activity.name}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">{activity.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-8">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{activity.location}</span>
                    </div>
                    
                    {/* Running: Upcoming Races + Personal Bests */}
                    {activity.name === "Running" && (
                      <>
                        {/* Upcoming Races */}
                        {activity.upcomingEvents && (
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">Upcoming Races</h3>
                            <div className="space-y-2">
                              {activity.upcomingEvents.map((event, idx) => (
                                <div key={idx} className="flex items-start">
                                  <Calendar className="h-4 w-4 mr-2 mt-1 shrink-0" />
                                  <div>
                                    <span className="font-medium">{event.name}</span>
                                    <span className="text-muted-foreground"> - {event.date}</span>
                                    <p className="text-sm text-muted-foreground">Goal: {event.goal}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Personal Bests */}
                        {activity.personalBests && (
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3">Personal Bests</h3>
                            <div className="grid grid-cols-2 gap-2">
                              {Object.entries(activity.personalBests).map(([distance, time]) => (
                                <div key={distance} className="flex justify-between border-b border-border pb-1">
                                  <span className="font-medium">{distance}:</span>
                                  <span className="font-mono">{time}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    
                    {/* Paragliding: Certifications */}
                    {activity.name === "Paragliding" && activity.certifications && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                        <ul className="space-y-1">
                          {activity.certifications.map((cert, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Skiing: Top Resorts */}
                    {activity.name === "Skiing" && activity.favoriteResorts && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">Top Resorts</h3>
                        <ul className="space-y-1">
                          {(Array.isArray(activity.favoriteResorts) ? 
                            activity.favoriteResorts.slice(0, 3) : 
                            []
                          ).map((resort, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              <span>{typeof resort === 'string' ? resort : resort.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                  </div>
                  <div className={`overflow-hidden rounded-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <div className="aspect-auto bg-muted rounded-lg overflow-hidden transition-transform group-hover:scale-105 duration-500">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.name}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Activities */}
        <div>
          <h2 className="heading-lg mb-10 relative">
            Other Pursuits
            <span className="absolute -z-10 text-[8rem] font-bold text-muted/20 -top-16 -left-6 opacity-80">02</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
            Beyond my primary outdoor passions, these activities provide balance, community connection, and different types of challenges that keep life interesting.
          </p>

          <div className="grid grid-cols-2 gap-y-8 gap-x-16">
            {otherActivities.map((activity, index) => (
              <div key={activity.id} className="border-b border-border pb-2 group">
                <div className="flex items-baseline">
                  <span className="text-sm text-muted-foreground mr-4 group-hover:text-foreground transition-colors">
                    -
                  </span>
                  <span className="text-2xl group-hover:translate-x-2 transition-transform">{activity.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}