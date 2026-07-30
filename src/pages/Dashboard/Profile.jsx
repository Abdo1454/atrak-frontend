import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import ProfileCard from "../../components/dashboard/ProfileCard";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        <Topbar />

        <div className="p-6">
          <ProfileCard user={user} />
        </div>
      </main>
    </div>
  );
}

export default Profile;