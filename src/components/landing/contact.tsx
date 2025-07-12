import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ContactForm } from './contact-form';
import { Button } from '../ui/button';
// Removed direct Link import as it will be used within Button asChild where needed.

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready for Your Child to Become a Mental Math Champion?</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contact the <strong>best abacus center in Shivamogga</strong> today and book your free trial class!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Get in Touch */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <div className="space-y-4">
              {/* Gandhinagar Branch */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">Gandhinagar Branch</h4>
                    <p className="text-muted-foreground">2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button asChild variant="outline">
                    <a href="https://maps.google.com/?q=Creative+Abacus+Academy,+Gandhinagar+Branch,+Shimoga" target="_blank" rel="noopener noreferrer">
                      Get Directions on Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Devraj Aras Badavane Branch */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="text-lg font-semibold">Devraj Aras Badavane Branch</h4>
                    <p className="text-muted-foreground">Somina Koppa, Shivamogga</p>
                  </div>
                </div>
                 <div className="mt-4 text-center">
                  <Button asChild variant="outline">
                     <a href="https://maps.google.com/?q=Creative+Abacus+Academy,+Devraj+Aras+Badavane+Branch,+Shivamogga" target="_blank" rel="noopener noreferrer">
                      Get Directions on Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Details and Hours */}
              <div className="space-y-4">
                 <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Phone/WhatsApp: 96634 44851</span>
                </div>
                 <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Email: info@creativeabacus.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>School Hours: Mon–Sat: 10 AM–6 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry & Admission Form */}
          <div className="flex flex-col space-y-6 rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="text-2xl font-bold text-center">Enquiry & Admission Form</h3>
             <p className="text-muted-foreground text-center text-sm">Required Documents: Recent Photo, Aadhar Card, Birth Certificate</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
