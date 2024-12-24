import React from "react";

const LeaderBoard = ({ leaderBoard }) => {
  console.log(leaderBoard);
  let category = Object.keys(leaderBoard);

  return (
    <div className="container my-3 p-2">
      <h2 className="text-center text-2xl">LeaderBoard</h2>
      {/* leaderboard start */}
      {category.length == 0 ? (
        <p className="text-center">your the first to score</p>
      ) : (
        <>
          <table class="border-collapse border bg-black border-orange-500  shadow shadow-orange-500 w-[50%] mx-auto text-center mt-5">
            {/* table header section */}
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="text-orange-500 text-2xl border   border-orange-500"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="text-orange-500 text-2xl border   border-orange-500"
                >
                  scope
                </th>
              </tr>
            </thead>
            {/* table body */}
            <tbody className="">
              {category.map((sub) => (
                <tr key={sub}>
                  <td className="border  border-orange-500 text-white">
                    {sub}
                  </td>
                  <td className="border  border-orange-500 text-white">
                    {leaderBoard[sub]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* leaderboard end */}
    </div>
  );
};

export default LeaderBoard;
