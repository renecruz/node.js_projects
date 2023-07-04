import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h3>My Next App de Test</h3>
    </div>
  );
}

// export const getServerSideProps = async (context) => {
//   //http://localhost:3000/api/calles/
//   const res = await fetch('http://localhost:3000/api/calles/')
//   const calles = await res.json()

//   return {
//     props: {
//       data: calles
//     }
//   }
// }
