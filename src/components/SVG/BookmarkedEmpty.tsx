import { useState, useEffect } from "react";
import ContentData from "../../data.json";

interface bookmarkedEmptyProps {
  item: string;
  isBookmarked: boolean;
}

export default function BookmarkedEmpty({
  item,
  isBookmarked,
}: bookmarkedEmptyProps) {
  const [bookIcon, setBookIcon] = useState<boolean>(false);
  const [bookIconColor, setBookIconColor] = useState<string>("");

  const [bookedData, setBookedData] = useState(ContentData.movies);

  useEffect(() => {
    const fetchMovies = () => {
      const requestPost = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isBookmarked: true }),
      };

      fetch("http://localhost:3000/movies", requestPost)
        .then((response) => response.json())
        .then((data) => setBookedData(data.movies));
    };
    fetchMovies();
  }, []);

  function toggleBookmark(title: string) {
    const newData = [...bookedData];
    newData.filter((item) => item.title === title);
    newData.forEach((movie) => {
      if (movie.title === title) {
        movie.isBookmarked = !movie.isBookmarked;
      }
    });

    // console.log(newData);
    setBookedData(newData);
  }
  const handleBookmarkedItem = () => {
    setBookIconColor("#FFFFFF");
    setBookIcon(!bookIcon);
    toggleBookmark(item);
    console.log(item, isBookmarked);
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
