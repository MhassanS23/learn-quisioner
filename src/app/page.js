// "use client";
// import { useState } from 'react';

// export default function Home() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [satisfaction, setSatisfaction] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch('/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, feedback, satisfaction }),
//       });
//       if (res.ok) {
//         alert('Feedback submitted!');
//         setName('');
//         setEmail('');
//         setFeedback('');
//         setSatisfaction('');
//       } else {
//         throw new Error('Submission failed!');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Submission failed!');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">NGANU NYOBA FORM</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium">Name:</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Masukan:</label>
//             <textarea
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Kepuasan mengikuti Acara:</label>
//             <div className="space-y-2">
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   value="Very Satisfied"
//                   checked={satisfaction === 'Very Satisfied'}
//                   onChange={(e) => setSatisfaction(e.target.value)}
//                   className="mr-2"
//                 />
//                 Very Satisfied
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   value="Satisfied"
//                   checked={satisfaction === 'Satisfied'}
//                   onChange={(e) => setSatisfaction(e.target.value)}
//                   className="mr-2"
//                 />
//                 Satisfied
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   value="Neutral"
//                   checked={satisfaction === 'Neutral'}
//                   onChange={(e) => setSatisfaction(e.target.value)}
//                   className="mr-2"
//                 />
//                 Neutral
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   value="Dissatisfied"
//                   checked={satisfaction === 'Dissatisfied'}
//                   onChange={(e) => setSatisfaction(e.target.value)}
//                   className="mr-2"
//                 />
//                 Dissatisfied
//               </label>
//               <label className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   value="Very Dissatisfied"
//                   checked={satisfaction === 'Very Dissatisfied'}
//                   onChange={(e) => setSatisfaction(e.target.value)}
//                   className="mr-2"
//                 />
//                 Very Dissatisfied
//               </label>
//             </div>
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from 'react';

export default function Home() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logika sederhana untuk menentukan introvert atau extrovert
    const introvertCount = Object.values(answers).filter(
      (answer) => answer === 'introvert'
    ).length;

    const extrovertCount = Object.values(answers).filter(
      (answer) => answer === 'extrovert'
    ).length;

    if (introvertCount > extrovertCount) {
      setResult('You are more likely an Introvert!');
    } else if (extrovertCount > introvertCount) {
      setResult('You are more likely an Extrovert!');
    } else {
      setResult('You have a balanced personality!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Kowe introvert opo extrovert?
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block font-medium mb-2">
              1. Seneng dewean ta kowe opo seneng cangkruk nang keramaian?
            </label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="introvert"
                  onChange={handleChange}
                  required
                />
                Yo
              </label>
              <label>
                <input
                  type="radio"
                  name="question1"
                  value="extrovert"
                  onChange={handleChange}
                />
                Ora
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">
              2. Energimu nambah gk bar bersosialiasi?
            </label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="extrovert"
                  onChange={handleChange}
                  required
                />
                Yo
              </label>
              <label>
                <input
                  type="radio"
                  name="question2"
                  value="introvert"
                  onChange={handleChange}
                />
                Ora
              </label>
            </div>
          </div>

          
          <div>
            <label className="block font-medium mb-2">
              3. Awkmu seneng ngobrol lebih dalam face to face daripada grup?
            </label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="introvert"
                  onChange={handleChange}
                  required
                />
                Yo 
              </label>
              <label>
                <input
                  type="radio"
                  name="question3"
                  value="extrovert"
                  onChange={handleChange}
                />
                Ora
              </label>
            </div>
          </div>

         
          <div>
            <label className="block font-medium mb-2">
              4. Seneng nang panggon sunyi a?
            </label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="question4"
                  value="introvert"
                  onChange={handleChange}
                  required
                />
                Yo
              </label>
              <label>
                <input
                  type="radio"
                  name="question4"
                  value="extrovert"
                  onChange={handleChange}
                />
                Ora
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">
              5. Seneng dolan mbek konco koncomu a?
            </label>
            <div className="space-x-4">
              <label>
                <input
                  type="radio"
                  name="question5"
                  value="extrovert"
                  onChange={handleChange}
                  required
                />
                Yo
              </label>
              <label>
                <input
                  type="radio"
                  name="question5"
                  value="introvert"
                  onChange={handleChange}
                />
                Ora
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Kumpulno Cak
          </button>
        </form>

        {result && (
          <div className="mt-6 text-center">
            <h2 className="text-lg font-bold">{result}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
