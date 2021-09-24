function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-ray-600">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className=" uppercase font-bold cursor-pointer p-2">About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Pluss</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className=" uppercase font-bold cursor-pointer p-2">Community</h5>
        <p>Diversity & Belonging</p>
        <p>Against Discrimination</p>
        <p> Accessibility</p>
        <p>Airbnb Associates</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className=" uppercase font-bold cursor-pointer p-2">Host </h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p> Host an Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Center</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className=" uppercase font-bold cursor-pointer p-2">Support</h5>
        <p>Our covid-19 response</p>
        <p>Help Center</p>
        <p>Cancellation Options</p>
        <p>Neighborhood Support</p>
        <p> Trust & Safety</p>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
