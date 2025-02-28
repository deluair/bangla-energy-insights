
import { useEffect, useState } from "react";
import { Zap, Wind, Factory, Power } from "lucide-react";

const EnergyStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    totalCapacity: 0,
    renewable: 0,
    fossilFuel: 0,
    transmission: 0,
  });

  const targetValues = {
    totalCapacity: 25.5, // GW
    renewable: 3.2, // GW
    fossilFuel: 88, // Percentage
    transmission: 12500, // km
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("energy-stats");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in ms
    const frameDuration = 1000 / 60; // Duration of one frame at 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCounters({
        totalCapacity: parseFloat((progress * targetValues.totalCapacity).toFixed(1)),
        renewable: parseFloat((progress * targetValues.renewable).toFixed(1)),
        fossilFuel: Math.floor(progress * targetValues.fossilFuel),
        transmission: Math.floor(progress * targetValues.transmission),
      });

      if (frame === totalFrames) clearInterval(timer);
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      id: "total-capacity",
      icon: <Zap className="h-6 w-6 energy-icon" />,
      value: counters.totalCapacity,
      unit: "GW",
      label: "Total Installed Capacity",
      description: "Bangladesh's current power generation capability",
    },
    {
      id: "renewable",
      icon: <Wind className="h-6 w-6 renewable-icon" />,
      value: counters.renewable,
      unit: "GW",
      label: "Renewable Energy",
      description: "Solar, wind and hydroelectric power capacity",
    },
    {
      id: "fossil-fuel",
      icon: <Factory className="h-6 w-6 industry-icon" />,
      value: counters.fossilFuel,
      unit: "%",
      label: "Fossil Fuel Dependency",
      description: "Proportion of energy derived from non-renewable sources",
    },
    {
      id: "transmission",
      icon: <Power className="h-6 w-6 grid-icon" />,
      value: counters.transmission,
      unit: "km",
      label: "Transmission Network",
      description: "Total length of power transmission lines",
    },
  ];

  return (
    <div id="energy-stats" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Bangladesh Energy at a Glance</h2>
          <p className="section-subtitle mx-auto">
            Key statistics highlighting the current state of Bangladesh's energy sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-50">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 flex items-baseline">
                  {typeof stat.value === 'number' 
                    ? stat.value % 1 === 0 
                      ? stat.value 
                      : stat.value.toFixed(1) 
                    : stat.value}
                  <span className="text-base ml-1 text-muted-foreground">{stat.unit}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnergyStats;
