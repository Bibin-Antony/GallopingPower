import React, { useState } from 'react';
import { Calendar, Award, LayoutDashboard, ChevronRight, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const CardIcon = ({ children }) => (
  <div className="absolute right-4 top-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
    {children}
  </div>
);

const DashboardCard = ({ title, icon, variant = 'blue', onClick }) => {
  const variants = {
        blue: 'bg-blue-100 hover:bg-blue-200 border-blue-100 text-blue-600',
        purple: 'bg-purple-100 hover:bg-purple-200 border-purple-100 text-purple-600',
        rose: 'bg-rose-100 hover:bg-rose-200 border-rose-100 text-rose-600',
        teal: 'bg-teal-100 hover:bg-teal-200 border-teal-100 text-teal-600',
        amber: 'bg-amber-100 hover:bg-amber-200 border-amber-100 text-amber-600',
        indigo: 'bg-indigo-100 hover:bg-indigo-200 border-indigo-100 text-indigo-600',
  };

  return (
    <div 
      onClick={onClick}
      className={`relative p-6 h-[160px] rounded-xl shadow-sm transition-all duration-300 
      cursor-pointer hover:shadow-md hover:-translate-y-1 border ${variants[variant]}`}
    >
      <div className="relative z-10 max-w-[calc(100%-3rem)]">
        <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-2 line-clamp-2">{title}</h3>
      </div>
      <CardIcon>
        {React.cloneElement(icon, { className: `w-5 h-5 sm:w-6 sm:h-6 ${variants[variant]}` })}
      </CardIcon>
    </div>
  );
};

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const cards = [
    {
      title: "GP Selection Card",
      icon: <Award />,
      variant: 'teal',
      path: "/user/selection"
    },
    {
      title: "Handicap Card",
      icon: <Calendar />,
      variant: 'amber',
      path: "/user/handicap"
    },
    {
      title: "Acceptance Card",
      icon: <Calendar />,
      variant: 'rose',
      path: "/user/acceptance"
    },
    {
      title: "Race Card",
      icon: <Calendar />,
      variant: 'indigo',
      path: "/user/race"
    }
  ];

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/user' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 lg:hidden z-20" onClick={() => setIsSidebarOpen(false)} />
      )}

      <div className={`fixed left-0 top-0 bottom-0 w-64 bg-gradient-to-b from-slate-200 to-gray-200 shadow-lg 
        transition-transform duration-300 transform z-30
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-white">
          <h1 className="text-xl font-bold text-gray-800">USER</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-600 hover:bg-gray-50 p-2 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-6">
          <div className="px-4">
            {menuItems.map((item, index) => (
              <div key={index} 
                onClick={() => navigate(item.path)}
                className="flex items-center px-4 py-3 text-gray-600 hover:bg-white/80 rounded-lg cursor-pointer
                transition-colors mb-1 group">
                <span className="group-hover:text-gray-900">{item.icon}</span>
                <span className="ml-3 group-hover:text-gray-900 text-sm font-medium">{item.name}</span>
                <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-600" />
              </div>
            ))}
          </div>
        </nav>
      </div>

      <div className="lg:ml-64 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between bg-gray-100 p-4 sm:p-6 rounded-xl shadow-sm border border-gray-300">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">User Dashboard</h1>
                <p className="text-sm sm:text-base text-gray-600 mt-1">Welcome back, User</p>
              </div>
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <DashboardCard
                key={index}
                title={card.title}
                icon={card.icon}
                variant={card.variant}
                onClick={() => navigate(card.path)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;