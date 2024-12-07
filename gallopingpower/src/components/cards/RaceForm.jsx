import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Timer, Award } from 'lucide-react';

const Input = ({ label, type = "text", ...props }) => (
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-semibold mb-2">{label}</label>
    <input
      type={type}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
      {...props}
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-semibold mb-2">{label}</label>
    <div className="relative">
      <select
        className="appearance-none w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none bg-white"
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ArrowRight className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  </div>
);

const StepIndicator = ({ currentStep, totalSteps }) => (
  <div className="mb-8">
    <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      />
    </div>
    <div className="flex justify-between mt-2 text-sm">
      <span className="text-blue-600 font-medium">Step {currentStep}</span>
      <span className="text-gray-500">of {totalSteps}</span>
    </div>
  </div>
);

const RaceForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    racingCentre: '',
    racingSeason: '',
    date: '',
    day: '',
    penetrometerReading: '',
    raceNo: '',
    raceName: '',
    distance: '',
    whipStatus: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    style={{
        backgroundImage: `
          linear-gradient(to right top, 
            rgba(240, 248, 255, 0.5),  /* very light blue */
            rgba(230, 240, 255, 0.5),  /* light blue */
            rgba(235, 245, 255, 0.5),  /* another light blue */
            rgba(240, 235, 255, 0.5),  /* very light purple */
            rgba(245, 240, 255, 0.5),  /* light purple */
            rgba(250, 245, 255, 0.5)   /* very light lavender */
          )
        `,
      }}>
        

      {/* Subtle animated gradient background */}
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-white/50 animate-gradient" />
      </div>
      
      <div className="max-w-2xl mx-auto relative">
      <div className="relative pt-6 pb-4">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white/90 
          rounded-lg hover:bg-white transition-colors duration-200 shadow-sm backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </button>
      </div>
      <div className="bg-white/80 rounded-xl shadow-sm border border-gray-100 overflow-hidden backdrop-blur-sm">
      {/* Header */}
      <div className="bg-white/90 border-b border-gray-100 px-8 py-6">
            <h2 className="text-2xl font-semibold text-gray-800">Race Entry Form</h2>
            <p className="text-gray-500 mt-1">Please fill in the race details</p>
          </div>

          {/* Form Content */}
          <div className="px-8 py-6">
            <StepIndicator currentStep={step} totalSteps={2} />

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div className="space-y-4">
                  <Select
                    label="Racing Centre"
                    name="racingCentre"
                    value={formData.racingCentre}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select Centre' },
                      { value: 'centre1', label: 'Centre 1' },
                      { value: 'centre2', label: 'Centre 2' }
                    ]}
                  />

                  <Select
                    label="Racing Season"
                    name="racingSeason"
                    value={formData.racingSeason}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select Season' },
                      { value: 'season1', label: 'Season 1' },
                      { value: 'season2', label: 'Season 2' }
                    ]}
                  />

                  <Input
                    label="Date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                  <Input
                    label="Day"
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                  />

                  <Input
                    label="Penetrometer Reading"
                    name="penetrometerReading"
                    value={formData.penetrometerReading}
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <Input
                    label="Race No"
                    name="raceNo"
                    value={formData.raceNo}
                    onChange={handleChange}
                  />

                  <Input
                    label="Race Name"
                    name="raceName"
                    value={formData.raceName}
                    onChange={handleChange}
                  />

                  <Select
                    label="Distance"
                    name="distance"
                    value={formData.distance}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select distance' },
                      { value: '1000', label: '1000m' },
                      { value: '1200', label: '1200m' }
                    ]}
                  />

                  <Select
                    label="Whip Or No Whip"
                    name="whipStatus"
                    value={formData.whipStatus}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Select' },
                      { value: 'whip', label: 'Whip' },
                      { value: 'no-whip', label: 'No Whip' }
                    ]}
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center px-6 py-2.5 text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </button>
                )}
                {step === 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit
                    <Award className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Back to Dashboard */}
        
      </div>
    </div>
  );
};

export default RaceForm;