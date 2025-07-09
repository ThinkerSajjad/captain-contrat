'use client';
import { useState } from 'react';
import { Lock } from 'lucide-react';

export default function ProfilePage() {
  const [profileCompletion] = useState(36);

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
      
      {/* Personal Information Card */}
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            {/* Profile Image */}
            <div className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
              <div className="text-white text-5xl">
                {/* Placeholder for user avatar */}
                <svg 
                  className="h-16 w-16 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
            
            {/* User Info */}
            <div>
              <h2 className="text-xl font-medium text-gray-800">Thinker Brothers</h2>
              <p className="text-gray-600 mb-1">01 09 75 83 51</p>
              <p className="text-gray-600">smd37061@gmail.com</p>
              
              {/* Profile Completion */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-gray-700 font-medium">Complete your profile, it's a good start!</p>
                  <span className="text-sm text-gray-500">{profileCompletion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1 flex items-center">
                  And by the way, what is your SIREN number? <Lock className="h-4 w-4 ml-1" />
                </p>
              </div>
            </div>
            
            {/* Complete Button */}
            <div className="mt-4 md:mt-0 md:ml-auto">
              <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Business Information Card */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-medium text-gray-700 mb-6">My business</h2>
          
          <div className="space-y-6">
            {/* Company Name */}
            <div>
              <p className="text-gray-500 text-sm mb-1">Company name</p>
              <p className="text-gray-800 font-medium">Thinker</p>
            </div>
            
            {/* Registration Date */}
            <div>
              <p className="text-gray-500 text-sm mb-1">Registration date</p>
              <p className="text-gray-800 font-medium flex items-center">
                Not informed <span className="ml-1 text-xl">😕</span>
              </p>
            </div>
            
            {/* SIREN */}
            <div>
              <p className="text-gray-500 text-sm mb-1">SIREN</p>
              <p className="text-gray-800 font-medium flex items-center">
                Not informed <span className="ml-1 text-xl">😕</span>
              </p>
            </div>
            
            {/* APE/NAF Code */}
            <div>
              <p className="text-gray-500 text-sm mb-1">APE/NAF code</p>
              <p className="text-gray-800 font-medium flex items-center">
                Not informed <span className="ml-1 text-xl">😕</span>
              </p>
            </div>
          </div>
          
          {/* Modify Button */}
          <div className="mt-6 flex justify-end">
            <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 