/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { templatePostsData, getMarkdownContent, parseMarkdownContent } from '../utils/markdownReader';
import QuantumFloatingElements from '../components/decorations/QuantumFloatingElements';

export interface Post {
  id: number;
  title: string;
  createdAt: string;
  content: string;
  authorName: string;
  published: boolean;
  image: string;
  description?: string;
}


const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Start with template posts from markdown files
        const templatePosts: Post[] = await Promise.all(
          templatePostsData.map(async (postData) => {
            const markdownContent = await getMarkdownContent(postData.id);
            const parsedData = parseMarkdownContent(markdownContent);
            
                   // Create clean descriptions for each event based on actual markdown content
                   const descriptions: { [key: number]: string } = {
                     1: "Join us for an immersive exploration into the fascinating world of quantum computing! This workshop is designed for both beginners and those with some background in computer science who want to understand the fundamentals of quantum computing and its real-world applications.",
                     2: "Get ready to dive into the quantum world through Google's innovative Cubit Game! This beginner-friendly introduction to quantum computing uses gaming mechanics to make complex quantum concepts accessible and fun for everyone.",
                     3: "Join us for an exclusive panel discussion featuring leading professionals from the quantum computing industry. This event brings together experts from University of Toronto, IBM, and TMU to share insights about career opportunities, industry trends, and the future of quantum technology."
                   };
            
            return {
              ...postData,
              title: parsedData.title || postData.title,
              authorName: parsedData.authorName || postData.authorName,
              content: markdownContent,
              description: descriptions[postData.id] || "Learn more about this exciting quantum science event."
            };
          })
        );
        
        let allPosts = [...templatePosts];
        
        // Try to fetch from API and add to template posts
        try {
          const response = await axios.get(`${import.meta.env.VITE_BACKEND_WEB}/api/posts`);
          console.log('API Response:', response.data);

          if (Array.isArray(response.data)) {
            const publishedPosts = response.data.filter((post: Post) => post.published);
            // Add API posts with higher IDs to avoid conflicts
            const apiPosts = publishedPosts.map((post) => ({
              ...post,
              id: post.id + 1000 // Offset to avoid ID conflicts
            }));
            allPosts = [...allPosts, ...apiPosts];
          }
        } catch (apiError) {
          console.log('API not available, using template posts only');
          // Continue with just template posts if API fails
        }
        
        setPosts(allPosts);
      } catch (err) {
        console.error('Unexpected Error:', err);
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [navigate]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="relative">
      <QuantumFloatingElements />
      
      {/* Header */}
      <br /><br /><br />
      <section className="relative bg-gray-800 py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mt-10 text-white">Blog Posts</h1>
      </section>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
        <p className="text-center text-2xl max-w-2xl mb-8 pt-4 text-white">
          Stay updated with the latest insights, events, and discussions from the quantum science community.
        </p>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {posts.map((post: Post) => (
              <button
                key={post.id}
                onClick={() => navigate(`/posts/${post.id}`)}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full text-left"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-white">{post.title}</h2>
                  <p className="text-gray-400 mb-2">
                    {post.authorName} • {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {post.description || "Learn more about this exciting quantum science event."}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300">No published posts available.</p>
        )}
      </div>

      {/* Footer */}
      <section className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-center md:text-left">
          {/* Left: Icons & Labels - Right Aligned */}
          <div className="space-y-8 md:w-1/2 md:items-end md:flex md:flex-col md:text-right pr-4">
            <h4 className="text-3xl font-bold mb-6 text-white">Contact Information</h4>
          </div>

          {/* Right: Actual Info/Links */}
          <div className="space-y-4 md:w-1/2 text-lg">
            <div>
              <p>qsectmus@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/qsec_tmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                @qsec_tmu
              </a>
              <a
                href="https://discord.com/invite/k9fhQZ6Mvp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
