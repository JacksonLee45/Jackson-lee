import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { featuredActivities } from "../app/data/activities";

export function OutsideOfficeSection() {

  return (
    <section className="container-custom section-spacing">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <h2 className="heading-lg relative whitespace-nowrap">
          Outside the Office
          <span className="absolute -z-10 text-[10rem] font-bold text-muted/20 -top-20 -left-6 opacity-80">05</span>
        </h2>
        <Link href="/activities" className="link-underline text-lg text-muted-foreground mt-4 md:mt-0">
          View All Activities
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredActivities.map((activity) => (
          <Card key={activity.id} className="group overflow-hidden border border-border bg-card">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.name}
                width={700}
                height={400}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>
            <CardHeader className="p-6">
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">{activity.name}</CardTitle>
              <CardDescription className="line-clamp-2">{activity.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>{activity.location}</span>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                asChild
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                <Link href={"/outside"}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default OutsideOfficeSection;