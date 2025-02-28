
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  categoryColor?: string;
  delay?: number;
}

const ArticleCard = ({
  title,
  description,
  category,
  imageUrl,
  categoryColor = "bg-energy-green",
  delay = 0,
}: ArticleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden transition-all duration-300 opacity-0",
        isHovered ? "transform scale-[1.02] shadow-md" : "",
        `animate-fade-in animate-delay-${delay}`
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColor}`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3 mb-4">{description}</p>
        <a href="#" className="article-link font-medium text-foreground">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
