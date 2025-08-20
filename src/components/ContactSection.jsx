import {
  Mail,
  MapPin,
  Phone,
  Send,
  
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-[#00ffc6]"> Me </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions or would love to speak further, please feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-15">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

              <div className="flex items-start space-x-25">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-[#00ffc6]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="chythram@vt.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    chythram@vt.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-25">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-[#00ffc6]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (804) 986 4008
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-29">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-[#00ffc6]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground-center hover:text-primary transition-colors">
                    Richmond, VA
                  </a>
                </div>
              </div>
              
              </div>
              <div className="space-y-6 text-left ml-13">
          <h3 className="text-2xl font-semibold mb-7">Connect With Me!</h3>
          <a
            href="https://www.linkedin.com/in/chythra-malapati/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="./projects/linkedln.png"
              alt="LinkedIn Profile"
              className="h-65 w-72 rounded-lg transition-transform hover:scale-105 shadow-[0_0_10px_5px_#00ffc6]"
            />
          </a>
        </div>
</div>
      </div>
    
  </section>
);
};
