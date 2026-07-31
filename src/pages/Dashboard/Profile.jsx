import ProfileCard from "../../components/dashboard/ProfileCard";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="p-6">
      <ProfileCard user={user} />
    </section>
  );
}

export default Profile;