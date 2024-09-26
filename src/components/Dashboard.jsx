import React from 'react';
import image1 from '../images/img1.avif';
import image2 from '../images/img2.avif';

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-white shadow-md rounded p-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image1} alt="Dashboard Item 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold">Card Title 1</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image2} alt="Dashboard Item 2" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold">Card Title 2</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold">Additional Card 1</h2>
          <p className="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold">Additional Card 2</h2>
          <p className="text-gray-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold">Additional Card 3</h2>
          <p className="text-gray-600">Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, et dignissim risus.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-bold">Additional Card 4</h2>
          <p className="text-gray-600">Suspendisse potenti. Nulla facilisi. Ut fringilla orci luctus et ultrices posuere cubilia curae.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
