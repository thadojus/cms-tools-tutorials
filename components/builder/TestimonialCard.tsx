'use client';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position?: string;
  avatar?: string;
  rating?: number;
  showRating?: boolean;
}

/**
 * Testimonial Card Component for Builder.io
 * 
 * Displays customer testimonials with ratings, author information, and avatars.
 * Perfect for social proof sections and customer feedback displays.
 * 
 * Features:
 * - Star ratings (1-5 stars)
 * - Author avatar support
 * - Responsive design
 * - Customizable through Builder.io editor
 */
export const TestimonialCard = ({
  quote = 'This product has transformed our business.',
  author = 'John Doe',
  position = 'CEO, Company Inc.',
  avatar,
  rating = 5,
  showRating = true
}: TestimonialCardProps) => {
  // Generate star rating display
  const renderStars = () => {
    if (!showRating) return null;
    
    return (
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {rating}/5
        </span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      {/* Star Rating */}
      {renderStars()}
      
      {/* Quote */}
      <blockquote className="text-gray-700 mb-6 text-lg italic">
        "{quote}"
      </blockquote>
      
      {/* Author Information */}
      <div className="flex items-center">
        {/* Avatar */}
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-builder-primary/20 flex items-center justify-center mr-4">
            <span className="text-builder-primary font-semibold text-lg">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        {/* Author Details */}
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          {position && (
            <p className="text-sm text-gray-600">{position}</p>
          )}
        </div>
      </div>
    </div>
  );
};
