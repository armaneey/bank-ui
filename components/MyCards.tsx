"use client";

export default function MyCards() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">My Cards</h3>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white h-48 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Balance</p>
              <p className="text-2xl font-bold">$5,756</p>
            </div>
            <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
              <div className="w-8 h-5 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>
          <div>
            <p className="text-xs opacity-70 mb-1">CARD HOLDER</p>
            <p className="font-medium">Eddy Cusuma</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-70 mb-1">VALID THRU</p>
              <p className="font-medium">12/22</p>
            </div>
            <p className="text-lg font-medium tracking-wider">3778 **** **** 1234</p>
          </div>
        </div>

       
        <div className="bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white h-48 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-80">Balance</p>
              <p className="text-2xl font-bold">$5,756</p>
            </div>
            <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
              <div className="w-8 h-5 bg-yellow-400 rounded-sm"></div>
            </div>
          </div>
          <div>
            <p className="text-xs opacity-70 mb-1">CARD HOLDER</p>
            <p className="font-medium">Eddy Cusuma</p>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-xs opacity-70 mb-1">VALID THRU</p>
              <p className="font-medium">12/22</p>
            </div>
            <p className="text-lg font-medium tracking-wider">3778 **** **** 1234</p>
          </div>
        </div>
      </div>
    </div>
  );
}
