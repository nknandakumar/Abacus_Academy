import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from './contact-form';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Enquiry & Admission Form</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Required Documents: Recent Photo, Aadhar Card, Birth Certificate. Fill out the form below to secure your admission slot.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
