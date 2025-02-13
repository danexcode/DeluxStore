export default function Footer() {
  return (
    <footer>
      <div className="bg-primary text-contrast py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} DeluxStore. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-secondary hover:text-contrast">Privacy Policy</a>
            <a href="#" className="text-secondary hover:text-contrast">Terms of Service</a>
            <a href="#" className="text-secondary hover:text-contrast">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
