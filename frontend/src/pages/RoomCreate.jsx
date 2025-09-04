import { useState } from "react";
import { Users, Plus, LogIn } from "lucide-react";

const RoomCreate = () => {
  const [roomName, setRoomName] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateRoom = (e) => {
    e.preventDefault();

    if (!roomName.trim() || !creatorName.trim()) {
      alert("Please fill in both room name and your name.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      alert(`Room "${roomName}" created by ${creatorName}!`);
      setIsLoading(false);
      setRoomName("");
      setCreatorName("");
    }, 1000);
  };

  const handleJoinRoom = () => {
    alert("Join room functionality would be implemented here.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-8 
                    bg-white dark:bg-[#030712] transition-colors">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gray-200 dark:bg-black border border-slate-300 dark:border-white/20 
                            p-3 rounded-2xl shadow-md transition">
              <Users className="h-8 w-8 text-black dark:text-white" />
            </div>
          </div>
          <h1 className="text-4xl mt-3 font-bold text-black dark:text-white">
            Create Room
          </h1>
          <p className="text-slate-600 dark:text-gray-500">
            Start collaborating with others in seconds
          </p>
        </div>

        {/* Create Room Card */}
        <div className="bg-gray-50 dark:bg-[#030712] border border-slate-200 dark:border-white/20 
                        rounded-4xl p-6">
          <h2 className="text-xl text-blue-600 dark:text-blue-500 font-semibold flex items-center gap-2 mb-2">
            <Plus className="h-5 w-5" />
            Create New Room
          </h2>
          <p className="text-sm text-slate-600 dark:text-gray-500 mb-4">
            Set up a new room and invite others to join
          </p>

          <form onSubmit={handleCreateRoom} className="space-y-4">
            <div>
              <label htmlFor="roomName" className="block text-sm font-medium mb-3 text-black dark:text-white">
                Room Name
              </label>
              <input
                id="roomName"
                type="text"
                placeholder="Enter room name..."
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="w-full border border-slate-300 dark:border-white/20 rounded-xl p-2 
                           focus:ring-2 focus:ring-blue-500 outline-none
                           bg-white dark:bg-[#0d0f14] text-black dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="creatorName" className="block text-sm font-medium mb-3 text-black dark:text-white">
                Your Name
              </label>
              <input
                id="creatorName"
                type="text"
                placeholder="Enter your name..."
                value={creatorName}
                onChange={(e) => setCreatorName(e.target.value)}
                className="w-full border border-slate-300 dark:border-white/20 rounded-xl p-2 
                           focus:ring-2 focus:ring-blue-500 outline-none
                           bg-white dark:bg-[#0d0f14] text-black dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-[50%] mx-auto flex items-center justify-center 
             bg-transparent border rounded-xl border-blue-500 text-blue-500 mt-7
             hover:bg-blue-700 hover:text-white 
             dark:bg-white/10 dark:text-white dark:border-none dark:hover:bg-blue-700 
             font-medium py-2 px-4 
             rounded-md shadow-md transition-all group 
             disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Creating Room...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:rotate-180" />
                  Create Room
                </>
              )}
            </button>
          </form>
        </div>

        {/* Join Room Option */}
        <div className="text-center">
          <p className="text-sm text-slate-600 dark:text-gray-500 mb-3">
            Already have a room code?
          </p>
          <button
            onClick={handleJoinRoom}
            className="flex items-center justify-center border border-slate-300 dark:border-gray-700 
                       rounded-md px-4 py-2 w-full text-black dark:text-white 
                       hover:bg-gray-100 hover:text-black dark:hover:bg-gray-100 dark:hover:text-black
                       transition-all group"
          >
            <LogIn className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:rotate-360" />
            Join Existing Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCreate;
