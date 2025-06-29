"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icons from "./Icons";
import { GeneralInfo, SocialMedia } from "@/lib/types";

interface FloatingWhatsAppProps {
  generalInfo: GeneralInfo;
  socialMedia: SocialMedia[];
}

export default function FloatingWhatsApp({
  generalInfo,
  socialMedia,
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleOpenContactModal = () => {
      setIsOpen(true);
    };

    window.addEventListener("openContactModal", handleOpenContactModal);

    return () => {
      window.removeEventListener("openContactModal", handleOpenContactModal);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(generalInfo.messageContact);
    const phoneNumber = generalInfo.phone.replace(/\D/g, "");
    window.open(`https://wa.me/55${phoneNumber}?text=${message}`, "_blank");
  };

  const handleEmailClick = () => {
    if (generalInfo.email) {
      window.open(`mailto:${generalInfo.email}`, "_blank");
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className={`
                h-16 rounded-full shadow-lg bg-clrPrimary5 hover:bg-clrPrimary4 text-white border-0 
                transition-all duration-300 hover:scale-105 flex items-center justify-center overflow-hidden
                ${isHovered ? "w-52" : "w-16"}
              `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`flex items-center ${isHovered ? "gap-3" : ""}`}>
                <Icons name="messageCircle" className="w-8 h-8 flex-shrink-0" />
                <span
                  className={`
                    font-bold text-sm whitespace-nowrap transition-all duration-300
                    ${
                      isHovered
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4 w-0"
                    }
                  `}
                >
                  {isHovered && "Entre em contato"}
                </span>
              </div>
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-clrPrimary1 text-center text-xl font-semibold">
                Entre em Contato
              </DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4 py-4">
              {/* WhatsApp */}
              <Button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 p-4 h-auto bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                <Icons name="messageCircle" className="w-6 h-6" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">WhatsApp</span>
                  <span className="text-sm opacity-90">
                    {generalInfo.phone}
                  </span>
                </div>
              </Button>

              {/* Email */}
              {generalInfo.email && (
                <Button
                  onClick={handleEmailClick}
                  variant="outline"
                  className="flex items-center gap-3 p-4 h-auto border-clrPrimary6 text-clrPrimary1 hover:bg-clrPrimary10"
                >
                  <Icons name="mail" className="w-6 h-6" />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Email</span>
                    <span className="text-sm opacity-80">
                      {generalInfo.email}
                    </span>
                  </div>
                </Button>
              )}

              {/* Telefone */}
              <Button
                onClick={() => window.open(`tel:${generalInfo.phone}`, "_self")}
                variant="outline"
                className="flex items-center gap-3 p-4 h-auto border-clrPrimary6 text-clrPrimary1 hover:bg-clrPrimary10"
              >
                <Icons name="phone" className="w-6 h-6" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">Telefone</span>
                  <span className="text-sm opacity-80">
                    {generalInfo.phone}
                  </span>
                </div>
              </Button>

              {/* Redes Sociais */}
              {socialMedia.length > 0 && (
                <>
                  <div className="border-t border-clrPrimary8 pt-4 mt-2">
                    <h4 className="text-clrPrimary2 font-medium mb-3 text-center">
                      Redes Sociais
                    </h4>
                    <div className="flex justify-center gap-4">
                      {socialMedia.map((social) => (
                        <Button
                          key={social.id}
                          onClick={() => handleSocialClick(social.url)}
                          variant="outline"
                          size="icon"
                          className="w-12 h-12 rounded-full border-clrPrimary6 text-clrPrimary1 hover:bg-clrPrimary10"
                        >
                          <Icons
                            name={social.name.toLowerCase()}
                            className="w-5 h-5"
                          />
                        </Button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
