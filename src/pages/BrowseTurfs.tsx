
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { TurfCard } from "@/components/TurfCard";
import { turfs } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sports = [...new Set(turfs.map((turf) => turf.sport))];

export default function BrowseTurfs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [filteredTurfs, setFilteredTurfs] = useState(turfs);

  const applyFilters = () => {
    let filtered = [...turfs];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (turf) =>
          turf.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          turf.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sport filter
    if (selectedSport) {
      filtered = filtered.filter((turf) => turf.sport === selectedSport);
    }

    // Apply price filter
    filtered = filtered.filter(
      (turf) => turf.price >= priceRange[0] && turf.price <= priceRange[1]
    );

    setFilteredTurfs(filtered);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSport(null);
    setPriceRange([0, 150]);
    setFilteredTurfs(turfs);
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">Browse Turfs</h1>
            <p className="mt-1 text-muted-foreground">
              Find and book the perfect sports facility
            </p>
          </div>
          
          {/* Mobile Filter Button */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="space-y-6 py-4">
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Sport</h3>
                    <Select
                      value={selectedSport || ""}
                      onValueChange={(value) => setSelectedSport(value || null)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select sport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-sports">All Sports</SelectItem>
                        {sports.map((sport) => (
                          <SelectItem key={sport} value={sport}>
                            {sport}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-lg font-medium">Price Range</h3>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={priceRange}
                        min={0}
                        max={150}
                        step={5}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                      />
                      <div className="flex items-center justify-between">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button onClick={applyFilters} className="w-full">
                      Apply Filters
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetFilters}
                      className="w-full"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Filters - Desktop */}
          <div className="hidden space-y-6 md:block">
            <div>
              <h3 className="mb-2 text-lg font-medium">Sport</h3>
              <Select
                value={selectedSport || ""}
                onValueChange={(value) => setSelectedSport(value || null)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-sports">All Sports</SelectItem>
                  {sports.map((sport) => (
                    <SelectItem key={sport} value={sport}>
                      {sport}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <h3 className="mb-2 text-lg font-medium">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={150}
                  step={5}
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                />
                <div className="flex items-center justify-between">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button onClick={applyFilters} className="w-full">
                Apply Filters
              </Button>
              <Button
                variant="outline"
                onClick={resetFilters}
                className="w-full"
              >
                Reset
              </Button>
            </div>
          </div>

          {/* Search and Results */}
          <div className="md:col-span-3 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or location"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyFilters()}
              />
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTurfs.length > 0 ? (
                filteredTurfs.map((turf) => (
                  <TurfCard key={turf.id} turf={turf} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-lg font-medium">No turfs found</h3>
                  <p className="mt-1 text-muted-foreground">
                    Try adjusting your filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={resetFilters}
                    className="mt-4"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
