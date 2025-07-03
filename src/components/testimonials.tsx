"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Class 10 Student",
    avatar: "PS",
    image: "https://placehold.co/100x100.png",
    aiHint: "indian woman",
    quote: "The personalized attention my son received at Bright Future Academy was exceptional. His grades in Physics improved dramatically within months. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rohan Verma",
    role: "JEE Aspirant",
    avatar: "RV",
    image: "https://placehold.co/100x100.png",
    aiHint: "indian man",
    quote: "The doubt-clearing sessions and regular mock tests were a game-changer for my JEE preparation. The faculty is incredibly supportive and knowledgeable.",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    role: "NEET Aspirant",
    avatar: "AM",
    image: "https://placehold.co/100x100.png",
    aiHint: "indian woman",
    quote: "I finally understood complex chemistry concepts thanks to the teaching methods here. The small batch size ensures every student gets the focus they need.",
    rating: 5,
  },
  {
    name: "Sunil Kumar",
    role: "Parent of Class 8 Student",
    avatar: "SK",
    image: "https://placehold.co/100x100.png",
    aiHint: "indian man",
    quote: "A fantastic place for building a strong foundation. My daughter enjoys her math classes and is no longer afraid of the subject. Thank you, Bright Future!",
    rating: 4,
  },
]

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  )

  return (
    <AnimatedSection id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 bg-gradient-to-r from-gray-900 to-pink-400 bg-clip-text text-transparent">
          What Our Students & Parents Say
        </h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col justify-between shadow-lg">
                    <CardContent className="p-6 text-center flex-grow">
                      <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
                      <p className="text-muted-foreground italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex justify-center mb-4">
                        {Array(testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                         {Array(5-testimonial.rating).fill(0).map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gray-300" />
                        ))}
                      </div>
                    </CardContent>
                    <div className="bg-background p-4 flex flex-col items-center">
                      <Avatar className="mb-2">
                        <AvatarImage src={testimonial.image} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <p className="font-semibold font-headline">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </AnimatedSection>
  )
}

export default Testimonials;
