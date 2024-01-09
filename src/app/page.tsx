"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Contact, Menu, Microscope, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "About",
    icon: Microscope,
    href: "/about",
    color: "text-sky-500",
  },
  {
    label: "Collection",
    icon: Microscope,
    href: "/collection",
    color: "text-sky-500",
  },
  {
    label: "Shop",
    icon: ShoppingCart,
    href: "/shop",
    color: "text-violet-500",
  },
  {
    label: "Contact",
    icon: Contact,
    color: "text-pink-700",
    href: "/contact",
  },
];

export default function HomePage() {
  const pathname = usePathname();

  return (
    <main>
      <nav className="maincol flex w-full items-center justify-between bg-background py-6">
        <span className="text-3xl font-medium tracking-tight">sartor</span>

        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-end border px-0 py-20">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition",
                  pathname === route.href ? "bg-white/10" : "text-zinc-400",
                )}
              >
                <div className="flex flex-1 items-center justify-end px-1 py-2 text-right">
                  {route.label}
                  <route.icon className={cn("ml-3 h-5 w-5", route.color)} />
                </div>
              </Link>
            ))}
          </SheetContent>
        </Sheet>

        <div className="hidden gap-10 md:flex">
          <h1 className="cursor-pointer hover:underline">About</h1>
          <h1 className="cursor-pointer hover:underline">Collection</h1>
          <h1 className="cursor-pointer hover:underline">Shop</h1>
          <h1 className="cursor-pointer hover:underline">Contact</h1>
        </div>
      </nav>

      <section className="maincol flex h-full w-full flex-col gap-4 py-4 md:flex-row">
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl md:w-1/2">
          <Image
            src={
              "https://framerusercontent.com/images/am05vPyBf7yaPN3QbY8QXOwrmbc.png"
            }
            alt="Your Image Alt Text"
            fill
            className="scale-100 cursor-pointer object-cover transition-all duration-100 ease-linear hover:scale-105"
          />
        </div>

        <div className="flex h-[400px] w-full flex-col items-center justify-center rounded-xl bg-[#f0f4ec] md:w-1/2">
          <div className="flex h-full flex-col items-center  justify-center gap-12 px-10 py-16 text-center">
            <span className="text-lg tracking-widest">BRAND FOR MEN</span>
            <span className="text-9xl">-70%</span>
            <span className="max-w-sm text-muted-foreground">
              Great deals for Black Friday. Hurry up and get your beauty
              product.
            </span>
          </div>
        </div>
      </section>

      <section className="maincol flex h-full w-full flex-col gap-4 py-4">
        <span className="max-w-xs text-3xl font-light">
          A collection of cool clothes available here
        </span>

        <div className="flex h-full w-full flex-col gap-4 md:flex-row">
          <div className="relative flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-xl px-4 py-6">
            <Image
              src={
                "https://framerusercontent.com/images/0SYSXQp2tc2qy5jBTqrx0RJwDY.png"
              }
              alt="Your Image Alt Text"
              fill
              className="scale-100 cursor-pointer object-cover transition-all duration-100 ease-linear hover:scale-105"
            />
            <div className="z-10 flex flex-col gap-4">
              <span className="text-xl font-medium">Summer Wear</span>
              <span className="font-light text-muted-foreground">
                Men summer collection
              </span>
              <Button className="w-full md:w-1/3">Shop Now</Button>
            </div>
          </div>

          <div className="flex h-[400px] w-full flex-col gap-4">
            <div className="relative flex h-full  w-full flex-col justify-end overflow-hidden rounded-xl px-4 py-6">
              <Image
                src={
                  "https://framerusercontent.com/images/70URwMvwrIpIZrIMCduPipWy4.png"
                }
                alt="Your Image Alt Text"
                fill
                className="scale-100 cursor-pointer object-cover transition-all duration-100 ease-linear hover:scale-105"
              />
              <div className="z-10 flex flex-col gap-4">
                <span className="text-xl font-medium">Jackets</span>
                <span className="font-light text-muted-foreground">
                  Spring to Autumn
                </span>
                <Button className="w-full md:w-1/3">Shop Now</Button>
              </div>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-[#203424] px-4 text-center">
              <div className="flex flex-col gap-1">
                <span className="font-light text-background ">
                  Get 20% off with code
                </span>
                <span className="text-2xl font-medium text-lime-300">
                  WinterLove20
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex h-[400px] w-full flex-col justify-end overflow-hidden rounded-xl px-4 py-6">
            <Image
              src={
                "https://framerusercontent.com/images/MpDIdFiV0sUABKeK4jp8eh2j810.png"
              }
              alt="Your Image Alt Text"
              fill
              className="scale-100 cursor-pointer object-cover transition-all duration-100 ease-linear hover:scale-105"
            />
            <div className="z-10 flex flex-col gap-4">
              <span className="text-xl font-medium">Sweaters</span>
              <span className="font-light text-muted-foreground">
                Keeping you warm
              </span>
              <Button variant={"secondary"} className="w-full md:w-1/3">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="maincol flex h-full flex-col gap-4 py-4">
        <div className="flex items-center justify-between">
          <span className="max-w-xs text-3xl font-light">Latest Arrival</span>
          <Button>View All</Button>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4">
          <div className="relative flex flex-col gap-2">
            <Badge className="absolute left-2 top-2 z-10">New</Badge>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/fd2VNFSl2UE4vwXDP25QvjPHiNI.png?scale-down-to=1024"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">Solid Denim Jackets</span>
            <span className="text-muted-foreground">
              High-quality bowls for long term use
            </span>
            <span className="font-medium">$24.99</span>
          </div>
          <div className="relative flex flex-col gap-2">
            <Badge className="absolute left-2 top-2 z-10">New</Badge>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/S8I0nf5bGWNu57P9DnrIv4OOdI.png?scale-down-to=1024"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">Corduroy Jackets</span>
            <span className="text-muted-foreground">
              High-quality bowls for long term use
            </span>
            <span className="font-medium">$39.99</span>
          </div>
          <div className="relative flex flex-col gap-2">
            <Badge className="absolute left-2 top-2 z-10">New</Badge>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/atdfycmKAVrbzUve1GdPqDm0.png?scale-down-to=1024"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">Drawing Print shirt </span>
            <span className="text-muted-foreground">
              High-quality bowls for long term use
            </span>
            <span className="font-medium">$22.99</span>
          </div>
          <div className="relative flex flex-col gap-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/atdfycmKAVrbzUve1GdPqDm0.png?scale-down-to=1024"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">Drawing Print shirt </span>
            <span className="text-muted-foreground">
              High-quality bowls for long term use
            </span>
            <span className="font-medium">$22.99</span>
          </div>
          <div className="relative flex flex-col gap-2">
            <Badge className="absolute left-2 top-2 z-10">50% OFF</Badge>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/atdfycmKAVrbzUve1GdPqDm0.png?scale-down-to=1024"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">Drawing Print shirt </span>
            <span className="text-muted-foreground">
              High-quality bowls for long term use
            </span>
            <span className="font-medium">$22.99</span>
          </div>
          <div className="relative flex flex-col gap-2">
            <Badge className="absolute left-2 top-2 z-10">New</Badge>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/fd2VNFSl2UE4vwXDP25QvjPHiNI.png?scale-down-to=1024"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">Solid Denim Jackets</span>
            <span className="text-muted-foreground">
              High-quality bowls for long term use
            </span>
            <span className="font-medium">$24.99</span>
          </div>
          <div className="relative flex flex-col gap-2">
            <Badge className="absolute left-2 top-2 z-10">New</Badge>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/fd2VNFSl2UE4vwXDP25QvjPHiNI.png?scale-down-to=1024"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">Solid Denim Jackets</span>
            <span className="text-muted-foreground">
              High-quality bowls for long term use
            </span>
            <span className="font-medium">$24.99</span>
          </div>
          <div className="relative flex flex-col gap-2">
            <Badge className="absolute left-2 top-2 z-10">New</Badge>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/S8I0nf5bGWNu57P9DnrIv4OOdI.png?scale-down-to=1024"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">Corduroy Jackets</span>
            <span className="text-muted-foreground">
              High-quality bowls for long term use
            </span>
            <span className="font-medium">$39.99</span>
          </div>
        </div>
      </section>

      <section className="maincol flex h-full w-full flex-col gap-4 py-4">
        <span className="max-w-xs text-3xl font-light">Pick of the week</span>

        <div className="flex h-full w-full flex-col gap-4 md:flex-row">
          <div className="relative flex h-[300px] w-full flex-col justify-center overflow-hidden rounded-xl px-6 py-6">
            <Image
              src={
                "https://framerusercontent.com/images/6HBsy99IlGFTORNvYYFvLkEupo.png"
              }
              alt="Your Image Alt Text"
              fill
              className="object-cover"
            />
            <div className="z-10 flex flex-col gap-4">
              <span className="text-3xl font-medium text-background">
                Leather Sneakers
              </span>
              <span className="font-light text-muted-foreground">
                20%-40% OFF
              </span>
              <Button className="w-full md:w-1/3">Shop Now</Button>
            </div>
          </div>
          <div className="relative flex h-[300px] w-full flex-col items-end justify-end overflow-hidden rounded-xl px-6 py-6 text-end">
            <Image
              src={
                "https://framerusercontent.com/images/SaGJ6BeYsMyAqubIztJT17EWCjc.png"
              }
              alt="Your Image Alt Text"
              fill
              className="object-cover"
            />
            <div className="z-10 flex flex-col gap-4">
              <span className="text-3xl font-medium text-background">
                Winter Hoodie
              </span>
              <span className="font-light text-muted-foreground">
                30%-70% OFF
              </span>
              <Button className="w-full">Shop Now</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="maincol flex h-full w-full flex-col gap-4 py-4">
        <div className="relative h-[600px] w-full overflow-hidden rounded-xl">
          <Image
            src={
              "https://framerusercontent.com/images/FZ3F4PGjJT7wfXjrUZAWvkDM8.png"
            }
            alt="Your Image Alt Text"
            fill
            className="-z-10 object-cover"
          />
          <div className="z-10 flex h-full max-w-lg flex-col justify-center gap-4 px-8">
            <span className="text-3xl text-background">
              Check Out Todays Flashsale
            </span>
            <span className="text-background/50">
              Get ready for an electrifying shopping experience! Offering deals
              for a limited time.
            </span>
            <Button variant={"secondary"} className="w-full md:w-1/3">
              Shop the Sale
            </Button>
          </div>
        </div>
      </section>

      <section className="maincol flex h-full w-full flex-col gap-4 py-4">
        <span className="max-w-xs text-3xl font-light">
          Useful tips for your Style
        </span>

        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="flex h-full w-full flex-col gap-2">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/0NkI29ThETytqDZZqHt8ZPhWusQ.png"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">
              10 tips on what to wear in winter?
            </span>
            <span className="text-muted-foreground">September 18, 2023</span>
          </div>
          <div className="flex h-full w-full flex-col gap-2">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/KIHE8vNLeMbAmjy1q2EKVvqsj1M.png"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">
              Best fitness tracker in 2023
            </span>
            <span className="text-muted-foreground">September 18, 2023</span>
          </div>
          <div className="flex h-full w-full flex-col gap-2">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://framerusercontent.com/images/zlQO8yG0PQfcNAC4pULkOmf4wY.png"
                }
                alt="Your Image Alt Text"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg font-medium">
              How to choose a better sunglass?
            </span>
            <span className="text-muted-foreground">September 18, 2023</span>
          </div>
        </div>
      </section>

      <footer className="maincol mt-12 flex flex-col gap-2 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-3xl font-medium tracking-tight">sartor</span>
          <span className="text-sm text-muted-foreground">
            2023 All Right Reserved
          </span>
        </div>

        <div>
          <span className="underline">filip.halapir1@gmail.com</span>
        </div>
      </footer>
    </main>
  );
}
