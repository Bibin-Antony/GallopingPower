import React from 'react';
import { ChevronLeft } from 'lucide-react';

const RaceCardSelection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="max-w-3xl mx-auto">
        <button 
          className="mb-6 flex items-center space-x-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-300 text-gray-700"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </button>

        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Horse Details Form</h1>
        <p className="text-gray-600 mb-8">Enter race and horse details</p>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Racing Centre and Season */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Racing Centre
                </label>
                <select className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select Centre</option>
                  <option value="pune">Pune</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="mysore">Mysore</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Racing Season
                </label>
                <select className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select Season</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>

            {/* Date and Race Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Race No
                </label>
                <input
                  type="number"
                  placeholder="Enter race number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Horse Names */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horse Name {num} <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    placeholder="Enter horse name"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              ))}
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Note
              </label>
              <textarea
                placeholder="Enter any additional notes"
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <div className="text-sm text-red-500">* Mandatory fields</div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Add Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RaceCardSelection;