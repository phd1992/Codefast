import Image from "next/image";
import Link from "next/link";
import ButtonLogin from "./components/ButtonLogin";

const name = "John Doe";
const isLoggedIn = true;
export default function Home() {
  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold lg:text-5xl">Logo</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">
          Collect customer feedback to build better products
        </h1>
        <div>
          Create a feedback board in minutes, prioritize and respond to ideas
          and build products your customers will love
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
