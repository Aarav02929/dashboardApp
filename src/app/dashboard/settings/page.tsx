import Link from "next/link";
import React from "react";

const settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800  flex items-center gap-2 justify-center mb-10">
          Settings
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl ">
          Customize your account settings, Profile , and Notifications here.
          Choose an option from the sidebar to begin
        </p>
        <div className="flex space-x-12">
          <div className="w-1/4 bg-white rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Quick Links
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/dashboard/settings/account"
                    className="flex items-center text-lg text-gray-700 hover:text-blue-600 transition-all duration-200 py-3 px-6 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-200 group"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/settings/profile"
                    className="flex items-center text-lg text-gray-700 hover:text-indigo-600 transition-all duration-200 py-3 px-6 rounded-lg hover:bg-indigo-50 border border-transparent hover:border-indigo-200 group"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400 group-hover:text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/settings/notification"
                    className="flex items-center text-lg text-gray-700 hover:text-purple-600 transition-all duration-200 py-3 px-6 rounded-lg hover:bg-purple-50 border border-transparent hover:border-purple-200 group"
                  >
                    <svg
                      className="w-5 h-5 mr-3 text-gray-400 group-hover:text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    Notifications
                  </Link>
                </li>
              </ul>
            </h2>
          </div>
          <div className="flex-1 bg-white rounded-lg p-6 space-y-6 shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 ">
              Select a Setting
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Choose a setting from the sidebar to get started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default settings;
