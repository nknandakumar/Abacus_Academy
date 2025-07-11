import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from './contact-form';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Enquiry & Admission Form</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Required Documents: Recent Photo, Aadhar Card, Birth Certificate. Fill out the form below to secure your admission slot.
          </p>
        </div>
        <div className="mx-auto w-full max-w-6xl grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">Reach out to us at our Shivamogga branches.</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                 <h4 className="font-semibold flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" />Gandhinagar Branch</h4>
                 <p className="text-muted-foreground ml-7">2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
              </div>
              <div className="space-y-2">
                 <h4 className="font-semibold flex items-center"><MapPin className="w-5 h-5 mr-2 text-primary" />Devraj Aras Badavane Branch</h4>
                 <p className="text-muted-foreground ml-7">Somina Koppa, Shivamogga</p>
              </div>
               <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">96634 44851</p>
              </div>
               <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">info@creativeabacus.com</p>
              </div>
               <div className="flex items-center space-x-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">Mon–Sat: 10 AM–6 PM</p>
              </div>
            </div>
             <Button asChild>
                <Link href="https://maps.google.com" target="_blank">Get Directions on Google Maps</Link>
             </Button>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
