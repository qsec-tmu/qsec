/* eslint-disable @typescript-eslint/no-unused-vars */
import { /*useEffect,*/ useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './../components/nav/Navbar';
import DOMPurify from 'dompurify';

export interface Post {
  id: number;
  title: string;
  createdAt: string;
  content: string;
  authorName: string;
  published: boolean;
  image: string;
}

const demoPosts: Post[] = [
  {
    id: 1,
    title: "First Demo Post",
    createdAt: "2024-01-01",
    content: "This is the content of the first demo post. It provides a preview of the full content.",
    authorName: "Demo Author 1",
    published: true,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Second Demo Post",
    createdAt: "2024-01-02",
    content: "This is the content of the second demo post with more detailed content.",
    authorName: "Demo Author 2",
    published: true,
    image: "https://via.placeholder.com/150",
  },
  // Add more demo posts as needed
];

// const Blog = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const fetchPosts = async () => {
//   //     try {
//   //       const response = await axios.get(`${import.meta.env.VITE_BACKEND_WEB}/api/posts`);
//   //       console.log('API Response:', response.data);
//   //       // Filter out unpublished posts
//   //       if (Array.isArray(response.data)) {
//   //         const publishedPosts = response.data.filter((post: Post) => post.published);
//   //         setPosts(publishedPosts);
//   //       } else {
//   //         console.error('Unexpected data format:', response.data);
//   //         setError('Received unexpected data format. Please contact support.');
//   //       }
//   //     } catch (err) {
//   //       if (axios.isAxiosError(err)) {
//   //         console.error('Error Response:', err.response?.data.message || err.response?.data.errors);
//   //         setError(err.response?.data.message || 'Failed to load posts. Please try again.');
//   //       } else {
//   //         console.error('Unexpected Error:', err);
//   //         setError('An unexpected error occurred. Please try again.');
//   //       }
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchPosts();
//   // }, []);

//   const truncateToWords = (text: string, maxWords: number) => {
//     const words = text.split(/\s+/); 
//     if (words.length > maxWords) {
//       return words.slice(0, maxWords).join(' ') + '...'; 
//     }
//     return text;
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="relative min-h-screen bg-cover bg-center bg-fixed blur-background">
//       <NavigationBar />
//       <div className="relative bg-white bg-opacity-90 backdrop-blur-sm min-h-screen">
//         <div className="container mx-auto px-4 py-6">
//           <h1 className="text-3xl font-bold mb-6 text-center">Published Posts</h1>
//           {posts.length > 0 ? (
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {posts.map((post: Post) => (
//                 <button
//                   key={post.id}
//                   onClick={() => navigate(`/posts/${post.id}`)}
//                   className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
//                 >
//                   <div className="post">
//                     <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//                     <p className="text-gray-600 mb-2">
//                       {post.authorName} at {new Date(post.createdAt).toLocaleDateString()}
//                     </p>
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-full h-48 object-cover rounded-lg mb-4"
//                     />
//                     <div
//                       dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateToWords(post.content, 30)) }}
//                       className="text-gray-800 mb-2 text-left"
//                     />
//                   </div>
//                 </button>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-600">No published posts available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

const Blog = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, setPosts] = useState<Post[]>(demoPosts); // Set demo posts as the initial state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Temporarily comment out useEffect with API call
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     // Original API call logic here
  //   };
  //   fetchPosts();
  // }, [navigate]);

  const truncateToWords = (text: string, maxWords: number) => {
    const words = text.split(/\s+/);
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Published Posts</h1>
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: Post) => (
              <button
                key={post.id}
                onClick={() => navigate(`/posts/${post.id}`)}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
              >
                <div className="post">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-2">
                    {post.authorName} at {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncateToWords(post.content, 30)) }}
                    className="text-gray-800 mb-2 text-left"
                  />
                </div>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No published posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;