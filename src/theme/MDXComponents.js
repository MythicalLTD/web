import MDXComponents from '@theme-original/MDXComponents';
import { Icon } from '@iconify/react'; // Import the entire Iconify library.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.

export default {
    // Re-use the default mapping
    ...MDXComponents,
    IIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
    FAIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.
};