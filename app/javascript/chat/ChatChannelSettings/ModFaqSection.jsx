import { h } from 'preact';
import PropTypes from 'prop-types';

const ModFaqSection = ({ email, currentMembershipRole }) => {
  if (currentMembershipRole === 'member') {
    return null;
  }

  return (
    <div className="crayons-card grid gap-2 p-4 faq-section">
      <p className="contact-details">
        Questions about Connect moderation?
        <a
          href={`/contact`}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 url-link"
        >
          Contact site admins
        </a>
      </p>
    </div>
  );
};

ModFaqSection.propTypes = {
  email: PropTypes.string.isRequired,
  currentMembershipRole: PropTypes.string.isRequired,
};

export default ModFaqSection;
