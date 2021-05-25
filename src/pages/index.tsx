import Head from "next/head";

export default function Home() {
  console.log(process.env.TEST);
  return (
    <div>
      <h1>{process.env.TEST}</h1>
    </div>
  );
}
