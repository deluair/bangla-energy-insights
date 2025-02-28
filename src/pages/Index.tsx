
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import EnergyStats from "@/components/EnergyStats";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Zap, Wind, Cpu, Factory, Lightbulb, PieChart } from "lucide-react";

const Index = () => {
  // Lazy loading animation for sections
  const useSectionAnimation = (sectionId: string) => {
    const [isVisible, setIsVisible] = useState(false);

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

      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);

      return () => observer.disconnect();
    }, [sectionId]);

    return isVisible;
  };

  const overviewVisible = useSectionAnimation("overview");
  const powerStructureVisible = useSectionAnimation("power-structure");
  const renewableVisible = useSectionAnimation("renewable");
  const challengesVisible = useSectionAnimation("challenges");
  const futureVisible = useSectionAnimation("future");

  const featuredArticles = [
    {
      title: "The Evolution of Bangladesh's Power Generation Mix",
      description: "Exploring how Bangladesh's energy sources have diversified over the past decade and the implications for future growth.",
      category: "Power Generation",
      imageUrl: "https://source.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      categoryColor: "bg-energy-green",
      delay: 100,
    },
    {
      title: "Solar Energy: A Bright Future for Rural Bangladesh",
      description: "How solar home systems are transforming lives in off-grid communities and contributing to the nation's renewable energy goals.",
      category: "Renewable Energy",
      imageUrl: "https://source.unsplash.com/photo-1460925895917-afdab827c52f",
      categoryColor: "bg-energy-amber",
      delay: 200,
    },
    {
      title: "Navigating the Natural Gas Transition",
      description: "Bangladesh's relationship with natural gas resources and the strategic shift towards imported LNG to meet growing demand.",
      category: "Fossil Fuels",
      imageUrl: "https://source.unsplash.com/photo-1518770660439-4636190af475",
      categoryColor: "bg-energy-slate",
      delay: 300,
    },
  ];

  const energyStructureItems = [
    {
      icon: <Zap className="h-6 w-6 energy-icon" />,
      title: "Generation",
      description: "Bangladesh relies on a mix of natural gas (51%), heavy fuel oil (28%), coal (8%), and renewables (3%) for electricity generation, with the remainder coming from imports and other sources.",
    },
    {
      icon: <PieChart className="h-6 w-6 energy-icon" />,
      title: "Distribution",
      description: "Power distribution is managed by multiple entities including the Bangladesh Rural Electrification Board (BREB) and several distribution companies serving different regions of the country.",
    },
    {
      icon: <Cpu className="h-6 w-6 energy-icon" />,
      title: "Governance",
      description: "The Ministry of Power, Energy and Mineral Resources oversees the sector, with Bangladesh Power Development Board (BPDB) handling generation and the Power Grid Company managing transmission.",
    },
  ];

  const renewableEnergyItems = [
    {
      icon: <Lightbulb className="h-6 w-6 renewable-icon" />,
      title: "Solar Power",
      description: "With abundant sunshine, solar is the most promising renewable resource. Solar home systems have brought electricity to over 20 million people in rural areas, with utility-scale projects developing rapidly.",
    },
    {
      icon: <Wind className="h-6 w-6 renewable-icon" />,
      title: "Wind Energy",
      description: "While still nascent, coastal areas show potential for wind energy development. Several pilot projects are underway to assess feasibility and optimize turbine placement for Bangladesh's wind conditions.",
    },
    {
      icon: <Factory className="h-6 w-6 renewable-icon" />,
      title: "Biomass & Biogas",
      description: "Agricultural waste and livestock manure present opportunities for biomass and biogas energy generation, particularly suitable for rural communities with abundant organic materials.",
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Overview Section */}
      <section id="overview" className="section-container">
        <div className="text-center mb-16">
          <h2 className={`section-title ${overviewVisible ? "opacity-100" : "opacity-0"}`}>
            Bangladesh Energy Landscape
          </h2>
          <p className={`section-subtitle mx-auto ${overviewVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "100ms" }}>
            An overview of the current state, challenges, and opportunities in Bangladesh's energy sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              category={article.category}
              imageUrl={article.imageUrl}
              categoryColor={article.categoryColor}
              delay={article.delay}
            />
          ))}
        </div>
      </section>
      
      {/* Energy Stats Section */}
      <EnergyStats />
      
      {/* Power Structure Section */}
      <section id="power-structure" className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={powerStructureVisible ? "animate-fade-in" : "opacity-0"}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-energy-blue/10 text-energy-blue mb-4">
              Power Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bangladesh's Energy Structure
            </h2>
            <p className="text-muted-foreground mb-6">
              Bangladesh has made significant strides in expanding its power generation capacity, 
              reaching over 25 gigawatts in 2023, up from just 4.9 gigawatts in 2009. This rapid 
              expansion has enabled the country to provide electricity access to 99.5% of the population.
            </p>
            <div className="space-y-8">
              {energyStructureItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 ${powerStructureVisible ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="mt-1 p-2 rounded-full bg-gray-50">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative rounded-2xl overflow-hidden shadow-xl ${powerStructureVisible ? "animate-scale-in" : "opacity-0"}`}>
            <img 
              src="https://source.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Bangladesh Power Plant" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-8">
                <p className="text-white text-sm opacity-75">Payra 1320MW Thermal Power Plant</p>
                <h3 className="text-white text-xl font-semibold">Modern Infrastructure Powering Growth</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Separator className="max-w-4xl mx-auto" />
      
      {/* Renewable Energy Section */}
      <section id="renewable" className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1 ${renewableVisible ? "animate-scale-in" : "opacity-0"}`}>
            <img 
              src="https://source.unsplash.com/photo-1518770660439-4636190af475" 
              alt="Solar panels in Bangladesh" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-8">
                <p className="text-white text-sm opacity-75">Solar Home System in Rural Bangladesh</p>
                <h3 className="text-white text-xl font-semibold">Bringing Clean Energy to Communities</h3>
              </div>
            </div>
          </div>
          <div className={`order-1 lg:order-2 ${renewableVisible ? "animate-fade-in" : "opacity-0"}`}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-energy-amber/10 text-energy-amber mb-4">
              Sustainable Energy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Renewable Energy Transition
            </h2>
            <p className="text-muted-foreground mb-6">
              Bangladesh has set ambitious goals for renewable energy, targeting 40% of power from 
              clean sources by 2041. While current renewable capacity is modest at around 3% of the 
              total mix, rapid deployment of solar and exploration of wind resources promise significant growth.
            </p>
            <div className="space-y-8">
              {renewableEnergyItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 ${renewableVisible ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="mt-1 p-2 rounded-full bg-gray-50">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenges Section */}
      <section id="challenges" className="bg-gray-50 py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className={`section-title ${challengesVisible ? "opacity-100" : "opacity-0"}`}>
              Challenges & Opportunities
            </h2>
            <p className={`section-subtitle mx-auto ${challengesVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "100ms" }}>
              Key issues facing Bangladesh's energy sector and innovative solutions being developed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`glass-card rounded-xl p-8 ${challengesVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
              <h3 className="text-xl font-bold mb-4">Supply Security</h3>
              <p className="text-muted-foreground mb-6">
                Dwindling domestic natural gas reserves and growing dependence on imported fuels 
                present challenges for energy security and price stability.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>Diversification of energy sources and suppliers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>Development of strategic reserves and storage facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>Regional power trading agreements with neighboring countries</span>
                </li>
              </ul>
            </div>
            
            <div className={`glass-card rounded-xl p-8 ${challengesVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
              <h3 className="text-xl font-bold mb-4">Infrastructure & Financing</h3>
              <p className="text-muted-foreground mb-6">
                Building and maintaining modern energy infrastructure requires substantial 
                investment, technical expertise, and effective project management.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>Public-private partnerships for major projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>International development financing and green bonds</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>Technology transfer and capacity building programs</span>
                </li>
              </ul>
            </div>
            
            <div className={`glass-card rounded-xl p-8 ${challengesVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
              <h3 className="text-xl font-bold mb-4">Climate Resilience</h3>
              <p className="text-muted-foreground mb-6">
                As a low-lying delta nation, Bangladesh faces significant climate risks that 
                threaten energy infrastructure and operational reliability.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>Climate-adaptive design for power plants and transmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>Distributed renewable systems to enhance grid resilience</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-energy-green mt-1 shrink-0" />
                  <span>Early warning systems and disaster preparedness protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Future Section */}
      <section id="future" className="section-container">
        <div className="text-center">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-energy-slate/10 text-energy-slate mb-4 ${futureVisible ? "animate-fade-in" : "opacity-0"}`}>
            Looking Forward
          </span>
          <h2 className={`section-title ${futureVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
            The Future of Bangladesh's Energy
          </h2>
          <p className={`section-subtitle mx-auto ${futureVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            Strategic directions and innovations shaping the next decade
          </p>
          
          <div className={`max-w-3xl mx-auto glass-card rounded-xl p-8 mb-8 text-left ${futureVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl font-bold mb-4">Power System Master Plan 2041</h3>
            <p className="text-muted-foreground mb-6">
              Bangladesh's ambitious Power System Master Plan 2041 charts a course toward a 
              modern, sustainable, and resilient energy system capable of supporting the 
              nation's aspirations to become a developed economy by 2041.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold text-energy-green mb-1">40%</div>
                <p className="text-sm text-muted-foreground">Clean Energy Target by 2041</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold text-energy-green mb-1">60 GW</div>
                <p className="text-sm text-muted-foreground">Projected Generation Capacity</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50">
                <div className="text-2xl font-bold text-energy-green mb-1">100%</div>
                <p className="text-sm text-muted-foreground">Smart Grid Implementation</p>
              </div>
            </div>
          </div>
          
          <a 
            href="#" 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white rounded-md transition-colors hover:bg-foreground/90 ${futureVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "400ms" }}
          >
            <span>Download Full Energy Report</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
