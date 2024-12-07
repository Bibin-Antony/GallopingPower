import React from 'react';
import { Building2, ChevronRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RaceCenterCard = ({ name, onClick }) => (
  <div 
    onClick={onClick}
    className="group relative overflow-hidden rounded-xl bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
  >
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative p-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
          <Building2 className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-500 flex items-center mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            Race Center
          </p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
        </div>
      </div>
    </div>

    {/* Bottom border gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </div>
);

const ViewRaceCard = () => {
  const navigate = useNavigate();

  const centers = [
    { id: 1, name: 'PUNE' },
    { id: 2, name: 'HYDERABAD' },
    { id: 3, name: 'BANGALORE' },
    { id: 4, name: 'KOLKATA' },
    { id: 5, name: 'MYSORE' },
    { id: 6, name: 'DELHI' },
    { id: 7, name: 'MUMBAI' },
    { id: 8, name: 'MADRAS' },
    { id: 9, name: 'OOTY' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Race Centers</h1>
          <p className="mt-2 text-gray-600">Select a race center to view details</p>
        </div>

        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centers.map((center) => (
            <RaceCenterCard
              key={center.id}
              name={center.name}
              onClick={() => navigate(`/app/race-center/${center.id}`)}
            />
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewRaceCard;