// Import all assets to make them available in production builds

// Logo
import logo from '../assets/logo.svg';

// Hero images
import heroImagePlaceholder from '../assets/hero-image-placeholder.svg';

// Infographics
import misophoniaInfographic from '../assets/misophonia-infographic.svg';
import researchVisualization from '../assets/research-visualization.svg';

// Step images
import step1Placeholder from '../assets/step1-placeholder.svg';
import step2Placeholder from '../assets/step2-placeholder.svg';
import step3Placeholder from '../assets/step3-placeholder.svg';
import step4Placeholder from '../assets/step4-placeholder.svg';

// Avatars
import avatar1 from '../assets/avatar-1.svg';
import avatar2 from '../assets/avatar-2.svg';
import avatar3 from '../assets/avatar-3.svg';

// Videos - these are stored in the public folder and referenced by path
// No need to import them as they're served directly from the public directory

// Export all assets as an object
const assets = {
  logo,
  heroImagePlaceholder,
  misophoniaInfographic,
  researchVisualization,
  step1Placeholder,
  step2Placeholder,
  step3Placeholder,
  step4Placeholder,
  avatar1,
  avatar2,
  avatar3,
  
  // Videos - external hosting URLs for better performance
  videos: {
    // For large video files, it's better to use an external video hosting service
    // like YouTube, Vimeo, or a CDN instead of hosting them directly in the project
    // Replace this URL with your actual hosted video URL when available
    misoVideo: 'https://example.com/placeholder-video.mp4'
  }
};

export default assets;
