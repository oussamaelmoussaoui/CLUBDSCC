export default function Footer(){
  return(
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 px-4">
        <p>© {new Date().getFullYear()} Data Science Club ENSA</p>
        <p>Made with ❤️ using Next.js & Tailwind</p>
      </div>
    </footer>
  )
}
