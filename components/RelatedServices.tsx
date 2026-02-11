import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Service {
  name: string;
  path: string;
  description: string;
}

interface RelatedServicesProps {
  currentService: string;
}

const allServices: Service[] = [
  { name: 'Auto Detailing', path: '/auto-detailing', description: 'Interior & exterior deep cleaning' },
  { name: 'Ceramic Coating', path: '/ceramic-coatings', description: 'Long-lasting paint protection' },
  { name: 'Headlight Restoration', path: '/headlight-restoration', description: 'Remove yellowing & haze' },
  { name: 'Gasoline Spill Cleanup', path: '/gasoline-spills', description: 'Odor & residue removal' },
  { name: 'Vomit Removal', path: '/vomit-removal', description: 'Sanitization & deodorizing' },
  { name: 'Sale Prep', path: '/sale-prep', description: 'Get top dollar for your car' },
  { name: 'Pet Cleanup', path: '/pet-cleanup', description: 'Hair, odor & stain removal' },
];

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentService }) => {
  const relatedServices = allServices.filter(s => s.name !== currentService).slice(0, 3);

  return (
    <div className="mt-16 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedServices.map((service) => (
          <Link
            key={service.path}
            to={service.path}
            className="group bg-gray-50 hover:bg-blue-50 rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-[#18AEE4]"
          >
            <h4 className="font-bold text-gray-900 group-hover:text-[#18AEE4] mb-2 flex items-center justify-between">
              {service.name}
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#18AEE4' }} />
            </h4>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
