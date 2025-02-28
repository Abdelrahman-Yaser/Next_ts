// app/courses/page.tsx
import Link from "next/link";
import CreatePostPage from "../post /page";



export default function CoursesPage() {
  const courses = [
    {
      name: "CS101: Introduction to Computer Science",
      price: 100,
      teacher: "Dr. Smith",
      description: "Learn the fundamentals of computer science and programming."
    },
    {
      name: "CS102: Data Structures",
      price: 120,
      teacher: "Prof. Johnson",
      description: "Understand various data structures and their applications."
    },
    {
      name: "CS103: Algorithms",
      price: 150,
      teacher: "Dr. Williams",
      description: "Dive into algorithm design and problem solving techniques."
    },
    {
      name: "CS104: Web Development",
      price: 130,
      teacher: "Ms. Brown",
      description: "Learn how to build modern web applications using HTML, CSS, and JavaScript."
    },
    {
      name: "CS105: Database Systems",
      price: 110,
      teacher: "Dr. Jones",
      description: "Explore relational databases and SQL, as well as NoSQL solutions."
    },
    {
      name: "CS106: Operating Systems",
      price: 140,
      teacher: "Prof. Garcia",
      description: "Study the principles behind modern operating systems and their design."
    },
    {
      name: "CS107: Computer Networks",
      price: 130,
      teacher: "Dr. Martinez",
      description: "Understand network protocols, topologies, and the fundamentals of networking."
    },
    {
      name: "CS108: Software Engineering",
      price: 125,
      teacher: "Ms. Rodriguez",
      description: "Learn about software development methodologies and project management."
    },
    {
      name: "CS109: Cybersecurity",
      price: 135,
      teacher: "Dr. Lee",
      description: "An introduction to cybersecurity principles, threats, and protection mechanisms."
    },
    {
      name: "CS110: Machine Learning",
      price: 160,
      teacher: "Prof. Kim",
      description: "Learn the basics of machine learning, including algorithms and practical applications."
    }
  ];
  

  return (
    <>
    <CreatePostPage/>
      <div className="container mx-auto mt-5 px-4">
        <div className="text-center text-2xl font-bold mb-5 text-gray-800">
          <i className="fas fa-book mr-2"></i> Available Courses
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {courses.map((course, index) => (
            <Link key={index} href="/materials">
              <div className="bg-gray-200 p-4 rounded-lg shadow hover:shadow-lg transition">
            
            
              
                <h4 className="text-xl font-semibold text-gray-800">{course.name}</h4>
                <p className="text-gray-700 text-sm">
                 {course.teacher} | ${course.price}
                </p>
                <p className="text-gray-600">{course.description}</p>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
