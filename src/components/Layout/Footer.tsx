export default function Footer() {
  return (
    <footer className="bg-primary text-contrast py-4">
      <div className="container mx-auto flex justify-between max-md:justify-center items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DeluxStore. All rights reserved.
        </p>
        <div className="flex space-x-4 max-md:hidden">
          <a href="#" className="text-contrast hover:text-contrast">
            Privacy Policy
          </a>
          <a href="#" className="text-contrast hover:text-contrast">
            Terms of Service
          </a>
          <a href="#" className="text-contrast hover:text-contrast">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
