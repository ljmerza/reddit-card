
import { LitElement, html } from 'lit-element';
import moment from 'moment';
import style from './style';

import 'moment/min/locales';

class RedditCard extends LitElement {
  static get properties() {
    return {
      hass: Object,
      config: Object,
    };
  }

  constructor() {
    super();

    this.redditUrl = 'https://www.reddit.com';
  }

  setConfig(config) {
    if (!config.entities) throw Error('entities required.');

    this.config = {
      entities: [],
      header: '',
      new_tab: true,
      max: 10,
      ...config,
    };

    this.target = this.config.new_tab ? '_blank' : '';
  }

  /**
   * get the current size of the card
   * @return {Number}
   */
  getCardSize() {
    return this.config && (this.config.entities.length * 10) || 1;
  }

  static get styles() {
    return style;
  }

  /**
   * generates the card HTML
   * @return {TemplateResult}
   */
  render() {
    moment.locale(this.hass.language);

    const entities = this.getEntityData();
    const posts = this.getAllPosts(entities);

    const postTemplates = posts.map((post) => {
      const subredditLink = `${this.redditUrl}/r/${post.subreddit}`;

      return html`
        <div class='post'>
          <a href='${post.url}' class='post-title' target='${this.target}'>${post.title}</a>
          <div class='post-details'>
            <div class='post-score'>${this.kFormatter(post.score)}</div>
            <a href='${subredditLink}' class='post-subreddit' target='${this.target}'>${post.subreddit}</a>
            <div class='post-time'>${this.timeAgoFormatter(post.created)}</div>
            <a href='${subredditLink}/${post.id}' class='post-comments' target='${this.target}'>${post.comms_num} comments</a>
          </div>
        </div>
      `;
    });

    return html`
      <ha-card>
        ${this.createHeader(entities)}
        <div class='posts'>
          ${postTemplates}
        </div>
      </ha-card>
    `;
  }

  /**
   * create time ago string from an epoch time
   * @param {Epoch} created
   * @return {string}
   */
  timeAgoFormatter(created) {
    return moment(created * 1000).fromNow(true);
  }

  /**
   * format a number over 1,000 with k format
   * @param {string|integer} num
   */
  kFormatter(num) {
    return num > 999 ? `${(num / 1000).toFixed(1)}k` : num;
  }

  /**
   * create card header
   * @param {TemplateResult} entities
   */
  createHeader(entities) {
    if (this.config.header === false) return html``;

    const header = this.config.header || entities.map(entity => entity.attributes.subreddit).join(', ');

    return html`
      <div class='card-header'>
        ${header}
      </div>
    `;
  }

  /**
   * get all subreddit data
   * @return {Array<RedditSensor>}
   */
  getEntityData() {
    return this.config.entities
      .map(entity => this.hass.states[entity])
      .filter(Boolean);
  }

  /**
   * combines all posts for all entities found
   * @param {RedditSensorEntity} entities
   * @return {Array<Object>}
   */
  getAllPosts(entities) {
    // first find how many positions we are going to have to interate on posts
    const maxPosts = this.config.max || Math.max(...entities.map(entity => entity.attributes.posts.length));
    
    // for each position grab that posts position for each subreddit we've subscribed to
    const allPosts = [];

    for (let i=0; i<maxPosts; i++) {
      entities.forEach(entity => {
        const post = entity.attributes.posts[i];
        post.subreddit = entity.attributes.subreddit;
        allPosts.push(post);
      });
    }

    return allPosts.filter(Boolean);
  }
}

customElements.define('reddit-card', RedditCard);
