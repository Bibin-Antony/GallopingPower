import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AcceptanceUrl = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    racingCentre: '',
    racingSeason: '',
    date: '',
    day: '',
    whipStatus: '',
    url: ''
  });

  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-200 to-blue-200 p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Back to Dashboard Button - Moved to top */}
        <button
          onClick={() => navigate('/dashboard')}
          className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white/90 
          rounded-lg hover:bg-white transition-colors duration-200 shadow-sm backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </button>

        {/* Progress Steps */}
        <div className="flex justify-center items-center relative">
          <div className="flex items-center justify-center space-x-2">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm 
              ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              1
            </span>
            <div className="w-24 h-1 bg-gray-200">
              <div className={`h-full transition-all duration-300 ${step === 2 ? 'bg-blue-600' : ''}`} />
            </div>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm
              ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
              2
            </span>
          </div>
          <div className="absolute -top-6 text-sm font-medium text-white">
            STEP {step}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">RACE ENTRY FORM</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Racing Centre</label>
                  <select
                    name="racingCentre"
                    value={formData.racingCentre}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Centre</option>
                    <option value="pune">Pune</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Racing Season</label>
                  <select
                    name="racingSeason"
                    value={formData.racingSeason}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Season</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Day</label>
                  <input
                    type="text"
                    name="day"
                    value={formData.day}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Whip Or No Whip</label>
                  <select
                    name="whipStatus"
                    value={formData.whipStatus}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select</option>
                    <option value="whip">Whip</option>
                    <option value="no-whip">No Whip</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">URL</label>
                  <input
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter URL"
                  />
                </div>

                <div className="flex justify-center space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-8 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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

export default AcceptanceUrl;