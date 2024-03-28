import { useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getDataFromLocalStorage } from "../../Utility/LocalStorage";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {
  const books = useLoaderData();
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    const localData = getDataFromLocalStorage();

    if (books.length > 0) {
      const storedData = [];

      for (const bookId of localData) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          storedData.push(book);
        }
      }

      setBookData(storedData);
    }
  }, [books]);

  const mappedData = bookData.map((book) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: 2400,
    amt: 2400,
  }));

  // ====================================
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  // ================================

  return (
    <div className="lg:max-w-7xl mx-auto    lg:p-8 rounded-2xl">
      <div className="text-center bg-[#F3F3F3] rounded-2xl mb-10">
        <h2 className="font-bold text-4xl p-6">Book List Pages Chart</h2>
      </div>
      <div
        className="bg-[#F8F8F8] p-6 mx-auto"
        style={{ width: "100%", maxWidth: "1100px", margin: "auto" }}
      >
        <BarChart
          width={window.innerWidth > 1100 ? 1100 : window.innerWidth - 20}
          height={400}
          data={mappedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {mappedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
