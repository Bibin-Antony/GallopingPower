import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const UserHandiCapForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    racingCentre: '',
    racingSeason: '',
    date: '',
    day: '',
    raceName: '',
    distance: '',
    whipStatus: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    setStep(2);
  };

  const handlePrevious = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Back to Dashboard Button - Moved to top */}
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </button>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <div className="w-20 h-1 mx-2 bg-gray-200">
              <div className={`h-full ${step === 2 ? 'bg-blue-500' : 'bg-gray-200'}`} />
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              2
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">RACE ENTRY FORM</h2>
          <form onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Racing Centre</label>
                    <select
                      name="racingCentre"
                      value={formData.racingCentre}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Centre</option>
                      {/* Add options */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Racing Season</label>
                    <select
                      name="racingSeason"
                      value={formData.racingSeason}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Season</option>
                      {/* Add options */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Day</label>
                    <input
                      type="text"
                      name="day"
                      value={formData.day}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Race Name</label>
                    <input
                      type="text"
                      name="raceName"
                      value={formData.raceName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Distance</label>
                    <select
                      name="distance"
                      value={formData.distance}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select distance</option>
                      {/* Add options */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Whip Or No Whip</label>
                    <select
                      name="whipStatus"
                      value={formData.whipStatus}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="whip">Whip</option>
                      <option value="no-whip">No Whip</option>
                    </select>
                  </div>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserHandiCapForm;