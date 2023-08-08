export default function Home() {
  return (
    <div className="hero half-screen">
    <div className="hero-body relative">
      <div className="w-100 md-w-50 flex flex-column justify-center">
        <h1 className="title-4">NILE UI</h1>
        <p className="subtitle mb-30 text-gray-3 line-height-base fs-5">
          Free, open source and modular
          <span className="text-dark fw-500">ui framework</span> that has built-in
          <span className="text-dark fw-500"> responsive</span> components.
        </p>
        <div className="flex items-center">
          <button
            className="btn primary lg mr-10"
          >
            Get Started
          </button>
          <a
            download
            className="btn primary flat lg mr-10"
          >
            Download
          </a>
          <a target="_blank" href="https://github.com/nile-ui/nile-ui">
            <button className="btn dark bordered border-radius-4 fs-2">
              <i className="ri-github-fill"></i>
            </button>
          </a>
        </div>
      </div>
      <div id="samples_container">
        <div className="relative md-block hidden" id="samples">
          <div id="sample-1" className="card type-3" style={{maxWidth: "400px"}}>
            <div className="card-img">
              <figure className="figure size-1by1" style={{width: "25rem"}}>
                <img src="/photo2.jpg" alt="" />
              </figure>
              <div className="card-interactions">
                <button className="btn danger icon">
                  <i className="ri-heart-line"></i>
                </button>
                <button className="btn icon ml-5">
                  <i className="ri-message-3-line"></i>
                  <span className="ml-5">60</span>
                </button>
              </div>
            </div>
            <div className="card-content">
              <h5 className="card-title">Default Card Design</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, ducimus?
              </p>
            </div>
          </div>
          <button id="sample-2" className="btn primary">Primary Button</button>
          <div id="sample-3" className="form-element has-icon-before">
            <input
              type="text"
              className="input primary shadow"
              placeholder="Name"
            />
            <div className="input-icon">
              <i className="ri-user-follow-line"></i>
            </div>
          </div>
          <div id="sample-4" className="dropdown hoverable">
            <button className="btn shadow has-carret">Hoverable Dropdown</button>
            <div className="dropdown-content">
              <div className="dropdown-menu">
                <h5 className="dropdown-title">Dropdown title</h5>
                <div className="dropdown-item">Dropdown Item</div>
                <div className="dropdown-item">Dropdown Item</div>
              </div>
            </div>
          </div>
          <div
            id="sample-5"
            className="shadow border-radius-3 p-10"
            style={{width: "70px"}}
          >
            <span className="spinner xl primary border-radius-2"></span>
          </div>

          <div id="sample-6" className="avatar primary xl shadow-lg">
            <span className="avatar-content">G</span>
            <span className="avatar-badge danger"></span>
          </div>

          <div id="sample-7" className="card type-5" style={{maxWidth: "350px"}}>
            <div className="card-img">
              <img src="/photo1.jpg" alt="" />
              <div className="card-interactions top-left">
                <button className="btn danger icon">
                  <i className="ri-heart-line"></i>
                </button>
                <button className="btn icon ml-5">
                  <i className="ri-message-3-line"></i>
                  <span className="ml-5">60</span>
                </button>
              </div>
            </div>
            <div className="card-content">
              <h5 className="card-title">Default Card Design</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, ducimus?
              </p>
            </div>
          </div>
          <div className="form-element" id="sample-8">
            <span className="label ml-0">On/Off</span>
            <input
              type="checkbox"
              id="switch-primary-square"
              className="switch primary square"
              checked
            />
            <label htmlFor="switch-primary-square"></label>
          </div>
          <div
            className="progress infinite primary"
            id="sample-9"
            style={{width: "200px"}}
          >
            <div className="progressbar"></div>
          </div>
          <div className="form-element horizontal" id="sample-10">
            <div className="checkbox-group">
              <input
                id="check_2"
                type="checkbox"
                className="checkbox primary"
                placeholder="Name"
                checked
              />
              <label className="label" htmlFor="check_2">Checkbox</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
