const Infobox = ({ icon, title, description }) => {
  return (
    <div className="border-3 border-purple-900 rounded-lg p-6 flex flex-col gap-3 bg-black ">
      <img src={icon} className="w-15" />

      <h3 className="text-xl font-bold text-white">{title}</h3>

      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default Infobox;
