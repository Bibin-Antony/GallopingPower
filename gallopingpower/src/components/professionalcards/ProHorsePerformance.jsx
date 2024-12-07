import React, { useState } from 'react';
import { ChevronLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProHorsePerformance = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [horseDetails, setHorseDetails] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-200 to-pink-200">
      {/* Back to Dashboard Button */}
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-wide">
            GALLOPING POWER CARD
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Search Container */}
        <div className="max-w-3xl mx-auto">
        <div className="p-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white/90 
          rounded-lg hover:bg-white transition-colors duration-200 shadow-sm backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>
      </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
              Horse-Race History Details
            </h2>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex gap-4">
              <input
                type="text"
                placeholder="ENTER HORSE NAME"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-3 bg-white rounded-lg border border-gray-200 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all
                text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                transition-colors duration-200 font-medium shadow-sm"
              >
                Search
              </button>
            </form>

            {/* Results Section */}
            {horseDetails && (
              <div className="mt-8 space-y-6">
                {/* Basic Info Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Horse Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Horse Name</p>
                      <p className="font-medium text-gray-800">{horseDetails?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Age</p>
                      <p className="font-medium text-gray-800">{horseDetails?.age}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Breed</p>
                      <p className="font-medium text-gray-800">{horseDetails?.breed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Owner</p>
                      <p className="font-medium text-gray-800">{horseDetails?.owner}</p>
                    </div>
                  </div>
                </div>

                {/* Performance Stats */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Statistics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-600">Total Races</p>
                      <p className="text-2xl font-bold text-blue-800">{horseDetails?.totalRaces}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-600">Wins</p>
                      <p className="text-2xl font-bold text-green-800">{horseDetails?.wins}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-600">Win Rate</p>
                      <p className="text-2xl font-bold text-purple-800">{horseDetails?.winRate}%</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-orange-600">Best Time</p>
                      <p className="text-2xl font-bold text-orange-800">{horseDetails?.bestTime}</p>
                    </div>
                  </div>
                </div>

                {/* Race History */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Race History</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Date</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Race Name</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Distance</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Position</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Time</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Jockey</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {/* Sample row - replace with actual data mapping */}
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-800">2024-01-15</td>
                          <td className="px-4 py-3 text-sm text-gray-800">Sprint Classic</td>
                          <td className="px-4 py-3 text-sm text-gray-800">1200m</td>
                          <td className="px-4 py-3 text-sm text-gray-800">1st</td>
                          <td className="px-4 py-3 text-sm text-gray-800">1:12.45</td>
                          <td className="px-4 py-3 text-sm text-gray-800">John Smith</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProHorsePerformance;