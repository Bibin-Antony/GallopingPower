import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import RaceEntryForm from './components/cards/RaceEntryForm';
import PreviousForm from './components/cards/PreviousForm';
import OldRaces from './components/cards/OldRaces'
import HandiCapForm from './components/cards/HandiCapForm'
import HandiCapUrl from './components/cards/HandiCapUrl'
import AcceptanceUrl from './components/cards/AcceptanceUrl';
import HandiCapCenter from './components/cards/HandiCapCenter'
import UpcomingRace from './components/cards/UpcomingRace';
import RaceForm from './components/cards/RaceForm';
import RaceCardUrl from './components/cards/RaceCardUrl';
import HorsePerformance from './components/cards/HorsePerformance';
import RaceCardSelection from './components/cards/RaceCardSelection';
import ViewRaceCard from './components/cards/ViewRaceCard';
import ProfessionalDashboard from './components/professional/ProfessionalDashboard';
import ProOldRaces from './components/professionalcards/ProOldRaces'
import ProHorsePerformance from './components/professionalcards/ProHorsePerformance'
import ProHandiCapForm from './components/professionalcards/ProHandiCapForm';
import ProAcceptanceUrl from './components/professionalcards/ProAcceptanceUrl'
import ProRaceCardUrl from './components/professionalcards/ProRaceCardUrl'
import UserDashboard from './components/user/UserDashboard';
import UserHandiCapForm from './components/usercards/UserHandiCapForm'
import UserAcceptanceUrl from './components/usercards/UserAcceptanceUrl'
import UserRaceCardUrl from './components/usercards/UserRaceCardUrl'
// Import or create components for each card
// const PreviousRaceResults = () => <div className="p-8">Previous Race Results Entry Form</div>;
// const EntryPreviousRace = () => <div className="p-8">Entry of Previous Race</div>;
// const OldRacesDetails = () => <div className="p-8">Old Races/Horses Details</div>;
// const HandicapEntry = () => <div className="p-8">Gallopingpower/Acceptance/Handicap entry</div>;
// const HandicapCardURL = () => <div className="p-8">Gallopingpower Handicap card via URL</div>;
// const AcceptanceCardURL = () => <div className="p-8">Gallopingpower Acceptance card via URL</div>;
// const UpcomingRaceDetails = () => <div className="p-8">Upcoming Race Card Details</div>;
// const HorsePerformance = () => <div className="p-8">Horse performance details</div>;
const HorseComparison = () => <div className="p-8">Horse Comparison</div>;
const AddRaceCard = () => <div className="p-8">Add race card selection</div>;
const GPSelection = () => <div className="p-8">GP Selection Entry</div>;
// const ViewRaceCard = () => <div className="p-8">View race card selection</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to admin dashboard */}
        <Route path="/" element={<Navigate to="/admin" replace />} />

        {/* Admin Dashboard route */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Card routes under /app */}
        <Route path="/app/previous-race-results" element={<RaceEntryForm />} />
        <Route path="/app/entry-previous-race" element={<PreviousForm />} />
        <Route path="/app/old-races-details" element={<OldRaces />} />
        <Route path="/app/handicap-entry" element={<HandiCapForm />} />
        <Route path="/app/handicap-card-url" element={<HandiCapUrl />} />
        <Route path="/app/acceptance-card-url" element={<AcceptanceUrl />} />
        <Route path="/app/handicap-center" element={<HandiCapCenter />} />
        <Route path="/app/upcoming-race-details" element={<UpcomingRace />} />
        <Route path="/app/race-entry-form" element={<RaceForm />} />
        <Route path="/app/race-card-url" element={<RaceCardUrl />} />
        <Route path="/app/horse-performance" element={<HorsePerformance />} />
        <Route path="/app/horse-comparison" element={<HorseComparison />} />
        <Route path="/app/add-race-card" element={<RaceCardSelection />} />
        <Route path="/app/gp-selection" element={<GPSelection />} />
        <Route path="/app/view-race-card" element={<ViewRaceCard />} />
        {/* this is professional dashboard routes */}

        <Route path="/professional" element={<ProfessionalDashboard />} />
        <Route path="/professional/old-races" element={<ProOldRaces />} />
        <Route path="/professional/performance" element={<ProHorsePerformance />} />
        <Route path="/professional/comparison" element={<HorseComparison />} />
        <Route path="/professional/selection" element={<GPSelection />} />
        <Route path="/professional/handicap" element={<ProHandiCapForm />} />
        <Route path="/professional/acceptance" element={<ProAcceptanceUrl />} />
        <Route path="/professional/race" element={<ProRaceCardUrl />} />

        {/* this is user dashboard routes */}

        <Route path="/user" element={<UserDashboard/>} />
        <Route path="/user/selection" element={<GPSelection />} />
        <Route path="/user/handicap" element={<UserHandiCapForm/>} />
        <Route path="/user/acceptance" element={<UserAcceptanceUrl />} />
        <Route path="/user/race" element={<UserRaceCardUrl/>} />
        {/* Catch all route for 404 */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;