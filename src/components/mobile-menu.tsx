import * as Dialog from "@radix-ui/react-dialog";
import { NavLink } from "./nav-link";
import { HamburgerIcon, InstagramIcon, WhatsAppIcon, XIcon } from "./icons";

type Link = {
  href: string;
  label: string;
};

interface MobileMenuProps {
  links: Link[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="sm:hidden">
          <span className="sr-only">Open Menu</span>
          <HamburgerIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
        <Dialog.Content className="fixed bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl z-50 data-[state=open]:animate-slide-up data-[state=closed]:animate-slide-down">
          <Dialog.Title className="sr-only">Mobile Menu</Dialog.Title>
          <div className="flex flex-col">
            {/* <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-2" /> */}
            <div className="flex justify-end items-center mb-2.5">
              <Dialog.Close asChild>
                <button>
                  <span className="sr-only">Close Menu</span>
                  <XIcon />
                </button>
              </Dialog.Close>
            </div>

            {links.map(({ href, label }) => (
              <Dialog.Close asChild key={href}>
                <NavLink href={href}>{label}</NavLink>
              </Dialog.Close>
            ))}

            <div className="w-full h-px bg-[#F3F3F3] my-4" />

            <div className="flex gap-5 justify-center">
              <a
                href="https://www.instagram.com/remoteworkerpnk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
              <a
                href="https://www.instagram.com/remoteworkerpnk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">WhatsApp</span>
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
