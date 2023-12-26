import "../css/booking.css";
import { data123 } from "./Tst";
function Booking() {
  const fetchdata = () => {
    {
      let html = "";
      data123.map((v) => {
        console.log(v);
        html=html+
        `
        <div class="row w-100 border border-1 border-secondry px-2 py-3 rounded-4 mt-3 ms-xl-5 ms-2">
          <div class="col-xl-4 col-lg-4 col-12">
          <img style="border-radius:20px" src=${v.url} width="100%" height="250px">
          </div>

          <div class="col-xl-6 col-lg-6 col-12 mt-2">
            <h4>
              <a class="text-decoration-none" id="title" href="">
                ${v.hed}
              </a>
            </h4>
            <p class="sw-mp">
              <a href="">${v.place}</a> . <a href="">Show on map</a>
            </p>
            <p>
              ${v.cnt}
            </p>
          </div>
          <div class="col-xl-2 col-lg-2 col-12">
            <div class="d-flex align-items-center">
              <div>
                <h5>${v.fdbk}</h5>
                <p>29 reviews</p>
              </div>
              <div class="ms-2">
                <a class="bg-primary text-white p-2 rounded-2" href="">
                  7.3
                </a>
              </div>
            </div>
            <p class="nwbook bg-warning px-1 rounded-1 d-inline-block">
              New to Booking.com
            </p>
            <button class="bg-primary text-white py-1 px-2 border-0 rounded">
              Show prices
            </button>
          </div>
        </div>
        `
      });

      document.getElementById("d").innerHTML = html;
    }
  };
  return (
    <>
      <div className="header pt-3 text-white">
        <div className="container px-5">
          <div className="reg d-flex justify-content-between align-items-center">
            <h1>Booking.com</h1>
            <div className="social d-xl-flex d-lg-flex d-none align-items-center gap-4">
              <span className="mx-3">INR</span>
              <img
                className="rounded-circle"
                src="https://t-cf.bstatic.com/design-assets/assets/v3.96.0/images-flags/In@3x.png"
                alt=""
                width={"30px"}
              />
              <span className="mx-3 fs-3">
                <i className="fa fa-question-circle-o" aria-hidden="true"></i>
              </span>
              <span>
                <b>List your property</b>
              </span>
              <span>
                <button className="rg-sn bg-white rounded">Register</button>
                <button className="rg-sn bg-white rounded">Sign in</button>
              </span>
            </div>
          </div>

          <div className="nav">
            <ul className="navbar list-unstyled">
              <li className="nav-item">
                <a className="nav-link text-white ps-0 pe-5" href="">
                  <i className="fa fa-bed" aria-hidden="true"></i> Stays
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ps-0 pe-5" href="">
                  <i className="fa fa-fighter-jet" aria-hidden="true"></i> Flight
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ps-0 pe-5" href="">
                  <i className="fa fa-globe" aria-hidden="true"></i> Flight + Hotel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ps-0 pe-5" href="">
                  <i className="fa fa-car" aria-hidden="true"></i> Car rentals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ps-0 pe-5" href="">
                  <i className="fa fa-meetup" aria-hidden="true"></i> Attractions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ps-0 pe-5" href="">
                  <i className="fa fa-taxi" aria-hidden="true"></i> Airport taxis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section text-white py-5 position-relative">
        <div className="container p-5">
          <h1 className="fs-1 fw-bold my-2">Howzat for a perfect stay</h1>
          <p className="fs-4 mb-4">Search hotels, homes and much more</p>
          <button className="dis border-0 rounded-1 text-white fw-bold mb-4">
            Discover more
          </button>

          <div className="footbar text-black position-absolute w-100 start-0">
            <div className="row justify-content-center">
              <div className="border position-relative col-xl-3 col-lg-3 border-4 bg-white p-0 border-warning rounded overflow-hidden">
                <input
                  type="text"
                  className="inp w-100 p-3 ps-5 border-0"
                  placeholder="Where are you doing?"
                />
                <i
                  className=" fa fa-bed position-absolute start-0 p-2 py-3 fs-5"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="border border-4 col-xl-3 col-lg-3 bg-white border-warning p-3 rounded overflow-hidden">
                <i className="fa fa-calendar" aria-hidden="true"></i> Check-in Date
                -- Check-out Date
              </div>
              <div className="border border-4 col-xl-3 col-lg-3 bg-white border-warning p-3 rounded overflow-hidden">
                <i className="fa fa-user-o" aria-hidden="true"></i> 2 adults &#46; 0
                children &#46; 1 room
              </div>

              <div className="border border-4 col-xl-1 col-lg-1 p-0 border-warning rounded overflow-hidden">
                <button
                  className="border-0 fs-5 text-white text-center search w-100 h-100"
                  onClick={fetchdata}
                >
                  Search
                </button>
              </div>

              <div className="col-xl-10 col-lg-10 p-0 pt-2 d-flex align-items-center">
                <input className="inp-check border-secondary" name="lk-fl" type="checkbox" />
                <label className="mx-2">I'm looking for flights</label>
                <input className="inp-check border-secondary" name="lk-fl" type="checkbox" />
                <label className="mx-2">I'm traveling for work</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-3 mt-5 pt-5">
        <div className="row">
          <div className="col-xl-3 col-4">
            <img
              className="rounded-3"
              src="image/map.png"
              alt=""
              height="150px"
              width="100%"
            />
          </div>
          <div className="col-xl-9 col-8" id="d">

          </div>
          
        </div>
      </div>
    </>
  );
}
export default Booking;
