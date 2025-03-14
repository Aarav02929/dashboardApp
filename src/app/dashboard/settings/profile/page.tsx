import React from "react";

const ProfileSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">
          Profile Settings
        </h2>

        <section className="mb-12">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profile Information
            </h2>
            <p className="text-gray-600 mb-6">
              Customize how others see you on the platform. Your profile picture
              helps create a more personal experience.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-52 h-52 rounded-full overflow-hidden bg-gray-50 relative group shadow-md">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="profile-upload"
                  />
                  <label
                    htmlFor="profile-upload"
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-black/10 transition-all duration-300"
                  >
                    <div className="bg-white/90 p-4 rounded-lg shadow-sm transform group-hover:scale-105 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-indigo-600 mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">
                        Upload Photo
                      </span>
                      <span className="text-gray-500 text-xs block mt-1">
                        Click to browse
                      </span>
                    </div>
                  </label>
                </div>
                <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Remove photo
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Photo Requirements
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Supported formats: JPG, PNG, GIF
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Maximum file size: 5MB
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Recommended size: 400x400 pixels
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-500">
                  For best results, use a square image with a clear view of your
                  face.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileSettings;
