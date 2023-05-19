import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.buttons}>
      {Object.keys(options).map(arrayEl => (
        <button
          type="button"
          key={arrayEl}
          onClick={onLeaveFeedback}
          className={css.btn}
          name={arrayEl}
        >
          {arrayEl}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.number.isRequired),
};
