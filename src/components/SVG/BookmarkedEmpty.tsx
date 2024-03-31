import { useState } from "react";
import ContentData from "../../data.json";

export default function BookmarkedEmpty() {
  const [bookIcon, setBookIcon] = useState<boolean>(false);
  const [bookIconColor, setBookIconColor] = useState<string>("");

  const [bookedData, setBookedData] = useState(ContentData);

  // Function to toggle isBookmarked
  const toggleBookmark = (index: any) => {
    const newData = [...bookedData]; // Create a copy of the state array
    newData[index] = {
      ...newData[index],
      isBookmarked: !newData[index].isBookmarked,
    }; // Toggle isBookmarked
    setBookedData(newData); // Update the state with the modified data
  };
  const handleBookmarkedItem = () => {
    setBookIconColor("#FFFFFF");
    setBookIcon(!bookIcon);
    toggleBookmark;
  };
  return (
    <svg
      onClick={handleBookmarkedItem}
      className=" cursor-pointer"
      width="12"
      height="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className=" hover:fill-white"
        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
        stroke="#FFF"
        strokeWidth={1.5}
        fill={bookIcon ? bookIconColor : "none"}
      />
    </svg>
  );
}
