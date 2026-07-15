import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import './index.css';
import Layout from './components/Layout';

// `?still` renders without animation (used for static screenshot verification).
export const STILL = typeof window !== 'undefined' && window.location.search.includes('still');

import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Programme from './pages/Programme';
import Faculty from './pages/Faculty';
import Infrastructure from './pages/Infrastructure';
import Laboratories from './pages/Laboratories';
import Placements from './pages/Placements';
import StudentActivities from './pages/StudentActivities';
import Achievements from './pages/Achievements';
import NewsEvents from './pages/NewsEvents';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CoursesOffered from './pages/CoursesOffered';
import FeesStructure from './pages/FeesStructure';
import TrainingPlacements from './pages/TrainingPlacements';
import ChancellorMessage from './pages/ChancellorMessage';
import ViceChancellorMessage from './pages/ViceChancellorMessage';
import ProViceChancellorMessage from './pages/ProViceChancellorMessage';
import Rules from './pages/Rules';
import ProfessionalBodies from './pages/ProfessionalBodies';
import MoU from './pages/MoU';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/vision-mission', element: <VisionMission /> },
      { path: '/programme', element: <Programme /> },
      { path: '/faculty', element: <Faculty /> },
      { path: '/infrastructure', element: <Infrastructure /> },
      { path: '/laboratories', element: <Laboratories /> },
      { path: '/placements', element: <Placements /> },
      { path: '/student-activities', element: <StudentActivities /> },
      { path: '/achievements', element: <Achievements /> },
      { path: '/news-events', element: <NewsEvents /> },
      { path: '/admissions', element: <Admissions /> },
      { path: '/contact', element: <Contact /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/courses-offered', element: <CoursesOffered /> },
      { path: '/fees-structure', element: <FeesStructure /> },
      { path: '/training-placements', element: <TrainingPlacements /> },
      { path: '/chancellors-message', element: <ChancellorMessage /> },
      { path: '/vice-chancellors-message', element: <ViceChancellorMessage /> },
      { path: '/pro-vice-chancellors-message', element: <ProViceChancellorMessage /> },
      { path: '/rules', element: <Rules /> },
      { path: '/professional-bodies', element: <ProfessionalBodies /> },
      { path: '/mou', element: <MoU /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion={STILL ? 'always' : 'user'} transition={STILL ? { duration: 0 } : undefined}>
      <RouterProvider router={router} />
    </MotionConfig>
  </React.StrictMode>
);
