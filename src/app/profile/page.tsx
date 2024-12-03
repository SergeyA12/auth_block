export default function Profile() {
    // const 
    return (
      <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 p-6 rounded-lg shadow-lg max-w-sm mx-auto text-white">
        <img
          src="https://miro.medium.com/v2/resize:fit:1200/1*2heEpIi8ZQT0hjUlhv3jJw.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">John Doe</h1>
        <p className="text-gray-400">Full Stack Developer</p>
      </div>
    );
  }
  