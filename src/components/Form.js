import React, { useEffect, useState } from "react";
// const getting = () => {
//   const userData = JSON.parse(localStorage.getItem("user"));
//   if (userData) {
//     return userData;
//   } else {
//     return [];
//   }
// };
// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [show, setShow] = useState(false);
//   const [edit, setEdit] = useState();
//   const [data, setData] = useState(getting());
//   const [errorName, setErrorName] = useState("");
//   const [errorEmail, setErrorEmail] = useState("");
//   //const [show, setShow] = useState(false);
//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(data));
//   }, [data]);
//   const nameHandler = (e) => {
//     setName(e.target.value);
//     if (!name) {
//       setErrorName("Required");
//     } else if (name.length >= 0) {
//       setErrorName("");
//     }
//   };

//   const numberHandler = (e) => {
//     setEmail(e.target.value);
//     if (!email) {
//       setErrorEmail("Required");
//     } else if (email.length >= 0) {
//       setErrorEmail("");
//     }
//   };

//   const id = new Date();
//   const addHandler = (e) => {
//     e.preventDefault();
//     const userData = {
//       id: id.toISOString(),
//       name,
//       email,
//     };
//     setData([...data, userData]);
//     setName("");
//     setEmail("");
//   };
//   const updatedHandler = () => {
//     const updatedUser = data.map((e) => {
//       if (edit === e) {
//         return {
//           id: e.id,
//           name,
//           email,
//         };
//       } else {
//         return e;
//       }
//     });
//     setData(updatedUser);
//     setName("");
//     setEmail("");
//     setEdit(null);
//     setShow(false);
//   };
//   const deleteHandler = (i) => {
//     data.splice(i, 1);
//     setData([...data]);
//   };
//   const editHandler = (e) => {
//     setEmail(e.email);
//     setName(e.name);
//     setShow(true);
//     setEdit(e);
//   };
//   return (
//     <div>
//       <form style={{ margin: "10px" }}>
//         <label htmlFor="userName">Username</label>
//         <br />
//         <input
//           onBlur={() => {
//             if (!name) {
//               setErrorName("Required");
//             }
//           }}
//           onChange={nameHandler}
//           value={name}
//           id="userName"
//           type="text"
//         />
//         {errorName && <p>{errorName}</p>}
//         <br />
//         <label htmlFor="email">Email</label>
//         <br />
//         <input
//           onBlur={() => {
//             if (!email) {
//               setErrorEmail("Required");
//             }
//           }}
//           onChange={numberHandler}
//           value={email}
//           id="email"
//           type="email"
//         />
//         {errorEmail && <p>{errorEmail}</p>}
//         <br />
//         {!show ? (
//           <button onClick={addHandler}>Add</button>
//         ) : (
//           <button onClick={updatedHandler}>Update</button>
//         )}
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>name</th>
//             <th>email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((e, index) => {
//             return (
//               <tr key={index}>
//                 <td>{e.id}</td>
//                 <td>{e.name}</td>
//                 <td>{e.email}</td>
//                 <td>
//                   <button onClick={() => editHandler(e)}>Edit</button>
//                   <button onClick={() => deleteHandler(index)}>Delete</button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setErrorName] = useState("");
  const [emailError, setEmailError] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
    if (!name) {
      setErrorName("Required!");
    } else if (name.length >= 0) {
      setErrorName("");
    }
  };
  const emailHanlder = (e) => {
    setEmail(e.target.value);
    if (!email) {
      setEmailError("Required!");
    } else if (email.length >= 0) {
      setEmailError("");
    }
  };
  return (
    <div>
      <form>
        <input
          onBlur={() => {
            if (!name) {
              setErrorName("Required!");
            }
          }}
          type="text"
          onChange={nameHandler}
          value={name}
        />
        <br />
        {nameError && <p>{nameError}</p>}
        <input
          onBlur={() => {
            if (!email) {
              setEmailError("Required!");
            }
          }}
          type="email"
          onChange={emailHanlder}
          value={email}
        />
        <br />
        {emailError && <p>{emailError}</p>}
        <button>Submit</button>
      </form>
    </div>
  );
}
export default Form;
