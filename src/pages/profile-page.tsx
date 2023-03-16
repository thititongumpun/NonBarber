import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const ProfilePage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();

      if (!isMounted) {
        return;
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="w-full rounded-xl bg-white p-12 shadow-2xl shadow-blue-200 md:w-8/12 lg:w-6/12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="grid-cols-1 lg:col-span-3">
            <img
              src={user?.picture}
              alt=""
              className="mx-auto flex items-center justify-center rounded-full p-4"
            />
          </div>

          <div className="col-span-1 lg:col-span-9">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-zinc-700">{user?.name}</h2>
              <p className="mt-2 font-semibold text-zinc-700">{user?.email}</p>
              <p className="mt-4 text-zinc-500">
                I am a Front End Developer and UI/UX Designer
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <p className="font-bold text-zinc-700">345</p>
                <p className="text-sm font-semibold text-zinc-700">Posts</p>
              </div>

              <div>
                <p className="font-bold text-zinc-700">200k</p>
                <p className="text-sm font-semibold text-zinc-700">Followers</p>
              </div>

              <div>
                <p className="font-bold text-zinc-700">38</p>
                <p className="text-sm font-semibold text-zinc-700">Following</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                Follow
              </button>

              <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
