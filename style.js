import { css } from 'lit-element';

const style = css`
    ha-card {
        background: var( --ha-card-background, var(--paper-card-background-color, white) );
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var( --ha-card-box-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        padding: 24px 16px 24px; 16px;
    }

    .card-header {
        font-size: 24px;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: 0.87;
        padding-bottom: 10px;
    }

    .posts {
    }

    .post {
        padding: 5px 0 5px 0;
        border-bottom: 1px solid;
        border-bottom-color: var(--primary-color);
    }

    .post-title {
        padding-top: 5px;
        padding-bottom: 5px;
        color: var(--primary-text-color);
        text-decoration: none;
    }

    .post-details {
        display: flex;
        justify-content: space-between;
    }

    .post-comments, .post-subreddit, .post-time, .post-score {
        color: var(--primary-color);
        text-decoration: none;
        margin-top: 5px;
    }
`;

export default style;
