import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get in Touch</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions or want to enroll? Reach out to us! We're here to help.
          </p>
        </div>
        <div className="mx-auto w-full max-w-5xl grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">Fill out the form or use the details below to connect with us.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Our Academy</h4>
                  <p className="text-muted-foreground">123 Learning Lane, Knowledge City, 45678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hello@creativeabacus.com</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
