import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function MatchesPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // This is a placeholder for demonstration. In a real app, you'd fetch matches from your database
  const demoMatches = [
    {
      id: 1,
      name: "Sarah",
      age: 28,
      location: "New York, USA",
      interests: ["Travel", "Photography", "Cooking"],
      compatibility: 85,
      imageUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Michael",
      age: 32,
      location: "London, UK",
      interests: ["Music", "Hiking", "Reading"],
      compatibility: 78,
      imageUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Emma",
      age: 30,
      location: "Toronto, Canada",
      interests: ["Art", "Yoga", "Coffee"],
      compatibility: 92,
      imageUrl: "https://i.pravatar.cc/150?img=3",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Your Matches
        </h1>
        <div className="flex gap-4">
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700">
            <option value="compatibility">Sort by Compatibility</option>
            <option value="age">Sort by Age</option>
            <option value="location">Sort by Location</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoMatches.map((match) => (
          <div key={match.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <img
              src={match.imageUrl}
              alt={match.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {match.name}, {match.age}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{match.location}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {match.compatibility}% Match
                </span>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {match.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Connect
                </button>
                <button className="px-4 py-2 text-blue-600 hover:text-blue-700 border border-blue-600 rounded-md transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
