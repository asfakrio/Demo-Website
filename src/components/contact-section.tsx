"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "./animated-section";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  course: z.string().min(1, { message: "Please select a course." }),
  message: z.string().optional(),
});

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Form Submitted!",
      description: "Thank you for your message. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <AnimatedSection id="contact" className="bg-black text-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">
              Bright Future Academy
            </h2>
            <p className="text-2xl md:text-3xl font-bold font-headline bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-headline text-white">Contact Information</h3>
            <p className="text-gray-400">
              Have questions or ready to enroll? Reach out to us! We're here to help you on your journey to success.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Education Lane, Knowledge City, 456789</span>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-300">contact@brightfuture.academy</span>
              </div>
            </div>
            <div className="flex space-x-6 pt-4">
              <Link href="#" className="text-gray-400 hover:text-primary"><Twitter size={28} /></Link>
              <Link href="#" className="text-gray-400 hover:text-primary"><Facebook size={28} /></Link>
              <Link href="#" className="text-gray-400 hover:text-primary"><Instagram size={28} /></Link>
              <Link href="#" className="text-gray-400 hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-700 p-8 rounded-lg shadow-2xl shadow-primary/20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input className="bg-gray-800 border-gray-600 text-white focus:ring-primary" placeholder="Your Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" className="bg-gray-800 border-gray-600 text-white focus:ring-primary" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input className="bg-gray-800 border-gray-600 text-white focus:ring-primary" placeholder="Your Phone Number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Course of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:ring-primary">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-gray-900 border-gray-700 text-white">
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                          <SelectItem value="jee">JEE Preparation</SelectItem>
                          <SelectItem value="neet">NEET Preparation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea className="bg-gray-800 border-gray-600 text-white focus:ring-primary" placeholder="Tell us how we can help..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full text-white font-bold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-105">Send Message</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
