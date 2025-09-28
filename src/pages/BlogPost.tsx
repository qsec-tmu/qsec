import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { templatePostsData, getMarkdownContent, parseMarkdownContent } from '../utils/markdownReader';

// Enhanced markdown to HTML converter that preserves important details
const convertMarkdownToHtml = (markdown: string): string => {
  return markdown
    // Convert metadata lines to styled information boxes
    .replace(/^\*\*Event Date:\*\* (.*)$/gim, '<div class="bg-blue-900 border border-blue-700 rounded-lg p-3 mb-4"><strong class="text-blue-300">Event Date:</strong> <span class="text-blue-100">$1</span></div>')
    .replace(/^\*\*Author:\*\* (.*)$/gim, '<div class="bg-purple-900 border border-purple-700 rounded-lg p-3 mb-4"><strong class="text-purple-300">Author:</strong> <span class="text-purple-100">$1</span></div>')
    .replace(/^\*\*Category:\*\* (.*)$/gim, '<div class="bg-green-900 border border-green-700 rounded-lg p-3 mb-4"><strong class="text-green-300">Category:</strong> <span class="text-green-100">$1</span></div>')
    .replace(/^\*\*Featured Image:\*\* (.*)$/gim, '') // Remove image references
    // Convert horizontal rules to styled dividers
    .replace(/^---$/gim, '<hr class="border-gray-600 my-6">')
    // Remove image links but keep other links
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove markdown images ![alt](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">$1</a>') // Convert links to HTML
    .replace(/`([^`]+)`/g, '<code class="bg-gray-700 text-gray-200 px-2 py-1 rounded text-sm">$1</code>') // Convert inline code
    // Headers with better styling
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-semibold text-white mb-3 mt-6 border-b border-gray-600 pb-2">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-semibold text-white mb-4 mt-8 border-b border-gray-500 pb-2">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold text-white mb-6 mt-8 border-b border-gray-400 pb-3">$1</h1>')
    // Bold text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
    // Lists with better styling
    .replace(/^- (.*$)/gim, '<li class="ml-4 text-gray-300 mb-1">$1</li>')
    .replace(/(<li.*<\/li>)/g, '<ul class="list-disc list-inside mb-4 space-y-1">$1</ul>')
    // Line breaks
    .replace(/\n/g, '<br>')
    // Clean up multiple line breaks
    .replace(/(<br>){3,}/g, '<br><br>')
    // Clean up empty lines at the beginning
    .replace(/^(<br>)+/, '');
};

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


const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postId = parseInt(id || '0');
        
        // First check template posts from markdown files
        const templatePostData = templatePostsData.find(p => p.id === postId);
        if (templatePostData) {
          const markdownContent = await getMarkdownContent(postId);
          const parsedData = parseMarkdownContent(markdownContent);
          
          const templatePost: Post = {
            ...templatePostData,
            title: parsedData.title || templatePostData.title,
            authorName: parsedData.authorName || templatePostData.authorName,
            content: markdownContent
          };
          
          setPost(templatePost);
          setLoading(false);
          return;
        }

        // If not found in templates, try API
        try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_WEB}/api/posts/${postId}`);
          if (response.ok) {
            const apiPost = await response.json();
            setPost(apiPost);
          } else {
            setPost(null);
          }
        } catch (error) {
          console.log('API not available');
          setPost(null);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div>
        <br /><br /><br />
        <section className="relative bg-gray-800 py-16 px-4 text-center">
          <h1 className="text-5xl font-bold mt-10 text-white">Loading...</h1>
        </section>
        <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
          <p className="text-center text-white">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <br /><br /><br />
        <section className="relative bg-gray-800 py-16 px-4 text-center">
          <h1 className="text-5xl font-bold mt-10 text-white">Post Not Found</h1>
        </section>
        <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
          <div className="text-center">
            <p className="text-white mb-6">The requested post could not be found.</p>
            <button
              onClick={() => navigate('/blog')}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <br /><br /><br />
      <section className="relative bg-gray-800 py-16 px-4 text-center">
        <h1 className="text-5xl font-bold mt-10 text-white">Blog Post</h1>
      </section>
      
      <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
        <div className="w-full max-w-4xl">
          <button
            onClick={() => navigate('/blog')}
            className="mb-6 text-purple-400 hover:text-purple-300 flex items-center transition-colors"
          >
            ← Back to Blog
          </button>
          
          <article className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            
            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                {post.title}
              </h1>
              
              <div className="flex items-center text-gray-400 mb-6">
                <span className="mr-4">By {post.authorName}</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              
              <div
                className="prose prose-lg max-w-none text-gray-300 prose-headings:text-white prose-strong:text-white prose-a:text-purple-400 prose-a:hover:text-purple-300"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(convertMarkdownToHtml(post.content)),
                }}
              />
            </div>
          </article>
        </div>
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

export default BlogPost;
