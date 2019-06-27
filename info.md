# Reddit Card for Home Assistant
Show your favorite subreddits in Home Assistant

<img src='https://raw.githubusercontent.com/ljmerza/reddit-card/master/card.png' />

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)
![Project Maintenance][maintenance-shield]

## Installation through [HACS](https://github.com/custom-components/hacs)
---
Add the following to resources in your lovelace config:

```yaml
resources:
  - url: /community_plugin/reddit-card/reddit-card.js
```

## Configurations:
---
```yaml
views:
  - type: custom:reddit-card
    entities:
      - sensor.reddit_news
      - sensor.reddit_worldnews
    max: 3
```

## Options:
---
| Name | Type | Requirement | `Default` Description
| ---- | ---- | ------- | -----------
| header | string or boolean | **Optional** | `list of subreddits` Custom header or set to `false` to disable
| entities | list | **Required** | List of reddit sensors to display
| new_tab | boolean | **Optional** | `true` open comments, subreddit, and link in new tab
| max | number | **Optional** | `10` max number of posts to show for each subreddit

---

Enjoy my card? Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/JMISm06AD)


[commits-shield]: https://img.shields.io/github/commit-activity/y/ljmerza/reddit-card.svg?style=for-the-badge
[commits]: https://github.com/ljmerza/reddit-card/commits/master
[license-shield]: https://img.shields.io/github/license/ljmerza/reddit-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Leonardo%20Merza%20%40ljmerza-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/ljmerza/reddit-card.svg?style=for-the-badge
[releases]: https://github.com/ljmerza/reddit-card/releases