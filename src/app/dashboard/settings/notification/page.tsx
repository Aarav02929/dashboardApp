import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Notifications
        </h2>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Notification Preference
          </h2>
          <p className="text-gray-600 mb-10">
            Manage your notification preferences here. Choose which types of
            notifications you receive and how you want to be contacted.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-8">
                Email Notifications
              </label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-8 mt-10">
                SMS Notifications
              </label>
              <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm">
                <option>Enable</option>
                <option>Disable</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-8 mt-10">
              Push Notifications
            </label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm">
              <option>Enable</option>
              <option>Disable</option>
            </select>
          </div>
        </div>
        {/* action settings*/}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Action Settings
          </h2>
          <p className="text-gray-600 mb-6">
            Choose which actions trigger notifications.
          </p>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  New Comments
                </h3>
                <p className="text-sm text-gray-500">
                  Get notified when someone comments on your posts
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Task Updates
                </h3>
                <p className="text-sm text-gray-500">
                  Receive notifications about task status changes
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Analytics Reports
                </h3>
                <p className="text-sm text-gray-500">
                  Get weekly analytics and performance reports
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Security Alerts
                </h3>
                <p className="text-sm text-gray-500">
                  Be notified about important security updates
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </div>
        {/* {save button} */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex justify-center items-center mx-auto">
            <Link href="/dashboard/settings">Save Changes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
