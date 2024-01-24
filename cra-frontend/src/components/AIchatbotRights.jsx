// // import React, { useState } from "react";
// // import axios from "axios";
// // import { Button } from "@chakra-ui/react";
// // import { BsStars } from "react-icons/bs";

// // const AIchatbotRights = () => {
// //   const [promptString, setPromptString] = useState("");
// //   const [generatedText, setGeneratedText] = useState("");

// //   const handleGenerateText = async () => {
// //     try {
// //       const response = await fetch(
// //         "https://api.edenai.run/v2/text/generation",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             authorization:
// //               `Bearer ${process.env.REACT_APP_EDENS_API_KEY}`,
// //           },
// //           body: JSON.stringify({
// //             providers: "google",
// //             text: `Consider yourself a legal advisor for specially abled people, provide me with legal opinion to the prompt ${promptString}, do not give any salutiation`,
// //             temperature: 0.2,
// //             max_tokens: 300,
// //             fallback_providers: "",
// //           }),
// //         }
// //       );

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }
// //       const data = await response.json();
// //       const enhancedText = data.google.generated_text;
// //       setGeneratedText(() => {
// //         const enhancedAnswer = enhancedText.replace(/\*/g, " ");
// //         return enhancedAnswer;
// //       });


// //       // const headersList = {
// //       //   Accept: "/",
// //       //   // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
// //       //   "Content-Type": "application/json",
// //       // };

// //       // const bodyContent = {
// //       //   promptString: promptString,
// //       // };

// //       // const response = await axios.post(
// //       //   "https://ai-endpoint-git-main-ritojnan.vercel.app/generatetext",
// //       //   bodyContent,
// //       //   {
// //       //     headers: headersList,
// //       //   }
// //       // );

// //       // setGeneratedText(response.data);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };
// //   return (
// //     <div style={{ minHeight: "60vh", marginTop: "1.3rem" }}>
// //       <div
// //         style={{
// //           display: "flex",
// //           flexDirection: "row",
// //           marginBottom: "1.3rem",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           fontSize: "1.25rem",
// //           maxWidth: "80vw",
// //           width: "80vw",
// //           margin: "auto",
// //         }}
// //       >
// //         {/* <label> */}
// //         {/* Enter prompt string: */}
// //         <input
// //           type="text"
// //           value={promptString}
// //           onChange={(e) => setPromptString(e.target.value)}
// //           placeholder="Enter "
// //           style={{
// //             border: "4px solid #2234da",
// //             padding: "0.7rem",
// //             borderRadius: "1rem",
// //             width: "100%",
// //             flex: 1,
// //           }}
// //         />
// //         {/* </label> */}
// //         <Button
// //           onClick={handleGenerateText}
// //           className="aicourse-button"
// //           style={{
// //             display: "flex",
// //             borderRadius: "1rem",
// //             flexDirection: "row",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             backgroundColor: "#2234da",
// //             padding: "1rem",
// //             color: "white",
// //             height: "3.5rem",
// //           }}
// //           padding="2rem"
// //         >
// //           <div>Ask with AI </div>
// //           <span
// //             style={{ color: "", fontSize: "1.15rem", marginLeft: "0.5rem" }}
// //           >
// //             <BsStars />
// //           </span>
// //         </Button>
// //       </div>
// //       <div style={{ width: "80vw", margin: "auto" }}>
// //         <strong>Generated Text Ouput:</strong>
// //         <p>{generatedText}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AIchatbotRights;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button } from "@chakra-ui/react";
// import { BsStars } from "react-icons/bs";

// const AIchatbotRights = () => {
//   const [promptString, setPromptString] = useState("");
//   const [generatedText, setGeneratedText] = useState("");
//   const [isListening, setIsListening] = useState(false);

//   const recognition = new window.webkitSpeechRecognition();

//   useEffect(() => {
//     recognition.onresult = (event) => {
//       const result = event.results[0][0].transcript;
//       setPromptString(result);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };
//   }, []);

//   const handleGenerateText = async () => {
//     try {
//       const headersList = {
//         Accept: "/",
//         "Content-Type": "application/json",
//       };

//       const bodyContent = {
//         promptString: promptString,
//       };

//       const response = await axios.post(
//         "https://ai-endpoint-git-main-ritojnan.vercel.app/generatetext",
//         bodyContent,
//         {
//           headers: headersList,
//         }
//       );

//       setGeneratedText(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const startListening = () => {
//     recognition.start();
//     setIsListening(true);
//   };

//   const stopListening = () => {
//     recognition.stop();
//     setIsListening(false);
//   };

//   return (
//     <div style={{ minHeight: "60vh", marginTop: "1.3rem" }}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           marginBottom: "1.3rem",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "1.25rem",
//           maxWidth: "80vw",
//           width: "80vw",
//           margin: "auto",
//         }}
//       >
//         <input
//           type="text"
//           value={promptString}
//           onChange={(e) => setPromptString(e.target.value)}
//           placeholder="Enter "
//           style={{
//             border: "4px solid #2234da",
//             padding: "0.7rem",
//             borderRadius: "1rem",
//             width: "100%",
//             flex: 1,
//           }}
//         />
//         <Button
//           onClick={handleGenerateText}
//           className="aicourse-button"
//           style={{
//             display: "flex",
//             borderRadius: "1rem",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#2234da",
//             padding: "1rem",
//             color: "white",
//             height: "3.5rem",
//           }}
//         >
//           <div>Ask with AI</div>
//           <span
//             style={{ color: "", fontSize: "1.15rem", marginLeft: "0.5rem" }}
//           >
//             <BsStars />
//           </span>
//         </Button>
//         <Button
//           onClick={isListening ? stopListening : startListening}
//           className="aicourse-button"
//           style={{
//             marginLeft: "0.5rem",
//             backgroundColor: isListening ? "red" : "#2234da",
//             padding: "1rem",
//             color: "white",
//             height: "3.5rem",
//           }}
//         >
//           {isListening ? "Stop Listening" : "Start Listening"}
//         </Button>
//       </div>
//       <div style={{ width: "80vw", margin: "auto" }}>
//         <strong>Generated Text Output:</strong>
//         <p>{generatedText}</p>
//       </div>
//     </div>
//   );
// };

// export default AIchatbotRights;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { BsStars, BsFillMicFill, BsFillPauseFill } from "react-icons/bs";

const AIchatbotRights = () => {
  const [promptString, setPromptString] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const recognition = new window.webkitSpeechRecognition();

  useEffect(() => {
    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setPromptString(result);
    };

    recognition.onend = () => {
      if (!isPaused) {
        startListening();
      }
    };

    return () => {
      recognition.abort();
    };
  }, [isPaused]);

  const handleGenerateText = async () => {
    try {
      const response = await fetch(
        "https://api.edenai.run/v2/text/generation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${process.env.REACT_APP_EDENS_API_KEY}`,
          },
          body: JSON.stringify({
            providers: "google",
            text: `Consider yourself a legal advisor for specially abled people, provide me with a legal opinion on the prompt ${promptString}, do not give any salutation`,
            temperature: 0.2,
            max_tokens: 300,
            fallback_providers: "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      const enhancedText = data.google.generated_text;
      setGeneratedText(() => {
        const enhancedAnswer = enhancedText.replace(/\*/g, " ");
        return enhancedAnswer;
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startListening = () => {
    recognition.start();
    setIsListening(true);
    setIsPaused(false);
  };

  const pauseListening = () => {
    recognition.stop();
    setIsPaused(true);
  };

  return (
    <div style={{ minHeight: "60vh", marginTop: "1.3rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "1.3rem",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.25rem",
          maxWidth: "80vw",
          width: "80vw",
          margin: "auto",
        }}
      >
        <input
          type="text"
          value={promptString}
          onChange={(e) => setPromptString(e.target.value)}
          placeholder="Enter"
          style={{
            border: "4px solid #2234da",
            padding: "0.7rem",
            borderRadius: "1rem",
            width: "100%",
            flex: 1,
          }}
        />
        <Button
          onClick={handleGenerateText}
          className="aicourse-button"
          style={{
            display: "flex",
            borderRadius: "1rem",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2234da",
            padding: "1rem",
            color: "white",
            height: "3.5rem",
          }}
        >
          <div>Ask with AI</div>
          <span
            style={{ color: "", fontSize: "1.15rem", marginLeft: "0.5rem" }}
          >
            <BsStars />
          </span>
        </Button>
        <Button
          onClick={isListening ? pauseListening : startListening}
          className="aicourse-button"
          style={{
            marginLeft: "0.5rem",
            backgroundColor: isListening ? "red" : "#2234da",
            padding: "1rem",
            color: "white",
            height: "3.5rem",
          }}
        >
          {isListening ? (
            isPaused ? (
              <BsFillMicFill />
            ) : (
              <BsFillPauseFill />
            )
          ) : (
            <BsFillMicFill />
          )}
        </Button>
      </div>
      <div style={{ width: "80vw", margin: "auto" }}>
        <strong>Generated Text Output:</strong>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default AIchatbotRights;