import {
  Facebook,
  Hotel,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Navigation,
  PcCase,
  Phone,
  University,
  User,
  Youtube,
} from "lucide-react";

function App() {
  return (
    <div>
      <header>
        <div className="bg-primary">
          <div className="container max-sm:px-2 max-lg:hidden lg:flex justify-between items-center">
            <div>
              <h3 className="font-roboto text-white font-medium text-base">
                We're Leading Educational Consultancy in Bangladesh.
              </h3>
            </div>
            <div className="flex items-center gap-x-6">
              <h4 className="text-white font-medium text-sm">
                Office Hours: 10:00AM- 07:00PM
              </h4>
              <ul className="flex items-center">
                <li>
                  <a href="#" className="nav-social border-x">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-social border-r">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-social border-r">
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-social border-r">
                    <Youtube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container max-sm:px-2 max-lg:hidden lg:flex justify-between items-center py-9">
          <div>
            <a href="#">
              <img
                src="/dsi-logo-large-1.1.png"
                alt="Header-Logo"
                className="w-52"
              />
            </a>
          </div>
          <div className="flex items-center gap-x-6">
            <div>
              <Phone className="text-heading" />
            </div>
            <div>
              <h3 className="font-bold text-base text-paragraph">Call Us:</h3>
              <a
                href="#"
                className="font-medium inline-block text-base text-paragraph"
              >
                +880 14066 99551-4
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div>
              <Mail className="text-heading" />
            </div>
            <div>
              <h3 className="font-bold text-base text-paragraph">Email Us:</h3>
              <a
                href="#"
                className="font-medium inline-block text-base text-paragraph"
              >
                dreamstudyinternational@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div>
              <Navigation className="text-heading" />
            </div>
            <div>
              <h3 className="font-bold text-base text-paragraph">Location:</h3>
              <a
                href="#"
                className="font-medium inline-block text-base text-paragraph"
              >
                Gulshan
              </a>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="container max-sm:px-2 flex items-center justify-between max-lg:py-4">
            <div className="lg:hidden">
              <a href="#">
                <img
                  src="/dsi-logo-large-1.1.png"
                  alt="Header-Logo"
                  className="w-40"
                />
              </a>
            </div>
            <div className="max-lg:hidden">
              <ul className="flex items-center">
                <li>
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Countries
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <a href="#" className="cta-btn">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="form lg:py-20 py-12">
        <div className="container max-sm:px-2 grid lg:grid-cols-12 lg:gap-x-5 lg:items-center max-lg:gap-y-6">
          <div className="lg:col-span-7">
            <img
              src="/form-left.jpg"
              alt="In-House-Edu-Expo-May25-Dream-Study-International"
            />
          </div>
          <div className="lg:col-span-5 rounded-xl overflow-hidden shadow bg-white">
            <div className="lg:px-10 lg:py-5 px-4 py-3 bg-heading">
              <h2 className="font-semibold text-2xl lg:text-4xl text-white font-roboto">
                Apply Now!
              </h2>
            </div>
            <div className="lg:p-10 px-4 py-6">
              <form action="#" className="grid gap-y-5">
                <div className="relative">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Name"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 left-3">
                    <User />
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Phone Number"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 left-3">
                    <Phone />
                  </span>
                </div>
                <div className="relative">
                  <select
                    id="cars"
                    name="carlist"
                    className="form-input py-3 lg:py-5 bg-transparent"
                    form="carform"
                  >
                    <option value="Last Education">Last Education</option>
                    <option value="hsc">HSC</option>
                    <option value="bachelor">Bachelor</option>
                  </select>
                  <span className="absolute top-1/2 -translate-y-1/2 left-3">
                    <University />
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Prefered Country"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 left-3">
                    <Navigation />
                  </span>
                </div>
                <div>
                  <button type="submit" className="form-btn">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Dark Mode Section */}
      <section className="bg-col-1 dark:bg-dark-1 py-12">
        <div className="container max-sm:px-2 grid md:grid-cols-12 md:gap-5 max-md:gap-y-4 ">
          <div className="md:col-span-12 text-center mb-5">
            <h3 className="font-roboto font-bold dark:text-white text-heading text-xl sm:text-3xl">
              We Offer One Stop Solution
            </h3>
          </div>
          <div className="offer-item">
            <span className="text-heading">
              <PcCase />
            </span>
            <h3 className="font-normal text-lg dark:text-white text-black">
              Eligibility Assessment
            </h3>
          </div>
          <div className="offer-item">
            <span className="text-heading">
              <PcCase />
            </span>
            <h3 className="font-normal text-lg dark:text-white text-black">
              Eligibility Assessment
            </h3>
          </div>
          <div className="offer-item">
            <span className="text-heading">
              <PcCase />
            </span>
            <h3 className="font-normal text-lg dark:text-white text-black">
              Eligibility Assessment
            </h3>
          </div>
          <div className="offer-item">
            <span className="text-heading">
              <PcCase />
            </span>
            <h3 className="font-normal text-lg dark:text-white text-black">
              Eligibility Assessment
            </h3>
          </div>
          <div className="offer-item">
            <span className="text-heading">
              <PcCase />
            </span>
            <h3 className="font-normal text-lg dark:text-white text-black">
              Eligibility Assessment
            </h3>
          </div>
          <div className="offer-item">
            <span className="text-heading">
              <PcCase />
            </span>
            <h3 className="font-normal text-lg dark:text-white text-black">
              Eligibility Assessment
            </h3>
          </div>
          <div className="offer-item">
            <span className="text-heading">
              <PcCase />
            </span>
            <h3 className="font-normal text-lg dark:text-white text-black">
              Eligibility Assessment
            </h3>
          </div>
          <div className="offer-item">
            <span className="text-heading">
              <PcCase />
            </span>
            <h3 className="font-normal text-lg dark:text-white text-black">
              Eligibility Assessment
            </h3>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="container max-sm:px-2 md:grid-cols-12 grid py-10 lg:py-16 lg:gap-x-5 md:gap-y-5 max-md:gap-y-6">
          <div className="lg:col-span-3 md:col-span-6 md:order-1">
            <div className="mb-5 w-fit">
              <a href="#">
                <img
                  src="dsi-logo-large-1.1.png"
                  alt="Footer Logo"
                  className="w-52"
                />
              </a>
            </div>
            <p className="font-normal text-paragraph text-lg mb-5">
              We are renowned education consultancy for prospective students who
              would like to study in CANADA, UK, USA, Australia, Sweden,
              Netherlands, Denmark & other European Countries.
            </p>
            <ul className="flex items-center gap-x-3">
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-xs text-heading hover:bg-cta hover:text-white transition-all duration-300"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-xs text-heading hover:bg-cta hover:text-white transition-all duration-300"
                >
                  <Instagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-xs text-heading hover:bg-cta hover:text-white transition-all duration-300"
                >
                  <Linkedin />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-200 text-xs text-heading hover:bg-cta hover:text-white transition-all duration-300"
                >
                  <Youtube />
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-6 md:order-3 lg:order-2">
            <h3 className="font-bold text-2xl text-primary mb-5">Sitemap</h3>
            <ul className="list-disc list-inside grid gap-y-3">
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Countries
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-6 md:order-4 lg:order-3">
            <h3 className="font-bold text-2xl text-primary mb-5">Countries</h3>
            <ul className="list-disc list-inside grid gap-y-3">
              <li>
                <a href="#" className="footer-link">
                  Australia
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Canada
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  USA
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  China
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Japan
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5 md:col-span-6 md:order-2 bg-white rounded-lg px-5 py-8 lg:order-4">
            <span>
              <Hotel size={56} />
            </span>
            <ul className="mt-5 grid gap-y-3">
              <li className="flex items-center gap-x-3">
                <span>
                  <MapPin />
                </span>
                <p className="font-normal text-base text-paragraph">
                  <strong>Gulshan-02:</strong> House-12B, Lift-04, Flat-4A,
                  Kamal Attaturk Avenue, Gulshan-02, Dhaka-1212.
                </p>
              </li>
              <li className="flex items-center gap-x-3">
                <span>
                  <Phone />
                </span>
                <p className="font-normal text-base text-paragraph">
                  <strong>Whatsapp :</strong> 01715487621
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-secondary py-4">
          <div className="container max-sm:px-2 flex max-lg:flex-col lg:justify-between lg:items-center max-lg:gap-y-4">
            <div className="max-lg:order-2 max-lg:text-center">
              <p className="font-normal text-base text-white">
                © 2025 Dream Study Int.. Designed By *hirebirds Team
              </p>
            </div>
            <div className="max-lg:order-1">
              <ul className="flex gap-x-5 max-lg:justify-center">
                <li>
                  <a href="#" className="copyright-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="copyright-link">
                    Faq
                  </a>
                </li>
                <li>
                  <a href="#" className="copyright-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
