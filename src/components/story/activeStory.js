"use client";

import { useRouter } from "next/navigation";

export default function ActiveStory() {
  const router = useRouter();

  const stories = [
    {
      id: 1,
      title: "Mystery of the Lost City",
      category: "Adventure",
      createdBy: "Pawan Seen",
      members: ["Pawan", "Alok", "Anjali"],
      status: "Active",
    },
    {
      id: 2,
      title: "Dark Forest",
      category: "Horror",
      createdBy: "Alok Softreey",
      members: ["Alok", "Priya"],
      status: "Draft",
    },
    {
      id: 3,
      title: "Robot World",
      category: "Sci-Fi",
      createdBy: "Anjali K.",
      members: ["Anjali", "Sam", "Pawan"],
      status: "Published",
    },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl mb-6 w-full overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Active Stories
      </h2>
      <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full table-auto text-sm text-left border-collapse">
        <thead className="bg-gray-100 text-gray-600 uppercase tracking-wider">
          <tr>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Created By</th>
            <th className="px-4 py-3">Members</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {stories.map((story) => (
            <tr key={story.id} className="border-b-1 border-gray-200 hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-800">
                {story.title}
              </td>
              <td className="px-4 py-3">{story.category}</td>
              <td className="px-4 py-3">{story.createdBy}</td>
              <td className="px-4 py-3 text-gray-600">
                {story.members.join(", ")}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                    ${
                      story.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : story.status === "Draft"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {story.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
      <div className="mt-6 text-center">
        <button
          onClick={() => router.push("/viewstory")}
          className="text-blue-600 hover:text-blue-800 font-semibold text-sm cursor-pointer"
        >
          View All Stories
        </button>
      </div>
    </div>
  );
}
