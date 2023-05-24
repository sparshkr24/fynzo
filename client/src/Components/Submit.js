import React from "react";

const Submit = ({ answers, data }) => {
  const ansArr = Object.keys(answers);

  console.log(ansArr);
  return (
    <>
      <div className="mt-16 sm:mt-12">
        <table>
          <thead>
            <tr>
              <th className="hidden sm:table-cell">Quesiton ID</th>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <>
                <tr>
                  <td className="hidden sm:table-cell">{item.id}</td>
                  <td>{item.question_text}</td>
                  <td>
                    {item.id in answers ? (
                      answers[item.id].includes("blob") ? (
                        item.id === 98 ? (
                          <img
                            src={answers[item.id]}
                            className="rounded-2xl"
                            alt="fileUploaded"
                            width={135}
                          />
                        ) : (
                          <iframe
                            src={answers[item.id]}
                            title="Resume"
                            width="100%"
                            height="250px"
                          />
                        )
                      ) : (
                        <div className="font-bold text-lg">
                          {" "}
                          {answers[item.id]}
                        </div>
                      )
                    ) : (
                      <div className="text-red-500 font-bold text-sm">
                        Not Answered
                      </div>
                    )}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Submit;

// <td key={index}>
//   {item.map((value, valueIndex) => (
//     <React.Fragment key={valueIndex}>
//       {typeof value == "string" ? (
//         value.includes("blob") ? (
//           <img
//             className="rounded-2xl inline m-12"
//             src={value}
//             alt="file"
//             width={135}
//           />
//         ) : (
//           <div className="inline m-12">{value}</div>
//         )
//       ) : (
//         <div className="inline m-12">{value}</div>
//       )}
//     </React.Fragment>
//   ))}
// </td>;
