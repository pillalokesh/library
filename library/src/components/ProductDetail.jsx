import { useParams, useNavigate } from "react-router-dom";

const productData = [
  {
    id: 1,
    title: "The Essence of a Library",
    image: "/img1.jpeg",
    description: `"A library stands as a timeless sanctuary of knowledge, preserving the thoughts, ideas, and discoveries of generations. More than a building filled with books, it represents a commitment to intellectual growth, research, and imagination. People from all walks of life visit libraries to learn something new, revisit forgotten knowledge, or escape into a world of fiction. The serene environment, often filled with the faint rustle of pages and soft footsteps, offers a peaceful space to focus and reflect. Whether you're a student researching a topic or a curious mind exploring history, the library is a gateway to understanding and enlightenment...",
                  "A library stands as a timeless sanctuary of knowledge, preserving the thoughts, ideas, and discoveries of generations. More than a building filled with books, it represents a commitment to intellectual growth, research, and imagination. People from all walks of life visit libraries to learn something new, revisit forgotten knowledge, or escape into a world of fiction. The serene environment, often filled with the faint rustle of pages and soft footsteps, offers a peaceful space to focus and reflect. Whether you're a student researching a topic or a curious mind exploring history, the library is a gateway to understanding and enlightenment...",
                  "In today's fast-paced world, libraries offer a quiet retreat where time seems to slow down. They provide a haven from distractions, allowing readers to dive deeply into topics that interest them. The atmosphere encourages contemplation and creativity. Many libraries also display art, promote local authors, and host cultural exhibits. They reflect the spirit of their community, showcasing its history, diversity, and aspirations. This physical presence of knowledge reinforces the importance of learning not just digitally, but also through direct, tactile engagement."`,
  },
  {
    id: 2,
    title: "The Digital Library Era",
    image: "/img2.jpeg",
    description: `"In the modern era, libraries have evolved beyond physical bookshelves and card catalogs. The integration of technology has transformed them into dynamic digital hubs that provide access to eBooks, audiobooks, research databases, and digital archives. Users can access materials from home, download resources, and even attend virtual workshops or book clubs. This digital transition ensures that knowledge is more accessible than ever, allowing even remote users to benefit from the resources once only found within physical walls. It has broadened the library’s reach, turning it into a 24/7 resource center for global learners.In the modern era, libraries have evolved beyond physical bookshelves and card catalogs. The integration of technology has transformed them into dynamic digital hubs that provide access to eBooks, audiobooks, research databases, and digital archives. Users can access materials from home, download resources, and even attend virtual workshops or book clubs. This digital transition ensures that knowledge is more accessible than ever, allowing even remote users to benefit from the resources once only found within physical walls. It has broadened the library’s reach, turning it into a 24/7 resource center for global learners.
                  These platforms now support mobile apps, real-time reservations, and AI-powered catalog searches. With user-friendly interfaces, readers can find what they need within seconds. Libraries collaborate with universities, tech companies, and digital publishers to ensure a rich and growing online collection. The cloud-based system also ensures data security and backup, which protects user history and library integrity. Even rare collections are being digitized, making them accessible to researchers worldwide. This democratization of knowledge is a powerful step toward global educational equity."`,
  },
  {
    id: 3,
    title: "Academic Pillar and Lifelong Learning",
    image: "/img3.jpeg",
    description: `"Libraries play a pivotal role in academic success and lifelong learning. They support educational institutions by curating subject-specific collections, offering research assistance, and providing study spaces. Students benefit from librarian guidance, citation tools, and access to peer-reviewed journals and articles. Furthermore, many libraries host training sessions, lectures, and workshops to promote digital literacy and critical thinking skills. These resources empower learners to navigate the vast sea of information wisely and responsibly, helping them become informed citizens in the information age. " Libraries play a pivotal role in academic success and lifelong learning. They support educational institutions by curating subject-specific collections, offering research assistance, and providing study spaces. Students benefit from librarian guidance, citation tools, and access to peer-reviewed journals and articles. Furthermore, many libraries host training sessions, lectures, and workshops to promote digital literacy and critical thinking skills. These resources empower learners to navigate the vast sea of information wisely and responsibly, helping them become informed citizens in the information age.
Academic libraries often provide quiet zones, group study areas, and even 24-hour reading rooms during exams. Some feature makerspaces, 3D printing labs, and access to advanced tools like statistical software or GIS platforms. Staff assist in thesis formatting, grant research, and intellectual property awareness. Alumni and researchers benefit from lifetime access to certain resources. In this way, the library's influence extends far beyond graduation, cultivating a culture of inquiry that continues into professional life.`

,
  },
  {
    id: 4,
    title: "Community Engagement and Inclusion",
    image: "/book4.png",
    description: `"Community libraries are often the heart of their neighborhoods. They serve as safe, inclusive spaces where people gather for events, meetings, cultural programs, and educational activities. Children’s story times, book clubs for adults, and skill-building classes for seniors are common offerings. These activities foster a sense of community and provide opportunities for social interaction and mutual learning. In underserved areas, libraries often serve as vital access points to the internet, technology, and career support services, helping bridge the digital divide and promote equality."Community libraries are often the heart of their neighborhoods. They serve as safe, inclusive spaces where people gather for events, meetings, cultural programs, and educational activities. Children’s story times, book clubs for adults, and skill-building classes for seniors are common offerings. These activities foster a sense of community and provide opportunities for social interaction and mutual learning. In underserved areas, libraries often serve as vital access points to the internet, technology, and career support services, helping bridge the digital divide and promote equality.
Librarians serve as guides, counselors, and sometimes even mentors for frequent visitors. Multilingual resources and accessibility features cater to diverse populations. Public libraries often partner with local organizations to run food drives, health clinics, or citizenship preparation classes. With flexible spaces, libraries transform into venues for exhibitions, film screenings, and performances. Their presence uplifts communities, providing support during crises, and ensuring no one is excluded from learning.`,
  },
{
  id: 5,
  title: "Design and Experience",
  image: "/book5.png",
  description: `"The architecture and design of modern libraries reflect their multifunctional nature. Contemporary libraries are built with flexibility in mind—featuring open reading areas, multimedia rooms, private study pods, and community halls. A harmonious blend of tradition and innovation, these spaces cater to the diverse needs of readers, researchers, and technology users. The aesthetics of light, space, and silence are carefully balanced to create an environment that stimulates learning and creativity. Many libraries even incorporate eco-friendly materials and green technology in their construction." The architecture and design of modern libraries reflect their multifunctional nature. Contemporary libraries are built with flexibility in mind—featuring open reading areas, multimedia rooms, private study pods, and community halls. A harmonious blend of tradition and innovation, these spaces cater to the diverse needs of readers, researchers, and technology users. The aesthetics of light, space, and silence are carefully balanced to create an environment that stimulates learning and creativity. Many libraries even incorporate eco-friendly materials and green technology in their construction.
Glass walls, ergonomic seating, digital kiosks, and soundproof booths are common design elements. Libraries often incorporate greenery—both indoor plants and outdoor reading gardens—for mental wellness. Some include cafés, collaborative lounges, and interactive exhibits to enhance visitor experience. The interior layout promotes exploration and discovery. Design competitions and architectural awards increasingly recognize the library as a symbol of civic pride and innovation. These thoughtful environments inspire visitors and create emotional connections with the place.`,

},
  {
    id: 6,
    title: "Research and Special Collections",
    image: "/book1.png",
    description: `"For researchers and scholars, libraries are treasure troves of primary sources and archival materials. Special collections often house rare manuscripts, historical records, government publications, and curated thematic exhibits. Access to such materials can be essential for academic work, genealogy research, or historical analysis. These items are meticulously preserved by library staff and sometimes digitized for broader access. Research libraries often collaborate with universities and museums to promote knowledge-sharing and resource optimization." For researchers and scholars, libraries are treasure troves of primary sources and archival materials. Special collections often house rare manuscripts, historical records, government publications, and curated thematic exhibits. Access to such materials can be essential for academic work, genealogy research, or historical analysis. These items are meticulously preserved by library staff and sometimes digitized for broader access. Research libraries often collaborate with universities and museums to promote knowledge-sharing and resource optimization.
Collections may include original newspapers from past centuries, handwritten letters, and culturally significant artifacts. Preservation techniques involve climate control, acid-free paper, and digitization scanners. Scholars travel globally to access these collections, sometimes under supervised reading conditions. Exhibits draw public attention to otherwise hidden gems of literature, art, and science. Archivists continuously catalog, translate, and annotate materials for accessibility. Through research support services, libraries contribute to academic breakthroughs and historical revelations.`,
  },
  {
    id: 7,
    title: "Youth and Educational Programming",
    image: "/book2.png",
    description: `"Children and young adults find their curiosity nurtured within the colorful shelves of the library’s youth sections. With age-appropriate collections, educational games, and storytelling sessions, libraries inspire a love for reading from a young age. Programs tailored for teenagers may include coding clubs, graphic novel groups, or homework help sessions. By introducing literature in engaging ways, libraries play a crucial role in developing early literacy and nurturing a generation of thoughtful readers and creators." Children and young adults find their curiosity nurtured within the colorful shelves of the library’s youth sections. With age-appropriate collections, educational games, and storytelling sessions, libraries inspire a love for reading from a young age. Programs tailored for teenagers may include coding clubs, graphic novel groups, or homework help sessions. By introducing literature in engaging ways, libraries play a crucial role in developing early literacy and nurturing a generation of thoughtful readers and creators.
Summer reading challenges and literacy camps keep young minds engaged during school breaks. STEM workshops, art corners, and book-themed quizzes stimulate both creativity and logic. Librarians act as mentors, guiding young readers to books that match their interests. Parent-child sessions build strong educational bonds within families. Teen advisory boards help shape library programming, giving youth a voice. These experiences boost confidence, literacy, and curiosity in profound ways.`,
  },
  {
    id: 8,
    title: "Rise of the Digital Library",
    image: "/book3.png",
    description: `"Digital libraries are now on the rise, allowing users to search, read, and interact with content entirely online. From scholarly databases like JSTOR and ScienceDirect to open-access platforms such as Project Gutenberg and Internet Archive, the digital world has made millions of texts just a click away. Libraries manage these platforms and often train users to make the most of them through webinars and digital literacy sessions. The cloud-based infrastructure of digital libraries enables synchronization across devices, providing seamless access for readers on the go." Digital libraries are now on the rise, allowing users to search, read, and interact with content entirely online. From scholarly databases like JSTOR and ScienceDirect to open-access platforms such as Project Gutenberg and Internet Archive, the digital world has made millions of texts just a click away. Libraries manage these platforms and often train users to make the most of them through webinars and digital literacy sessions. The cloud-based infrastructure of digital libraries enables synchronization across devices, providing seamless access for readers on the go.
Interactive reading tools include text highlighting, note-taking, and instant translations. Accessibility features like text-to-speech help visually impaired users. Licenses for digital media ensure legal sharing of resources among users. Many libraries now offer mobile hotspots, eLearning course bundles, and access to subscription-based platforms. Integration with virtual assistants and AI helps users receive personalized content recommendations. The digital library isn't just a supplement—it’s becoming a central pillar in lifelong education.`,
  },
    {
    id: 9,
    title: "A Future Rooted in Knowledge",
    image: "/book6.png",
    description: `"In essence, libraries are more than repositories of books—they are living, breathing centers of culture, progress, and human connection. They reflect the values of democracy, equal opportunity, and collective advancement. Whether rooted in a university, a bustling city, or a quiet village, libraries inspire dreams, unlock potential, and remind us of the shared journey of humanity through knowledge. As the world continues to change, libraries will adapt and evolve, but their mission to educate, empower, and connect will always remain constant." In essence, libraries are more than repositories of books—they are living, breathing centers of culture, progress, and human connection. They reflect the values of democracy, equal opportunity, and collective advancement. Whether rooted in a university, a bustling city, or a quiet village, libraries inspire dreams, unlock potential, and remind us of the shared journey of humanity through knowledge. As the world continues to change, libraries will adapt and evolve, but their mission to educate, empower, and connect will always remain constant.
Future libraries may feature VR learning zones, AI-driven cataloging, and blockchain-secured archives. They will prioritize inclusivity with multilingual AI assistants and smart accessibility tools. Collaborations with schools, tech firms, and NGOs will expand their outreach. Libraries will likely offer mental wellness hubs, podcasting stations, and community innovation labs. As society faces challenges like misinformation and isolation, libraries will emerge as trusted anchors. Their relevance is not fading—it is being redefined to meet the needs of tomorrow’s world.`,
  },

];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={product.title} className="detail-image" />
      <div className="detail-content">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button onClick={() => navigate(-1)} className="back-btn">Back</button>
      </div>
    </div>
  );
}

export default ProductDetail;
