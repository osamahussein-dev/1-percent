import ProfileImg from "./ProfileImg";

function ProfileHeader({ userData, isOwnProfile }) {
  return (
    <div className="w-full bg-white shadow">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row gap-6">
          <div className="flex flex-col items-center md:flex-row gap-6 flex-1">
            <div className="w-24 h-24">
              <ProfileImg size="96px" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
              <p className="text-gray-600 mt-1">{userData.username}</p>
              <p className="text-gray-700 mt-2">{userData.bio}</p>
              <div className="flex items-center justify-center md:justify-start gap-8 mt-4">
                <div className="text-center">
                  <div className="font-bold text-gray-800">{userData.stats.cards}</div>
                  <div className="text-sm text-gray-600">Cards</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-800">{userData.stats.followers}</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-800">{userData.stats.following}</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </div>
            {!isOwnProfile && (
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                  Follow
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader; 