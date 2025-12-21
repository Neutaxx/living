import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
}

export interface ClientProject {
  id: string;
  name: string;
  sector: string;
  serviceType: string;
  description: string;
  logoPlaceholder: string; // Using text/color for placeholder
}

export interface DifferentialItem {
  title: string;
  description: string;
  icon: LucideIcon;
}