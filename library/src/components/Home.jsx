import React, { useRef } from "react";
import bgImage from "../assets/homebg.jpg";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";

const productData = [
  {
    id: 1,
    title: "Product 1",
    image: "/img1.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Product 2",
    image: "/img2.jpeg",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Product 3",
    image: "/img3.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "Product 4",
    image: "/book4.png",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "Product 5",
    image: "/book5.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    title: "Product 6",
    image: "/book1.png",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    title: "Product 7",
    image: "/book2.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    title: "Product 8",
    image: "/book3.png",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
    {
    id: 9,
    title: "Product 9",
    image: "/book6.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

]
const categories = [
  { title: "Learn Space", image: "/img1.jpeg" },
  { title: "Learn Space", image: "/img2.jpeg" },
  { title: "Learn Space", image: "/img3.jpeg" },
  { title: "Learn Space", image: "/img1.jpeg" },
  { title: "Learn Space", image: "/img2.jpeg" },
  { title: "Learn Space", image: "/img3.jpeg" },
  { title: "Learn Space", image: "/img1.jpeg" },
];

const testimonials = [
  {
    image: "/t1.jpg",
    name: "Sarah Johnson",
    role: "Educator",
    text: "This digital library has transformed how I access educational resources."
  },
  {
    image: "/t2.jpg",
    name: "David Chen",
    role: "Student",
    text: "I can find all my textbooks and reference materials instantly."
  },
  {
    image: "/t3.jpeg",
    name: "Michelle Rodriguez",
    role: "Book Club Organizer",
    text: "Our book club relies on this platform for all our reading selections."
  }
];

const TestimonialCard = ({ image, name, role, text }) => (
  <div className="testimonial-card">
    <img src={image} alt={name} className="testimonial-image" />
    <h3>{name}</h3>
    <p><strong>{role}</strong></p>
    <p>"{text}"</p>
  </div>
);


const Hero = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="main">
      {/* Hero Section */}
      <section
        id="home"
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(4,9,30,0.7), rgba(4,9,30,0.7)), url(${bgImage})`,
        }}
      >
        <div className="hero-content">
          <h1>WELCOME TO</h1>
          <h2>Digital LIBRARY</h2>
          <p>Learn from a library dedicated to self-discovery and lifelong learning.</p>
          <button className="cta-btn">GET STARTED</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            A library is a place where a vast collection of books, journals, digital media, and resources are organized for public or private use. It serves as a hub for learning, research, and discovery.
          </p>
          <p>
            With digital transformation, many libraries offer eBooks, online databases, and remote access services. Whether physical or digital, libraries continue to be gateways to information, imagination, and empowerment.
          </p>
          <p>Modern libraries also serve as community centers, hosting workshops, educational programs, and cultural events that foster lifelong learning and social engagement. They support students, researchers, and the general public by providing access to technology, quiet study spaces, and expert assistance from librarians. In this evolving digital age, libraries remain essential in bridging the knowledge gap and promoting equal access to information for all.</p>
          <p>Libraries adapt to the changing needs of society by integrating innovative tools and digital literacy programs.
They nurture curiosity and critical thinking across all age groups.
In every form, libraries uphold the values of education, equity, and community growth.</p>
        </div>
        <div className="about-img">
          <img src="/about.png" alt="Library shelves" />
        </div>
      </section>

      {/* Products Section */}
<div className="products-container">
      <h1 className="products-title">Products</h1>
      <p className="products-subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className="products-grid">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <Link to={`/product/${product.id}`}>
              <button className="read-more-btn">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>

    {/* Categories Section */}
<section className="categories-section">
  <h1 className="products-title">Category</h1>
  <p className="products-subtitle">
    Learn Space to unlock diverse and life-growing self-guided reading.
  </p>

  <div style={{ position: "relative" }}>
    <button
      onClick={() => scroll("left")}
      className="arrow-button arrow-left"
    >
      &#8592;
    </button>

    <div className="categories-carousel" ref={scrollRef}>
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <img
            src={category.image}
            alt={category.title}
            className="category-image"
          />
          <h2 className="category-title">{category.title}</h2>
        </div>
      ))}
    </div>

    <button
      onClick={() => scroll("right")}
      className="arrow-button arrow-right"
    >
      &#8594;
    </button>
  </div>
</section>

{/* Testimonials Section */}
      <section className="testimonials-section">
        <h1 className="testimonials-title">What People Say</h1>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
      {/* Testimonials Section */}

    </div>
  );
};

export default Hero;TestimonialCard ;
