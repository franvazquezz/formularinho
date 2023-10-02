import AllForms from "../components/allForms";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-teal-100">
      <AllForms />
      <div>
        <a href="/">Volver</a>
      </div>
    </main>
  )
}