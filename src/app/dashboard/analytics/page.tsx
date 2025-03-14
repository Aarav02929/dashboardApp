import React from "react";
const metrics = [
  {
    title: "Total Sales",
    value: "$120,000",
    change: "+12%",
    isPositive: true,
  },
  {
    title: "Active Users",
    value: "$1,200",
    change: "-8%",
    isPositive: false,
  },
  {
    title: "Website Visits",
    value: "$8,500",
    change: "+5%",
    isPositive: true,
  },
  {
    title: "New Sign-Ups",
    value: "$350",
    change: "+18%",
    isPositive: true,
  },
];
const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800  flex items-center gap-2 justify-center mb-10">
          Analytics Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-b from-gray-50 to-blue-50 rounded-lg p-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white rounded-lg shadow-md p-6 border-l-4 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {metric.title}
              </h2>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </p>
              <p
                className={`text-sm ${
                  metric.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </p>
            </div>
          ))}
        </div>
        <div className="mb-8  bg-gradient-to-b from-gray-50 to-blue-50 rounded-lg p-6 mt-15">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center gap-2 justify-center">
            Website Traffic
          </h2>
          <div className=" rounded-lg h-96 p-6">
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Y-axis labels */}
                <text x="10" y="250" className="text-sm" fill="#6B7280">
                  0
                </text>
                <text x="10" y="200" className="text-sm" fill="#6B7280">
                  200
                </text>
                <text x="10" y="150" className="text-sm" fill="#6B7280">
                  400
                </text>
                <text x="10" y="100" className="text-sm" fill="#6B7280">
                  600
                </text>
                <text x="10" y="50" className="text-sm" fill="#6B7280">
                  800
                </text>

                {/* X-axis labels */}
                <text x="50" y="270" className="text-sm" fill="#6B7280">
                  Mon
                </text>
                <text x="150" y="270" className="text-sm" fill="#6B7280">
                  Tue
                </text>
                <text x="250" y="270" className="text-sm" fill="#6B7280">
                  Wed
                </text>
                <text x="350" y="270" className="text-sm" fill="#6B7280">
                  Thu
                </text>
                <text x="450" y="270" className="text-sm" fill="#6B7280">
                  Fri
                </text>
                <text x="550" y="270" className="text-sm" fill="#6B7280">
                  Sat
                </text>
                <text x="650" y="270" className="text-sm" fill="#6B7280">
                  Sun
                </text>

                {/* Grid lines with lighter color and dashed pattern */}
                <g stroke="#E5E7EB" strokeDasharray="4 4">
                  <line x1="50" y1="250" x2="750" y2="250" />
                  <line x1="50" y1="200" x2="750" y2="200" />
                  <line x1="50" y1="150" x2="750" y2="150" />
                  <line x1="50" y1="100" x2="750" y2="100" />
                  <line x1="50" y1="50" x2="750" y2="50" />
                </g>

                {/* Y-axis line */}
                <line
                  x1="50"
                  y1="250"
                  x2="50"
                  y2="50"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                />
                {/* X-axis line */}
                <line
                  x1="50"
                  y1="250"
                  x2="750"
                  y2="250"
                  stroke="#9CA3AF"
                  strokeWidth="1"
                />

                {/* Gradient background for the line */}
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop
                      offset="100%"
                      stopColor="#3B82F6"
                      stopOpacity="0.05"
                    />
                  </linearGradient>
                </defs>

                {/* Area under the line */}
                <path
                  d="M50 200 L150 180 L250 220 L350 150 L450 190 L550 120 L650 140 L750 80 L750 250 L50 250 Z"
                  fill="url(#gradient)"
                />

                {/* Main line with smooth curve */}
                <path
                  d="M50 200 L150 180 L250 220 L350 150 L450 190 L550 120 L650 140 L750 80"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points with hover effect */}
                <g>
                  <circle cx="50" cy="200" r="4" fill="#3B82F6" />
                  <circle
                    cx="50"
                    cy="200"
                    r="8"
                    fill="#3B82F6"
                    fillOpacity="0.2"
                  />
                  <circle cx="150" cy="180" r="4" fill="#3B82F6" />
                  <circle
                    cx="150"
                    cy="180"
                    r="8"
                    fill="#3B82F6"
                    fillOpacity="0.2"
                  />
                  <circle cx="250" cy="220" r="4" fill="#3B82F6" />
                  <circle
                    cx="250"
                    cy="220"
                    r="8"
                    fill="#3B82F6"
                    fillOpacity="0.2"
                  />
                  <circle cx="350" cy="150" r="4" fill="#3B82F6" />
                  <circle
                    cx="350"
                    cy="150"
                    r="8"
                    fill="#3B82F6"
                    fillOpacity="0.2"
                  />
                  <circle cx="450" cy="190" r="4" fill="#3B82F6" />
                  <circle
                    cx="450"
                    cy="190"
                    r="8"
                    fill="#3B82F6"
                    fillOpacity="0.2"
                  />
                  <circle cx="550" cy="120" r="4" fill="#3B82F6" />
                  <circle
                    cx="550"
                    cy="120"
                    r="8"
                    fill="#3B82F6"
                    fillOpacity="0.2"
                  />
                  <circle cx="650" cy="140" r="4" fill="#3B82F6" />
                  <circle
                    cx="650"
                    cy="140"
                    r="8"
                    fill="#3B82F6"
                    fillOpacity="0.2"
                  />
                  <circle cx="750" cy="80" r="4" fill="#3B82F6" />
                  <circle
                    cx="750"
                    cy="80"
                    r="8"
                    fill="#3B82F6"
                    fillOpacity="0.2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center  justify-between bg-white rounded-lg shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 ">
                  User Registration
                </h3>
                <p className="text-sm text-gray-600">
                  New User signed up on 2026-02-16
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">+10 Users</p>
              </div>
            </li>
            <li className="flex items-center  justify-between bg-white rounded-lg shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 ">
                  Sales Increased by 20%
                </h3>
                <p className="text-sm text-gray-600">
                  Sales Increased by 20% on 2026-02-16
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">+$15,000</p>
              </div>
            </li>
            <li className="flex items-center  justify-between bg-white rounded-lg shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 ">
                  Website Traffic Surge
                </h3>
                <p className="text-sm text-gray-600">
                  Website Traffic Surge on 2026-04-26
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">+1000 Visits</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
