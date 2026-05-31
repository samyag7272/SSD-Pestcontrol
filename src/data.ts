import { Service, Location } from './types';

export const servicesData: Service[] = [
  { id: 'cockroach-pest-control-services', name: 'Cockroach Pest Control Services', shortName: 'Cockroach', description: 'Effective cockroach elimination using advanced gel and spray treatments.', benefits: ['Long-lasting effect', 'Odorless treatment', 'Safe for children and pets'] },
  { id: 'general-pest-control-services', name: 'General Pest Control Services', shortName: 'General', description: 'Comprehensive protection against common household pests.', benefits: ['Complete home coverage', 'Year-round protection', 'Eco-friendly solutions'] },
  { id: 'termites-control-services', name: 'Termites Control Services', shortName: 'Termites', description: 'Advanced termite eradication with drill-fill-seal techniques.', benefits: ['5-year warranty', 'Deep root treatment', 'Prevents future infestation'] },
  { id: 'bed-bug-control-services', name: 'Bed Bug Control Services', shortName: 'Bed Bug', description: 'Intensive bed bug treatments targeting all life stages.', benefits: ['Two-step treatment process', 'Mattress protection', 'Guaranteed eradication'] },
  { id: 'mosquito-control-services', name: 'Mosquito Control Services', shortName: 'Mosquito', description: 'Fogging and spraying solutions to keep your premises mosquito-free.', benefits: ['Dengue/Malaria prevention', 'Outdoor and indoor treatment', 'Fast-acting formula'] },
  { id: 'rat-guard-services', name: 'Rat Guard Services', shortName: 'Rat Guard', description: 'Installation of rat guards on pipes to prevent rodent entry.', benefits: ['Durable material', 'Permanent solution', 'No chemical usage'] },
  { id: 'bird-netting-services', name: 'Bird Netting Services', shortName: 'Bird Netting', description: 'High-quality bird netting for balconies and windows.', benefits: ['UVR stabilized nets', 'Aesthetic look', 'Long-lasting durability'] },
  { id: 'fly-control-services', name: 'Fly Control Services', shortName: 'Fly Control', description: 'Targeted solutions to manage and eliminate fly infestations.', benefits: ['Hygiene improvement', 'Commercial & Residential', 'Quick results'] },
  { id: 'rodent-control-services', name: 'Rodent Control Services', shortName: 'Rodent Control', description: 'Baiting and trapping strategies for complete rodent removal.', benefits: ['Safe bait stations', 'Carcass disposal', 'Preventative measures'] },
  { id: 'spider-pest-control-services', name: 'Spider Pest Control Services', shortName: 'Spider Control', description: 'Specialized treatments to remove spiders and their webs safely.', benefits: ['Targeted interior sprays', 'Web removal', 'Safe for families'] },
  { id: 'wood-borer-pest-control-services', name: 'Wood Borer Pest Control Services', shortName: 'Wood Borer', description: 'Injection treatments to save your wooden furniture from destructive borers.', benefits: ['Protects valuable furniture', 'Deep penetration formulation', 'Long-lasting protection'] },
  { id: 'pre-construction-anti-termite-treatment-services', name: 'Pre-Construction Anti-Termite Treatment Services', shortName: 'Pre-Construction', description: 'Soil treatment before foundation laying to ensure a termite-free structure.', benefits: ['10-year guarantee', 'Complies with building codes', 'Protects structural integrity'] },
  { id: 'residential-pest-control-services', name: 'Residential Pest Control Services', shortName: 'Residential', description: 'Customized pest control plans designed for homes and apartments.', benefits: ['Family-friendly', 'Flexible scheduling', 'Comprehensive coverage'] },
  { id: 'commercial-pest-control-services', name: 'Commercial Pest Control Services', shortName: 'Commercial', description: 'Discreet and effective pest management for offices, restaurants, and warehouses.', benefits: ['Audit compliance', 'After-hours service', 'Dedicated account manager'] },
  { id: 'invisible-grill-services', name: 'Invisible Grill Services', shortName: 'Invisible Grill', description: 'Installation of high-tensile invisible grills for safety without blocking views.', benefits: ['Rust-proof stainless steel', 'Unobstructed view', 'Child safety'] },
  { id: 'cricket-football-ground-net-services', name: 'Cricket/Football Ground Net Services', shortName: 'Sports Nets', description: 'Heavy-duty netting solutions for sports grounds and turfs.', benefits: ['High impact resistance', 'Custom sizing', 'Professional installation'] },
  { id: 'mosquito-net-services', name: 'Mosquito Net Services', shortName: 'Mosquito Nets', description: 'Sliding and pleated mosquito nets for windows and doors.', benefits: ['Easy maintenance', 'Allows fresh air', 'Elegant design'] },
];

export const locationsData: Location[] = [
  { id: 'pest-control-services-mumbai', name: 'Mumbai', phone: '+91 9594232394', address: '24, Suryakiran Society, MHB Colony Chuna Bhatti, SN Dubey Rd, Dahisar East, Mumbai 400068' },
  { id: 'pest-control-services-bandra', name: 'Bandra', phone: '+91 9594232326', address: '1st floor, Ashmita Apartment, 47/6 Linking Rd, Bandra West, Mumbai 400050' },
  { id: 'pest-control-services-navi-mumbai', name: 'Navi Mumbai', phone: '+91 9820524866', address: 'Shop no.13, Hari Om Building, Sector 18, Kamothe, Navi Mumbai' },
  { id: 'pest-control-services-thane', name: 'Thane', phone: '+91 9987489666', address: 'Shop no.9, Shiv Ganga Socity, Sanpada Ghdbander Road, Thane 400615' },
  { id: 'pest-control-services-amaravati', name: 'Amaravati', phone: '+91 9594232398', address: 'Shop No.52 A, Roshan Compus, Paradise Colony, Amravati 444604' },
  { id: 'pest-control-services-paratwada', name: 'ParatWada', phone: '+91 9702326101', address: 'Plot no. 510 Shivaji Nagar, beside Hanuman Mandir, Paratwada 444806' },
  { id: 'pest-control-services-nashik', name: 'Nashik', phone: '+91 9987589666', address: '10, Ganeshwadi Rd, Saraf Bazar, Panchavati, Nashik 422001' },
  { id: 'pest-control-services-ahmedabad', name: 'Ahmedabad', phone: '+91 8154893514', address: 'PVT-04/FF, Gurukrupa Nagar, Bhargav Road, Kubernagar, Ahmedabad' },
];
