import { Link } from "react-router-dom";

const people = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1598704066184-80bde4152af4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8dmlkZW8lMjBwcm9kdWN0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: (
      <Link to="/products/recNZ0koOqEmilmoz1" className="btn">
        Video Production
      </Link>
    ),
    title: "We provide Video Production services best of our class",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1599999905374-a7fdced81618?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bGluZSUyMHByb2R1Y3Rpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: (
      <Link to="/products/recNZ0koOqEmilmoz2" className="btn">
        Live Stream
      </Link>
    ),
    title: "We provide Video Production services best of our class",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1553774276-c63389fba065?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8MzYwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name: (
      <Link to="/products/recNZ0koOqEmilmoz3" className="btn">
        360 VR
      </Link>
    ),
    title: "We provide 360 VR services, best of our class",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/originals/d5/6c/00/d56c006e2312cbfe12f89d4ecf5149f7.png",
    name: (
      <Link to="/products/recNZ0koOqEmilmoz4" className="btn">
        Studio Space
      </Link>
    ),
    title: "We rent Studio services, best of our class",
  },
];

export default people;
