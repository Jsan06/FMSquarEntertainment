import { Link } from "react-router-dom";
import finance from "./finance.jpg";
import adaptation from "./adaptation.jpg";
import filmDistribution from "./filmDistribution.jpg";
import filmMaking from "./filmMaking.jpg";

const Data1 = [
  {
    id: 1,
    image: `${finance}`,
    //   "https://images.unsplash.com/photo-1519001904187-92788a1b784d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",

    name: (
      <Link to="/products/recNZ0koOqEmilmoz1" className="btn">
        {/* Video Production */}
      </Link>
    ),
    // title: "We provide Video Production services best of our class",
  },
  {
    id: 2,
    image: `${filmMaking}`,
    //   "https://www.cartoonbrew.com/wp-content/uploads/2019/12/avatar_sequels.jpg",
    name: (
      <Link to="/products/recNZ0koOqEmilmoz2" className="btn">
        {/* Live Stream */}
      </Link>
    ),
    // title: "We provide Video Production services best of our class",
  },
  {
    id: 3,
    image: `${filmDistribution}`,
    //   "https://images.unsplash.com/photo-1553774276-c63389fba065?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8MzYwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: (
      <Link to="/products/recNZ0koOqEmilmoz3" className="btn">
        {/* 360 VR */}
      </Link>
    ),
    // title: "We provide 360 VR services, best of our class",
  },
  {
    id: 4,
    image: `${adaptation}`,
    //   "https://www.timberwolfhq.com/wp-content/uploads/2010/03/avatar-movie.jpg",
    name: (
      <Link to="/products/recNZ0koOqEmilmoz4" className="btn">
        {/* Studio Space */}
      </Link>
    ),
    // title: "We rent Studio services, best of our class",
  },
];

export default Data1;
