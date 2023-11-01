export const CircularButton = ({ text, onClick }) => {
  return (
    <div
      className="flex justify-center items-center rounded-full 
                    bg-kuning text-black w-10 h-10 drop-shadow-lg hover:bg-yellow-600 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </div>
  );
};
