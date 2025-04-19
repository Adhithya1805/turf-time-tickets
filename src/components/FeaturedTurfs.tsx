
import { TurfCard } from "./TurfCard";
import { Turf } from "@/data/mockData";

interface FeaturedTurfsProps {
  turfs: Turf[];
}

export function FeaturedTurfs({ turfs }: FeaturedTurfsProps) {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Featured Turfs
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover top-rated sports facilities in your area
            </p>
          </div>
          <a
            href="/browse"
            className="hidden text-sm font-medium text-primary underline-offset-4 hover:underline md:block"
          >
            View all turfs
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {turfs.slice(0, 6).map((turf) => (
            <TurfCard key={turf.id} turf={turf} />
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <a
            href="/browse"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View all turfs
          </a>
        </div>
      </div>
    </section>
  );
}
